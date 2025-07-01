"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function PronunciationCoachPage() {
  return (
    <ProjectDetailTemplate
      title="Pronunciation Coach"
      subtitle="English Language Learning"
      backUrl="/albi/english"
      backText="Back to English Projects"
      heroTitle="Pronunciation Coach"
      heroDescription="AI-powered pronunciation training with advanced speech recognition and real-time feedback for accent improvement and speaking confidence."
      themeColor="from-green-400 to-blue-400"
      background="from-green-900 via-gray-900 to-blue-800"
      challenges={[
        "Accent variation - Handling different native language influences on pronunciation",
        "Real-time analysis - Processing speech data instantly for immediate feedback",
        "Phonetic accuracy - Detecting subtle pronunciation differences and errors",
        "User engagement - Making pronunciation practice enjoyable and motivating",
        "Progress measurement - Quantifying improvement in speaking skills",
        "Cultural sensitivity - Respecting different accent goals and preferences",
      ]}
      benefits={[
        "Real-time pronunciation analysis with visual feedback",
        "Accent training for multiple English variants (American, British, etc.)",
        "Interactive speaking exercises with immediate correction",
        "Progress visualization showing pronunciation improvement",
        "Phonetic transcription tools for better understanding",
        "Personalized practice sessions based on common errors",
      ]}
      images={[
        "/projects/pronunciation-coach-1.jpg",
        "/projects/pronunciation-coach-2.jpg",
        "/projects/pronunciation-coach-3.jpg",
      ]}
      videos={[
        "/projects/pronunciation-coach-demo.mp4",
        "/projects/pronunciation-coach-features.mp4",
      ]}
      sections={{
        background:
          "The Pronunciation Coach addresses one of the most challenging aspects of language learning - accurate pronunciation. Many learners struggle with pronunciation because they lack access to immediate, detailed feedback. This system uses cutting-edge speech recognition technology to provide the kind of detailed analysis typically only available from experienced pronunciation instructors.",
        purpose:
          "To help English language learners improve their pronunciation through AI-powered analysis and feedback, building speaking confidence and communication effectiveness in academic, professional, and social contexts.",
      }}
    />
  );
}
