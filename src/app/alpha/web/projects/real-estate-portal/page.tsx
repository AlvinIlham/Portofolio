"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Real Estate Portal",
  subtitle:
    "Modern property listing and management platform with advanced search capabilities",
  backUrl: "/alpha/web",
  backText: "Back to Web Development",
  heroTitle: "Real Estate Portal",
  heroDescription:
    "A comprehensive real estate platform featuring advanced search capabilities, virtual tours, and property management tools. Built with React and Node.js, the platform serves both property buyers and real estate agents with powerful tools for property discovery, management, and transaction facilitation.",
  themeColor: "blue",
  background: "from-blue-900 via-gray-900 to-black",

  challenges: [
    "Implementing complex property search algorithms with multiple filters",
    "Optimizing large image galleries and virtual tour performance",
    "Creating responsive interactive map interfaces with real-time data",
    "Handling large property datasets with efficient pagination",
    "Integrating multiple MLS (Multiple Listing Service) systems",
    "Ensuring fast load times with heavy media content",
  ],

  benefits: [
    "Streamlined property search experience for buyers",
    "Efficient property management tools for agents",
    "Interactive maps and location-based search capabilities",
    "Virtual tour integration reducing physical visits",
    "Comprehensive property analytics and market insights",
    "Automated mortgage calculation and financing tools",
  ],

  images: [
    "/projects/real-estate-portal-1.jpg",
    "/projects/real-estate-portal-2.jpg",
    "/projects/real-estate-portal-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The Real Estate Portal was developed to address the growing need for digital transformation in the real estate industry. Traditional property search methods often lack the advanced filtering, visualization, and management capabilities that modern users expect. This platform combines cutting-edge web technologies with comprehensive property data to create a seamless experience for both property seekers and real estate professionals, featuring virtual tours, interactive maps, and sophisticated search algorithms.",
    purpose:
      "The primary objective was to create a comprehensive real estate platform that simplifies property discovery while providing powerful management tools for real estate professionals. The platform focuses on delivering advanced search capabilities, virtual tour integration, and real-time property data visualization. By combining React's dynamic user interface with robust backend services, the platform enables efficient property browsing, detailed property analysis, and streamlined transaction management for all stakeholders in the real estate ecosystem.",
  },
};

export default function RealEstatePortalPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
