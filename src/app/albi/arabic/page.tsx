"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Globe, X, ExternalLink, Type } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

const arabicProjects: Project[] = [
  {
    id: "arabic-alphabet",
    title: "Interactive Arabic Alphabet",
    description:
      "Comprehensive Arabic alphabet learning platform with interactive writing practice and pronunciation guide.",
    longDescription:
      "An immersive Arabic alphabet learning experience that guides students through the complexities of Arabic script. Features interactive letter tracing, pronunciation guides, and contextual examples to help learners master the fundamentals of Arabic reading and writing.",
    technologies: [
      "React",
      "TypeScript",
      "Canvas API",
      "Web Audio API",
      "Firebase",
      "Tailwind CSS",
    ],
    features: [
      "Interactive letter tracing with real-time feedback",
      "Audio pronunciation guides for each letter",
      "Contextual letter forms (isolated, initial, medial, final)",
      "Progressive difficulty levels",
      "Cultural context integration",
      "Progress tracking and achievements",
    ],
    image: "/projects/arabic-alphabet.jpg",
    gallery: [
      "/projects/arabic-alphabet-1.jpg",
      "/projects/arabic-alphabet-2.jpg",
      "/projects/arabic-alphabet-3.jpg",
    ],
    demoUrl: "https://arabic-alphabet-demo.com",
    githubUrl: "https://github.com/example/arabic-alphabet",
    category: "Educational",
  },
  {
    id: "quran-memorization",
    title: "Quran Memorization Assistant",
    description:
      "AI-powered Quran memorization tool with spaced repetition and progress tracking.",
    longDescription:
      "Advanced memorization platform specifically designed for Quran learning. Utilizes spaced repetition algorithms, audio recitation, and progress tracking to help users effectively memorize Quranic verses with proper tajweed and pronunciation.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Machine Learning",
      "Web Audio API",
      "PWA",
    ],
    features: [
      "Spaced repetition memorization system",
      "Audio recitation with multiple qaris",
      "Tajweed visualization and correction",
      "Progress tracking and analytics",
      "Offline functionality",
      "Community features and competitions",
    ],
    image: "/projects/quran-memorization.jpg",
    gallery: [
      "/projects/quran-memorization-1.jpg",
      "/projects/quran-memorization-2.jpg",
      "/projects/quran-memorization-3.jpg",
    ],
    demoUrl: "https://quran-memory-demo.com",
    githubUrl: "https://github.com/example/quran-memorization",
    category: "Religious Education",
  },
  {
    id: "arabic-conversation",
    title: "Arabic Conversation Practice",
    description:
      "AI chatbot for practicing Arabic conversation with dialect support and cultural context.",
    longDescription:
      "Intelligent conversation partner for Arabic language learners. Supports multiple Arabic dialects, provides cultural context, and adapts to learner's proficiency level for effective conversation practice.",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT",
      "Speech Recognition",
      "React Native",
      "WebRTC",
    ],
    features: [
      "Multi-dialect Arabic conversation support",
      "Real-time speech recognition and synthesis",
      "Cultural context awareness",
      "Adaptive difficulty adjustment",
      "Conversation topics and scenarios",
      "Pronunciation feedback and correction",
    ],
    image: "/projects/arabic-conversation.jpg",
    gallery: [
      "/projects/arabic-conversation-1.jpg",
      "/projects/arabic-conversation-2.jpg",
      "/projects/arabic-conversation-3.jpg",
    ],
    demoUrl: "https://arabic-chat-demo.com",
    githubUrl: "https://github.com/example/arabic-conversation",
    category: "Conversational AI",
  },
];

export default function ArabicProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/albi"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to ALBI</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <Type className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Arabic Language
                </h1>
                <p className="text-slate-300 text-sm">
                  Arabic Learning Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arabicProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-800 border-b border-orange-500/20 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-orange-400">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {selectedProject.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  About This Project
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/albi/arabic/projects/${selectedProject.id}`}
                  className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>Lihat Detail Lengkap</span>
                </Link>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
