import { company, contacts, values } from "./companyProfile";
import { visuals } from "./visuals";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Brochure", to: "/brochure" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const aboutHighlights = [
  {
    title: "Structured delivery",
    description:
      "We turn briefs into clear work plans, then execute with discipline, visibility, and follow-through.",
  },
  {
    title: "Multi-service capability",
    description:
      "Our teams support contracting, construction, print production, training, and management needs.",
  },
  {
    title: "Client-first approach",
    description:
      "Every engagement is shaped around the client's priorities, budget, timing, and long-term outcomes.",
  },
];

export const serviceItems = [
  {
    slug: "general-contracts",
    title: "General Contracts",
    description:
      "Procurement, supply coordination, and execution support delivered with clarity, accountability, and dependable follow-through.",
    longDescription:
      "Our general contracts service is built for organisations that need an experienced delivery partner. We coordinate sourcing, procurement, logistics, and administrative execution with a practical focus on timelines, quality, and communication.",
    image: visuals.servicesImage,
    benefits: [
      "Clear delivery timelines and reporting",
      "Reliable vendor and supply coordination",
      "Accountable execution from start to finish",
      "Flexible support for public and private sector needs",
    ],
  },
  {
    slug: "construction-services",
    title: "Construction Services",
    description:
      "Planning and project execution for residential, commercial, and infrastructure work with a strong emphasis on quality and coordination.",
    longDescription:
      "We support construction projects with a focus on disciplined site coordination, quality control, and practical project management. From early planning to final delivery, our approach is built to keep progress visible and outcomes aligned with expectations.",
    image: visuals.projectOne,
    benefits: [
      "Professional project coordination",
      "Quality-focused site execution",
      "Practical planning and supervision",
      "Suitable for building and infrastructure work",
    ],
  },
  {
    slug: "printing-services",
    title: "Printing Services",
    description:
      "Professional printing for corporate identity, marketing collateral, packaging, and promotional materials.",
    longDescription:
      "Our printing service delivers consistent, polished output for businesses and institutions that need brand-aligned materials. We produce corporate stationery, campaign items, presentation materials, and other print assets with a premium finish.",
    image: visuals.projectTwo,
    benefits: [
      "High-quality output and finishing",
      "Brand-consistent production standards",
      "Fast turnaround for campaign materials",
      "Suitable for business and event use",
    ],
  },
  {
    slug: "training-capacity-building",
    title: "Training & Capacity Building",
    description:
      "Practical development programmes for teams, managers, and organisations focused on capability, leadership, and performance.",
    longDescription:
      "We design and deliver training sessions that build practical skills, strengthen internal capacity, and improve team performance. Our programmes are tailored to the organisation's objectives and can be adapted for leadership, operations, and staff development needs.",
    image: visuals.projectFour,
    benefits: [
      "Custom training content",
      "Leadership and professional development",
      "Interactive and practical delivery",
      "Focused on measurable improvement",
    ],
  },
  {
    slug: "management-services",
    title: "Management Services",
    description:
      "Business and project management support designed to improve coordination, operations, and strategic delivery.",
    longDescription:
      "Our management services help organisations strengthen coordination and improve day-to-day operations. We support planning, reporting, administration, and project oversight so businesses can stay focused on performance and growth.",
    image: visuals.projectFive,
    benefits: [
      "Operational clarity and oversight",
      "Support for project and business management",
      "Improved coordination across teams",
      "Structured delivery and accountability",
    ],
  },
];

export const projectItems = [
  {
    title: "Corporate headquarters fit-out",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Executive branding suite",
    category: "Printing",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Business support coordination",
    category: "Management",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Infrastructure planning support",
    category: "Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Training workshop delivery",
    category: "Capacity Building",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Brand collateral production",
    category: "Printing",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=80",
  },
];

export const contactSections = [
  {
    label: contacts.abuja.label,
    address: contacts.abuja.address,
  },
  {
    label: contacts.kaduna.label,
    address: contacts.kaduna.address,
  },
];

export { company, contacts, values, visuals };
