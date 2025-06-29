"use client";
import ProjectDetailTemplate from "../../../../../components/ProjectDetailTemplate";
import { elearningPlatformMedia } from "./media";

export default function ElearningPlatformProjectPage() {
  return (
    <ProjectDetailTemplate
      title="E-learning Platform"
      subtitle="Web Development • Education Technology"
      backUrl="/alpha/web"
      backText="Kembali ke Web Projects"
      heroTitle="Future of Digital Learning"
      heroDescription="Platform pembelajaran digital yang comprehensive dengan fitur real-time collaboration, video conferencing, dan AI-powered content recommendations untuk pengalaman belajar yang interaktif dan personal."
      themeColor="from-blue-500 to-cyan-500"
      background="from-slate-900 via-gray-900 to-slate-800"
      challenges={[
        "Implementasi real-time collaboration untuk editing dokumen bersama",
        "Optimasi video streaming performance untuk konferensi virtual",
        "Arsitektur database scalable untuk handling data pembelajaran yang besar",
        "Integrasi AI untuk personalisasi content recommendations",
        "Desain UI/UX yang engaging untuk berbagai age groups",
        "Security dan privacy protection untuk data siswa",
      ]}
      benefits={[
        "Meningkatkan engagement pembelajaran hingga 65% dengan interactive features",
        "Memungkinkan pembelajaran jarak jauh yang efektif dengan video conferencing",
        "Personalisasi learning path berdasarkan progress dan preferensi siswa",
        "Real-time tracking dan analytics untuk monitoring kemajuan belajar",
        "Collaboration tools yang memfasilitasi group projects dan peer learning",
        "Mobile-responsive design untuk akses learning kapan saja dan dimana saja",
      ]}
      images={elearningPlatformMedia.images}
      videos={elearningPlatformMedia.videos}
      sections={{
        background:
          "E-learning Platform dikembangkan untuk memenuhi kebutuhan pendidikan digital yang semakin meningkat, terutama pasca pandemic. Banyak institusi pendidikan yang membutuhkan platform pembelajaran yang tidak hanya menyediakan konten, tetapi juga mendukung interaksi real-time dan collaboration antar siswa dan pengajar.",
        purpose:
          "Platform ini bertujuan untuk menciptakan ekosistem pembelajaran digital yang comprehensive, dimana siswa dapat belajar secara interaktif, berkolaborasi dalam real-time, dan mendapatkan personalized learning experience. Dengan AI-powered recommendations dan analytics, platform ini membantu mengoptimalkan proses pembelajaran untuk setiap individu.",
      }}
    />
  );
}
