"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Languages,
  BookOpen,
  Type,
  Music,
  Users,
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  Star,
  Play,
} from "lucide-react";
import Link from "next/link";

const languages = [
  {
    id: "english",
    name: "English Language",
    description:
      "Master English with AI-powered grammar, pronunciation, and writing tools",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    stats: { learners: "15K+", completion: "94%", rating: "4.9" },
    projects: 3,
    path: "/albi/english",
  },
  {
    id: "arabic",
    name: "Arabic Language",
    description:
      "Learn Arabic script, Quran studies, and conversation with cultural context",
    icon: Type,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    stats: { learners: "8K+", completion: "89%", rating: "4.8" },
    projects: 3,
    path: "/albi/arabic",
  },
  {
    id: "korean",
    name: "Korean Language",
    description:
      "Discover Korean through K-Pop culture, Hangul mastery, and modern methods",
    icon: Music,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    stats: { learners: "12K+", completion: "91%", rating: "4.9" },
    projects: 3,
    path: "/albi/korean",
  },
];

const achievements = [
  { label: "Total Learners", value: "35K+", icon: Users },
  { label: "Avg Completion", value: "91%", icon: TrendingUp },
  { label: "Languages", value: "3", icon: Globe },
  { label: "Certificates", value: "2.8K+", icon: Award },
];

export default function ALBIPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                <Languages className="w-6 h-6 text-white" />
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Language Learning Innovation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive multilingual education platform featuring cutting-edge
            AI technology for English, Arabic, and Korean language learning with
            cultural integration and personalized learning paths.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Language Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => {
            const Icon = language.icon;
            return (
              <motion.div
                key={language.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                onHoverStart={() => setHoveredCard(language.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative">
                <Link href={language.path}>
                  <div
                    className={`relative h-full ${language.bgColor} backdrop-blur-sm border ${language.borderColor} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10`}>
                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${language.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                        {language.name}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {language.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {language.stats.learners}
                        </div>
                        <div className="text-xs text-slate-400">Learners</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {language.stats.completion}
                        </div>
                        <div className="text-xs text-slate-400">Complete</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-lg font-bold text-white">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {language.stats.rating}
                        </div>
                        <div className="text-xs text-slate-400">Rating</div>
                      </div>
                    </div>

                    {/* Projects Count */}
                    <div className="relative z-10 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">
                          {language.projects} Learning Projects
                        </span>
                        <span className="text-cyan-400 font-medium">
                          Interactive
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">
                        Explore Projects
                      </span>
                      <ArrowRight
                        className={`w-5 h-5 text-cyan-400 transform transition-transform duration-300 ${
                          hoveredCard === language.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>

                    {/* Hover Play Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: hoveredCard === language.id ? 1 : 0,
                        scale: hoveredCard === language.id ? 1 : 0.5,
                      }}
                      className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <Play className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>Powered by advanced AI and machine learning</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
