"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseScrollCanvasOptions {
  folderPath: string;
  frameCount: number;
  scrollStart: number;
  scrollEnd: number;
}

interface UseScrollCanvasReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  isLoaded: boolean;
}

export function useScrollCanvas({
  folderPath,
  frameCount,
  scrollStart,
  scrollEnd,
}: UseScrollCanvasOptions): UseScrollCanvasReturn {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedCountRef = useRef(0);
  const isLoadedRef = useRef(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(-1);

  const getFrameIndex = useCallback(
    (scrollY: number): number => {
      if (frameCount === 0) return 0;
      const scrollRange = scrollEnd - scrollStart;
      if (scrollRange <= 0) return 0;
      const progress = Math.max(
        0,
        Math.min(1, (scrollY - scrollStart) / scrollRange)
      );
      return Math.round(progress * (frameCount - 1));
    },
    [frameCount, scrollStart, scrollEnd]
  );

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const clampedIndex = Math.max(0, Math.min(index, imagesRef.current.length - 1));

    // Try the requested frame first; if not loaded yet, walk backwards to find the
    // nearest already-loaded frame so there is never a blank flash on mobile.
    let img: HTMLImageElement | null = null;
    for (let i = clampedIndex; i >= 0; i--) {
      const candidate = imagesRef.current[i];
      if (candidate?.complete && candidate.naturalWidth) {
        img = candidate;
        break;
      }
    }
    if (!img) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Only resize the canvas backing store when the source dimensions change.
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.drawImage(img, 0, 0);
  }, []);

  const scheduleRender = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const scrollY = window.scrollY;
      if (scrollY === lastScrollRef.current) return;
      lastScrollRef.current = scrollY;

      const frameIndex = getFrameIndex(scrollY);
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
      }
      // Always redraw — even same frame index may now be loaded.
      drawFrame(currentFrameRef.current);
    });
  }, [getFrameIndex, drawFrame]);

  useEffect(() => {
    if (frameCount === 0) return;

    const images: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    imagesRef.current = images;
    loadedCountRef.current = 0;

    const getPaddedIndex = (i: number): string => (i + 1).toString().padStart(3, "0");

    const loadImage = (index: number) => {
      const img = new Image();
      // Hint the browser that this is low-priority after the first batch.
      if (index >= 10) (img as any).fetchPriority = "low";
      img.src = `${folderPath}/ezgif-frame-${getPaddedIndex(index)}.jpg`;
      img.onload = () => {
        images[index] = img;
        loadedCountRef.current++;
        if (index === 0) {
          isLoadedRef.current = true;
          drawFrame(0);
        }
        // Redraw live as each frame loads so the closest available frame is shown.
        const currentTarget = getFrameIndex(window.scrollY);
        if (Math.abs(index - currentTarget) < 5) {
          drawFrame(currentTarget);
        }
      };
      img.onerror = () => { images[index] = null; };
    };

    // Load the first 10 frames immediately at full priority.
    const CRITICAL = Math.min(10, frameCount);
    for (let i = 0; i < CRITICAL; i++) loadImage(i);

    // Load next 40 frames after a short delay.
    const t1 = setTimeout(() => {
      const SECOND = Math.min(50, frameCount);
      for (let i = CRITICAL; i < SECOND; i++) loadImage(i);
    }, 300);

    // Load remaining frames in small trickle batches to avoid clogging bandwidth.
    const t2 = setTimeout(() => {
      const BATCH = 20;
      let idx = Math.min(50, frameCount);
      const scheduleNext = () => {
        if (idx >= frameCount) return;
        const end = Math.min(idx + BATCH, frameCount);
        for (let i = idx; i < end; i++) loadImage(i);
        idx = end;
        setTimeout(scheduleNext, 150);
      };
      scheduleNext();
    }, 800);

    // Respond to both wheel/keyboard scroll (desktop) and touch-driven scroll (mobile).
    window.addEventListener("scroll", scheduleRender, { passive: true });

    // touchmove fires during the gesture on iOS before scroll events settle.
    const handleTouch = () => scheduleRender();
    window.addEventListener("touchmove", handleTouch, { passive: true });

    const handleResize = () => requestAnimationFrame(() => drawFrame(currentFrameRef.current));
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [folderPath, frameCount, scheduleRender, drawFrame, getFrameIndex]);

  return {
    canvasRef,
    isLoaded: isLoadedRef.current,
  };
}
