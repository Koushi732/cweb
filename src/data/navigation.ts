export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    megaMenu: true,
    sections: [
      {
        title: "IT Services",
        href: "/services",
        items: [
          { name: "Custom Software Development", href: "/services#custom-software", icon: "Code2" },
          { name: "Web Application Development", href: "/services#web-development", icon: "Globe" },
          { name: "Mobile App Development", href: "/services#mobile-development", icon: "Smartphone" },
          { name: "AI Solutions", href: "/services#ai-automation", icon: "Brain" },
          { name: "Business Process Automation", href: "/services#business-process", icon: "Zap" },
          { name: "Enterprise Software Solutions", href: "/services#enterprise-software", icon: "Building2" },
          { name: "Cloud Deployment & DevOps", href: "/services#cloud-deployment", icon: "Cloud" },
          { name: "Networking & Security", href: "/services#networking-security", icon: "Network" },
        ],
      },
      {
        title: "IT Hardware",
        href: "/hardware",
        items: [
          { name: "Business Laptops", href: "/hardware#laptops", icon: "Laptop" },
          { name: "Desktop Systems", href: "/hardware#desktops", icon: "Monitor" },
          { name: "Networking Equipment", href: "/hardware#networking", icon: "Wifi" },
          { name: "Printers & Office", href: "/hardware#printers", icon: "Printer" },
          { name: "CCTV & Surveillance", href: "/hardware#cctv", icon: "Camera" },
          { name: "Biometric Systems", href: "/hardware#biometric", icon: "Fingerprint" },
          { name: "Infrastructure Setup", href: "/hardware#infrastructure-setup", icon: "Building" },
          { name: "Hardware Consulting", href: "/hardware#procurement-consulting", icon: "ShoppingCart" },
        ],
      },
    ],
  },
  { name: "Hardware", href: "/hardware" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];
