"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Award,
  GraduationCap,
  FileText,
  Trophy,
  ChevronDown,
  ChevronUp,
  BookOpenCheck,
  Medal,
  TrendingUp,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AchievementCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  overview: string;
  impactMetrics: string[];
  keyHighlights: string[];
  futureGoals: string[];
  totalItems: number;
  route: string;
}

const achievementCategories: AchievementCategory[] = [
  {
    id: "certifications",
    name: "Professional Certifications",
    description:
      "Industry-recognized certifications and credentials demonstrating technical expertise",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    route: "/arc/certifications",
    totalItems: 4,
    overview:
      "Professional certifications showcase validated technical skills and knowledge across cloud platforms, development frameworks, and emerging technologies. These credentials demonstrate commitment to continuous learning and industry best practices.",
    impactMetrics: [
      "4 Professional-level certifications achieved",
      "100% first-attempt pass rate on all certifications",
      "Expertise spanning 3 major cloud platforms (AWS, GCP, Azure)",
      "Active maintenance of all certification renewals",
    ],
    keyHighlights: [
      "AWS Solutions Architect Professional - Advanced cloud architecture",
      "Google Cloud Professional Developer - Modern application development",
      "Microsoft Azure AI Engineer - Artificial intelligence implementation",
      "Certified Kubernetes Administrator - Container orchestration mastery",
    ],
    futureGoals: [
      "Pursue advanced security certifications (CISSP, CEH)",
      "Expand into DevOps and Site Reliability Engineering certs",
      "Obtain specialized AI/ML certifications from major providers",
      "Contribute to certification exam development and review panels",
    ],
  },
  {
    id: "research",
    name: "Research Publications",
    description:
      "Academic and professional research contributions advancing knowledge in technology",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    route: "/arc/research",
    totalItems: 4,
    overview:
      "Research publications demonstrate deep technical expertise and contribution to advancing knowledge in educational technology, AR/VR applications, mobile development, and blockchain innovations. These works have been peer-reviewed and published in reputable venues.",
    impactMetrics: [
      "4 peer-reviewed publications in top-tier venues",
      "86+ total citations across all publications",
      "5+ international collaborations with leading researchers",
      "2 papers in high-impact journals (IF > 3.0)",
    ],
    keyHighlights: [
      "Machine Learning for Language Education - 23 citations, EdTech innovation",
      "AR/VR in Remote Collaboration - 45 citations, workplace transformation",
      "Cross-Platform Mobile Framework Analysis - 18 citations, development insights",
      "Blockchain Educational Credentialing - Under review, cutting-edge research",
    ],
    futureGoals: [
      "Publish 2-3 high-impact papers annually in top venues",
      "Establish research lab focused on AI in education",
      "Secure major research grants for innovative projects",
      "Mentor next generation of researchers in emerging technologies",
    ],
  },
  {
    id: "achievements",
    name: "Awards & Recognition",
    description:
      "Notable achievements and recognitions for innovation and excellence",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    route: "/arc/achievements",
    totalItems: 4,
    overview:
      "Awards and recognitions highlight exceptional contributions to technology innovation, open source community, and educational advancement. These accolades represent peer recognition and validation of impactful work across multiple domains.",
    impactMetrics: [
      "4 major awards received in the past 2 years",
      "Recognition across 3 different domains (Innovation, Research, Open Source)",
      "International recognition from global organizations",
      "Community impact reaching 10,000+ developers and learners",
    ],
    keyHighlights: [
      "Best Innovation Award 2024 - Educational Technology breakthrough",
      "Outstanding Researcher Award 2023 - Academic excellence recognition",
      "Open Source Contributor of the Year - Community impact and contribution",
      "Hackathon Winner - EdTech Challenge first place finish",
    ],
    futureGoals: [
      "Establish annual innovation showcase for educational technology",
      "Mentor upcoming developers and researchers in the field",
      "Expand open source contributions to reach global developer community",
      "Launch startup focused on transformative educational solutions",
    ],
  },
];

export default function ArcPage() {
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

  const handleViewPortfolio = (categoryRoute: string) => {
    router.push(categoryRoute);
  };

  // Statistics for the header
  const stats = [
    {
      icon: BookOpenCheck,
      label: "Total Certifications",
      value: "4",
      color: "text-blue-400",
    },
    {
      icon: FileText,
      label: "Research Papers",
      value: "4",
      color: "text-green-400",
    },
    {
      icon: Medal,
      label: "Awards Won",
      value: "4",
      color: "text-yellow-400",
    },
    {
      icon: TrendingUp,
      label: "Total Citations",
      value: "86+",
      color: "text-purple-400",
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
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">ARC</h1>
                <p className="text-slate-300 text-sm">
                  Achievements, Research & Certifications
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
            Professional Excellence Portfolio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            A comprehensive showcase of professional certifications,
            peer-reviewed research contributions, and industry recognition
            demonstrating expertise across technology, innovation, and academic
            excellence.
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

        {/* Achievement Categories */}
        <div className="space-y-16">
          {achievementCategories.map((category, index) => {
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
                          <p className="text-slate-400 text-sm mt-2">
                            {category.totalItems} items in portfolio
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {category.overview}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-6">
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
                        onClick={() => handleViewPortfolio(category.route)}
                        className={`flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                        <Target className="w-4 h-4" />
                        <span>View Portfolio</span>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedCategories[category.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 pt-8 border-t border-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                          {/* Impact Metrics */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              Impact Metrics
                            </h4>
                            <ul className="space-y-2">
                              {category.impactMetrics.map(
                                (metric, metricIndex) => (
                                  <li
                                    key={metricIndex}
                                    className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span className="text-slate-300 text-sm">
                                      {metric}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Key Highlights */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {category.keyHighlights.map(
                                (highlight, highlightIndex) => (
                                  <li
                                    key={highlightIndex}
                                    className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                    <span className="text-slate-300 text-sm">
                                      {highlight}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Future Goals */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Future Goals
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.futureGoals.map((goal, goalIndex) => (
                              <div
                                key={goalIndex}
                                className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                <span className="text-slate-300 text-sm">
                                  {goal}
                                </span>
                              </div>
                            ))}
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
