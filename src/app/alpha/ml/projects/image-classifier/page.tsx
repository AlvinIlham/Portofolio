"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Advanced Image Classifier",
  subtitle:
    "Deep learning model for multi-class image classification with 95%+ accuracy",
  backUrl: "/alpha/ml",
  backText: "Back to Machine Learning",
  heroTitle: "Advanced Image Classifier",
  heroDescription:
    "A sophisticated image classification system built using convolutional neural networks with transfer learning capabilities. The model achieves 95%+ accuracy across multiple categories using TensorFlow and Keras, featuring real-time prediction and comprehensive data analysis.",
  themeColor: "blue",
  background: "from-blue-900 via-gray-900 to-black",

  challenges: [
    "Achieving high accuracy across diverse image categories",
    "Handling large datasets with limited computational resources",
    "Implementing efficient real-time prediction capabilities",
    "Managing overfitting in complex neural network architectures",
    "Optimizing model performance for production deployment",
    "Balancing model complexity with inference speed requirements",
  ],

  benefits: [
    "Automated image classification with human-level accuracy",
    "Significant reduction in manual image sorting tasks",
    "Real-time processing capabilities for live applications",
    "Scalable architecture supporting millions of images",
    "Cost-effective solution compared to manual classification",
    "Adaptable framework for various image recognition tasks",
  ],

  images: [
    "/projects/image-classifier-1.jpg",
    "/projects/image-classifier-2.jpg",
    "/projects/image-classifier-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The Advanced Image Classifier project addresses the growing need for automated image recognition in various industries. With the exponential growth of digital imagery, manual classification has become impractical and expensive. This deep learning solution leverages convolutional neural networks and transfer learning to provide accurate, efficient, and scalable image classification capabilities that can handle diverse image categories with professional-grade accuracy.",
    purpose:
      "The primary objective was to develop a robust image classification system that could achieve professional-level accuracy while maintaining real-time processing capabilities. The project focuses on creating a production-ready solution that can be easily integrated into existing workflows, featuring comprehensive API support, detailed performance analytics, and the flexibility to adapt to new image categories through continued learning and model updates.",
  },
};

export default function ImageClassifierPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
