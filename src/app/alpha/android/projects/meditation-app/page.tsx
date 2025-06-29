"use client";
import ProjectDetailTemplate from "../../../../../components/ProjectDetailTemplate";
import { meditationAppMedia } from "./media";

export default function MeditationAppProjectPage() {
  return (
    <ProjectDetailTemplate
      title="Mindful Meditation"
      subtitle="Android Development • Health & Mindfulness"
      backUrl="/alpha/android"
      backText="Kembali ke Android Projects"
      heroTitle="Find Your Inner Peace"
      heroDescription="Aplikasi meditasi yang dirancang untuk membantu pengguna mengembangkan praktik mindfulness melalui guided sessions, breathing exercises, dan ambient soundscapes yang menenangkan."
      themeColor="from-purple-500 to-indigo-500"
      background="from-slate-900 via-gray-900 to-slate-800"
      challenges={[
        "Menciptakan audio experience yang berkualitas tinggi dan menenangkan",
        "Implementasi timer dan tracking yang akurat untuk sesi meditasi",
        "Desain UI yang minimalis dan tidak mengganggu ketenangan",
        "Pengelolaan offline content untuk akses tanpa internet",
        "Personalisasi program meditasi berdasarkan level dan preferensi user",
      ]}
      benefits={[
        "Mengurangi stress dan anxiety hingga 60% dengan penggunaan rutin",
        "Meningkatkan kualitas tidur dan fokus sehari-hari",
        "Menyediakan guided meditation untuk berbagai tingkat kemampuan",
        "Tracking progress yang memotivasi untuk konsisten bermeditasi",
        "Akses offline untuk meditasi kapan saja dan dimana saja",
      ]}
      images={meditationAppMedia.images}
      videos={meditationAppMedia.videos}
      sections={{
        background:
          "Mindful Meditation dikembangkan untuk mengatasi meningkatnya tingkat stress dan anxiety di era digital. Banyak orang yang ingin mulai bermeditasi namun tidak tahu cara yang benar atau tidak memiliki guidance yang tepat untuk memulai praktik mindfulness.",
        purpose:
          "Aplikasi ini bertujuan untuk membuat meditasi lebih accessible dan mudah dipelajari oleh siapa saja, mulai dari pemula hingga yang sudah berpengalaman. Dengan guided sessions yang bervariasi dan tracking progress yang jelas, pengguna dapat mengembangkan kebiasaan meditasi yang berkelanjutan.",
      }}
    />
  );
}
