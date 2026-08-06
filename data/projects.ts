export interface ProjectSection {
  title: string;
  subtitle: string;
}

export interface ProjectStat {
  label: string;
  val: string;
}

export interface Project {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  frameCount: number;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: ProjectStat[];
  section1: ProjectSection;
  section2: ProjectSection;
  section3: ProjectSection;
  section4: ProjectSection;
  detailsSection: {
    title: string;
    description: string;
    imageAlt: string;
  };
  craftsmanshipSection: {
    title: string;
    description: string;
  };
  bookingSection: {
    price: string;
    unit: string;
    highlights: string[];
    deliveryPromise: string;
    warrantyPolicy: string;
  };
}

export const projects: Project[] = [
  {
    id: "structural-framing",
    name: "Structural Framing",
    subName: "The architectural backbone of every space.",
    price: "Custom Estimate",
    description:
      "Heavy-Gauge Steel — Kiln-Dried Timber — Precision Load-Bearing Systems",
    folderPath: "/images/framing-showcase",
    frameCount: 250,
    themeColor: "#686B6C",
    gradient: "linear-gradient(135deg, #000000 0%, #111111 100%)",
    features: [
      "Heavy-Gauge Structural Steel",
      "Precision Wood Stud Alignment",
      "Load-Bearing Beam Integration",
    ],
    stats: [
      { label: "Tolerance", val: "±1mm" },
      { label: "Strength", val: "Commercial" },
      { label: "Rating", val: "1-Hr Fire" },
    ],
    section1: {
      title: "Engineered Framework.",
      subtitle:
        "The hidden backbone of every architectural masterpiece.",
    },
    section2: {
      title: "Wood & Metal Integration.",
      subtitle:
        "Combining high-load structural steel framing with warm, natural timber core assemblies.",
    },
    section3: {
      title: "Zero-Flex Structural Systems.",
      subtitle:
        "Laser-plumbed and load-engineered to stand for generations.",
    },
    section4: {
      title: "Built to last generations.",
      subtitle: "",
    },
    detailsSection: {
      title: "Structural Craftsmanship",
      description:
        "We engineer interior environments for zero-flex durability. From custom architectural arches to light-gauge steel framing, our assemblies ensure flawless geometry and lasting structural integrity.",
      imageAlt: "Metal stud framing architectural structure",
    },
    craftsmanshipSection: {
      title: "Precision Load Engineering",
      description:
        "Every frame is engineered with structural tolerances measured in millimetres. We combine heavy-gauge steel channels with kiln-dried timber for superior rigidity and thermal performance.",
    },
    bookingSection: {
      price: "Project-Based",
      unit: "per sq. ft. / architectural plan",
      highlights: [
        "Licensed & Insured Engineers",
        "Structural Load Certification",
        "On-Time Site Delivery",
      ],
      deliveryPromise:
        "Comprehensive site dust-mitigation, cleanup, and structural inspection upon completion.",
      warrantyPolicy: "100% Structural & Craftsmanship Warranty.",
    },
  },
  {
    id: "drywall",
    name: "Drywall",
    subName: "Level-5 finishes. Flawless surfaces. Every time.",
    price: "Custom Estimate",
    description:
      "Level-5 Plaster — Acoustic-Dampened Boards — Moisture-Resistant Systems",
    folderPath: "/images/framing-showcase",
    frameCount: 0,
    themeColor: "#686B6C",
    gradient: "linear-gradient(135deg, #000000 0%, #111111 100%)",
    features: [
      "Level-5 Smooth Drywall Plaster",
      "Acoustic Dampened Partitions",
      "Moisture-Resistant Barrier Systems",
    ],
    stats: [
      { label: "Finish", val: "Level 5" },
      { label: "Flatness", val: "±0.5mm" },
      { label: "Acoustic", val: "STC 55+" },
    ],
    section1: {
      title: "Seamless Drywall Finishes.",
      subtitle:
        "Laser-aligned, acoustic-dampened partitions finished to absolute perfection.",
    },
    section2: {
      title: "Acoustic & Moisture Control.",
      subtitle:
        "Specialized sound-dampening boards and moisture barriers for lasting interior health.",
    },
    section3: {
      title: "Mirror-Flat Level-5 Surfaces.",
      subtitle:
        "Hand-skim plastered walls ready for any paint or coating finish.",
    },
    section4: {
      title: "Perfection in every sq. ft.",
      subtitle: "",
    },
    detailsSection: {
      title: "Drywall Excellence",
      description:
        "Our drywall teams deliver mirror-flat Level-5 surfaces with zero telegraphing, zero shadowing. Every panel is laser-aligned and hand-skim finished for the most demanding residential and commercial applications.",
      imageAlt: "Level-5 drywall finishing work",
    },
    craftsmanshipSection: {
      title: "Acoustic & Thermal Engineering",
      description:
        "Each wall partition is layered with specialized sound-dampening insulation and precision thermal breaks to elevate residential comfort and energy efficiency to the highest standards.",
    },
    bookingSection: {
      price: "Project-Based",
      unit: "per sq. ft. / room scope",
      highlights: [
        "Level-5 Plaster Guarantee",
        "Acoustic-Rated Systems",
        "Zero Dust Migration Protocol",
      ],
      deliveryPromise:
        "Full site protection, dust containment and post-work cleanup included on every job.",
      warrantyPolicy: "100% Finish & Craftsmanship Warranty.",
    },
  },
  {
    id: "light-renovation",
    name: "Architectural Light Renovation",
    subName: "Modernizing luxury residential spaces.",
    price: "Custom Estimate",
    description:
      "Open-Concept Conversions — Custom Ceiling Coffers — Minimalist Trim",
    folderPath: "/images/renovation-showcase",
    frameCount: 0,
    themeColor: "#686B6C",
    gradient: "linear-gradient(135deg, #000000 0%, #111111 100%)",
    features: [
      "Load-Bearing Beam Integration",
      "Recessed Architectural Lighting Cavities",
      "Custom Wood & Plaster Molding",
    ],
    stats: [
      { label: "Turnaround", val: "On-Time" },
      { label: "Dust Prep", val: "100%" },
      { label: "Precision", val: "Laser-Level" },
    ],
    section1: {
      title: "Light Renovation.",
      subtitle: "Transforming interior spaces without disturbing character.",
    },
    section2: {
      title: "Surgical Structural Updates.",
      subtitle:
        "Seamlessly blending new metal stud work and wood framing into existing residential footprints.",
    },
    section3: {
      title: "Architectural Ceiling & Wall Details.",
      subtitle:
        "Custom drywall coffers, floating reveals, and integrated shadow gaps for a clean minimalist look.",
    },
    section4: {
      title: "Modern residential elevation.",
      subtitle: "",
    },
    detailsSection: {
      title: "Remodeling",
      description:
        "Our light renovation process uses advanced containment and negative-air filtration to protect your home while we reframe interiors and install flawless drywall finishes.",
      imageAlt: "Luxury home interior renovation in progress",
    },
    craftsmanshipSection: {
      title: "Bespoke Material Transition",
      description:
        "We specialize in flush transitions between drywall, structural timber accents, and architectural steel, eliminating unsightly seams or bulky moldings.",
    },
    bookingSection: {
      price: "Consultation",
      unit: "on-site architectural review",
      highlights: [
        "Zero Dust Migration Protocol",
        "Dedicated Project Manager",
        "Architectural 3D Verification",
      ],
      deliveryPromise:
        "Daily progress reporting and strict schedule adherence.",
      warrantyPolicy: "Comprehensive 10-Year Craftsmanship Guarantee.",
    },
  },
];
