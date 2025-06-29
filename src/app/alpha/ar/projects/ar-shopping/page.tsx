"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

const projectData = {
  title: "AR Shopping Experience",
  subtitle:
    "Revolutionary augmented reality e-commerce platform with virtual try-on",
  backUrl: "/alpha/ar",
  backText: "Kembali ke AR Projects",
  heroTitle: "AR Shopping Experience",
  heroDescription:
    "A revolutionary augmented reality e-commerce platform that transforms online shopping through immersive virtual try-on experiences. Built with ARCore/ARKit integration, the platform enables customers to visualize products in their real environment before purchase, reducing return rates and enhancing customer satisfaction.",
  themeColor: "green",
  background: "from-green-900 via-gray-900 to-black",

  challenges: [
    "Mengintegrasikan AR tracking yang akurat dalam berbagai kondisi pencahayaan",
    "Optimasi performa untuk berbagai spesifikasi perangkat mobile",
    "Memastikan kualitas rendering 3D yang realistis untuk semua produk",
    "Mengatasi variasi kondisi lingkungan pengguna yang beragam",
    "Mengembangkan antarmuka yang intuitif untuk interaksi AR",
    "Memastikan kompatibilitas lintas platform (iOS dan Android)",
  ],

  benefits: [
    "Pengurangan tingkat pengembalian produk hingga 40%",
    "Peningkatan engagement pelanggan dan waktu interaksi",
    "Pengalaman belanja yang lebih personal dan imersif",
    "Diferensiasi kompetitif dalam pasar e-commerce",
    "Peningkatan kepercayaan konsumen terhadap pembelian online",
    "Data analytics yang lebih kaya tentang preferensi pelanggan",
  ],

  images: [
    "/projects/ar-shopping-1.jpg",
    "/projects/ar-shopping-2.jpg",
    "/projects/ar-shopping-3.jpg",
    "/projects/ar-shopping-4.jpg",
  ],

  videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],

  sections: {
    background:
      "AR Shopping Experience dikembangkan untuk merevolusi cara konsumen berbelanja online dengan mengintegrasikan teknologi augmented reality. Dengan tingginya tingkat pengembalian produk dalam e-commerce tradisional, terutama untuk produk fashion dan furniture, AR technology menawarkan solusi untuk memungkinkan konsumen 'mencoba' produk secara virtual sebelum membeli. Platform ini menggunakan teknologi ARCore dan ARKit untuk memberikan pengalaman yang akurat dan realistis.",
    purpose:
      "Tujuan utama proyek ini adalah menciptakan platform e-commerce AR yang dapat mengurangi tingkat pengembalian produk sambil meningkatkan kepuasan pelanggan. Platform ini memungkinkan pengguna untuk memvisualisasikan produk dalam lingkungan nyata mereka, memberikan pengalaman belanja yang lebih informatif dan menyenangkan. Dengan integrasi teknologi machine learning dan computer vision, platform ini dapat memberikan rekomendasi yang lebih akurat dan personal.",
  },
};

export default function ARShoppingProjectPage() {
  return <ProjectDetailTemplate {...projectData} />;
}
