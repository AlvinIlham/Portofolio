"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function VocabularyBuilderPage() {
  return (
    <ProjectDetailTemplate
      title="Vocabulary Builder Pro"
      subtitle="English Language Learning"
      backUrl="/albi/english"
      backText="Back to English Projects"
      heroTitle="Vocabulary Builder Pro"
      heroDescription="Advanced vocabulary learning platform with spaced repetition algorithms and contextual learning techniques for effective English vocabulary expansion."
      themeColor="from-green-400 to-blue-400"
      background="from-green-900 via-gray-900 to-blue-800"
      challenges={[
        "Memory retention - Ensuring long-term vocabulary retention through optimal review timing",
        "Context integration - Teaching words in meaningful contexts rather than isolation",
        "Personalization - Adapting difficulty and content to individual learning levels",
        "Engagement - Making vocabulary practice interesting and sustainable",
        "Usage patterns - Teaching appropriate word usage in different situations",
        "Progress measurement - Tracking meaningful vocabulary acquisition and retention",
      ]}
      benefits={[
        "Spaced repetition algorithm optimized for long-term retention",
        "Contextual word learning with real-world examples",
        "Personalized word lists based on proficiency and interests",
        "Etymology and word origin insights for deeper understanding",
        "Usage examples showing words in various contexts",
        "Comprehensive progress tracking and vocabulary statistics",
      ]}
      images={[
        "/projects/vocabulary-builder-1.jpg",
        "/projects/vocabulary-builder-2.jpg",
        "/projects/vocabulary-builder-3.jpg",
      ]}
      videos={[
        "/projects/vocabulary-builder-demo.mp4",
        "/projects/vocabulary-builder-spaced-repetition.mp4",
      ]}
      sections={{
        background:
          "Vocabulary Builder Pro was created to solve the common problem of vocabulary acquisition and retention in language learning. Traditional vocabulary learning methods often rely on rote memorization, which leads to poor retention and inability to use words in context. This platform combines cognitive science research on memory and learning with modern technology to create an effective vocabulary learning experience.",
        purpose:
          "To help English language learners systematically expand their vocabulary through scientifically-proven spaced repetition techniques, contextual learning, and personalized content that adapts to individual learning patterns and goals.",
      }}
    />
  );
}
