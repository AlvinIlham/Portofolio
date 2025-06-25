"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Globe, BookOpen, Star, Clock } from "lucide-react";
import Link from "next/link";

const languageProjects = [
  {
    id: "english",
    name: "English Language",
    description: "Comprehensive English learning and teaching projects",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
    projects: [
      {
        title: "Interactive Grammar Tutor",
        description:
          "AI-powered grammar learning platform with real-time feedback",
        tags: ["Interactive", "AI-Powered", "Grammar"],
        level: "Intermediate",
        duration: "3 months",
      },
      {
        title: "English Conversation Simulator",
        description:
          "Virtual conversation practice with native speaker simulation",
        tags: ["Speaking", "Simulation", "Practice"],
        level: "Advanced",
        duration: "6 months",
      },
      {
        title: "Business English Toolkit",
        description: "Professional English communication skills development",
        tags: ["Business", "Professional", "Communication"],
        level: "Advanced",
        duration: "4 months",
      },
    ],
  },
  {
    id: "arabic",
    name: "Arabic Language",
    description: "Arabic language learning resources and cultural immersion",
    icon: Globe,
    color: "from-green-500 to-green-600",
    projects: [
      {
        title: "Arabic Script Mastery",
        description:
          "Interactive Arabic alphabet and calligraphy learning system",
        tags: ["Writing", "Calligraphy", "Alphabet"],
        level: "Beginner",
        duration: "2 months",
      },
      {
        title: "Modern Standard Arabic Course",
        description: "Comprehensive MSA learning with cultural context",
        tags: ["MSA", "Culture", "Reading"],
        level: "Intermediate",
        duration: "8 months",
      },
      {
        title: "Arabic Poetry Explorer",
        description:
          "Classical and modern Arabic poetry analysis and appreciation",
        tags: ["Poetry", "Literature", "Culture"],
        level: "Advanced",
        duration: "5 months",
      },
    ],
  },
  {
    id: "korean",
    name: "Korean Language",
    description: "Korean language study materials and K-culture integration",
    icon: Globe,
    color: "from-purple-500 to-purple-600",
    projects: [
      {
        title: "Hangul Learning Game",
        description:
          "Gamified Korean alphabet learning with interactive exercises",
        tags: ["Hangul", "Game", "Interactive"],
        level: "Beginner",
        duration: "1 month",
      },
      {
        title: "K-Drama Language Lab",
        description:
          "Learn Korean through popular K-dramas and cultural content",
        tags: ["K-Drama", "Culture", "Listening"],
        level: "Intermediate",
        duration: "6 months",
      },
      {
        title: "Korean Business Etiquette",
        description: "Professional Korean language and business culture guide",
        tags: ["Business", "Etiquette", "Professional"],
        level: "Advanced",
        duration: "4 months",
      },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "Advanced":
      return "bg-red-500/20 text-red-300 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function AlbiPage() {
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
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">ALBI</h1>
                <p className="text-slate-300 text-sm">
                  Language Learning Projects
                </p>
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
            Language Learning Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore comprehensive language learning projects across English,
            Arabic, and Korean. Each project combines modern pedagogy with
            interactive technology.
          </p>
        </motion.div>

        {/* Language Projects */}
        <div className="space-y-16">
          {languageProjects.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative">
              {/* Language Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${language.color}`}>
                  <language.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language.name}
                  </h3>
                  <p className="text-slate-300">{language.description}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {language.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + projectIndex * 0.1,
                    }}
                    className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="p-6 h-full flex flex-col">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {project.title}
                          </h4>
                          <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 rounded-md bg-white/10 text-slate-300 text-xs border border-white/20">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Meta */}
                        <div className="border-t border-white/10 pt-4 mt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-slate-400" />
                              <span
                                className={`px-2 py-1 rounded-md text-xs border ${getLevelColor(
                                  project.level
                                )}`}>
                                {project.level}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-400">
                              <Clock className="w-4 h-4" />
                              <span className="text-xs">
                                {project.duration}
                              </span>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Project Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-slate-300">Languages Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">9</div>
              <div className="text-slate-300">Learning Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-slate-300">Months of Development</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
