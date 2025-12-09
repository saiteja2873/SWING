export interface Project {
  id: string;
  title: string;
  sponsor: string;
  amount: string;
  date?: string;
  description?: string;
  type: "sponsored" | "consultancy";
}

export const projects: Project[] = [
  {
    id: "serb-sdn",
    title: "SERB Sponsored Workshop on SDN: Software Defined Networks Architectures and Applications",
    sponsor: "SERB (Science and Engineering Research Board)",
    amount: "₹5 lakhs",
    date: "July 2023",
    description: "A comprehensive workshop covering SDN architectures, P4 programming, and modern networking applications.",
    type: "sponsored",
  },
  {
    id: "voola",
    title: "Data Utilities and Mobile Apps Development",
    sponsor: "Voola Software Solutions",
    amount: "₹1.6992 lakhs",
    type: "consultancy",
  },
  {
    id: "komhar",
    title: "ETL Tools & SQL Automation",
    sponsor: "Komhar Services, USA",
    amount: "$5,840 USD",
    type: "consultancy",
  },
  {
    id: "nest-digital",
    title: "Technical Training on C & CPP Programming",
    sponsor: "Nest Digital Private Limited",
    amount: "₹2.06 lakhs",
    type: "consultancy",
  },
];

export const sponsoredProjects = projects.filter((p) => p.type === "sponsored");
export const consultancyProjects = projects.filter((p) => p.type === "consultancy");
