export interface Patent {
  id: string;
  title: string;
  patentNumber: string;
  year: string;
}

export interface Publication {
  id: string;
  venue: string;
  type: "journal" | "conference";
}

export interface ResearchArea {
  id: string;
  name: string;
}

export const patents: Patent[] = [
  {
    id: "vehicle-monitoring",
    title: "Wireless Vehicle Monitoring System and Method Thereof",
    patentNumber: "553713",
    year: "2024",
  },
];

export const publicationVenues: Publication[] = [
  {
    id: "springer-wpc",
    venue: "Springer Wireless Personal Communications",
    type: "journal",
  },
  {
    id: "wiley-ijcs",
    venue: "Wiley International Journal of Communication Systems",
    type: "journal",
  },
  {
    id: "elsevier-pcs",
    venue: "Elsevier Procedia Computer Science",
    type: "journal",
  },
  {
    id: "ieee-conf",
    venue: "IEEE Conference Proceedings",
    type: "conference",
  },
];

export const keyResearchAreas: ResearchArea[] = [
  { id: "vehicle-ai", name: "Vehicle monitoring using AI/ML" },
  { id: "sdn-controller", name: "SDN controller placement" },
  { id: "iot-apps", name: "IoT applications" },
  { id: "wsn", name: "Wireless sensor networks" },
];

export const publicationStats = {
  totalPapers: "10+",
  venues: "International journals and conferences",
};
