"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  Calendar,
  ExternalLink,
  Download,
  MapPin,
  Award,
  Medal,
  Crown,
  Target,
  X,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface AchievementItem {
  title: string;
  organization: string;
  category: string;
  date: string;
  description: string;
  impact: string;
  location?: string;
  media?: string[];
  type: "innovation" | "research" | "community" | "competition";
}

const achievements: AchievementItem[] = [
  {
    title: "Best Innovation Award 2024",
    organization: "Tech Innovation Summit",
    category: "Educational Technology",
    date: "2024",
    description:
      "Recognized for outstanding innovation in educational technology solutions, specifically for developing AI-powered language learning platforms that adapt to individual learning styles and cultural contexts.",
    impact:
      "Platform adopted by 15,000+ learners globally with 87% completion rate",
    location: "San Francisco, CA",
    media: ["https://picsum.photos/800/600?random=1"],
    type: "innovation",
  },
  {
    title: "Outstanding Researcher Award",
    organization: "University Research Council",
    category: "Computer Science",
    date: "2023",
    description:
      "Awarded for exceptional research contributions in machine learning applications for education, with particular recognition for interdisciplinary collaboration and practical impact.",
    impact:
      "Research cited 86+ times, influencing educational technology development",
    location: "University Campus",
    media: ["https://picsum.photos/800/600?random=2"],
    type: "research",
  },
  {
    title: "Open Source Contributor of the Year",
    organization: "Developer Community Hub",
    category: "Open Source",
    date: "2023",
    description:
      "Recognized for significant contributions to open source educational projects, including major commits to language learning frameworks and development tools.",
    impact: "Contributions used by 5,000+ developers, 50+ merged pull requests",
    location: "Virtual Ceremony",
    media: ["https://picsum.photos/800/600?random=3"],
    type: "community",
  },
  {
    title: "Hackathon Winner - EdTech Challenge",
    organization: "Global EdTech Hackathon",
    category: "Educational Solutions",
    date: "2024",
    description:
      "First place winner for innovative language learning platform prototype that integrates AR/VR technology with AI-powered personalization for immersive cultural learning experiences.",
    impact: "Prototype secured $50K funding for further development",
    location: "London, UK",
    media: ["https://picsum.photos/800/600?random=4"],
    type: "competition",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "innovation":
      return Crown;
    case "research":
      return Award;
    case "community":
      return Medal;
    case "competition":
      return Trophy;
    default:
      return Trophy;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "innovation":
      return "from-yellow-500 to-orange-500";
    case "research":
      return "from-blue-500 to-indigo-500";
    case "community":
      return "from-green-500 to-emerald-500";
    case "competition":
      return "from-purple-500 to-pink-500";
    default:
      return "from-yellow-500 to-orange-500";
  }
};

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementItem | null>(null);

  const stats = [
    { label: "Total Awards", value: "4", color: "text-yellow-400" },
    { label: "Global Recognition", value: "3", color: "text-purple-400" },
    { label: "Community Impact", value: "20K+", color: "text-green-400" },
    { label: "Funding Secured", value: "$50K", color: "text-blue-400" },
  ];

  const openAchievementModal = (achievement: AchievementItem) => {
    setSelectedAchievement(achievement);
  };

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
  };

  const groupedAchievements = {
    innovation: achievements.filter((a) => a.type === "innovation"),
    research: achievements.filter((a) => a.type === "research"),
    community: achievements.filter((a) => a.type === "community"),
    competition: achievements.filter((a) => a.type === "competition"),
  };

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
              href="/arc"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to ARC</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Awards & Recognition
                </h1>
                <p className="text-slate-300 text-sm">
                  Notable achievements & honors
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
            Recognition & Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Awards and recognitions highlighting exceptional contributions to
            technology innovation, open source community, and educational
            advancement, representing peer recognition and validation of
            impactful work.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex flex-col items-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Categories */}
        <div className="space-y-16">
          {Object.entries(groupedAchievements).map(
            ([type, typeAchievements], categoryIndex) => {
              if (typeAchievements.length === 0) return null;

              const TypeIcon = getTypeIcon(type);
              const typeColor = getTypeColor(type);

              return (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="mb-16">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${typeColor}`}>
                      <TypeIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white capitalize">
                        {type} Awards
                      </h3>
                      <p className="text-slate-300">
                        {typeAchievements.length} recognition
                        {typeAchievements.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Achievements Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {typeAchievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                        onClick={() => openAchievementModal(achievement)}
                        className="group relative cursor-pointer">
                        <div className="relative h-full bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/20">
                          {/* Achievement Image */}
                          <div className="relative mb-6 overflow-hidden rounded-2xl">
                            <Image
                              src={
                                achievement.media?.[0] ||
                                `https://picsum.photos/400/300?random=${
                                  index + 300
                                }`
                              }
                              alt={`${achievement.title} achievement`}
                              width={400}
                              height={192}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://picsum.photos/400/300?random=${
                                  index + 350
                                }`;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3 p-2 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                              <TypeIcon className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <ZoomIn className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10 space-y-4">
                            {/* Title & Organization */}
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                                {achievement.title}
                              </h3>
                              <p className="text-slate-300 font-medium text-sm">
                                {achievement.organization}
                              </p>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-slate-400">
                                <Calendar className="w-4 h-4" />
                                <span>{achievement.date}</span>
                              </div>
                              <div className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                                {achievement.type.charAt(0).toUpperCase() +
                                  achievement.type.slice(1)}
                              </div>
                            </div>

                            {/* Category & Location */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="text-green-400 font-medium">
                                {achievement.category}
                              </div>
                              {achievement.location && (
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <MapPin className="w-4 h-4" />
                                  <span>{achievement.location}</span>
                                </div>
                              )}
                            </div>

                            {/* Impact Highlight */}
                            <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                              <div className="flex items-center space-x-2 mb-1">
                                <Target className="w-3 h-3 text-green-400" />
                                <span className="text-xs font-medium text-green-400">
                                  Impact
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 line-clamp-2">
                                {achievement.impact}
                              </p>
                            </div>

                            {/* Action Indicator */}
                            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                              <span className="text-sm text-slate-400">
                                Click to view details
                              </span>
                              <div className="p-1.5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                                <ExternalLink className="w-3 h-3 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Background Gradient Effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${typeColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Recognition Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-lg font-semibold text-yellow-400 mb-2">
                Current Focus
              </div>
              <p className="text-slate-300 text-sm">
                Innovation in educational technology and sustainable impact on
                global learning
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-lg font-semibold text-green-400 mb-2">
                Future Goals
              </div>
              <p className="text-slate-300 text-sm">
                Establish annual innovation showcase and mentor next generation
                of innovators
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Medal className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-lg font-semibold text-purple-400 mb-2">
                Legacy Impact
              </div>
              <p className="text-slate-300 text-sm">
                20,000+ people impacted through innovations, research, and
                community contributions
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievement Modal */}
      <AnimatePresence mode="wait">
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeAchievementModal}
                className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/90 transition-colors">
                <X className="w-6 h-6" />
              </button>

              {/* Certificate Image */}
              <div className="relative">
                <Image
                  src={
                    selectedAchievement.media?.[0] ||
                    "https://picsum.photos/800/600?random=5"
                  }
                  alt={`${selectedAchievement.title} Certificate`}
                  width={800}
                  height={480}
                  className="w-full h-[60vh] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/800/600?random=5";
                  }}
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedAchievement.title}
                  </h3>
                  <p className="text-lg text-yellow-300 mb-3">
                    {selectedAchievement.organization}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      {selectedAchievement.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedAchievement.date}
                    </span>
                    {selectedAchievement.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedAchievement.location}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <Target className="w-4 h-4" />
                    <span className="font-medium">Impact:</span>
                    <span className="text-slate-300">
                      {selectedAchievement.impact}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 border-t border-white/10 max-h-[50vh] overflow-y-auto">
                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  {selectedAchievement.description}
                </p>

                {/* Actions - Always Visible */}
                <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10 pt-4 -mx-6 px-6 -mb-6 pb-6">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Online</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background overlay - click to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeAchievementModal}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
