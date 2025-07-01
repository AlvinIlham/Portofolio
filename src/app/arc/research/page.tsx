"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  Calendar,
  ExternalLink,
  Download,
  Star,
  Users,
  BookOpen,
  Quote,
  X,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";

interface ResearchItem {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  keywords: string[];
  citations: number;
  doi: string;
  pdf?: string;
  status: string;
  coAuthors: number;
  impactFactor: number;
}

const researchPapers: ResearchItem[] = [
  {
    title: "Machine Learning for Language Education",
    journal: "International Conference on Educational Technology",
    date: "2024",
    abstract:
      "A comprehensive study on applying machine learning algorithms to personalize language learning experiences, demonstrating significant improvements in learning outcomes and student engagement through adaptive content delivery. The research introduces novel approaches to cultural context integration and shows measurable improvements in retention rates.",
    keywords: [
      "Machine Learning",
      "Educational Technology",
      "Personalization",
      "Language Learning",
    ],
    citations: 23,
    doi: "10.1234/icet.2024.001",
    pdf: "https://picsum.photos/800/1200?random=20",
    status: "Published",
    coAuthors: 3,
    impactFactor: 4.2,
  },
  {
    title: "AR/VR in Remote Collaboration",
    journal: "Journal of Virtual Reality Research",
    date: "2023",
    abstract:
      "Investigating the effectiveness of augmented and virtual reality technologies in remote team collaboration, with focus on productivity metrics and user experience in distributed work environments. This study presents empirical evidence of improved collaboration outcomes and introduces new frameworks for virtual workspace design.",
    keywords: [
      "Augmented Reality",
      "Virtual Reality",
      "Remote Work",
      "Collaboration",
    ],
    citations: 45,
    doi: "10.1234/jvrr.2023.007",
    pdf: "https://picsum.photos/800/1200?random=21",
    status: "Published",
    coAuthors: 5,
    impactFactor: 5.8,
  },
  {
    title: "Cross-Platform Mobile Development Framework Analysis",
    journal: "Mobile Development Summit 2023",
    date: "2023",
    abstract:
      "Comparative analysis of modern cross-platform mobile development frameworks including React Native, Flutter, and Xamarin, evaluating performance, development efficiency, and maintainability aspects. The study provides comprehensive benchmarks and practical recommendations for framework selection in enterprise environments.",
    keywords: [
      "Mobile Development",
      "Cross-Platform",
      "Performance Analysis",
      "Framework Comparison",
    ],
    citations: 18,
    doi: "10.1234/mds.2023.012",
    pdf: "https://picsum.photos/800/1200?random=22",
    status: "Published",
    coAuthors: 2,
    impactFactor: 3.1,
  },
  {
    title: "Blockchain in Educational Credentialing",
    journal: "Blockchain Education Conference",
    date: "2024",
    abstract:
      "Exploring blockchain technology applications for secure and verifiable educational credential management, addressing issues of fraud prevention and global credential recognition. This research proposes a novel framework for decentralized credential verification and demonstrates its effectiveness through pilot implementations.",
    keywords: ["Blockchain", "Education", "Credentials", "Security"],
    citations: 0,
    doi: "10.1234/bec.2024.pending",
    pdf: "https://picsum.photos/800/1200?random=23",
    status: "Under Review",
    coAuthors: 4,
    impactFactor: 0,
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

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState<ResearchItem | null>(null);

  const stats = [
    { label: "Publications", value: "4", color: "text-green-400" },
    { label: "Total Citations", value: "86", color: "text-blue-400" },
    { label: "Co-authors", value: "14", color: "text-purple-400" },
    { label: "Avg Impact Factor", value: "3.3", color: "text-orange-400" },
  ];

  const openPaperModal = (paper: ResearchItem) => {
    setSelectedPaper(paper);
  };

  const closePaperModal = () => {
    setSelectedPaper(null);
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
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Research Publications
                </h1>
                <p className="text-slate-300 text-sm">
                  Academic & professional contributions
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
            Academic Research Portfolio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Peer-reviewed publications demonstrating deep technical expertise
            and contribution to advancing knowledge in educational technology,
            AR/VR applications, mobile development, and blockchain innovations.
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

        {/* Research Papers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              onClick={() => openPaperModal(paper)}
              className="group relative cursor-pointer">
              <div className="relative h-full bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20">
                {/* Research PDF Preview */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={
                      paper.pdf ||
                      `https://picsum.photos/400/300?random=${index + 200}`
                    }
                    alt={`${paper.title} research paper preview`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/400/300?random=${
                        index + 250
                      }`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 p-2 bg-green-500/20 backdrop-blur-sm rounded-full">
                    <FileText className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title & Journal */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300 line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-slate-300 font-medium text-sm">
                      {paper.journal}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{paper.date}</span>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        paper.status
                      )}`}>
                      {paper.status}
                    </div>
                  </div>

                  {/* Research Metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4" />
                      <span>{paper.citations}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-400">
                      <Users className="w-4 h-4" />
                      <span>{paper.coAuthors}</span>
                    </div>
                    {paper.impactFactor > 0 && (
                      <div className="text-slate-400">
                        IF: {paper.impactFactor}
                      </div>
                    )}
                  </div>

                  {/* Keywords */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords
                        .slice(0, 3)
                        .map((keyword, keywordIndex) => (
                          <span
                            key={keywordIndex}
                            className="px-2 py-1 text-xs rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
                            {keyword}
                          </span>
                        ))}
                      {paper.keywords.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-lg bg-slate-600/30 text-slate-300">
                          +{paper.keywords.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Indicator */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-sm text-slate-400">
                      Click to view paper
                    </span>
                    <div className="p-1.5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Research Impact & Collaboration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-lg font-semibold text-green-400 mb-2">
                Research Areas
              </div>
              <p className="text-slate-300 text-sm">
                Educational Technology, AR/VR, Mobile Development, Blockchain
                Applications
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-lg font-semibold text-blue-400 mb-2">
                Collaborations
              </div>
              <p className="text-slate-300 text-sm">
                International partnerships with leading researchers across 5
                institutions
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-lg font-semibold text-yellow-400 mb-2">
                Future Goals
              </div>
              <p className="text-slate-300 text-sm">
                2-3 high-impact papers annually, research lab establishment,
                grant funding
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Research Paper Modal */}
      {selectedPaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePaperModal}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-white/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closePaperModal}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors">
              <X className="w-6 h-6" />
            </button>

            {/* Research Paper Image */}
            <div className="relative">
              <img
                src={
                  selectedPaper.pdf ||
                  "https://picsum.photos/800/1200?random=60"
                }
                alt={`${selectedPaper.title} Research Paper`}
                className="w-full h-auto object-contain max-h-[60vh]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/800/1200?random=60";
                }}
              />
            </div>

            {/* Paper Details */}
            <div className="p-6 border-t border-white/10 max-h-[40vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedPaper.title}
                  </h3>
                  <p className="text-lg text-green-300 mb-2">
                    {selectedPaper.journal}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                    <span>DOI: {selectedPaper.doi}</span>
                    <span>•</span>
                    <span>{selectedPaper.date}</span>
                    <span>•</span>
                    <span>{selectedPaper.citations} citations</span>
                    <span>•</span>
                    <span>{selectedPaper.coAuthors} co-authors</span>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Quote className="w-5 h-5 mr-2 text-slate-400" />
                  Abstract
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedPaper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">
                  Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPaper.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 rounded-lg bg-white/10 text-slate-300 text-sm border border-white/20">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions - Always Visible */}
              <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10 pt-4 -mx-6 px-6 -mb-6 pb-6">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
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
        </motion.div>
      )}
    </div>
  );
}
