"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "Educational AR Museum",
  subtitle:
    "Interactive augmented reality museum experience for immersive learning",
  backUrl: "/alpha/ar",
  backText: "Kembali ke AR Projects",
  heroTitle: "Educational AR Museum",
  heroDescription:
    "An innovative augmented reality museum experience that transforms traditional educational exhibits into interactive, immersive learning environments. Using advanced AR technology, visitors can explore historical artifacts, scientific phenomena, and cultural displays with unprecedented depth and engagement through their mobile devices.",
  themeColor: "purple",
  background: "from-purple-900 via-gray-900 to-black",

  challenges: [
    "Menciptakan model 3D yang akurat secara historis",
    "Menangani tracking dalam ruangan berskala besar",
    "Optimasi penggunaan baterai untuk kunjungan yang panjang",
    "Memastikan kualitas konten edukatif yang tepat",
    "Mengatasi variasi kondisi pencahayaan di museum",
    "Sinkronisasi konten multi-bahasa",
  ],

  benefits: [
    "Meningkatkan engagement pengunjung hingga 75%",
    "Memberikan pengalaman edukatif yang lebih mendalam",
    "Memungkinkan akses informasi dalam berbagai bahasa",
    "Menarik minat generasi muda terhadap sejarah dan budaya",
    "Meningkatkan retention rate dan durasi kunjungan",
    "Menjadi pionir teknologi AR dalam bidang edukasi museum",
  ],

  images: [
    "/projects/educational-ar-1.jpg",
    "/projects/educational-ar-2.jpg",
    "/projects/educational-ar-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "Educational AR Museum dikembangkan untuk mentransformasi pengalaman museum tradisional menjadi lebih interaktif dan menarik. Dengan teknologi AR, pengunjung dapat merasakan sejarah dengan cara yang belum pernah ada sebelumnya. Proyek ini bertujuan untuk meningkatkan keterlibatan pengunjung museum, terutama generasi muda, melalui teknologi AR yang memungkinkan mereka berinteraksi dengan artefak bersejarah dan mendapatkan informasi mendalam dengan cara yang menyenangkan.",
    purpose:
      "Proyek ini bertujuan untuk meningkatkan keterlibatan pengunjung museum, terutama generasi muda, melalui teknologi AR yang memungkinkan mereka berinteraksi dengan artefak bersejarah dan mendapatkan informasi mendalam dengan cara yang menyenangkan. Dengan menggunakan teknologi ARCore dan ARKit, pengunjung dapat melihat rekonstruksi 3D, animasi sejarah, dan konten multimedia yang disesuaikan dengan lokasi dan konteks museum, menciptakan pengalaman pembelajaran yang tak terlupakan.",
  },
};

export default function EducationalARProjectPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
