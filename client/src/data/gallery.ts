export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  event?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "sdn-workshop-1",
    src: "/images/gallery/sdn-workshop-1.jpg",
    alt: "SERB SDN Workshop participants",
    title: "SERB SDN Workshop 2023",
    event: "SERB One Week Workshop on SDN",
  },
  {
    id: "sdn-workshop-2",
    src: "/images/gallery/sdn-workshop-2.jpg",
    alt: "SDN Workshop session",
    title: "Technical Session - P4 Programming",
    event: "SERB One Week Workshop on SDN",
  },
  {
    id: "iot-workshop-1",
    src: "/images/gallery/iot-workshop-1.jpg",
    alt: "IoT Workshop hands-on session",
    title: "IoT Hands-on Session",
    event: "IoT for Real-Time Applications",
  },
  {
    id: "team-photo-1",
    src: "/images/gallery/team-photo-1.jpg",
    alt: "SWING Research Group team photo",
    title: "SWING Team",
    event: "Team Meeting",
  },
  {
    id: "lab-session-1",
    src: "/images/gallery/lab-session-1.jpg",
    alt: "Research lab session",
    title: "Lab Research Session",
  },
  {
    id: "network-simulator",
    src: "/images/gallery/network-simulator.jpg",
    alt: "Network Simulator Workshop",
    title: "Network Simulator Workshop",
    event: "Two Day Workshop on Network Simulator",
  },
  {
    id: "guest-lecture-1",
    src: "/images/gallery/guest-lecture-1.jpg",
    alt: "Guest lecture session",
    title: "Expert Talk",
  },
  {
    id: "student-project",
    src: "/images/gallery/student-project.jpg",
    alt: "Student project presentation",
    title: "Student Project Demo",
  },
];
