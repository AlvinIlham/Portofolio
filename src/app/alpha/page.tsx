"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Eye,
  Code,
  Smartphone,
  Palette,
  Gamepad2,
  Brain,
  Apple,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import Link from "next/link";

const techCategories = [
  {
    id: "ar",
    name: "Augmented Reality",
    description: "Immersive AR experiences and applications",
    icon: Eye,
    color: "from-cyan-500 to-blue-500",
    projects: [
      {
        title: "AR Shopping Assistant",
        description: "Virtual try-on and product visualization for e-commerce",
        tech: ["Unity", "ARCore", "C#", "Android"],
        status: "Completed",
        stars: 124,
      },
      {
        title: "Educational AR Museum",
        description: "Interactive museum exhibits with AR storytelling",
        tech: ["ARKit", "Swift", "iOS", "3D Modeling"],
        status: "In Progress",
        stars: 87,
      },
    ],
  },
  {
    id: "web",
    name: "Website Development",
    description: "Modern web applications and platforms",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    projects: [
      {
        title: "E-learning Platform",
        description:
          "Full-stack learning management system with real-time features",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        status: "Completed",
        stars: 256,
      },
      {
        title: "Real Estate Portal",
        description:
          "Property listing and management platform with advanced search",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        status: "Completed",
        stars: 189,
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics and management tool for multiple social platforms",
        tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
        status: "In Progress",
        stars: 145,
      },
    ],
  },
  {
    id: "android",
    name: "Android Development",
    description: "Native Android applications and services",
    icon: Smartphone,
    color: "from-green-600 to-lime-500",
    projects: [
      {
        title: "Fitness Tracker Pro",
        description: "Comprehensive health and fitness monitoring application",
        tech: ["Kotlin", "Room", "Coroutines", "MVVM"],
        status: "Completed",
        stars: 342,
      },
      {
        title: "Language Exchange App",
        description:
          "Connect language learners worldwide for practice sessions",
        tech: ["Java", "Firebase", "WebRTC", "Material Design"],
        status: "Completed",
        stars: 198,
      },
    ],
  },
  {
    id: "blender",
    name: "Blender/3D Modeling",
    description: "3D models, animations, and visual effects",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    projects: [
      {
        title: "Architectural Visualizations",
        description: "Photorealistic building and interior design renders",
        tech: ["Blender", "Cycles", "Substance Painter", "Photoshop"],
        status: "Ongoing",
        stars: 276,
      },
      {
        title: "Character Animation Suite",
        description: "Rigged characters and animation sequences for games",
        tech: ["Blender", "Rigify", "Animation Nodes", "Unity"],
        status: "Completed",
        stars: 167,
      },
    ],
  },
  {
    id: "games",
    name: "Game Development",
    description: "Interactive games and gaming experiences",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-500",
    projects: [
      {
        title: "Space Explorer VR",
        description: "Virtual reality space exploration and puzzle game",
        tech: ["Unity", "C#", "Oculus SDK", "Blender"],
        status: "Completed",
        stars: 423,
      },
      {
        title: "Educational Math Game",
        description: "Gamified mathematics learning for children",
        tech: ["Godot", "GDScript", "2D Animation", "Audio"],
        status: "Completed",
        stars: 234,
      },
      {
        title: "Multiplayer Strategy Game",
        description: "Real-time strategy game with online multiplayer",
        tech: ["Unreal Engine", "C++", "Networking", "AI"],
        status: "In Progress",
        stars: 156,
      },
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "AI models and intelligent applications",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    projects: [
      {
        title: "Image Recognition API",
        description: "Real-time object detection and classification service",
        tech: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
        status: "Completed",
        stars: 378,
      },
      {
        title: "Natural Language Processor",
        description: "Multilingual text analysis and sentiment detection",
        tech: ["PyTorch", "Transformers", "BERT", "spaCy"],
        status: "Completed",
        stars: 291,
      },
      {
        title: "Recommendation Engine",
        description: "Personalized content recommendation system",
        tech: ["Scikit-learn", "Pandas", "NumPy", "Redis"],
        status: "In Progress",
        stars: 198,
      },
    ],
  },
  {
    id: "vr",
    name: "Virtual Reality",
    description: "Immersive VR experiences and applications",
    icon: Eye,
    color: "from-pink-500 to-rose-500",
    projects: [
      {
        title: "Virtual Training Simulator",
        description: "Professional training scenarios in virtual environments",
        tech: ["Unity", "XR Toolkit", "C#", "Oculus"],
        status: "Completed",
        stars: 267,
      },
      {
        title: "VR Art Gallery",
        description: "Virtual exhibition space for digital and traditional art",
        tech: ["Unreal Engine", "Blueprint", "VR Template", "Modeling"],
        status: "In Progress",
        stars: 145,
      },
    ],
  },
  {
    id: "ios",
    name: "iOS Development",
    description: "Native iOS applications and experiences",
    icon: Apple,
    color: "from-blue-500 to-indigo-500",
    projects: [
      {
        title: "Personal Finance Manager",
        description: "Comprehensive budgeting and expense tracking app",
        tech: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
        status: "Completed",
        stars: 356,
      },
      {
        title: "Meditation & Mindfulness",
        description: "Guided meditation sessions with progress tracking",
        tech: ["Swift", "AVFoundation", "HealthKit", "StoreKit"],
        status: "Completed",
        stars: 289,
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "In Progress":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "Ongoing":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function AlphaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">ALPHA</h1>
                <p className="text-slate-300 text-sm">Technology Projects</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Innovation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge projects spanning AR/VR, web development, mobile apps,
            3D modeling, game development, and machine learning. Innovation
            meets practical application.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-slate-300">{category.description}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + projectIndex * 0.1,
                    }}
                    className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="p-6 h-full flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-semibold text-white">
                              {project.title}
                            </h4>
                            <div className="flex items-center space-x-1 text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm">{project.stars}</span>
                            </div>
                          </div>
                          <p className="text-slate-300 text-sm mb-4">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-md bg-white/10 text-slate-300 text-xs border border-white/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Meta */}
                        <div className="border-t border-white/10 pt-4 mt-4">
                          <div className="flex items-center justify-between">
                            <span
                              className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                                project.status
                              )}`}>
                              {project.status}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Github className="w-4 h-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                              <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technology Stack Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-slate-300">Tech Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-slate-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                2.5K+
              </div>
              <div className="text-slate-300">GitHub Stars</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
