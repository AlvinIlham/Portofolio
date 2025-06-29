"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Code,
  Github,
  ExternalLink,
  Star,
  FileText,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const webProjects = [
  {
    id: "elearning-platform",
    title: "E-learning Platform",
    description:
      "Full-stack learning management system with real-time features",
    longDescription:
      "A comprehensive learning management system built with modern technologies. Features include real-time collaboration, interactive quizzes, video conferencing integration, and AI-powered content recommendations.",
    image: "/projects/web-preview.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebRTC"],
    features: [
      "Real-time collaborative editing",
      "Video conferencing integration",
      "AI-powered content recommendations",
      "Interactive quiz system",
      "Progress tracking and analytics",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing real-time collaboration",
      "Optimizing video streaming performance",
      "Creating scalable database architecture",
      "Ensuring cross-browser compatibility",
    ],
    status: "Completed",
    timeline: "8 months",
    team: "6 developers",
    stars: 456,
    githubUrl: "https://github.com/example/elearning-platform",
    liveUrl: "https://elearning-demo.com",
    screenshots: [
      "/projects/ecommerce-platform-1.jpg",
      "/projects/ecommerce-platform-2.jpg",
      "/projects/ecommerce-platform-3.jpg",
    ],
  },
  {
    id: "real-estate-portal",
    title: "Real Estate Portal",
    description:
      "Property listing and management platform with advanced search",
    longDescription:
      "Modern real estate platform with advanced search capabilities, virtual tours, and comprehensive property management tools. Includes features for both buyers and real estate agents.",
    image: "/projects/web-preview.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Mapbox"],
    features: [
      "Advanced property search and filtering",
      "Virtual tour integration",
      "Real-time chat system",
      "Property management dashboard",
      "Interactive maps and location data",
      "Mortgage calculator integration",
    ],
    challenges: [
      "Implementing complex search algorithms",
      "Optimizing large image galleries",
      "Creating responsive map interfaces",
      "Handling large property datasets",
    ],
    status: "Completed",
    timeline: "10 months",
    team: "8 developers",
    stars: 389,
    githubUrl: "https://github.com/example/real-estate-portal",
    liveUrl: "https://realestate-demo.com",
    screenshots: [],
  },
  {
    id: "social-dashboard",
    title: "Social Media Dashboard",
    description: "Analytics and management tool for multiple social platforms",
    longDescription:
      "Comprehensive social media management platform that aggregates data from multiple social networks. Provides analytics, scheduling, and content management across platforms.",
    image: "/projects/web-preview.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Chart.js"],
    features: [
      "Multi-platform social media integration",
      "Advanced analytics and reporting",
      "Content scheduling and automation",
      "Team collaboration tools",
      "Custom dashboard creation",
      "Real-time notifications",
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Creating real-time data synchronization",
      "Designing intuitive analytics visualizations",
      "Handling API rate limiting",
    ],
    status: "In Progress",
    timeline: "6 months",
    team: "5 developers",
    stars: 267,
    githubUrl: "https://github.com/example/social-dashboard",
    liveUrl: null,
    screenshots: [],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "In Progress":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "Planning":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function WebProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/alpha">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-200">
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">
                Website Development Projects
              </h1>
              <p className="text-slate-300 text-lg">
                Modern web applications and platforms
              </p>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {webProjects.length}
            </div>
            <div className="text-slate-300">Total Projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {webProjects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-slate-300">Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {webProjects.reduce((sum, project) => sum + project.stars, 0)}
            </div>
            <div className="text-slate-300">Total Stars</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
            <div className="text-slate-300">Technologies</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}>
              <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105 h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                        project.status
                      )}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-green-500/20 text-green-300 border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Github className="w-4 h-4 hover:text-white transition-colors" />
                      )}
                      {project.liveUrl && (
                        <ExternalLink className="w-4 h-4 hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {(() => {
              const project = webProjects.find((p) => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <p className="text-slate-300">{project.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                      ×
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Long Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      About This Project
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2">
                            <Zap className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Technical Challenges
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2">
                            <Code className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">
                              {challenge}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      href={`/alpha/web/projects/${project.id}`}
                      className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg transition-all">
                      <FileText className="w-5 h-5" />
                      <span>Lihat Detail Lengkap</span>
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-600/20 text-gray-300 hover:bg-gray-600/30 transition-colors">
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transition-all">
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
