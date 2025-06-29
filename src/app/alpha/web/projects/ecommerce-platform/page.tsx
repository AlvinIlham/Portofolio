"use client";
import ProjectDetailTemplate from "../../../../../components/ProjectDetailTemplate";
import { ecommercePlatformMedia } from "./media";

export default function EcommercePlatformProjectPage() {
  return (
    <ProjectDetailTemplate
      title="Modern E-commerce Platform"
      subtitle="Web Development • Full-Stack E-commerce"
      backUrl="/alpha/web"
      backText="Kembali ke Web Projects"
      heroTitle="Next-Gen Shopping Experience"
      heroDescription="Platform e-commerce modern yang dibangun dengan teknologi terdepan, menyediakan pengalaman belanja online yang seamless, aman, dan user-friendly untuk vendor dan customer."
      themeColor="from-blue-500 to-cyan-500"
      background="from-slate-900 via-gray-900 to-slate-800"
      challenges={[
        "Implementasi real-time inventory management untuk multiple vendors",
        "Optimasi performance untuk handling traffic tinggi dan concurrent users",
        "Integrasi payment gateway yang aman dan mendukung berbagai metode pembayaran",
        "Desain responsive yang konsisten di semua device dan browser",
        "SEO optimization untuk meningkatkan visibility produk di search engine",
        "Admin dashboard yang powerful untuk vendor management",
      ]}
      benefits={[
        "Meningkatkan conversion rate hingga 35% dengan UX yang optimal",
        "Mengurangi cart abandonment dengan streamlined checkout process",
        "Multi-vendor marketplace yang mendukung ribuan seller",
        "Real-time analytics dan reporting untuk business intelligence",
        "Mobile-first design dengan performance yang sangat cepat",
        "Scalable architecture yang dapat menangani growth bisnis",
      ]}
      images={ecommercePlatformMedia.images}
      videos={ecommercePlatformMedia.videos}
      sections={{
        background:
          "Modern E-commerce Platform dikembangkan untuk memenuhi kebutuhan bisnis online yang semakin kompleks. Banyak platform e-commerce existing yang tidak dapat mengakomodasi kebutuhan multi-vendor, real-time inventory, dan user experience yang modern sesuai standar industri saat ini.",
        purpose:
          "Platform ini bertujuan untuk menyediakan solusi e-commerce yang comprehensive, scalable, dan user-friendly untuk businesses dari berbagai skala. Dengan fitur-fitur advanced seperti AI recommendations, real-time analytics, dan seamless multi-vendor management, platform ini dirancang untuk meningkatkan efisiensi operasional dan customer satisfaction.",
      }}
    />
  );
}
