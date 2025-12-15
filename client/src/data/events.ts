export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  details?: string[];
  resourcePersons?: string[];
}

export const events: Event[] = [
  {
    id: "serb-sdn-workshop",
    title: "SERB One Week Workshop on SDN",
    date: "July 17-23, 2023",
    description: "Comprehensive workshop on Software Defined Networks covering latest technologies and practices.",
    details: [
      "P4 Programming",
      "eBPF (Extended Berkeley Packet Filter)",
      "Kubernetes",
      "MININET",
      "ONOS Controller",
    ],
    resourcePersons: [
      "IIT Hyderabad",
      "IIIT Delhi",
      "IIT Dharwad",
    ],
  },
  {
    id: "-simulator",
    title: "Two Day Workshop on Network Simulator",
    date: "February 22-23, 2024",
    description: "Hands-on workshop on network simulation tools and techniques for research and education.",
  },
  {
    id: "iot-workshop",
    title: "One Week Workshop on IoT for Real-Time Applications",
    date: "June 16-20, 2025",
    description: "Practical workshop covering IoT fundamentals and real-time application development.",
  },
  {
    id: "proteus-vsm",
    title: "Online Workshop on Proteus VSM for IoT/Robotics",
    date: "November 2022",
    description: "Virtual session on using Proteus VSM for IoT and robotics simulation and development.",
  },
  {
    id: "fna-2023",
    title: "FNA-2023 International Workshop on Future Networking Architectures",
    date: "2023",
    description: "International workshop bringing together researchers and industry experts to discuss the future of networking technologies.",
  },
];
