export const BRAND = {
  name: "Lomeli Financial Group",
  phone: "(956) 413-7528",
  phoneRaw: "9564137528",
  email: "jorge@lomelifinancial.com",
  address: "McAllen, TX",
  license: "2339548",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  services: "services",
  whyUs: "why-us",
  contact: "contact",
  footer: "footer",
} as const;

export const SECTIONS = [
  { id: SECTION_IDS.hero, label: "Home", number: "01" },
  { id: SECTION_IDS.services, label: "Services", number: "02" },
  { id: SECTION_IDS.whyUs, label: "Why Us", number: "03" },
  { id: SECTION_IDS.contact, label: "Contact", number: "04" },
  { id: SECTION_IDS.footer, label: "Footer", number: "05" },
] as const;

export const SERVICES = [
  {
    key: "retirement",
    icon: "TrendingUp",
  },
  {
    key: "socialSecurity",
    icon: "Shield",
  },
  {
    key: "taxStrategies",
    icon: "Calculator",
  },
  {
    key: "estatePlanning",
    icon: "FileText",
  },
  {
    key: "lifeInsurance",
    icon: "Heart",
  },
  {
    key: "wealthManagement",
    icon: "BarChart3",
  },
  {
    key: "businessPlanning",
    icon: "Briefcase",
  },
] as const;

export type ServiceKey = (typeof SERVICES)[number]["key"];
