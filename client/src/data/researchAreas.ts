import { Network, Cpu, MessageSquare, Code, Shield } from "lucide-react";

export interface ResearchTopic {
  name: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: ResearchTopic[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "sdn",
    title: "Software Defined Networks (SDN)",
    icon: "Network",
    description: "Research on programmable network architectures enabling flexible and efficient network management through software-based control.",
    topics: [
      { name: "Controller placement problems" },
      { name: "P4 Programming" },
      { name: "Session Management" },
    ],
  },
  {
    id: "iot",
    title: "Internet of Things (IoT)",
    icon: "Cpu",
    description: "Developing smart connected systems for real-world applications across multiple domains.",
    topics: [
      { name: "Routing and IoT applications" },
      { name: "Home automation" },
      { name: "Vehicle monitoring" },
      { name: "Agriculture applications" },
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    icon: "MessageSquare",
    description: "Advancing language understanding and translation technologies with focus on regional languages.",
    topics: [
      { name: "Dravidian language translations" },
      { name: "Language translator development" },
      { name: "Speech-to-text summarization" },
    ],
  },
  {
    id: "compilers",
    title: "Compilers",
    icon: "Code",
    description: "Research on programming language translation and compiler optimization techniques.",
    topics: [
      { name: "Design and implementation of translators and compilers" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "Shield",
    description: "Ensuring robust security solutions for modern networked and distributed systems.",
    topics: [
      { name: "Wireless Sensor Network (WSN) Security" },
      { name: "IoT Security" },
      { name: "SDN Security" },
    ],
  },
];
