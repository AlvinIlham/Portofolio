"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function KoreanConversationPage() {
  return (
    <ProjectDetailTemplate
      title="Korean Conversation AI"
      subtitle="Korean Language Learning"
      backUrl="/albi/korean"
      backText="Back to Korean Projects"
      heroTitle="Korean Conversation AI"
      heroDescription="AI-powered Korean conversation practice with honorific system training, cultural etiquette guidance, and real-world scenario practice for effective communication."
      themeColor="from-pink-400 to-purple-400"
      background="from-pink-900 via-gray-900 to-purple-800"
      challenges={[
        "Honorific complexity - Teaching Korea's complex honorific and formality system",
        "Cultural etiquette - Understanding Korean social interaction norms",
        "Context sensitivity - Adapting speech based on social relationships",
        "Age hierarchy - Incorporating age-based communication patterns",
        "Situational appropriateness - Teaching formal vs informal usage",
        "Pronunciation nuances - Handling Korean phonetic subtleties",
      ]}
      benefits={[
        "Comprehensive honorific system practice and guidance",
        "Cultural etiquette training for appropriate social interaction",
        "Real-world conversation scenarios for practical application",
        "Formal and informal speech pattern practice",
        "Pronunciation feedback with Korean phonetic analysis",
        "Context-aware responses adapting to social situations",
      ]}
      images={[
        "/projects/korean-conversation-1.jpg",
        "/projects/korean-conversation-2.jpg",
        "/projects/korean-conversation-3.jpg",
      ]}
      videos={[
        "/projects/korean-conversation-demo.mp4",
        "/projects/korean-conversation-honorifics.mp4",
      ]}
      sections={{
        background:
          "Korean Conversation AI addresses one of the most challenging aspects of Korean language learning - the complex honorific system and cultural communication norms. Korean speech patterns change dramatically based on age, social status, and relationship context. This AI system provides safe practice for these nuanced social language skills.",
        purpose:
          "To help Korean language learners master the complex honorific system and cultural communication patterns through AI-powered conversation practice that adapts to different social contexts and provides culturally appropriate language guidance.",
      }}
    />
  );
}
