export interface Highlight {
  id: string;
  category: string;
  items: string[];
}

export interface AudienceType {
  id: string;
  name: string;
}

export interface Enhancement {
  id: string;
  title: string;
}

export const researchImpact: Highlight = {
  id: "research-impact",
  category: "Research Impact",
  items: [
    "1 granted patent",
    "10+ international publications",
    "Multiple funded projects",
    "Industry collaboration",
    "International workshop organization",
  ],
};

export const studentInvolvement: Highlight = {
  id: "student-involvement",
  category: "Student Involvement",
  items: [
    "Ph.D. research opportunities",
    "B.Tech project work",
    "Internship programs",
    "Hands-on workshop participation",
  ],
};

export const industryConnect: Highlight = {
  id: "industry-connect",
  category: "Industry Connect",
  items: [
    "Consultancy projects with Wipro, Komhar Services",
    "Industry expert involvement",
    "Real-world problem solving focus",
  ],
};

export const targetAudience: AudienceType[] = [
  { id: "students", name: "Prospective Students" },
  { id: "academic", name: "Academic Community" },
  { id: "industry", name: "Industry Partners" },
  { id: "funding", name: "Funding Agencies" },
  { id: "public", name: "General Public" },
];

export const futureEnhancements: Enhancement[] = [
  { id: "cms", title: "Dynamic content management system" },
  { id: "database", title: "Database integration for publications/projects" },
  { id: "search", title: "Search functionality" },
  { id: "blog", title: "Blog section for research updates" },
  { id: "login", title: "Member login portal" },
  { id: "forms", title: "Online application forms" },
  { id: "streaming", title: "Live event streaming integration" },
];

export const conclusionText = {
  title: "A Well-Structured Academic Research Platform",
  description: "This website showcases the SWING group's expertise in networking, AI/ML, IoT, and security research. It serves as a comprehensive platform for research dissemination, student recruitment, industry collaboration, event promotion, and academic networking.",
  architecture: "Built with a modular, component-based React architecture that ensures maintainability, scalability, and an excellent user experience across all devices.",
};
