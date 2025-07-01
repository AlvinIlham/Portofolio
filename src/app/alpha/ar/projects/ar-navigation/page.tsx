"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "AR Indoor Navigation",
  subtitle:
    "Advanced augmented reality wayfinding system for complex indoor spaces",
  backUrl: "/alpha/ar",
  backText: "Kembali ke AR Projects",
  heroTitle: "AR Indoor Navigation",
  heroDescription:
    "An advanced indoor navigation system using augmented reality to guide users through complex buildings like airports, hospitals, and shopping malls. The system features real-time path visualization, point-of-interest highlighting, and accessibility features for an inclusive navigation experience.",
  themeColor: "purple",
  background: "from-purple-900 via-gray-900 to-black",

  challenges: [
    "Mencapai positioning indoor yang akurat tanpa GPS",
    "Menangani perubahan lingkungan dinamis secara real-time",
    "Membuat peta indoor yang detail dan up-to-date",
    "Memastikan performa real-time untuk navigasi yang smooth",
    "Mengintegrasikan SLAM technology untuk tracking yang stabil",
    "Optimasi battery usage untuk penggunaan jangka panjang",
  ],

  benefits: [
    "Navigasi indoor yang lebih efisien dan akurat",
    "Pengurangan waktu pencarian lokasi dalam bangunan kompleks",
    "Peningkatan aksesibilitas untuk pengguna dengan gangguan penglihatan",
    "Dukungan multi-bahasa untuk pengunjung internasional",
    "Integrasi point-of-interest untuk experience yang lebih kaya",
    "Solusi scalable untuk berbagai jenis bangunan kompleks",
  ],

  images: [
    "/projects/ar-navigation-1.jpg",
    "/projects/ar-navigation-2.jpg",
    "/projects/ar-navigation-3.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "AR Indoor Navigation dikembangkan untuk mengatasi tantangan navigasi dalam bangunan-bangunan kompleks seperti bandara, rumah sakit, dan pusat perbelanjaan. Dengan meningkatnya kompleksitas arsitektur modern dan kebutuhan akan navigasi yang efisien, sistem ini menggunakan teknologi AR untuk memberikan panduan visual yang intuitif dan real-time. Proyek ini mengintegrasikan computer vision, SLAM technology, dan ARCore/ARKit untuk menciptakan pengalaman navigasi yang seamless dan accessible.",
    purpose:
      "Tujuan utama proyek ini adalah menciptakan sistem navigasi indoor yang dapat membantu pengguna menemukan tujuan mereka dengan cepat dan efisien dalam bangunan kompleks. Sistem ini dirancang untuk mendukung berbagai kebutuhan pengguna, termasuk aksesibilitas untuk pengguna dengan gangguan penglihatan, dukungan multi-bahasa, dan integrasi dengan point-of-interest. Dengan menggunakan AR technology, pengguna dapat melihat jalur navigasi secara visual overlay pada lingkungan nyata, membuatnya lebih mudah dipahami dan diikuti.",
  },
};

export default function ARNavigationProjectPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
