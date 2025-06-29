"use client";
import ProjectDetailTemplate from "../../../../../components/ProjectDetailTemplate";
import { fitnessTrackerMedia } from "./media";

export default function FitnessTrackerProjectPage() {
  return (
    <ProjectDetailTemplate
      title="AI Fitness Tracker"
      subtitle="Android Development • Health & Fitness"
      backUrl="/alpha/android"
      backText="Kembali ke Android Projects"
      heroTitle="Smart Fitness Revolution"
      heroDescription="Aplikasi fitness tracking yang cerdas dengan AI-powered workout recommendations dan real-time form analysis untuk membantu pengguna mencapai tujuan kebugaran mereka."
      themeColor="from-green-500 to-emerald-500"
      background="from-slate-900 via-gray-900 to-slate-800"
      challenges={[
        "Implementasi computer vision untuk analisis gerakan real-time",
        "Optimasi algoritma AI untuk berjalan smooth di perangkat mobile",
        "Integrasi dengan berbagai wearable devices dan sensor",
        "Desain UX yang mudah digunakan saat berolahraga",
        "Pengelolaan data kesehatan yang sensitif dan privasi pengguna",
      ]}
      benefits={[
        "Meningkatkan efektivitas workout hingga 40% dengan form correction",
        "Mengurangi risiko cedera dengan real-time monitoring",
        "Personalisasi program latihan berdasarkan progress individual",
        "Motivasi berkelanjutan melalui gamification dan social features",
        "Tracking komprehensif untuk berbagai jenis aktivitas fisik",
      ]}
      images={fitnessTrackerMedia.images}
      videos={fitnessTrackerMedia.videos}
      sections={{
        background:
          "AI Fitness Tracker dikembangkan untuk mengatasi masalah umum dalam dunia fitness yaitu kurangnya guidance yang personal dan real-time feedback. Banyak orang yang berolahraga tanpa mengetahui apakah gerakan mereka sudah benar, yang dapat menyebabkan cedera atau hasil yang tidak optimal.",
        purpose:
          "Tujuan utama aplikasi ini adalah memberikan personal trainer virtual yang dapat memberikan feedback real-time, koreksi gerakan, dan rekomendasi workout yang disesuaikan dengan kemampuan dan progress masing-masing pengguna, sehingga membuat fitness lebih accessible dan effective untuk semua orang.",
      }}
    />
  );
}
