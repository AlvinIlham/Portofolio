"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Globe,
  X,
  ExternalLink,
  BookOpen,
} from "lucide-react";
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

const englishProjects: Project[] = [
  {
    id: "grammar-tutor",
    title: "AI Grammar Tutor",
    description:
      "Intelligent grammar correction and learning system with personalized feedback and adaptive learning paths.",
    longDescription:
      "An advanced AI-powered grammar tutor that provides real-time corrections, explanations, and personalized learning paths. Uses natural language processing to understand context and provide meaningful feedback to improve English writing skills.",
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "Node.js",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "Real-time grammar correction",
      "Contextual explanations and suggestions",
      "Personalized learning paths",
      "Progress tracking and analytics",
      "Writing style analysis",
      "Interactive grammar exercises",
    ],
    image: "/projects/grammar-tutor.jpg",
    gallery: [
      "/projects/grammar-tutor-1.jpg",
      "/projects/grammar-tutor-2.jpg",
      "/projects/grammar-tutor-3.jpg",
    ],
    demoUrl: "https://grammar-tutor-demo.com",
    githubUrl: "https://github.com/example/grammar-tutor",
    category: "Educational AI",
  },
  {
    id: "pronunciation-coach",
    title: "Pronunciation Coach",
    description:
      "AI-powered pronunciation training with speech recognition and real-time feedback for accent improvement.",
    longDescription:
      "Comprehensive pronunciation training platform that uses advanced speech recognition to analyze pronunciation accuracy and provide detailed feedback. Helps learners improve their English accent and speaking confidence.",
    technologies: [
      "React Native",
      "Speech Recognition API",
      "Machine Learning",
      "WebRTC",
      "Firebase",
      "Python",
    ],
    features: [
      "Real-time pronunciation analysis",
      "Accent training and correction",
      "Interactive speaking exercises",
      "Progress visualization",
      "Multiple accent targets",
      "Phonetic transcription tools",
    ],
    image: "/projects/pronunciation-coach.jpg",
    gallery: [
      "/projects/pronunciation-coach-1.jpg",
      "/projects/pronunciation-coach-2.jpg",
      "/projects/pronunciation-coach-3.jpg",
    ],
    demoUrl: "https://pronunciation-coach-demo.com",
    githubUrl: "https://github.com/example/pronunciation-coach",
    category: "Speech Technology",
  },
  {
    id: "vocabulary-builder",
    title: "Vocabulary Builder Pro",
    description:
      "Adaptive vocabulary learning platform with spaced repetition and contextual learning techniques.",
    longDescription:
      "Advanced vocabulary building platform that uses spaced repetition algorithms and contextual learning to help users expand their English vocabulary effectively. Features personalized word lists and intelligent review scheduling.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "PWA", "Chart.js"],
    features: [
      "Spaced repetition algorithm",
      "Contextual word learning",
      "Personalized word lists",
      "Etymology and word origins",
      "Usage examples and sentences",
      "Progress tracking and statistics",
    ],
    image: "/projects/vocabulary-builder.jpg",
    gallery: [
      "/projects/vocabulary-builder-1.jpg",
      "/projects/vocabulary-builder-2.jpg",
      "/projects/vocabulary-builder-3.jpg",
    ],
    demoUrl: "https://vocab-builder-demo.com",
    githubUrl: "https://github.com/example/vocabulary-builder",
    category: "Learning Platform",
  },
];

export default function EnglishProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent pointer-events-none"></div>

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
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-blue-500">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  English Language
                </h1>
                <p className="text-slate-300 text-sm">
                  English Learning Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {englishProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-500/20 overflow-hidden hover:border-green-500/40 transition-all duration-300 cursor-pointer group"
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
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">
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
                      className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
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
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-green-500/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-800 border-b border-green-500/20 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-green-400">
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
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
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
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/albi/english/projects/${selectedProject.id}`}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
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
