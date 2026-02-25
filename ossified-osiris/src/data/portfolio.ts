export const hero = {
  primaryLine: "Varel",
  accentWord: "Tiwouw",
  secondaryLine: "developer",
  metaLabel: "Portfolio",
  description:
    "I design and build editorial-grade interfaces, type-driven layouts, and precise digital experiences for brands that care about both design and engineering.",
  locationMeta: "Based in / Remote",
  clientsMeta: "Working with / Agencies, studios, founders",
};

export const about = {
  id: "about",
  label: "About",
  headline: "I build considered, typographic interfaces with engineering-grade precision.",
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Varel Tiwouw",
  },
  body: [
    "I’m a developer who thinks like a designer. My work sits at the intersection of clear typography, strict layout systems, and performant front-end engineering.",
    "From early-stage founders to established studios, I help teams design and ship interfaces that feel deliberate, readable, and timeless.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-system",
    title: "BisCash",
    year: "2024",
    role: "Cashier Application",
    summary:
      "The cashier application I developed functions to automatically manage sales transactions, including recording items, calculating total prices, storing transaction data, and generating reports and receipts to make business operations faster and more accurate.",
    stack: ["C#", "Visual Studio"],
    image: "/images/project-biscash.png",
  },
  {
    slug: "spectrum-gallery",
    title: "Boss Muda Transport",
    year: "2025",
    role: "Car Rent Website",
    summary:
      "I have developed a car rental website that allows users to browse available vehicles, make reservations, manage their bookings, and directly chat with the admin to confirm and arrange their car rental easily and efficiently.",
    stack: ["WordPress", "Figma", "Elementor"],
    image: "/images/project-rental.png",
  },
  {
    slug: "linearity-editorial",
    title: "Vertical Shorts Expo",
    year: "2025",
    role: "UI Prototype",
    summary:
      "I have created a UI prototype for an international client to visualize the website’s layout, user interface elements, and overall user experience before the development process begins.",
    stack: ["WordPress", "Elementor"],
    image: "/images/project-vse.png",
  },
];

export const techStack = {
  core: ["JavaScript", "TypeScript"],
  frontend: ["React", "Next.js", "Astro", "Tailwind CSS"],
  backend: ["Node.js", "Edge Functions", "GO", "C#", "PHP"],
  tools: ["Figma", "Framer", "Git", "Vercel", "Visual Studio", "Adobe Photoshop", "Adobe Premiere Pro", "DaVinci Resolve", "Adobe Illustrator"],
};

export const contact = {
  id: "contact",
  email: "varelkarolus2@gmail.com",
  headline: "Let’s build something precise.",
  body: "Available for selected freelance projects, collaborations, and consulting.",
};

export const footer = {
  copyrightName: "Varel T",
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],
};

