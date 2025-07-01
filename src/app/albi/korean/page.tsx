"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Globe, X, ExternalLink, Music } from "lucide-react";
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

const koreanProjects: Project[] = [
  {
    id: "hangul-master",
    title: "Hangul Master",
    description:
      "Interactive Hangul learning platform with stroke order practice and pronunciation training.",
    longDescription:
      "Comprehensive Hangul learning experience that teaches Korean alphabet through interactive stroke order practice, pronunciation guides, and cultural context. Perfect for beginners starting their Korean language journey.",
    technologies: [
      "React",
      "TypeScript",
      "Canvas API",
      "Web Audio API",
      "Firebase",
      "Tailwind CSS",
    ],
    features: [
      "Interactive Hangul stroke order practice",
      "Audio pronunciation for each character",
      "Character combination exercises",
      "Progress tracking and achievements",
      "Cultural context integration",
      "Gamified learning experience",
    ],
    image: "/projects/hangul-master.jpg",
    gallery: [
      "/projects/hangul-master-1.jpg",
      "/projects/hangul-master-2.jpg",
      "/projects/hangul-master-3.jpg",
    ],
    demoUrl: "https://hangul-master-demo.com",
    githubUrl: "https://github.com/example/hangul-master",
    category: "Alphabet Learning",
  },
  {
    id: "kpop-korean",
    title: "K-Pop Korean Learner",
    description:
      "Learn Korean through K-Pop lyrics with vocabulary building and cultural insights.",
    longDescription:
      "Innovative Korean learning platform that uses K-Pop songs and lyrics to teach vocabulary, grammar, and cultural expressions. Makes learning Korean fun and engaging through popular music.",
    technologies: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Spotify API",
      "YouTube API",
      "Machine Learning",
    ],
    features: [
      "Lyric-based vocabulary learning",
      "K-Pop song integration",
      "Cultural context explanations",
      "Interactive karaoke mode",
      "Artist and song recommendations",
      "Community features and discussions",
    ],
    image: "/projects/kpop-korean.jpg",
    gallery: [
      "/projects/kpop-korean-1.jpg",
      "/projects/kpop-korean-2.jpg",
      "/projects/kpop-korean-3.jpg",
    ],
    demoUrl: "https://kpop-korean-demo.com",
    githubUrl: "https://github.com/example/kpop-korean",
    category: "Cultural Learning",
  },
  {
    id: "korean-conversation",
    title: "Korean Conversation AI",
    description:
      "AI-powered Korean conversation practice with honorific system training and cultural etiquette.",
    longDescription:
      "Advanced AI conversation partner specifically designed for Korean language learners. Focuses on the complex honorific system, cultural etiquette, and real-world conversation scenarios.",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT",
      "Korean NLP",
      "React Native",
      "Speech Recognition",
    ],
    features: [
      "Honorific system practice",
      "Cultural etiquette training",
      "Real-world conversation scenarios",
      "Formal and informal speech practice",
      "Pronunciation feedback",
      "Context-aware responses",
    ],
    image: "/projects/korean-conversation.jpg",
    gallery: [
      "/projects/korean-conversation-1.jpg",
      "/projects/korean-conversation-2.jpg",
      "/projects/korean-conversation-3.jpg",
    ],
    demoUrl: "https://korean-ai-demo.com",
    githubUrl: "https://github.com/example/korean-conversation",
    category: "Conversational AI",
  },
];

export default function KoreanProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none"></div>

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
              <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Korean Language
                </h1>
                <p className="text-slate-300 text-sm">
                  Korean Learning Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {koreanProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-pink-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-300 cursor-pointer group"
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
                  <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs">
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
                      className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
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
            className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-800 border-b border-pink-500/20 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-pink-400">
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
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
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
                      <div className="w-2 h-2 bg-pink-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/albi/korean/projects/${selectedProject.id}`}
                  className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
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
