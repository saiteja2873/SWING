export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
  downloadUrl: string;
  size?: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Research Areas", href: "/research-areas" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Research Output", href: "/research-output" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://facebook.com/swingiiitk",
    icon: "Facebook",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/swingiiitk",
    icon: "Twitter",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/swing-iiitk",
    icon: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/swing-iiitk",
    icon: "Github",
  },
];

export const downloadItems: DownloadItem[] = [
  {
    id: "sdn-brochure",
    title: "SERB SDN Workshop Brochure",
    description: "Complete brochure for the SERB sponsored SDN workshop with schedule and topics.",
    fileType: "PDF",
    downloadUrl: "/downloads/sdn-workshop-brochure.pdf",
    size: "2.5 MB",
  },
  {
    id: "iot-schedule",
    title: "IoT Workshop Schedule",
    description: "Detailed schedule for the one-week IoT workshop for real-time applications.",
    fileType: "PDF",
    downloadUrl: "/downloads/iot-workshop-schedule.pdf",
    size: "1.2 MB",
  },
  {
    id: "research-publications",
    title: "Research Publications Summary",
    description: "Summary document of all research publications by SWING group members.",
    fileType: "PDF",
    downloadUrl: "/downloads/publications-summary.pdf",
    size: "3.1 MB",
  },
  {
    id: "network-simulator-materials",
    title: "Network Simulator Workshop Materials",
    description: "Hands-on materials and guides from the network simulator workshop.",
    fileType: "ZIP",
    downloadUrl: "/downloads/network-simulator-materials.zip",
    size: "15 MB",
  },
  {
    id: "swing-overview",
    title: "SWING Research Group Overview",
    description: "Overview presentation of SWING research areas and achievements.",
    fileType: "PPTX",
    downloadUrl: "/downloads/swing-overview.pptx",
    size: "5.8 MB",
  },
];

export const contactInfo = {
  address: "IIIT Kottayam, Valavoor P.O, Pala, Kottayam, Kerala, India – 686635",
  phone: "+91-0482-2202171",
  email: "kguravaiah@iiitkottayam.ac.in",
  mapUrl: "https://maps.google.com/?q=IIIT+Kottayam,+Valavoor,+Pala,+Kerala",
};
