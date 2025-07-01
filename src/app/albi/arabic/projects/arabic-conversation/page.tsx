"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function ArabicConversationPage() {
  return (
    <ProjectDetailTemplate
      title="Arabic Conversation Practice"
      subtitle="Arabic Language Learning"
      backUrl="/albi/arabic"
      backText="Back to Arabic Projects"
      heroTitle="Arabic Conversation Practice"
      heroDescription="AI chatbot for practicing Arabic conversation with multi-dialect support, cultural context awareness, and adaptive difficulty for effective communication skills development."
      themeColor="from-orange-400 to-red-400"
      background="from-orange-900 via-gray-900 to-red-800"
      challenges={[
        "Dialect variation - Supporting multiple Arabic dialects and regional differences",
        "Cultural context - Understanding cultural nuances in Arabic communication",
        "Formality levels - Teaching appropriate formal and informal speech patterns",
        "Real-time processing - Providing instant, natural conversation responses",
        "Pronunciation feedback - Analyzing and correcting Arabic speech patterns",
        "Context adaptation - Adjusting conversation based on learner proficiency",
      ]}
      benefits={[
        "Multi-dialect Arabic conversation support (MSA, Egyptian, Levantine, Gulf)",
        "Real-time speech recognition and natural synthesis",
        "Cultural context awareness for appropriate communication",
        "Adaptive difficulty adjustment based on learner progress",
        "Diverse conversation topics and real-world scenarios",
        "Pronunciation feedback with accent improvement suggestions",
      ]}
      images={[
        "/projects/arabic-conversation-1.jpg",
        "/projects/arabic-conversation-2.jpg",
        "/projects/arabic-conversation-3.jpg",
      ]}
      videos={[
        "/projects/arabic-conversation-demo.mp4",
        "/projects/arabic-conversation-dialects.mp4",
      ]}
      sections={{
        background:
          "Arabic Conversation Practice addresses the challenge of finding conversation partners for Arabic language learners. With Arabic being spoken across 22 countries with significant dialectical variations, learners need exposure to different forms of Arabic while understanding cultural communication patterns. This AI system provides accessible, patient conversation practice.",
        purpose:
          "To provide Arabic language learners with an intelligent conversation partner that adapts to their proficiency level, teaches cultural communication norms, and offers practice in various Arabic dialects and conversation contexts for real-world communication skills.",
      }}
    />
  );
}
