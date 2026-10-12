import melhorOpcaoIcon from "../assets/melhor-opcao.png";
import unitConverterIcon from "../assets/unit-converter.png";

export const profile = {
  name: "Lucas Andrade",
  title: "Software Engineer at Bloks",
  tagline:
    "I build product features, integrations and platform tooling for software that financial advisors use every day.",
  location: "Calgary, Alberta, Canada",
  timeZone: "America/Edmonton",
  email: "andradelucas94@gmail.com",
  links: {
    github: "https://github.com/lucas-andrade94",
    linkedin: "https://www.linkedin.com/in/lucas-silva-de-andrade/",
  },
};

export const about = [
  "I'm a software engineer with 4+ years building web and mobile products, mostly with React Native, React, Node and TypeScript.",
  "At Bloks I lead CRM integrations and data migration for a platform used by financial advisors. I've also shipped advisor-facing features, the team and billing flows, and the internal tools that keep operations safe. I work closely with design in Figma and track work through Jira and GitHub.",
  "Before software I spent five years as a geomatics engineer: structuring processes, documenting workflows and helping teams work faster. I still build that way, methodical and detail-oriented, aiming for things that hold up at scale. Right now I'm going deeper into back-end architecture.",
];

export const stats = [
  { value: "4+", label: "years in software" },
  { value: "6", label: "CRM platforms integrated" },
  { value: "2", label: "apps shipped to the stores" },
];

export const experience = [
  {
    period: "2022 - Present",
    role: "Software Engineer",
    note: "Lead, CRM Integrations & Data Migration",
    company: "Bloks",
    location: "Calgary, AB",
    description:
      "Full-stack work on a product for financial advisors, spanning advisor-facing features, platform and billing flows, third-party integrations and internal tooling.",
    stack: ["React Native", "React", "Node.js", "TypeScript", "Stripe", "Mailchimp"],
  },
  {
    period: "2017 - 2021",
    role: "Geomatics Engineer",
    note: "AutoCAD Drafter to Coordinator Engineer",
    company: "Target Agrimensura · Topografia.com",
    location: "São Paulo, Brazil",
    description:
      "Documented company processes end to end, created a newcomer training method that cut onboarding time by at least 30%, and ran quality control across field and office teams.",
    stack: [],
  },
];

export const work = [
  {
    title: "CRM integrations across 6 platforms",
    description:
      "Salesforce, HubSpot, Pipedrive, Affinity, Equisoft and Wealthbox each have their own API, auth flow and data model. I built the integrations that let advisors sync and export their data to whichever CRM they use.",
    stack: ["Node.js", "TypeScript", "React Native", "REST APIs", "Data sync"],
  },
  {
    title: "Advisor coaching & meeting follow-ups",
    description:
      "A coaching tool that scores advisor conversations and surfaces actionable feedback, and an automated letter and email generator advisors use after every client meeting.",
    stack: ["React Native", "Node.js", "TypeScript"],
  },
  {
    title: "Teams, invites & subscription billing",
    description:
      "The team creation flow with Mailchimp-powered email invites and invite acceptance, subscription billing based on team size, and shared work on Stripe customer creation and subscription updates.",
    stack: ["React Native", "Node.js", "TypeScript", "Mailchimp", "Stripe"],
  },
  {
    title: "Super-admin console",
    description:
      "An internal interface that lets the team run admin-level operations through a UI instead of direct database access, reducing operational risk.",
    stack: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Scheduling & rich text editing",
    description:
      "Calendar parity across Google and Microsoft, additional video conferencing options, a custom time picker, and a rich text editor built with DraftJS and Tiptap.",
    stack: ["React Native", "Google & Microsoft calendars", "DraftJS", "Tiptap"],
  },
];

// Add store or repo URLs to `links` and they render as buttons on the card.
export const projects = [
  {
    title: "Melhor Opção",
    icon: melhorOpcaoIcon,
    description:
      "A price comparison app that ranks any set of products by cost per unit, so shoppers instantly see the best value and how much they'd overpay otherwise.",
    highlights: ["5 languages", "8 currencies", "Comparison history", "Light & dark themes"],
    stack: ["React Native", "Expo", "NativeWind", "Reanimated", "i18next", "AdMob"],
    platforms: "iOS & Android",
    links: [],
  },
  {
    title: "Universal Unit Converter",
    icon: unitConverterIcon,
    description:
      "Real-time conversion between any two units across categories like length, weight, temperature and speed, with saved conversion history.",
    highlights: ["Real-time conversion", "Conversion history", "Multilingual"],
    stack: ["React Native", "Expo", "NativeWind", "Reanimated", "i18next", "Biome"],
    platforms: "iOS & Android",
    links: [],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  {
    group: "Front-end & mobile",
    items: ["React Native", "React", "Next.js", "Expo", "Tailwind CSS", "Tiptap"],
  },
  {
    group: "Back-end & integrations",
    items: ["Node.js", "Express", "REST APIs", "Salesforce", "HubSpot", "Stripe", "Mailchimp"],
  },
  {
    group: "Data & tooling",
    items: ["MongoDB", "MySQL", "Firebase", "Docker", "GitHub", "Jira", "Figma"],
  },
];

export const education = {
  degree: "Bachelor's degree, Geomatics",
  school: "São Paulo State University",
  period: "2012 - 2017",
};

export const certifications = [
  "Node with React: Fullstack Web Development",
  "Complete React Developer",
  "Professional Qualification React JS",
  "Professional Qualification Python",
];

export const languages = ["Portuguese (native)", "English (full professional)"];
