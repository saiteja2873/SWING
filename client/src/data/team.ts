export interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliation?: string;
  isLead?: boolean;
  image?: string;
}

export interface TeamCategory {
  id: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export const teamCategories: TeamCategory[] = [
  {
    id: "internal-faculty",
    title: "Internal Faculty",
    description: "Core faculty members from IIIT Kottayam",
    members: [
      {
        id: "koppala",
        name: "Dr. Koppala Guravaiah",
        role: "Lead Researcher",
        isLead: true,
      },
      {
        id: "bhanu",
        name: "Dr. Bhanu Chander",
        role: "Faculty Member",
      },
      {
        id: "selvi",
        name: "Dr. C Selvi",
        role: "Faculty Member",
      },
      {
        id: "santhos",
        name: "Dr. Santhos Kumar",
        role: "Faculty Member",
      },
      {
        id: "dhanyamol",
        name: "Dr. Dhanyamol M V",
        role: "Faculty Member",
      },
      {
        id: "jalaja",
        name: "Dr. Jalaja M J",
        role: "Faculty Member",
      },
    ],
  },
  {
    id: "external-academicians",
    title: "External Academicians",
    description: "Collaborating researchers from premier institutions",
    members: [
      {
        id: "leela",
        name: "Dr. Leela Velsamy",
        role: "Collaborator",
        affiliation: "NIT Trichy",
      },
      {
        id: "venkanu",
        name: "Dr. Venkanu U",
        role: "Collaborator",
        affiliation: "NIT Warangal",
      },
      {
        id: "preeth",
        name: "Dr. Preeth R",
        role: "Collaborator",
        affiliation: "IIITDM Kancheepuram",
      },
      {
        id: "naveen",
        name: "Dr. Naveen Kumar R",
        role: "Collaborator",
        affiliation: "SRM AP",
      },
    ],
  },
  {
    id: "industry-experts",
    title: "Industry Experts",
    description: "Industry professionals contributing expertise",
    members: [
      {
        id: "shashidhara",
        name: "Dr. Shashidhara R",
        role: "Blockchain Lead",
        affiliation: "Wipro Technologies",
      },
      {
        id: "harsha",
        name: "Dr. Sri Harsha K",
        role: "AI/CV Engineer",
        affiliation: "MATDUN Labs",
      },
    ],
  },
];

export interface TeamStat {
  label: string;
  value: string;
  description: string;
}

export const teamStats: TeamStat[] = [
  {
    label: "Ph.D. Scholars",
    value: "4",
    description: "Active doctoral researchers",
  },
  {
    label: "B.Tech Students",
    value: "15+",
    description: "Undergraduate researchers",
  },
  {
    label: "Intern Students",
    value: "2",
    description: "Current interns",
  },
  {
    label: "Alumni",
    value: "Multiple",
    description: "Graduated batches",
  },
];
