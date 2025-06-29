"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Lightbulb,
  AlertTriangle,
  Trophy,
  Image as ImageIcon,
  Video,
} from "lucide-react";

interface ProjectDetailProps {
  title: string;
  subtitle: string;
  backUrl: string;
  backText: string;
  heroTitle: string;
  heroDescription: string;
  themeColor: string;
  background: string;
  challenges: string[];
  benefits: string[];
  images: string[];
  videos: string[];
  sections: {
    background: string;
    purpose: string;
  };
}

export default function ProjectDetailTemplate({
  title,
  subtitle,
  backUrl,
  backText,
  heroTitle,
  heroDescription,
  themeColor,
  background,
  challenges,
  benefits,
  images,
  videos,
  sections,
}: ProjectDetailProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${background}`}>
      {/* Background Effects */}
      <div
        className={`fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${themeColor}/20 via-transparent to-transparent pointer-events-none`}></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-slate-900/80 backdrop-blur-xl border-b border-${
          themeColor.replace("from-", "").replace("to-", "").split("-")[0]
        }-500/20 sticky top-0 z-40`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href={backUrl}
              className={`flex items-center space-x-2 text-gray-300 hover:text-${
                themeColor.replace("from-", "").replace("to-", "").split("-")[0]
              }-400 transition-all duration-300 group`}>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">{backText}</span>
            </Link>
            <div className="text-right">
              <h1
                className={`text-3xl font-bold bg-gradient-to-r ${themeColor} bg-clip-text text-transparent`}>
                {title}
              </h1>
              <p className="text-gray-400 mt-1">{subtitle}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center">
          <div
            className={`w-20 h-20 bg-gradient-to-r ${themeColor} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{heroTitle}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Latar Belakang */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-${
              themeColor.replace("from-", "").replace("to-", "").split("-")[0]
            }-500/20 hover:border-${
              themeColor.replace("from-", "").replace("to-", "").split("-")[0]
            }-500/40 transition-all duration-300`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Latar Belakang</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {sections.background}
            </p>
          </motion.div>

          {/* Tujuan Pembuatan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-${
              themeColor.replace("from-", "").replace("to-", "").split("-")[0]
            }-500/20 hover:border-${
              themeColor.replace("from-", "").replace("to-", "").split("-")[0]
            }-500/40 transition-all duration-300`}>
            <div className="flex items-center space-x-3 mb-6">
              <div
                className={`w-12 h-12 bg-${
                  themeColor
                    .replace("from-", "")
                    .replace("to-", "")
                    .split("-")[0]
                }-500/20 rounded-xl flex items-center justify-center`}>
                <Target
                  className={`w-6 h-6 text-${
                    themeColor
                      .replace("from-", "")
                      .replace("to-", "")
                      .split("-")[0]
                  }-400`}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Tujuan Pembuatan
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{sections.purpose}</p>
          </motion.div>
        </div>

        {/* Masalah & Manfaat Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Masalah yang Dihadapi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Masalah yang Dihadapi
              </h3>
            </div>
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Manfaat Projek */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Manfaat Projek</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Galeri Gambar */}
        {images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Galeri Visual</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Screenshot {idx + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Video Demonstrasi */}
        {videos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Video Demonstrasi
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((vid, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  className="relative group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800/30 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-2xl"
                      poster={images[idx] || images[0]}>
                      <source src={vid} type="video/mp4" />
                      Browser Anda tidak mendukung video.
                    </video>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
