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
    id: "framing-drywall",
    name: "Structural Framing & Drywall",
    subName: "Architectural backbone & Level-5 finishes.",
    price: "Custom Estimate",
    description:
      "Heavy-Gauge Steel — Kiln-Dried Timber — Acoustic Dampened Drywall",
    folderPath: "/images/framing-showcase",
    frameCount: 250,
    themeColor: "#7B22CE",
    gradient: "linear-gradient(135deg, #0B0E11 0%, #150830 100%)",
    features: [
      "Heavy-Gauge Structural Steel",
      "Precision Wood Stud Alignment",
      "Level-5 Smooth Drywall Plaster",
    ],
    stats: [
      { label: "Tolerance", val: "±1mm" },
      { label: "Finish", val: "Level 5" },
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
      title: "Seamless Level-5 Drywall.",
      subtitle:
        "Laser-aligned, acoustic-dampened partitions finished to absolute perfection.",
    },
    section4: {
      title: "Built to last generations.",
      subtitle: "",
    },
    detailsSection: {
      title: "Structural Craftsmanship",
      description:
        "We engineer interior environments for zero-flex durability. From moisture-resistant drywall barriers to custom architectural arches and light-gauge steel framing, our assemblies ensure flawless geometry.",
      imageAlt: "Drywall and metal stud framing architectural structure",
    },
    craftsmanshipSection: {
      title: "Acoustic & Thermal Engineering",
      description:
        "Each wall partition is layered with specialized sound-dampening insulation and precision thermal breaks to elevate residential comfort and energy efficiency.",
    },
    bookingSection: {
      price: "Project-Based",
      unit: "per sq. ft. / architectural plan",
      highlights: [
        "Licensed & Insured Engineers",
        "Level-5 Plaster Guarantee",
        "On-Time Site Delivery",
      ],
      deliveryPromise:
        "Comprehensive site dust-mitigation, cleanup, and structural inspection upon completion.",
      warrantyPolicy: "100% Structural & Craftsmanship Warranty.",
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
    themeColor: "#4A1480",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1A0A40 100%)",
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
      title: "Non-Invasive Remodeling",
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
