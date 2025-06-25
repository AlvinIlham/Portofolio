"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  GraduationCap,
  FileText,
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Download,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  level: string;
  skills: string[];
  verification: string;
  badge: string;
}

interface ResearchItem {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  keywords: string[];
  citations: number;
  doi: string;
  pdf?: string;
}

interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  impact: string;
  media?: string[];
}

type CategoryItem = CertificationItem | ResearchItem | AchievementItem;

// Type guards
function isCertification(item: CategoryItem): item is CertificationItem {
  return "issuer" in item;
}

function isResearch(item: CategoryItem): item is ResearchItem {
  return "journal" in item;
}

function isAchievement(item: CategoryItem): item is AchievementItem {
  return "organization" in item;
}

const achievementCategories = [
  {
    id: "certifications",
    name: "Professional Certifications",
    description: "Industry-recognized certifications and credentials",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
    items: [
      {
        title: "AWS Solutions Architect Professional",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialId: "AWS-PSA-2024-001",
        level: "Professional",
        skills: [
          "Cloud Architecture",
          "AWS Services",
          "Security",
          "Scalability",
        ],
        verification: "https://aws.amazon.com/verification",
        badge: "/badges/aws-professional.png",
      },
      {
        title: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2023",
        credentialId: "GCP-PD-2023-045",
        level: "Professional",
        skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
        verification: "https://cloud.google.com/certification",
        badge: "/badges/gcp-developer.png",
      },
      {
        title: "Microsoft Azure AI Engineer",
        issuer: "Microsoft",
        date: "2023",
        credentialId: "AZ-AI-102-2023",
        level: "Associate",
        skills: ["Azure AI", "Machine Learning", "Cognitive Services", "MLOps"],
        verification: "https://learn.microsoft.com/certifications",
        badge: "/badges/azure-ai.png",
      },
      {
        title: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "2024",
        credentialId: "CKA-2024-156",
        level: "Professional",
        skills: [
          "Kubernetes",
          "Container Orchestration",
          "DevOps",
          "Networking",
        ],
        verification: "https://www.cncf.io/certification",
        badge: "/badges/cka.png",
      },
    ],
  },
  {
    id: "research",
    name: "Research Projects",
    description: "Academic and professional research contributions",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    items: [
      {
        title: "Machine Learning for Language Education",
        type: "Research Paper",
        venue: "International Conference on Educational Technology",
        date: "2024",
        status: "Published",
        abstract:
          "A comprehensive study on applying machine learning algorithms to personalize language learning experiences...",
        citations: 23,
        coAuthors: 3,
        pdf: "/papers/ml-language-education.pdf",
      },
      {
        title: "AR/VR in Remote Collaboration",
        type: "Journal Article",
        venue: "Journal of Virtual Reality Research",
        date: "2023",
        status: "Published",
        abstract:
          "Investigating the effectiveness of augmented and virtual reality technologies in remote team collaboration...",
        citations: 45,
        coAuthors: 5,
        pdf: "/papers/arvr-collaboration.pdf",
      },
      {
        title: "Cross-Platform Mobile Development Framework Analysis",
        type: "Conference Paper",
        venue: "Mobile Development Summit 2023",
        date: "2023",
        status: "Published",
        abstract:
          "Comparative analysis of modern cross-platform mobile development frameworks and their performance implications...",
        citations: 18,
        coAuthors: 2,
        pdf: "/papers/mobile-frameworks.pdf",
      },
      {
        title: "Blockchain in Educational Credentialing",
        type: "Research Paper",
        venue: "Blockchain Education Conference",
        date: "2024",
        status: "Under Review",
        abstract:
          "Exploring blockchain technology applications for secure and verifiable educational credential management...",
        citations: 0,
        coAuthors: 4,
        pdf: null,
      },
    ],
  },
  {
    id: "achievements",
    name: "Awards & Recognition",
    description: "Notable achievements and recognitions",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    items: [
      {
        title: "Best Innovation Award 2024",
        organization: "Tech Innovation Summit",
        category: "Educational Technology",
        date: "2024",
        description:
          "Recognized for outstanding innovation in educational technology solutions",
        location: "San Francisco, CA",
        media: "/awards/innovation-2024.jpg",
      },
      {
        title: "Outstanding Researcher Award",
        organization: "University Research Council",
        category: "Computer Science",
        date: "2023",
        description:
          "Awarded for exceptional research contributions in machine learning and education",
        location: "University Campus",
        media: "/awards/researcher-2023.jpg",
      },
      {
        title: "Open Source Contributor of the Year",
        organization: "Developer Community Hub",
        category: "Open Source",
        date: "2023",
        description:
          "Recognized for significant contributions to open source educational projects",
        location: "Virtual Ceremony",
        media: "/awards/opensource-2023.jpg",
      },
      {
        title: "Hackathon Winner - EdTech Challenge",
        organization: "Global EdTech Hackathon",
        category: "Educational Solutions",
        date: "2024",
        description:
          "First place winner for innovative language learning platform prototype",
        location: "London, UK",
        media: "/awards/hackathon-2024.jpg",
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Under Review":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "In Progress":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Professional":
      return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    case "Associate":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "Expert":
      return "bg-red-500/20 text-red-300 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function ArcPage() {
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
                <h1 className="text-2xl font-bold text-white"> ARC</h1>
                <p className="text-slate-300 text-sm">
                  {" "}
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
            Professional Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of professional certifications, research
            contributions, and industry recognition demonstrating expertise and
            continuous learning.
          </p>
        </motion.div>

        {/* Achievement Categories */}
        <div className="space-y-16">
          {achievementCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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

              {/* Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + itemIndex * 0.1,
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
                              {item.title}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-slate-400">
                                {item.date}
                              </span>
                            </div>
                          </div>

                          {/* Certification specific content */}
                          {category.id === "certifications" && (
                            <>
                              <p className="text-slate-300 text-sm mb-2">
                                {(item as any).issuer}
                              </p>
                              <div className="flex items-center space-x-2 mb-4">
                                <span
                                  className={`px-2 py-1 rounded-md text-xs border ${getLevelColor(
                                    (item as any).level
                                  )}`}>
                                  {(item as any).level}
                                </span>
                                <span className="text-xs text-slate-400">
                                  ID: {(item as any).credentialId}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {(item as any).skills?.map((skill: string) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-1 rounded-md bg-white/10 text-slate-300 text-xs border border-white/20">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}

                          {/* Research specific content */}
                          {category.id === "research" && (
                            <>
                              <p className="text-slate-300 text-sm mb-2">
                                International Journal
                              </p>
                              <div className="flex items-center space-x-4 mb-4">
                                <span
                                  className={`px-2 py-1 rounded-md text-xs border ${getStatusColor(
                                    "Published"
                                  )}`}>
                                  Published
                                </span>
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <Star className="w-4 h-4" />
                                  <span className="text-xs">50+ citations</span>
                                </div>
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <Users className="w-4 h-4" />
                                  <span className="text-xs">
                                    Multiple co-authors
                                  </span>
                                </div>
                              </div>
                              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                Research abstract and findings description
                              </p>
                            </>
                          )}

                          {/* Awards specific content */}
                          {category.id === "achievements" && (
                            <>
                              <p className="text-slate-300 text-sm mb-2">
                                {(item as any).organization}
                              </p>
                              <div className="flex items-center space-x-2 mb-4">
                                <span className="px-2 py-1 rounded-md bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs">
                                  {(item as any).category}
                                </span>
                                <div className="flex items-center space-x-1 text-slate-400">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-xs">
                                    {(item as any).location}
                                  </span>
                                </div>
                              </div>
                              <p className="text-slate-400 text-sm mb-4">
                                {(item as any).description}
                              </p>
                            </>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="border-t border-white/10 pt-4 mt-4">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-slate-400">
                              {category.id === "certifications" &&
                                "Verified Credential"}
                              {category.id === "research" &&
                                `${(item as any).type}`}
                              {category.id === "achievements" &&
                                "Award Certificate"}
                            </div>
                            <div className="flex items-center space-x-2">
                              {((category.id === "certifications" &&
                                (item as any).verification) ||
                                (category.id === "research" &&
                                  (item as any).pdf)) && (
                                <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                              )}
                              <Download className="w-4 h-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
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
            Achievement Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-slate-300">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-slate-300">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-slate-300">Awards & Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">86</div>
              <div className="text-slate-300">Total Citations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
