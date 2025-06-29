"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Premium E-commerce App",
  subtitle:
    "Modern iOS e-commerce application with seamless shopping experience",
  backUrl: "/alpha/ios",
  backText: "Back to iOS Development",
  heroTitle: "Premium E-commerce App",
  heroDescription:
    "A feature-rich e-commerce application built for iOS using SwiftUI and Combine framework. The app provides a seamless shopping experience with advanced search capabilities, personalized recommendations, secure payment integration, and real-time order tracking with offline synchronization support.",
  themeColor: "pink",
  background: "from-pink-900 via-gray-900 to-black",

  challenges: [
    "Creating intuitive and responsive SwiftUI user interfaces",
    "Implementing secure payment processing and data protection",
    "Optimizing app performance for various iOS device configurations",
    "Managing complex state with Combine reactive programming",
    "Ensuring seamless offline functionality and data synchronization",
    "Integrating multiple third-party services and APIs efficiently",
  ],

  benefits: [
    "Enhanced mobile shopping experience for iOS users",
    "Increased customer engagement through personalized recommendations",
    "Improved conversion rates with streamlined checkout process",
    "Reduced cart abandonment through offline functionality",
    "Better customer retention with push notifications and tracking",
    "Scalable architecture supporting business growth",
  ],

  images: [
    "/projects/ecommerce-platform-1.jpg",
    "/projects/ecommerce-platform-2.jpg",
    "/projects/ecommerce-platform-3.jpg",
    "/projects/ecommerce-platform-4.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The Premium E-commerce App was developed to address the growing demand for sophisticated mobile shopping experiences on iOS devices. With mobile commerce continuing to dominate retail sales, businesses need powerful, user-friendly applications that can compete with established platforms. This project combines modern iOS development practices with proven e-commerce functionality, delivering a premium shopping experience that leverages the full capabilities of Apple's ecosystem including CloudKit, StoreKit, and advanced SwiftUI features.",
    purpose:
      "The primary objective was to create a comprehensive e-commerce solution that showcases the best of iOS development while providing real business value. The app focuses on delivering exceptional user experience through intuitive design, personalized shopping features, secure transactions, and reliable performance. The project emphasizes modern iOS development patterns using SwiftUI and Combine, demonstrating how to build scalable, maintainable mobile applications that can handle complex business logic and integrate seamlessly with cloud services.",
  },
};

export default function EcommercePlatformiOSPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
