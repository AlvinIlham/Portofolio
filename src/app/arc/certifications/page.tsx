"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  GraduationCap,
  Calendar,
  ExternalLink,
  Download,
  CheckCircle,
  X,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

const certifications: CertificationItem[] = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-PSA-2024-001",
    level: "Professional",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    verification: "https://aws.amazon.com/verification/AWS-PSA-2024-001",
    badge: "https://picsum.photos/800/600?random=10",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-045",
    level: "Professional",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
    verification:
      "https://cloud.google.com/certification/verify/GCP-PD-2023-045",
    badge: "https://picsum.photos/800/600?random=11",
  },
  {
    title: "Microsoft Azure AI Engineer",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-AI-102-2023",
    level: "Associate",
    skills: ["Azure AI", "Machine Learning", "Cognitive Services", "MLOps"],
    verification:
      "https://learn.microsoft.com/api/credentials/share/en-us/AZ-AI-102-2023",
    badge: "https://picsum.photos/800/600?random=12",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialId: "CKA-2024-156",
    level: "Professional",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Networking"],
    verification:
      "https://training.linuxfoundation.org/certification/verify/CKA-2024-156",
    badge: "https://picsum.photos/800/600?random=13",
  },
];

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

export default function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificationItem | null>(null);

  const stats = [
    { label: "Total Certifications", value: "4", color: "text-blue-400" },
    { label: "Cloud Platforms", value: "3", color: "text-green-400" },
    { label: "Professional Level", value: "3", color: "text-purple-400" },
    { label: "Verified", value: "100%", color: "text-emerald-400" },
  ];

  const openCertificateModal = (certification: CertificationItem) => {
    setSelectedCertificate(certification);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  // Handler untuk verifikasi sertifikat
  const handleVerifyCredential = (verificationUrl: string) => {
    if (!verificationUrl) {
      alert("🔍 Verification link not available for this certification.");
      return;
    }

    // Tampilkan notifikasi bahwa akan membuka link verifikasi
    const userConfirmed = confirm(
      `🔍 You will be redirected to the official verification page.\n\n` +
        `This will open in a new tab where you can verify the authenticity of this certification directly with the issuer.\n\n` +
        `Continue?`
    );

    if (userConfirmed) {
      // Buka link verifikasi di tab baru
      window.open(verificationUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Handler untuk download badge
  const handleDownloadBadge = (badgeUrl: string, certTitle: string) => {
    if (!badgeUrl) {
      alert("🏆 Badge not available for download.");
      return;
    }

    // Tampilkan notifikasi tentang download
    const userConfirmed = confirm(
      `🏆 Download certification badge?\n\n` +
        `This will download the official certification badge image that you can use in your portfolio, LinkedIn profile, or CV.\n\n` +
        `Continue download?`
    );

    if (!userConfirmed) return;

    // Simulasi download badge (dalam implementasi nyata, ini akan download file)
    const link = document.createElement("a");
    link.href = badgeUrl;
    link.download = `${certTitle.replace(/\s+/g, "-").toLowerCase()}-badge.jpg`;

    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Tampilkan notifikasi sukses
      setTimeout(() => {
        alert(`✅ Badge for "${certTitle}" has been downloaded successfully!`);
      }, 500);
    } catch {
      // Jika download gagal, buka di tab baru
      window.open(badgeUrl, "_blank", "noopener,noreferrer");
      alert(
        `📸 Badge opened in new tab. Right-click and "Save Image As" to download.`
      );
    }
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
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Professional Certifications
                </h1>
                <p className="text-slate-300 text-sm">
                  Industry-recognized credentials
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
            Technical Expertise Validation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Industry-recognized certifications demonstrating validated technical
            skills and knowledge across cloud platforms, development frameworks,
            and emerging technologies.
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              onClick={() => openCertificateModal(certification)}
              className="group relative cursor-pointer">
              <div className="relative h-full bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/20">
                {/* Certificate Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={certification.badge}
                    alt={`${certification.title} certificate`}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/400/300?random=${
                        index + 100
                      }`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 p-2 bg-blue-500/20 backdrop-blur-sm rounded-full">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {certification.title}
                    </h3>
                    <p className="text-slate-300 font-medium">
                      {certification.issuer}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{certification.date}</span>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                        certification.level
                      )}`}>
                      {certification.level}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {certification.skills
                        .slice(0, 3)
                        .map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {skill}
                          </span>
                        ))}
                      {certification.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-lg bg-slate-600/30 text-slate-300">
                          +{certification.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Indicator */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-sm text-slate-400">
                      Click to view certificate
                    </span>
                    <div className="p-1.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Understanding Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-lg font-semibold text-green-400 mb-2">
                Verified Credentials
              </div>
              <p className="text-slate-300 text-sm">
                All certifications are verified and authenticated by official
                issuers. Click &quot;Verify&quot; to check authenticity directly
                with the certification provider.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-lg font-semibold text-blue-400 mb-2">
                Digital Badges
              </div>
              <p className="text-slate-300 text-sm">
                Download official certification badges for your portfolio,
                LinkedIn profile, or CV. These images can be used to showcase
                your credentials professionally.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <ExternalLink className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-lg font-semibold text-purple-400 mb-2">
                External Verification
              </div>
              <p className="text-slate-300 text-sm">
                Each certification links to the official verification page where
                employers or clients can independently confirm the validity and
                details of the credential.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              Certification Journey & Maintenance
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-medium text-yellow-400 mb-2">
                  Current Achievement
                </h5>
                <p className="text-slate-300 text-sm">
                  100% first-attempt success rate across all professional
                  certifications, with active maintenance of renewal
                  requirements and continuing education credits.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-yellow-400 mb-2">
                  Future Planning
                </h5>
                <p className="text-slate-300 text-sm">
                  Pursuing advanced security certifications and specialized
                  AI/ML credentials to stay current with evolving technology
                  trends and industry demands.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificateModal}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-white/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors">
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <div className="relative">
              <Image
                src={selectedCertificate.badge}
                alt={`${selectedCertificate.title} Certificate`}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/800/600?random=50";
                }}
              />
            </div>

            {/* Certificate Details */}
            <div className="p-6 border-t border-white/10 max-h-[50vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-lg text-blue-300 mb-1">
                    {selectedCertificate.issuer}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span>ID: {selectedCertificate.credentialId}</span>
                    <span>•</span>
                    <span>{selectedCertificate.date}</span>
                    <span>•</span>
                    <span
                      className={`px-2 py-1 rounded ${getLevelColor(
                        selectedCertificate.level
                      )}`}>
                      {selectedCertificate.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white mb-3">
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white/10 text-slate-300 text-sm border border-white/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions - Always Visible */}
              <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/10 pt-4 -mx-6 px-6 -mb-6 pb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      handleVerifyCredential(selectedCertificate.verification)
                    }
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Online</span>
                  </button>
                  <button
                    onClick={() =>
                      handleDownloadBadge(
                        selectedCertificate.badge,
                        selectedCertificate.title
                      )
                    }
                    className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
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
