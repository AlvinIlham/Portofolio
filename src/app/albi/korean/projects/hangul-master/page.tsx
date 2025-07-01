"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function HangulMasterPage() {
  return (
    <ProjectDetailTemplate
      title="Hangul Master"
      subtitle="Korean Language Learning"
      backUrl="/albi/korean"
      backText="Back to Korean Projects"
      heroTitle="Hangul Master"
      heroDescription="Interactive Hangul learning platform with stroke order practice, pronunciation training, and cultural integration for mastering the Korean alphabet system."
      themeColor="from-pink-400 to-purple-400"
      background="from-pink-900 via-gray-900 to-purple-800"
      challenges={[
        "Stroke order accuracy - Teaching proper Hangul character writing sequence",
        "Character combinations - Understanding how Hangul letters combine into syllables",
        "Pronunciation mapping - Connecting written characters to correct sounds",
        "Cultural context - Integrating Korean cultural elements in learning",
        "Progress measurement - Tracking handwriting and recognition improvement",
        "Engagement - Making alphabet learning interactive and enjoyable",
      ]}
      benefits={[
        "Interactive Hangul stroke order practice with real-time guidance",
        "Audio pronunciation for authentic Korean character sounds",
        "Character combination exercises for syllable formation",
        "Progress tracking with achievements and learning milestones",
        "Cultural context integration for deeper language understanding",
        "Gamified learning experience with challenges and rewards",
      ]}
      images={[
        "/projects/hangul-master-1.jpg",
        "/projects/hangul-master-2.jpg",
        "/projects/hangul-master-3.jpg",
      ]}
      videos={[
        "/projects/hangul-master-demo.mp4",
        "/projects/hangul-master-stroke-order.mp4",
      ]}
      sections={{
        background:
          "Hangul Master was developed to teach the Korean writing system, which is considered one of the most logical and scientific alphabets in the world. Created by King Sejong in the 15th century, Hangul has unique characteristics in how letters combine to form syllable blocks. This platform makes learning Hangul systematic, interactive, and culturally enriching.",
        purpose:
          "To provide Korean language learners with a comprehensive foundation in Hangul through interactive stroke order practice, pronunciation training, and cultural context that builds confidence in reading and writing Korean text.",
      }}
    />
  );
}
