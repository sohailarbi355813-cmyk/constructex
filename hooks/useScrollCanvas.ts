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
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const isLoadedRef = useRef(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  const getFrameIndex = useCallback(
    (scrollY: number): number => {
      if (frameCount === 0) return 0;
      const scrollRange = scrollEnd - scrollStart;
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

    const img = imagesRef.current[index];
    if (!img?.complete || !img.naturalWidth) return;

    // Set canvas coordinate space to match the image exactly
    // CSS object-fit: cover will handle the full-screen scaling via GPU hardware acceleration
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Draw the image 1:1, no JS scaling.
    ctx.drawImage(img, 0, 0);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const scrollY = window.scrollY;
      if (scrollY === lastScrollRef.current) return;
      lastScrollRef.current = scrollY;

      const frameIndex = getFrameIndex(scrollY);
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    });
  }, [getFrameIndex, drawFrame]);

  useEffect(() => {
    if (frameCount === 0) return;

    const images: HTMLImageElement[] = new Array(frameCount);
    imagesRef.current = images;
    loadedCountRef.current = 0;

    const getPaddedIndex = (i: number): string => {
      const n = i + 1;
      return n.toString().padStart(3, "0");
    };

    const loadImage = (index: number) => {
      const img = new Image();
      img.src = `${folderPath}/ezgif-frame-${getPaddedIndex(index)}.jpg`;
      img.onload = () => {
        loadedCountRef.current++;
        if (index === 0) {
          isLoadedRef.current = true;
          drawFrame(0);
        }
        if (loadedCountRef.current === frameCount) {
          const scrollY = window.scrollY;
          const fi = getFrameIndex(scrollY);
          drawFrame(fi);
        }
      };
      images[index] = img;
    };

    const PRIORITY_BATCH = Math.min(30, frameCount);
    for (let i = 0; i < PRIORITY_BATCH; i++) {
      loadImage(i);
    }
    setTimeout(() => {
      for (let i = PRIORITY_BATCH; i < frameCount; i++) {
        loadImage(i);
      }
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      requestAnimationFrame(() => {
        drawFrame(currentFrameRef.current);
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [folderPath, frameCount, handleScroll, drawFrame, getFrameIndex]);

  return {
    canvasRef,
    isLoaded: isLoadedRef.current,
  };
}
