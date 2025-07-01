"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function QuranMemorizationPage() {
  return (
    <ProjectDetailTemplate
      title="Quran Memorization Assistant"
      subtitle="Arabic Language Learning"
      backUrl="/albi/arabic"
      backText="Back to Arabic Projects"
      heroTitle="Quran Memorization Assistant"
      heroDescription="AI-powered Quran memorization platform with spaced repetition algorithms, tajweed guidance, and progress tracking for effective Quranic learning."
      themeColor="from-orange-400 to-red-400"
      background="from-orange-900 via-gray-900 to-red-800"
      challenges={[
        "Memorization accuracy - Ensuring precise Quranic text memorization",
        "Tajweed rules - Teaching proper pronunciation and recitation rules",
        "Progress tracking - Measuring memorization retention over time",
        "Motivation - Maintaining consistency in long-term memorization goals",
        "Audio quality - Providing clear, authentic recitation examples",
        "Review scheduling - Optimizing spaced repetition for Quranic content",
      ]}
      benefits={[
        "Spaced repetition system optimized for Quranic memorization",
        "Audio recitation with multiple renowned qaris",
        "Tajweed visualization and pronunciation correction",
        "Comprehensive progress tracking and memorization analytics",
        "Offline functionality for uninterrupted practice",
        "Community features with memorization challenges and support",
      ]}
      images={[
        "/projects/quran-memorization-1.jpg",
        "/projects/quran-memorization-2.jpg",
        "/projects/quran-memorization-3.jpg",
      ]}
      videos={[
        "/projects/quran-memorization-demo.mp4",
        "/projects/quran-memorization-tajweed.mp4",
      ]}
      sections={{
        background:
          "The Quran Memorization Assistant was created to support the traditional Islamic practice of Quran memorization (Hifz) with modern learning techniques. Memorizing the Quran is a spiritual and intellectual journey that requires systematic approach, consistent practice, and proper guidance. This platform combines traditional memorization methods with cognitive science and technology.",
        purpose:
          "To assist Muslims in their Quran memorization journey by providing structured learning paths, spaced repetition for retention, tajweed guidance for proper recitation, and community support for sustained motivation and progress.",
      }}
    />
  );
}
