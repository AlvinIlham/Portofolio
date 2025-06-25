"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronRight,
  Languages,
  Cpu,
  Award,
  Globe,
  Code,
  Smartphone,
  Palette,
  Gamepad2,
  Brain,
  Eye,
  Apple,
  GraduationCap,
  FileText,
  Trophy,
  ArrowRight,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  X,
  Play,
  ExternalLink,
  Calendar,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  video?: string;
  tech: string[];
  status: string;
  date: string;
  objectives: string[];
  benefits: string[];
  features: string[];
  challenges: string;
  impact: string;
  demoUrl?: string;
  sourceUrl?: string;
}

const categories = [
  {
    id: "albi",
    title: "ALBI",
    subtitle: "Language Learning Projects",
    description:
      "Comprehensive multilingual education platform featuring interactive learning experiences across English, Arabic, and Korean languages",
    detailedDescription:
      "Our ALBI category encompasses cutting-edge language learning solutions that bridge cultural gaps and enhance global communication. From AI-powered grammar tutors to immersive conversation simulators, each project is designed to make language learning engaging, effective, and accessible to learners worldwide.",
    highlights: [
      "3 Languages Supported",
      "AI-Powered Learning",
      "Cultural Integration",
      "Interactive Experiences",
    ],
    stats: {
      projects: 9,
      languages: 3,
      users: "2K+",
      completion: "87%",
    },
    color: "from-blue-500 to-cyan-500",
    icon: Languages,
    sections: [
      {
        name: "English Language",
        icon: Globe,
        description: "English learning and teaching projects",
        image: "/projects/english-preview.jpg",
        projects: [
          {
            id: "grammar-tutor",
            title: "Interactive Grammar Tutor",
            description:
              "AI-powered grammar learning platform with real-time feedback",
            image: "/projects/grammar-tutor.jpg",
            gallery: [
              "/projects/grammar-tutor-1.jpg",
              "/projects/grammar-tutor-2.jpg",
              "/projects/grammar-tutor-3.jpg",
            ],
            video: "/projects/grammar-tutor-demo.mp4",
            tech: ["React", "Node.js", "AI/ML", "MongoDB"],
            status: "Completed",
            date: "2024",
            objectives: [
              "Improve English grammar understanding",
              "Provide personalized learning experience",
              "Real-time feedback and corrections",
            ],
            benefits: [
              "Adaptive learning algorithms",
              "Interactive exercises",
              "Progress tracking",
              "Gamified learning experience",
            ],
            features: [
              "AI-powered grammar analysis",
              "Real-time error detection",
              "Personalized learning paths",
              "Progress analytics",
              "Mobile-responsive design",
            ],
            challenges:
              "Developing accurate grammar analysis algorithms and creating engaging user interfaces",
            impact:
              "Improved grammar skills for 1000+ users with 85% completion rate",
          },
        ],
      },
      {
        name: "Arabic Language",
        icon: Globe,
        description: "Arabic language learning resources",
        image: "/projects/arabic-preview.jpg",
        projects: [
          {
            id: "arabic-alphabet",
            title: "Interactive Arabic Alphabet",
            description:
              "Comprehensive Arabic alphabet learning app with pronunciation guides",
            image: "/projects/arabic-alphabet.jpg",
            gallery: [
              "/projects/arabic-alphabet-1.jpg",
              "/projects/arabic-alphabet-2.jpg",
              "/projects/arabic-alphabet-3.jpg",
            ],
            video: "/projects/arabic-alphabet-demo.mp4",
            tech: ["React Native", "Audio Processing", "Animation", "SQLite"],
            status: "Completed",
            date: "2023",
            objectives: [
              "Teach Arabic alphabet systematically",
              "Provide accurate pronunciation guides",
              "Create engaging learning experience",
            ],
            benefits: [
              "Interactive alphabet cards",
              "Native speaker pronunciation",
              "Writing practice guides",
              "Progress tracking system",
            ],
            features: [
              "Audio pronunciation for each letter",
              "Interactive writing practice",
              "Letter recognition games",
              "Cultural context integration",
              "Offline learning capability",
            ],
            challenges:
              "Implementing accurate Arabic text rendering and pronunciation synthesis for non-native learners",
            impact:
              "Helped 500+ students master Arabic alphabet with 90% retention rate",
          },
        ],
      },
      {
        name: "Korean Language",
        icon: Globe,
        description: "Korean language study materials",
        image: "/projects/korean-preview.jpg",
        projects: [
          {
            id: "hangul-master",
            title: "Hangul Master",
            description:
              "Complete Korean writing system learning platform with K-pop integration",
            image: "/projects/hangul-master.jpg",
            gallery: [
              "/projects/hangul-master-1.jpg",
              "/projects/hangul-master-2.jpg",
              "/projects/hangul-master-3.jpg",
            ],
            video: "/projects/hangul-master-demo.mp4",
            tech: ["Vue.js", "Node.js", "WebRTC", "MongoDB"],
            status: "Completed",
            date: "2023",
            objectives: [
              "Master Hangul writing system",
              "Integrate popular culture learning",
              "Build Korean language foundation",
            ],
            benefits: [
              "Stroke order animation",
              "K-pop lyric learning",
              "Real-time pronunciation check",
              "Cultural immersion content",
            ],
            features: [
              "Animated stroke order guides",
              "K-pop song lyric practice",
              "Speech recognition feedback",
              "Korean drama subtitle training",
              "Community practice rooms",
            ],
            challenges:
              "Integrating entertainment content while maintaining educational effectiveness and copyright compliance",
            impact:
              "Engaged 2000+ K-culture enthusiasts in serious Korean language study",
          },
        ],
      },
    ],
  },
  {
    id: "alpha",
    title: "ALPHA",
    subtitle: "Technology Projects",
    description:
      "Revolutionary technology solutions spanning AR/VR, mobile development, web platforms, and AI-powered applications",
    detailedDescription:
      "ALPHA represents the pinnacle of technological innovation, showcasing projects that push the boundaries of what's possible. From immersive augmented reality experiences to sophisticated machine learning algorithms, each project demonstrates expertise in cutting-edge technologies and their practical applications.",
    highlights: [
      "8 Tech Domains",
      "AR/VR Experiences",
      "AI/ML Integration",
      "Cross-Platform Solutions",
    ],
    stats: {
      projects: 24,
      technologies: 8,
      users: "5K+",
      platforms: "Multi",
    },
    color: "from-purple-500 to-pink-500",
    icon: Cpu,
    sections: [
      {
        name: "Augmented Reality",
        icon: Eye,
        description: "AR applications and experiences",
        image: "/projects/ar-preview.jpg",
        projects: [
          {
            id: "ar-shopping",
            title: "AR Shopping Assistant",
            description:
              "Virtual try-on and product visualization for e-commerce",
            image: "/projects/ar-shopping.jpg",
            gallery: [
              "/projects/ar-shopping-1.jpg",
              "/projects/ar-shopping-2.jpg",
              "/projects/ar-shopping-3.jpg",
              "/projects/ar-shopping-4.jpg",
            ],
            video: "/projects/ar-shopping-demo.mp4",
            tech: ["Unity", "ARCore", "C#", "Android SDK", "Firebase"],
            status: "Completed",
            date: "2024",
            objectives: [
              "Enhance online shopping experience",
              "Reduce product return rates",
              "Increase customer engagement",
            ],
            benefits: [
              "Virtual try-on capabilities",
              "Realistic product visualization",
              "Interactive shopping experience",
              "Reduced uncertainty in online purchases",
            ],
            features: [
              "3D product visualization",
              "Virtual try-on for clothing and accessories",
              "Real-time product placement",
              "Social sharing capabilities",
              "Purchase integration",
            ],
            challenges:
              "Achieving accurate 3D tracking and realistic rendering while maintaining performance on mobile devices",
            impact:
              "Increased conversion rates by 40% and reduced returns by 25% for partner retailers",
          },
        ],
      },
      {
        name: "Website Development",
        icon: Code,
        description: "Modern web applications",
        image: "/projects/web-preview.jpg",
        projects: [
          {
            id: "ecommerce-platform",
            title: "Next-Gen E-commerce Platform",
            description:
              "Full-featured e-commerce platform with AI recommendations and real-time analytics",
            image: "/projects/ecommerce-platform.jpg",
            gallery: [
              "/projects/ecommerce-platform-1.jpg",
              "/projects/ecommerce-platform-2.jpg",
              "/projects/ecommerce-platform-3.jpg",
              "/projects/ecommerce-platform-4.jpg",
            ],
            video: "/projects/ecommerce-platform-demo.mp4",
            tech: [
              "Next.js",
              "TypeScript",
              "Prisma",
              "PostgreSQL",
              "Stripe",
              "Redis",
            ],
            status: "Completed",
            date: "2024",
            objectives: [
              "Create scalable e-commerce solution",
              "Implement AI-driven recommendations",
              "Provide real-time analytics dashboard",
            ],
            benefits: [
              "Personalized shopping experience",
              "Advanced search and filtering",
              "Real-time inventory management",
              "Comprehensive admin dashboard",
            ],
            features: [
              "AI-powered product recommendations",
              "Real-time chat support",
              "Multi-payment gateway integration",
              "Advanced analytics dashboard",
              "Mobile-responsive design",
              "SEO optimization",
            ],
            challenges:
              "Optimizing performance for large product catalogs while maintaining real-time features and AI recommendations",
            impact:
              "Increased client sales by 60% and improved user engagement by 45%",
            demoUrl: "https://ecommerce-demo.example.com",
            sourceUrl: "https://github.com/example/ecommerce-platform",
          },
        ],
      },
      {
        name: "Android Development",
        icon: Smartphone,
        description: "Native Android applications",
        image: "/projects/android-preview.jpg",
        projects: [
          {
            id: "fitness-tracker",
            title: "Smart Fitness Tracker",
            description:
              "Comprehensive fitness tracking app with AI coaching and social features",
            image: "/projects/fitness-tracker.jpg",
            gallery: [
              "/projects/fitness-tracker-1.jpg",
              "/projects/fitness-tracker-2.jpg",
              "/projects/fitness-tracker-3.jpg",
            ],
            video: "/projects/fitness-tracker-demo.mp4",
            tech: [
              "Kotlin",
              "Jetpack Compose",
              "Room DB",
              "Retrofit",
              "ML Kit",
            ],
            status: "Completed",
            date: "2024",
            objectives: [
              "Track comprehensive fitness metrics",
              "Provide AI-powered coaching",
              "Build supportive community features",
            ],
            benefits: [
              "Personalized workout plans",
              "Real-time form correction",
              "Social challenges and motivation",
              "Health insights and analytics",
            ],
            features: [
              "Exercise recognition using ML",
              "Nutrition tracking and planning",
              "Social challenges and leaderboards",
              "Wearable device integration",
              "Offline workout capabilities",
            ],
            challenges:
              "Implementing accurate exercise recognition and ensuring data privacy while providing personalized insights",
            impact:
              "Helped 5000+ users achieve their fitness goals with 78% goal completion rate",
          },
        ],
      },
      {
        name: "Blender/3D Modeling",
        icon: Palette,
        description: "3D modeling and animation",
        image: "/projects/blender-preview.jpg",
        projects: [
          {
            id: "architectural-viz",
            title: "Architectural Visualization Suite",
            description:
              "Professional 3D architectural rendering and virtual tour creation",
            image: "/projects/architectural-viz.jpg",
            gallery: [
              "/projects/architectural-viz-1.jpg",
              "/projects/architectural-viz-2.jpg",
              "/projects/architectural-viz-3.jpg",
              "/projects/architectural-viz-4.jpg",
            ],
            video: "/projects/architectural-viz-demo.mp4",
            tech: ["Blender", "Cycles Renderer", "Python Scripting", "WebGL"],
            status: "Completed",
            date: "2023",
            objectives: [
              "Create photorealistic architectural renders",
              "Develop virtual tour experiences",
              "Streamline client presentation process",
            ],
            benefits: [
              "Photorealistic visualizations",
              "Interactive virtual tours",
              "Fast iteration capabilities",
              "Client presentation tools",
            ],
            features: [
              "Photorealistic lighting simulation",
              "Material library and customization",
              "VR-ready virtual tours",
              "Automated rendering pipeline",
              "Client collaboration tools",
            ],
            challenges:
              "Achieving photorealistic quality while maintaining reasonable render times for client iterations",
            impact:
              "Reduced client revision cycles by 50% and increased project approval rates by 35%",
          },
        ],
      },
      {
        name: "Game Development",
        icon: Gamepad2,
        description: "Interactive games and experiences",
        image: "/projects/game-preview.jpg",
        projects: [
          {
            id: "puzzle-adventure",
            title: "Mystical Puzzle Adventure",
            description:
              "2D puzzle-adventure game with hand-drawn art and immersive storytelling",
            image: "/projects/puzzle-adventure.jpg",
            gallery: [
              "/projects/puzzle-adventure-1.jpg",
              "/projects/puzzle-adventure-2.jpg",
              "/projects/puzzle-adventure-3.jpg",
            ],
            video: "/projects/puzzle-adventure-demo.mp4",
            tech: ["Unity", "C#", "Photoshop", "Audacity", "Git LFS"],
            status: "In Progress",
            date: "2024",
            objectives: [
              "Create engaging puzzle mechanics",
              "Develop compelling narrative",
              "Design beautiful hand-drawn art",
            ],
            benefits: [
              "Unique puzzle mechanics",
              "Rich storytelling experience",
              "Hand-crafted art style",
              "Multiple difficulty levels",
            ],
            features: [
              "Hand-drawn 2D animations",
              "Dynamic puzzle generation",
              "Branching storyline paths",
              "Original soundtrack",
              "Achievement system",
            ],
            challenges:
              "Balancing puzzle difficulty while maintaining story pacing and creating consistent art style",
            impact:
              "Currently in beta testing with 500+ testers providing feedback for final release",
          },
        ],
      },
      {
        name: "Machine Learning",
        icon: Brain,
        description: "AI and ML projects",
        image: "/projects/ml-preview.jpg",
        projects: [
          {
            id: "image-classifier",
            title: "Medical Image Classifier",
            description:
              "Deep learning model for automated medical image analysis and diagnosis assistance",
            image: "/projects/image-classifier.jpg",
            gallery: [
              "/projects/image-classifier-1.jpg",
              "/projects/image-classifier-2.jpg",
              "/projects/image-classifier-3.jpg",
            ],
            video: "/projects/image-classifier-demo.mp4",
            tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
            status: "Completed",
            date: "2024",
            objectives: [
              "Assist medical professionals in diagnosis",
              "Reduce analysis time and errors",
              "Improve healthcare accessibility",
            ],
            benefits: [
              "Fast and accurate analysis",
              "Reduced diagnostic errors",
              "Educational tool for students",
              "Standardized reporting",
            ],
            features: [
              "95% accuracy in classification",
              "Real-time image processing",
              "Detailed analysis reports",
              "Integration with hospital systems",
              "Privacy-compliant data handling",
            ],
            challenges:
              "Ensuring high accuracy while maintaining patient privacy and meeting medical regulatory standards",
            impact:
              "Deployed in 3 medical facilities, reducing diagnosis time by 40% with 95% accuracy rate",
          },
        ],
      },
      {
        name: "Virtual Reality",
        icon: Eye,
        description: "VR applications and experiences",
        image: "/projects/vr-preview.jpg",
        projects: [
          {
            id: "vr-training",
            title: "Industrial Safety VR Training",
            description:
              "Immersive VR training platform for industrial safety procedures and emergency response",
            image: "/projects/vr-training.jpg",
            gallery: [
              "/projects/vr-training-1.jpg",
              "/projects/vr-training-2.jpg",
              "/projects/vr-training-3.jpg",
            ],
            video: "/projects/vr-training-demo.mp4",
            tech: ["Unity", "C#", "SteamVR", "Oculus SDK", "Networking"],
            status: "Completed",
            date: "2023",
            objectives: [
              "Provide safe training environment",
              "Simulate dangerous scenarios",
              "Improve safety knowledge retention",
            ],
            benefits: [
              "Risk-free training environment",
              "Repeatable scenario practice",
              "Cost-effective training solution",
              "Measurable learning outcomes",
            ],
            features: [
              "Realistic industrial environments",
              "Interactive safety equipment",
              "Multi-user training sessions",
              "Performance analytics",
              "Emergency scenario simulations",
            ],
            challenges:
              "Creating realistic simulations while ensuring comfortable VR experience and accurate safety procedures",
            impact:
              "Improved safety training effectiveness by 70% and reduced workplace incidents by 25%",
          },
        ],
      },
      {
        name: "iOS Development",
        icon: Apple,
        description: "Native iOS applications",
        image: "/projects/ios-preview.jpg",
        projects: [
          {
            id: "meditation-app",
            title: "Mindful Moments",
            description:
              "Personalized meditation and mindfulness app with AI-curated content",
            image: "/projects/meditation-app.jpg",
            gallery: [
              "/projects/meditation-app-1.jpg",
              "/projects/meditation-app-2.jpg",
              "/projects/meditation-app-3.jpg",
            ],
            video: "/projects/meditation-app-demo.mp4",
            tech: ["Swift", "SwiftUI", "Core Data", "HealthKit", "CloudKit"],
            status: "Completed",
            date: "2024",
            objectives: [
              "Promote mental wellness",
              "Provide personalized meditation",
              "Track mindfulness progress",
            ],
            benefits: [
              "Personalized meditation sessions",
              "Mood and progress tracking",
              "Offline content availability",
              "Apple Watch integration",
            ],
            features: [
              "AI-curated meditation content",
              "Biometric feedback integration",
              "Social sharing and challenges",
              "Sleep story collections",
              "Breathing exercise guides",
            ],
            challenges:
              "Creating personalized experiences while maintaining simplicity and ensuring user privacy",
            impact:
              "Featured on App Store, 10,000+ downloads with 4.8 star rating and 85% daily active users",
          },
        ],
      },
    ],
  },
  {
    id: "arc",
    title: "ARC",
    subtitle: "Achievements, Research & Certifications",
    description:
      "Distinguished professional accomplishments, industry certifications, academic research, and recognition in technology and innovation",
    detailedDescription:
      "ARC chronicles the journey of professional excellence and continuous learning. This collection features industry-recognized certifications, groundbreaking research contributions, and prestigious awards that demonstrate commitment to innovation and expertise in emerging technologies.",
    highlights: [
      "Industry Certifications",
      "Research Publications",
      "Innovation Awards",
      "Academic Excellence",
    ],
    stats: {
      certificates: 12,
      research: 6,
      awards: 8,
      recognition: "Global",
    },
    color: "from-green-500 to-emerald-500",
    icon: Award,
    sections: [
      {
        name: "Certificates",
        icon: GraduationCap,
        description: "Professional certifications",
        image: "/projects/cert-preview.jpg",
        projects: [
          {
            id: "aws-solutions-architect",
            title: "AWS Solutions Architect Professional",
            description:
              "Advanced cloud architecture certification demonstrating expertise in AWS services",
            image: "/projects/aws-cert.jpg",
            gallery: [
              "/projects/aws-cert-1.jpg",
              "/projects/aws-cert-2.jpg",
              "/projects/aws-cert-3.jpg",
            ],
            tech: ["AWS", "Cloud Architecture", "DevOps", "Security"],
            status: "Completed",
            date: "2024",
            objectives: [
              "Master cloud architecture principles",
              "Design scalable AWS solutions",
              "Implement security best practices",
            ],
            benefits: [
              "Advanced cloud architecture skills",
              "Industry-recognized certification",
              "Enhanced career opportunities",
              "Deep AWS service knowledge",
            ],
            features: [
              "Comprehensive AWS service coverage",
              "Real-world architecture scenarios",
              "Security and compliance focus",
              "Cost optimization strategies",
              "High availability design patterns",
            ],
            challenges:
              "Mastering complex multi-service architectures and staying current with rapidly evolving AWS services",
            impact:
              "Led cloud migration projects saving companies 40% in infrastructure costs",
          },
        ],
      },
      {
        name: "Research Projects",
        icon: FileText,
        description: "Academic and professional research",
        image: "/projects/research-preview.jpg",
        projects: [
          {
            id: "nlp-research",
            title: "Multilingual NLP for Education",
            description:
              "Research on natural language processing applications in multilingual educational contexts",
            image: "/projects/nlp-research.jpg",
            gallery: [
              "/projects/nlp-research-1.jpg",
              "/projects/nlp-research-2.jpg",
              "/projects/nlp-research-3.jpg",
            ],
            video: "/projects/nlp-research-demo.mp4",
            tech: ["Python", "NLTK", "Transformers", "PyTorch", "Jupyter"],
            status: "Published",
            date: "2023",
            objectives: [
              "Improve multilingual text processing",
              "Enhance educational applications",
              "Advance NLP research field",
            ],
            benefits: [
              "Cross-language understanding",
              "Educational content analysis",
              "Automated assessment tools",
              "Language learning assistance",
            ],
            features: [
              "Multi-language text analysis",
              "Educational content classification",
              "Automated difficulty assessment",
              "Cross-cultural linguistic patterns",
              "Real-time translation assistance",
            ],
            challenges:
              "Handling linguistic diversity and cultural nuances while maintaining accuracy across different languages",
            impact:
              "Published in 2 peer-reviewed journals, cited by 50+ researchers, implemented in 5 educational platforms",
          },
        ],
      },
      {
        name: "Achievements",
        icon: Trophy,
        description: "Awards and recognitions",
        image: "/projects/awards-preview.jpg",
        projects: [
          {
            id: "innovation-award",
            title: "Best Innovation in EdTech 2024",
            description:
              "Recognition for outstanding contribution to educational technology development",
            image: "/projects/innovation-award.jpg",
            gallery: [
              "/projects/innovation-award-1.jpg",
              "/projects/innovation-award-2.jpg",
              "/projects/innovation-award-3.jpg",
            ],
            video: "/projects/innovation-award-ceremony.mp4",
            tech: ["Innovation", "EdTech", "Leadership", "Project Management"],
            status: "Achieved",
            date: "2024",
            objectives: [
              "Recognize innovative contributions",
              "Highlight impact in education",
              "Inspire future innovations",
            ],
            benefits: [
              "Industry recognition",
              "Professional credibility",
              "Network expansion",
              "Platform for future projects",
            ],
            features: [
              "Peer nomination and review",
              "Industry expert evaluation",
              "Public recognition ceremony",
              "Media coverage and interviews",
              "Speaking opportunities",
            ],
            challenges:
              "Competing against exceptional innovations while demonstrating measurable impact in education",
            impact:
              "Featured in 5 tech publications, invited to speak at 3 conferences, mentoring 10+ aspiring developers",
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "suggestion", // suggestion or criticism
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Navigation function
  const handleExploreClick = (categoryId: string) => {
    router.push(`/${categoryId}`);
  };
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFeedbackForm({ name: "", email: "", message: "", type: "suggestion" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const personalInfo = {
    name: "Alvin Ilham",
    title: "Technology Innovator & Multilingual Solutions Architect",
    description:
      "Pioneering the future of education through AI-powered language learning, immersive AR/VR experiences, and cutting-edge full-stack development",
    education: "Pendidikan Teknik Informatika, Universitas Negeri Padang",
    location: "Padang, Indonesia",
    github: "https://github.com/alvinilham",
    linkedin: "https://www.linkedin.com/in/alvinilham",
    whatsapp: "+6281996114027",
    email: "alvinilham.play@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Personal Information Section - Moved to top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              damping: 20,
            }}
            className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">
                      <stop
                        offset="0%"
                        style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#06b6d4", stopOpacity: 0.4 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 100 Q 100 20 180 100 Q 100 180 20 100"
                    fill="url(#gradient1)"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Main Title */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                type: "spring",
                damping: 15,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 relative z-10"
              style={{
                textShadow: "0 0 50px rgba(59, 130, 246, 0.3)",
                filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))",
              }}>
              Welcome to the Future
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 relative z-10 font-light tracking-wide">
              Where Innovation Meets Passion
            </motion.p>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -120],
                  x: [0, (i % 2 === 0 ? 60 : -60) + (Math.random() - 0.5) * 40],
                }}
                transition={{
                  duration: 4,
                  delay: 2 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 4 === 0
                    ? "bg-blue-400"
                    : i % 4 === 1
                    ? "bg-purple-400"
                    : i % 4 === 2
                    ? "bg-cyan-400"
                    : "bg-pink-400"
                }`}
                style={{
                  left: `${25 + i * 7}%`,
                  top: "60%",
                  boxShadow: `0 0 20px ${
                    i % 4 === 0
                      ? "#60a5fa"
                      : i % 4 === 1
                      ? "#a78bfa"
                      : i % 4 === 2
                      ? "#22d3ee"
                      : "#f472b6"
                  }`,
                }}
              />
            ))}

            {/* Additional Glow Effects */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <User className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-2xl font-bold text-white">
              About Me
            </motion.h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Profile Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-8">
                {/* Name and Title */}
                <div className="space-y-4">
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {personalInfo.name}
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="relative">
                    <p className="text-lg md:text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                      {personalInfo.title}
                    </p>
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 2 }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-slate-300 leading-relaxed text-base">
                  {personalInfo.description}
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="grid grid-cols-3 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400">3+</div>
                    <div className="text-sm text-slate-400">Years Exp</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400">50+</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400">
                      15+
                    </div>
                    <div className="text-sm text-slate-400">Technologies</div>
                  </motion.div>
                </motion.div>

                {/* Education & Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Education</p>
                      <p className="text-white text-sm font-medium">
                        {personalInfo.education}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white text-sm font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400 mb-4">Connect with me</p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-600/20 text-gray-300 hover:bg-gray-600/30 hover:text-white transition-all duration-200 border border-gray-600/30">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 hover:text-white transition-all duration-200 border border-blue-600/30">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/${personalInfo.whatsapp.replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600/20 text-green-300 hover:bg-green-600/30 hover:text-white transition-all duration-200 border border-green-600/30">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">WhatsApp</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 hover:text-white transition-all duration-200 border border-purple-600/30">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Futuristic Profile Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="relative flex justify-center lg:justify-end">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Rotating Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-80 h-80 rounded-full border border-blue-500/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-96 h-96 rounded-full border border-purple-500/20"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[26rem] h-[26rem] rounded-full border border-cyan-500/20"
                  />

                  {/* Glowing Orbs */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className={`absolute w-3 h-3 rounded-full ${
                        i % 3 === 0
                          ? "bg-blue-400"
                          : i % 3 === 1
                          ? "bg-purple-400"
                          : "bg-cyan-400"
                      }`}
                      style={{
                        left: `${
                          15 + Math.cos((i * 60 * Math.PI) / 180) * 140 + 50
                        }%`,
                        top: `${
                          15 + Math.sin((i * 60 * Math.PI) / 180) * 140 + 50
                        }%`,
                        boxShadow: `0 0 20px ${
                          i % 3 === 0
                            ? "#60a5fa"
                            : i % 3 === 1
                            ? "#a78bfa"
                            : "#22d3ee"
                        }`,
                      }}
                    />
                  ))}
                </div>

                {/* Profile Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10">
                  {/* Hexagonal Frame */}
                  <div className="relative w-80 h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl" />

                    {/* Main Photo Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group shadow-2xl">
                      {/* Animated border glow */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                      />

                      <Image
                        src="/profile/alvin2.jpg"
                        alt={personalInfo.name}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-500"
                        priority
                        sizes="(max-width: 768px) 80vw, 320px"
                      />

                      {/* Holographic Overlay */}
                      <motion.div
                        animate={{
                          opacity: [0, 0.3, 0],
                          x: [-100, 100],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12"
                      />

                      {/* Online Status - Removed */}

                      {/* Floating Tech Icons */}
                      {[Languages, Cpu, Brain, Eye].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20, -40],
                          }}
                          transition={{
                            duration: 4,
                            delay: 3 + i * 0.8,
                            repeat: Infinity,
                            repeatDelay: 8,
                          }}
                          className={`absolute ${
                            i === 0
                              ? "top-8 left-8"
                              : i === 1
                              ? "top-8 right-8"
                              : i === 2
                              ? "bottom-8 left-8"
                              : "bottom-8 right-8"
                          } p-2 rounded-lg bg-gradient-to-br ${
                            i === 0
                              ? "from-blue-500 to-cyan-500"
                              : i === 1
                              ? "from-purple-500 to-pink-500"
                              : i === 2
                              ? "from-green-500 to-emerald-500"
                              : "from-orange-500 to-red-500"
                          } shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Data Panels */}
                {[
                  {
                    label: "ALBI",
                    value: "9 Projects",
                    delay: 2.5,
                    position: "top-0 right-20",
                  },
                  {
                    label: "ALPHA",
                    value: "24 Projects",
                    delay: 3,
                    position: "top-20 right-0",
                  },
                  {
                    label: "ARC",
                    value: "26 Achievements",
                    delay: 3.5,
                    position: "bottom-20 right-0",
                  },
                ].map((panel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: panel.delay }}
                    className={`absolute ${panel.position} bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center shadow-lg`}>
                    <div className="text-sm font-bold text-white">
                      {panel.value}
                    </div>
                    <div className="text-xs text-slate-400">{panel.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group">
              <div
                className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )
                }>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                        selectedCategory === category.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-300 text-base mb-4 font-medium">
                    {category.subtitle}
                  </p>

                  {/* Main Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 text-sm font-semibold mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                          <span className="text-slate-400 text-xs">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-slate-300 text-sm font-semibold mb-3">
                      Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(category.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-slate-500 text-xs capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="space-y-3">
                    {/* Click to expand hint */}
                    <div className="text-center py-2">
                      <span className="text-slate-500 text-xs">
                        {selectedCategory === category.id
                          ? "Click to collapse"
                          : "Click to view sections"}
                      </span>
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExploreClick(category.id);
                      }}
                      className={`block w-full px-6 py-3 rounded-xl bg-gradient-to-r ${category.color} text-white font-semibold transition-all duration-300 hover:shadow-2xl shadow-xl cursor-pointer border-none relative overflow-hidden group`}>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="flex items-center justify-center space-x-2 relative z-10">
                        <span className="text-sm">
                          Explore {category.title}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Expanded Sections */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedCategory === category.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <div className="px-8 pb-8">
                    {/* Detailed Description when expanded */}
                    {selectedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="text-slate-300 text-sm font-semibold mb-2">
                          About {category.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {category.detailedDescription}
                        </p>
                      </motion.div>
                    )}

                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-slate-300 text-sm font-semibold mb-4">
                        Available Sections
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {category.sections.map((section, sectionIndex) => (
                          <motion.div
                            key={section.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: selectedCategory === category.id ? 1 : 0,
                              x: selectedCategory === category.id ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: sectionIndex * 0.1,
                            }}
                            className="group">
                            <div
                              className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30 group-hover:shadow-lg"
                              onClick={() => {
                                console.log(
                                  "Section clicked:",
                                  section.name,
                                  section.projects
                                );
                                if (
                                  section.projects &&
                                  section.projects.length > 0
                                ) {
                                  setSelectedProject(section.projects[0]);
                                }
                              }}>
                              {/* Left side - Section info */}
                              <div className="flex items-center space-x-4">
                                {/* Section Image/Icon */}
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                  {section.image ? (
                                    <Image
                                      src={section.image}
                                      alt={section.name}
                                      width={56}
                                      height={56}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <section.icon className="w-7 h-7 text-slate-300" />
                                  )}
                                </div>

                                {/* Section Details */}
                                <div className="flex-1">
                                  <h4 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                                    {section.name}
                                  </h4>
                                  <p className="text-slate-400 text-sm mt-1 line-clamp-2">
                                    {section.description}
                                  </p>
                                  {section.projects && (
                                    <div className="flex items-center space-x-2 mt-2">
                                      <div
                                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                      />
                                      <span className="text-slate-500 text-xs">
                                        {section.projects.length} project
                                        {section.projects.length !== 1
                                          ? "s"
                                          : ""}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Right side - Action hint */}
                              <div className="flex items-center space-x-2 text-slate-500 group-hover:text-slate-300 transition-colors duration-200">
                                <span className="text-xs">
                                  Click to explore
                                </span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feedback Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-slate-800/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Feedback & Suggestions
                </h3>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <p className="text-slate-300 mb-6 text-center">
                  Your feedback helps me improve! Please share your thoughts,
                  suggestions, or constructive criticism.
                </p>

                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={feedbackForm.name}
                        onChange={(e) =>
                          setFeedbackForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={feedbackForm.email}
                        onChange={(e) =>
                          setFeedbackForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Type of Feedback
                    </label>
                    <select
                      value={feedbackForm.type}
                      onChange={(e) =>
                        setFeedbackForm((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                      <option value="suggestion" className="bg-slate-800">
                        Suggestion
                      </option>
                      <option value="criticism" className="bg-slate-800">
                        Constructive Criticism
                      </option>
                      <option value="general" className="bg-slate-800">
                        General Feedback
                      </option>
                      <option value="collaboration" className="bg-slate-800">
                        Collaboration Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={feedbackForm.message}
                      onChange={(e) =>
                        setFeedbackForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                      placeholder="Share your thoughts, suggestions, or feedback..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Feedback</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-center">
                      <p className="font-medium">
                        Thank you for your feedback!
                      </p>
                      <p className="text-sm mt-1">
                        Your message has been sent successfully.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors duration-200">
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-300 text-lg mb-4">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">
                      {selectedProject.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        selectedProject.status === "Completed"
                          ? "bg-green-400"
                          : selectedProject.status === "In Progress"
                          ? "bg-yellow-400"
                          : "bg-blue-400"
                      }`}
                    />
                    <span className="text-slate-300">
                      {selectedProject.status}
                    </span>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech?.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Media Section */}
              <div className="mb-8">
                {/* Video */}
                {selectedProject.video && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Play className="w-5 h-5 text-red-400" />
                      <span>Project Demo</span>
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 border border-white/10">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        poster={selectedProject.image}>
                        <source src={selectedProject.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map(
                          (image: string, index: number) => (
                            <div
                              key={index}
                              className="aspect-video rounded-lg overflow-hidden bg-slate-800 border border-white/10">
                              <Image
                                src={image}
                                alt={`${selectedProject.title} gallery ${
                                  index + 1
                                }`}
                                width={400}
                                height={225}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Objectives */}
                {selectedProject.objectives && (
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-green-400" />
                      <span>Objectives</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.objectives.map(
                        (objective: string, index: number) => (
                          <li
                            key={index}
                            className="text-slate-300 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {selectedProject.benefits && (
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span>Benefits</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.benefits.map(
                        (benefit: string, index: number) => (
                          <li
                            key={index}
                            className="text-slate-300 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Features */}
              {selectedProject.features && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <span>Key Features</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map(
                      (feature: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Challenges & Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-red-400" />
                      <span>Challenges</span>
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {/* Impact */}
                {selectedProject.impact && (
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span>Impact</span>
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
                {selectedProject.demoUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                )}

                {selectedProject.sourceUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-600/20 text-gray-300 border border-gray-600/30 hover:bg-gray-600/30 hover:text-white transition-all duration-200">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-slate-800/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Languages className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Cpu className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Award className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
