"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Languages,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  Type,
  Music,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LanguageCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  overview: string;
  history: string;
  technologies: string[];
  applications: string[];
  currentTrends: string[];
  challenges: string[];
}

const languageCategories: LanguageCategory[] = [
  {
    id: "english",
    name: "English Language",
    description:
      "Advanced AI-powered English learning with grammar, pronunciation, and vocabulary tools",
    icon: Globe,
    color: "from-green-500 to-blue-500",
    overview:
      "English Language learning encompasses comprehensive methodologies and technologies untuk menguasai bahasa Inggris sebagai bahasa internasional yang paling banyak digunakan dalam komunikasi global, bisnis, dan teknologi.",
    history:
      "Pembelajaran bahasa Inggris modern dimulai dengan metode Grammar-Translation pada abad ke-19, berkembang menjadi Direct Method, lalu Audio-Lingual pada 1950-an, dan kini menggunakan Communicative Language Teaching yang diperkuat dengan teknologi AI dan aplikasi mobile.",
    technologies: [
      "AI/ML untuk personalized learning",
      "Natural Language Processing (NLP)",
      "Speech Recognition dan Text-to-Speech",
      "Adaptive Learning Algorithms",
      "Mobile Learning Apps (React Native, Flutter)",
      "Web-based Learning Platforms (React, Vue.js)",
      "Gamification Engines",
      "Progress Tracking Systems",
    ],
    applications: [
      "Grammar correction dan analysis tools",
      "Vocabulary building applications",
      "Pronunciation training dengan AI feedback",
      "Reading comprehension platforms",
      "Writing assistant tools",
      "Speaking practice dengan chatbots",
      "TOEFL/IELTS preparation systems",
      "Business English training platforms",
    ],
    currentTrends: [
      "AI-powered personalized learning paths",
      "Immersive VR language learning environments",
      "Microlearning dengan bite-sized lessons",
      "Social learning platforms dengan peer interaction",
      "Adaptive assessment systems",
      "Multimodal learning (visual, audio, kinesthetic)",
    ],
    challenges: [
      "Accent variation - Handling different English accents",
      "Context understanding - Teaching appropriate usage",
      "Motivation - Maintaining learner engagement",
      "Cultural context - Teaching language dalam cultural setting",
      "Individual pace - Accommodating different learning speeds",
      "Assessment accuracy - Measuring true language proficiency",
    ],
  },
  {
    id: "arabic",
    name: "Arabic Language",
    description:
      "Interactive Arabic script learning with Quranic memorization and conversation practice",
    icon: Type,
    color: "from-orange-500 to-red-500",
    overview:
      "Arabic Language learning focuses pada penguasaan bahasa Arab sebagai bahasa liturgi Islam dan bahasa resmi 22 negara, dengan emphasis pada penguasaan script, grammar, dan cultural context yang unique.",
    history:
      "Pembelajaran bahasa Arab dimulai dengan tradisi hafalan Al-Quran, berkembang dengan metode klasik nahw dan sarf pada abad ke-8, dan kini mengintegrasikan teknologi modern untuk non-native speakers dengan focus pada practical communication skills.",
    technologies: [
      "Arabic OCR dan text recognition",
      "Right-to-left text processing",
      "Arabic speech synthesis dan recognition",
      "Diacritics (harakat) processing systems",
      "Arabic keyboard input methods",
      "Morphological analysis tools",
      "Arabic-specific learning platforms",
      "Cultural context integration systems",
    ],
    applications: [
      "Arabic alphabet learning dengan interactive writing",
      "Quranic Arabic comprehension tools",
      "Modern Standard Arabic (MSA) learning",
      "Dialect-specific learning (Egyptian, Levantine, Gulf)",
      "Arabic calligraphy digital tools",
      "Arabic literature reading platforms",
      "Business Arabic communication training",
      "Arabic-English translation tools",
    ],
    currentTrends: [
      "AI-powered Arabic diacritization",
      "Cultural immersion through digital platforms",
      "Arabic content creation tools",
      "Cross-cultural communication training",
      "Heritage language preservation programs",
      "Arabic for specific purposes (business, academic)",
    ],
    challenges: [
      "Script complexity - Multiple letter forms",
      "Right-to-left writing system",
      "Dialect variations across regions",
      "Cultural sensitivity requirements",
      "Limited quality learning resources",
      "Pronunciation accuracy for non-natives",
    ],
  },
  {
    id: "korean",
    name: "Korean Language",
    description:
      "K-Pop inspired Korean learning with Hangul mastery and cultural integration",
    icon: Music,
    color: "from-pink-500 to-purple-500",
    overview:
      "Korean Language learning combines traditional Hangul script mastery dengan modern cultural elements seperti K-Pop dan K-Drama untuk menciptakan pengalaman belajar yang engaging dan cultural relevant untuk learners worldwide.",
    history:
      "Pembelajaran bahasa Korea dimulai dengan penciptaan Hangul oleh Raja Sejong pada 1443, berkembang melalui periode tradisional hingga era modern dengan Korean Wave (Hallyu) yang memicu minat global terhadap bahasa dan budaya Korea.",
    technologies: [
      "Hangul recognition dan writing systems",
      "Korean TTS dengan natural pronunciation",
      "Cultural context AI untuk appropriate usage",
      "K-Pop lyrics integration platforms",
      "Korean drama subtitle learning tools",
      "Honorific system training algorithms",
      "Korean-specific input methods",
      "Cultural etiquette training systems",
    ],
    applications: [
      "Hangul stroke order learning applications",
      "K-Pop lyric-based vocabulary building",
      "Korean conversation practice dengan AI",
      "Cultural etiquette training platforms",
      "Korean drama comprehension tools",
      "Business Korean communication training",
      "TOPIK preparation systems",
      "Korean calligraphy digital learning",
    ],
    currentTrends: [
      "K-Pop driven language learning platforms",
      "AI-powered honorific system training",
      "Virtual Korean cultural immersion",
      "Cross-platform Korean content creation",
      "Social learning dengan Korean communities",
      "Gamified Korean language challenges",
    ],
    challenges: [
      "Complex honorific system mastery",
      "Cultural context understanding",
      "Pronunciation accuracy challenges",
      "Grammar pattern complexity",
      "Limited advanced learning resources",
      "Formal vs informal usage distinction",
    ],
  },
];

export default function ALBIPage() {
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleExploreProjects = (categoryId: string) => {
    router.push(`/albi/${categoryId}`);
  };

  // Statistics for the header
  const stats = [
    {
      icon: Users,
      label: "Total Learners",
      value: "15K+",
      color: "text-blue-400",
    },
    {
      icon: BookOpen,
      label: "Avg Completion",
      value: "87%",
      color: "text-green-400",
    },
    {
      icon: Languages,
      label: "Languages",
      value: "3",
      color: "text-purple-400",
    },
    {
      icon: Award,
      label: "Certificates",
      value: "2.4K+",
      color: "text-orange-400",
    },
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Language Learning Innovation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Comprehensive multilingual education platform featuring cutting-edge
            AI technology for English, Arabic, and Korean language learning with
            cultural integration and personalized learning paths.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex flex-col items-center">
                    <StatIcon className={`w-8 h-8 ${stat.color} mb-3`} />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Language Categories */}
        <div className="space-y-16">
          {languageCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative">
                {/* Category Header */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                          <CategoryIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {category.name}
                          </h3>
                          <p className="text-slate-300 mt-1">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {category.overview}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                        {expandedCategories[category.id] ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            <span>Hide Details</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            <span>Show Details</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleExploreProjects(category.id)}
                        className={`flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                        <ExternalLink className="w-4 h-4" />
                        <span>Explore Projects</span>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedCategories[category.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 pt-8 border-t border-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Historical Development */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              Historical Development
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                              {category.history}
                            </p>
                          </div>

                          {/* Current Trends */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              Current Trends
                            </h4>
                            <ul className="space-y-2">
                              {category.currentTrends.map(
                                (trend, trendIndex) => (
                                  <li
                                    key={trendIndex}
                                    className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    <span className="text-slate-300 text-sm">
                                      {trend}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Key Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              Key Technologies
                            </h4>
                            <ul className="space-y-2">
                              {category.technologies.map((tech, techIndex) => (
                                <li
                                  key={techIndex}
                                  className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">
                                    {tech}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Applications */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                              Applications
                            </h4>
                            <ul className="space-y-2">
                              {category.applications.map((app, appIndex) => (
                                <li
                                  key={appIndex}
                                  className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">
                                    {app}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Challenges */}
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Key Challenges
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.challenges.map(
                              (challenge, challengeIndex) => (
                                <div
                                  key={challengeIndex}
                                  className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">
                                    {challenge}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
