"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "NLP Research Platform",
  subtitle:
    "Advanced natural language processing research with transformer models",
  backUrl: "/alpha/ml",
  backText: "Back to Machine Learning",
  heroTitle: "NLP Research Platform",
  heroDescription:
    "A comprehensive natural language processing research platform utilizing state-of-the-art transformer models and advanced linguistics algorithms. The platform enables cutting-edge research in text analysis, sentiment detection, and language understanding with multilingual support.",
  themeColor: "green",
  background: "from-green-900 via-gray-900 to-black",

  challenges: [
    "Processing and analyzing large-scale text datasets efficiently",
    "Implementing state-of-the-art transformer architectures",
    "Handling multilingual text processing complexities",
    "Managing computational resources for large language models",
    "Ensuring accuracy across diverse text domains and styles",
    "Developing scalable research infrastructure for team collaboration",
  ],

  benefits: [
    "Advanced text analysis capabilities with transformer models",
    "Multilingual support for global research applications",
    "Automated sentiment analysis and emotion detection",
    "Scalable research platform for academic and commercial use",
    "Real-time text processing and analysis capabilities",
    "Comprehensive analytics and visualization tools",
  ],

  images: [
    "/projects/nlp-research-1.jpg",
    "/projects/nlp-research-2.jpg",
    "/projects/nlp-research-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "The NLP Research Platform was developed to address the growing demand for advanced natural language processing capabilities in academic and commercial research. As text data continues to grow exponentially across digital platforms, researchers need sophisticated tools to analyze, understand, and extract meaningful insights from textual information. This platform combines cutting-edge transformer models with practical research tools to enable breakthrough discoveries in linguistics and computational language understanding.",
    purpose:
      "The project aims to create a comprehensive research environment that enables linguists, data scientists, and researchers to conduct advanced NLP experiments with state-of-the-art tools. The platform focuses on providing accessible yet powerful capabilities for text analysis, sentiment detection, language modeling, and cross-linguistic research, while maintaining the flexibility needed for innovative research methodologies and experimental approaches.",
  },
};

export default function NLPResearchPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
