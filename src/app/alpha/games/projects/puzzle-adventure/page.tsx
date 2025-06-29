"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Mystic Puzzle Adventure",
  subtitle:
    "Immersive puzzle adventure game with stunning visuals and mind-bending challenges",
  backUrl: "/alpha/games",
  backText: "Back to Games",
  heroTitle: "Mystic Puzzle Adventure",
  heroDescription:
    "An immersive puzzle adventure game that combines intricate puzzle mechanics with engaging storytelling, built with Unity and featuring hand-crafted art, dynamic lighting, and original soundtrack.",
  themeColor: "purple",
  background: "from-purple-900 via-gray-900 to-black",

  challenges: [
    "Differentiating in a saturated puzzle game market",
    "Balancing puzzle difficulty for diverse player skill levels",
    "Integrating narrative elements without disrupting gameplay flow",
    "Optimizing performance across different platforms and devices",
    "Creating visually appealing 3D environments within budget constraints",
    "Maintaining player engagement throughout 100+ levels",
  ],

  benefits: [
    "Enhanced cognitive skills through complex puzzle solving",
    "Improved visual and auditory gaming experience",
    "Increased accessibility through cross-platform availability",
    "Community building through shared puzzle-solving experiences",
    "Educational value through problem-solving skill development",
    "Entertainment value with high replay potential",
  ],

  images: [
    "/projects/puzzle-adventure-1.jpg",
    "/projects/puzzle-adventure-2.jpg",
    "/projects/puzzle-adventure-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "Mystic Puzzle Adventure was conceived to bridge the gap between traditional puzzle mechanics and modern gaming expectations. In the rapidly evolving gaming industry, puzzle games have proven to be a timeless genre that challenges players' cognitive abilities while providing entertainment. This project aims to create an immersive experience that combines intricate puzzle design with captivating storytelling, featuring over 100 unique levels, hand-crafted 3D environments, and cross-platform compatibility.",
    purpose:
      "The primary goal was to create a puzzle adventure game that would challenge players intellectually while providing an engaging narrative experience. We aimed to develop a game that appeals to both casual and hardcore puzzle enthusiasts, featuring progressive difficulty levels, multiple solution paths, dynamic lighting effects, and an original soundtrack that enhances the mystical atmosphere throughout the gaming experience.",
  },
};

export default function PuzzleAdventurePage() {
  return <ProjectDetailTemplate {...projectData} />;
}
