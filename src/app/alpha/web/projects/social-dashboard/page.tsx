"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Social Media Dashboard",
  subtitle:
    "Comprehensive analytics and management tool for multiple social media platforms",
  backUrl: "/alpha/web",
  backText: "Back to Web Development",
  heroTitle: "Social Media Dashboard",
  heroDescription:
    "A comprehensive social media management platform that aggregates data from multiple social networks, providing advanced analytics, content scheduling, and team collaboration tools. Built with Vue.js and Laravel, the platform offers real-time insights and automated content management across various social media platforms.",
  themeColor: "blue",
  background: "from-blue-900 via-gray-900 to-black",

  challenges: [
    "Integrating multiple social media APIs with different rate limits",
    "Creating real-time data synchronization across platforms",
    "Designing intuitive analytics visualizations for complex data",
    "Handling API rate limiting and authentication complexities",
    "Ensuring data consistency across different social platforms",
    "Building scalable architecture for high-volume data processing",
  ],

  benefits: [
    "Centralized management of multiple social media accounts",
    "Advanced analytics providing actionable insights",
    "Automated content scheduling and publishing",
    "Enhanced team collaboration and workflow management",
    "Custom dashboard creation for different user roles",
    "Significant time savings through automation and bulk operations",
  ],

  images: [
    "/projects/social-dashboard-1.jpg",
    "/projects/social-dashboard-2.jpg",
    "/projects/social-dashboard-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The Social Media Dashboard was developed to address the complex needs of businesses and agencies managing multiple social media platforms. With the proliferation of social networks and the increasing importance of social media marketing, organizations need comprehensive tools to monitor, analyze, and manage their social presence effectively. This platform integrates data from various social media APIs to provide a unified view of social media performance and streamlined content management capabilities.",
    purpose:
      "The primary goal was to create a unified platform that simplifies social media management while providing deep insights into social media performance. The dashboard focuses on aggregating data from multiple platforms, providing comprehensive analytics, and enabling efficient content scheduling and team collaboration. By leveraging Vue.js for the frontend and Laravel for the backend, the platform delivers real-time data visualization, automated workflows, and customizable dashboards that adapt to different organizational needs and user roles.",
  },
};

export default function SocialDashboardPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
