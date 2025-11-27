import { 
  Monitor, 
  Gamepad2, 
  Smartphone, 
  Layers, 
  Palette, 
  MessageSquare, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export const NAVIGATION_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const SERVICES = [
  {
    icon: Monitor,
    title: "Custom Websites",
    description: "User-friendly, fast, modern websites built to match your brand and your goals."
  },
  {
    icon: Gamepad2,
    title: "Mobile & Desktop Games",
    description: "Casual games, brand games, educational games — designed to entertain and engage."
  },
  {
    icon: Smartphone,
    title: "AR Mini-Games",
    description: "Fun, interactive experiences your customers can play on their phone."
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Clean, modern interfaces for websites, games, and apps that feel great to use."
  },
  {
    icon: Palette,
    title: "Game Art & Assets",
    description: "Beautiful characters, environments, and animations to bring your worlds to life."
  }
];

export const FEATURES = [
  {
    icon: MessageSquare,
    title: "We Listen First",
    description: "Before we design anything, we understand your idea deeply."
  },
  {
    icon: Zap,
    title: "We Explain Everything Simply",
    description: "No tech confusion — we break every step into clear words."
  },
  {
    icon: Monitor,
    title: "We Build What People Enjoy Using",
    description: "Smooth, fast, visually beautiful experiences."
  },
  {
    icon: Users,
    title: "We Work Like a Team, Not Vendors",
    description: "You talk directly to the creators. You always know what’s happening."
  },
  {
    icon: Clock,
    title: "We Deliver On Time",
    description: "Your idea becomes real — without delays or stress."
  }
];

export const PROCESS_STEPS = [
  {
    title: "Share Your Idea",
    description: "Tell us what you want to build — even if it’s a rough thought."
  },
  {
    title: "We Shape It Together",
    description: "We discuss, refine, and prepare a plan that feels right to you."
  },
  {
    title: "We Start Creating",
    description: "Design, development, testing — everything done in-house."
  },
  {
    title: "You Review & Approve",
    description: "We make changes until you love every detail."
  },
  {
    title: "Launch & Support",
    description: "We help you publish, promote, and maintain your project."
  }
];

export const BENEFITS = [
  "Friendly, responsive communication",
  "Clean, modern design",
  "Smooth animations",
  "Fast loading speed",
  "Mobile-first design",
  "Regular updates",
  "Easy post-launch support",
  "100% custom work",
  "Zero jargon and clear guidance"
];

export const PRICING_PLANS = [
  {
    title: "Websites",
    price: "$399",
    description: "Custom design, up to 5 pages",
    features: ["Responsive Design", "SEO Basic Setup", "Contact Forms", "Fast Loading"]
  },
  {
    title: "Games",
    price: "$799",
    description: "2D or 3D, full gameplay mechanics",
    features: ["Custom Assets", "Level Design", "Sound Effects", "Multi-platform"]
  },
  {
    title: "AR Experiences",
    price: "$499",
    description: "Interactive mobile AR",
    features: ["Object Tracking", "Interactive 3D", "WebAR Support", "Brand Integration"]
  },
  {
    title: "UI/UX Design",
    price: "$199",
    description: "Prototypes & visual systems",
    features: ["Wireframes", "High-fidelity Mockups", "Interactive Prototypes", "Style Guide"]
  },
  {
    title: "Monthly Support",
    price: "$49",
    suffix: "/mo",
    description: "Maintenance & updates",
    features: ["Content Updates", "Bug Fixes", "Performance Monitoring", "Priority Support"]
  }
];

export const FAQS = [
  {
    question: "What exactly does PixelForge build?",
    answer: "We create custom websites, mobile games, desktop games, AR mini-games, and UI/UX designs. Every project is built from scratch based on your idea."
  },
  {
    question: "Do I need to know anything technical to work with you?",
    answer: "No. We explain everything in simple language and guide you through each step. No tech knowledge needed."
  },
  {
    question: "How long does a project usually take?",
    answer: "Websites take about 2–4 weeks. Games take 4–8 weeks depending on complexity. We give a clear timeline before starting."
  },
  {
    question: "How much will my project cost?",
    answer: "It depends on your idea. Websites start at $399. Games start at $799. We give a transparent quote with no hidden charges."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. We offer revisions throughout the project until you’re fully happy with the final result."
  },
  {
    question: "Can you help me with ideas or design direction?",
    answer: "Absolutely. If you only have a rough idea, we help you shape it into a full concept, including design and gameplay suggestions."
  },
  {
    question: "Will my website or game work on all devices?",
    answer: "Yes. Everything we build is optimized for mobiles, tablets, and desktops."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes. We offer affordable monthly support plans for updates, fixes, and improvements."
  },
  {
    question: "Can you integrate third-party tools?",
    answer: "Yes. For websites, we can integrate forms, payment gateways, newsletters, analytics, and more."
  },
  {
    question: "How do we start the project?",
    answer: "Just click “Start Your Project” and share your idea. We’ll get in touch, discuss details, give you a quote, and begin once you’re ready."
  }
];