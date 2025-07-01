"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function GrammarTutorPage() {
  return (
    <ProjectDetailTemplate
      title="AI Grammar Tutor"
      subtitle="English Language Learning"
      backUrl="/albi/english"
      backText="Back to English Projects"
      heroTitle="AI Grammar Tutor"
      heroDescription="Intelligent grammar correction and learning system with personalized feedback and adaptive learning paths for comprehensive English language mastery."
      themeColor="from-green-400 to-blue-400"
      background="from-green-900 via-gray-900 to-blue-800"
      challenges={[
        "Context understanding - Teaching appropriate grammar usage in different contexts",
        "Personalization - Adapting to individual learning styles and proficiency levels",
        "Real-time feedback - Providing instant, accurate corrections without disrupting flow",
        "Engagement - Maintaining learner motivation through interactive exercises",
        "Complexity handling - Managing advanced grammar rules and exceptions",
        "Progress tracking - Measuring meaningful improvement in writing skills",
      ]}
      benefits={[
        "Real-time grammar correction with contextual explanations",
        "Personalized learning paths based on individual weaknesses",
        "Interactive exercises that reinforce grammar concepts",
        "Progress analytics showing improvement over time",
        "Writing style analysis for enhanced communication",
        "AI-powered suggestions for vocabulary enhancement",
      ]}
      images={[
        "/projects/grammar-tutor-1.jpg",
        "/projects/grammar-tutor-2.jpg",
        "/projects/grammar-tutor-3.jpg",
      ]}
      videos={[
        "/projects/grammar-tutor-demo.mp4",
        "/projects/grammar-tutor-tutorial.mp4",
      ]}
      sections={{
        background:
          "The AI Grammar Tutor was developed to address the growing need for personalized grammar instruction in digital learning environments. Traditional grammar checkers provide basic corrections without educational context, while this system combines advanced natural language processing with pedagogical principles to create meaningful learning experiences.",
        purpose:
          "To provide English language learners with an intelligent, adaptive grammar tutor that not only corrects mistakes but explains the underlying rules, provides contextual examples, and creates personalized learning paths to improve overall writing proficiency and confidence.",
      }}
    />
  );
}
