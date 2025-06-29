"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "VR Training Simulator",
  subtitle:
    "Immersive virtual reality training platform for professional skill development",
  backUrl: "/alpha/vr",
  backText: "Back to Virtual Reality",
  heroTitle: "VR Training Simulator",
  heroDescription:
    "An advanced virtual reality training platform designed for professional skill development and immersive learning experiences. Built with Unity 3D and cutting-edge VR technologies, the simulator provides realistic training scenarios for various industries with haptic feedback and progress tracking.",
  themeColor: "cyan",
  background: "from-cyan-900 via-gray-900 to-black",

  challenges: [
    "Creating realistic and immersive training environments",
    "Implementing accurate physics simulation for hands-on training",
    "Optimizing VR performance to prevent motion sickness",
    "Developing intuitive VR user interfaces and interactions",
    "Ensuring cross-platform VR headset compatibility",
    "Balancing visual fidelity with smooth VR performance",
  ],

  benefits: [
    "Safe training environment for high-risk procedures",
    "Cost-effective alternative to traditional training methods",
    "Immersive learning experience with higher retention rates",
    "Standardized training scenarios across different locations",
    "Real-time performance tracking and detailed analytics",
    "Scalable training solution for large organizations",
  ],

  images: [
    "/projects/vr-training-1.jpg",
    "/projects/vr-training-2.jpg",
    "/projects/vr-training-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The VR Training Simulator addresses the critical need for safe, cost-effective, and scalable professional training solutions across various industries. Traditional training methods often involve high costs, safety risks, and limited accessibility. This virtual reality platform creates immersive training environments where professionals can practice complex procedures, develop critical skills, and learn from mistakes without real-world consequences, revolutionizing how organizations approach employee development and skill certification.",
    purpose:
      "The project aims to transform professional training by providing immersive, interactive, and measurable learning experiences through virtual reality technology. The simulator focuses on creating realistic training scenarios that closely mimic real-world conditions, enabling trainees to develop muscle memory, decision-making skills, and procedural knowledge in a controlled environment. The platform emphasizes accessibility, scalability, and comprehensive performance analytics to ensure effective skill development and certification.",
  },
};

export default function VRTrainingPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
