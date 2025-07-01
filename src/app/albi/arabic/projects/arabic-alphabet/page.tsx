"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function ArabicAlphabetPage() {
  return (
    <ProjectDetailTemplate
      title="Interactive Arabic Alphabet"
      subtitle="Arabic Language Learning"
      backUrl="/albi/arabic"
      backText="Back to Arabic Projects"
      heroTitle="Interactive Arabic Alphabet"
      heroDescription="Comprehensive Arabic alphabet learning platform with interactive writing practice, pronunciation guides, and contextual letter forms for mastering Arabic script fundamentals."
      themeColor="from-orange-400 to-red-400"
      background="from-orange-900 via-gray-900 to-red-800"
      challenges={[
        "Script complexity - Teaching the four different forms of each Arabic letter",
        "Right-to-left writing - Adapting to different writing direction and flow",
        "Letter connections - Understanding how letters connect in different positions",
        "Pronunciation accuracy - Teaching correct Arabic letter pronunciation",
        "Cultural context - Integrating cultural significance of Arabic script",
        "Progress tracking - Measuring handwriting and recognition improvement",
      ]}
      benefits={[
        "Interactive letter tracing with real-time feedback and correction",
        "Audio pronunciation guides for authentic Arabic sounds",
        "Contextual letter forms practice (isolated, initial, medial, final)",
        "Progressive difficulty levels from basics to advanced combinations",
        "Cultural context integration for deeper script understanding",
        "Achievement system and progress tracking for motivation",
      ]}
      images={[
        "/projects/arabic-alphabet-1.jpg",
        "/projects/arabic-alphabet-2.jpg",
        "/projects/arabic-alphabet-3.jpg",
      ]}
      videos={[
        "/projects/arabic-alphabet-tutorial.mp4",
        "/projects/arabic-alphabet-tracing-demo.mp4",
      ]}
      sections={{
        background:
          "The Interactive Arabic Alphabet was developed to address the unique challenges of learning Arabic script, which differs significantly from Latin-based alphabets. Arabic letters change form depending on their position in a word, and the right-to-left writing system presents additional learning challenges. This platform provides a structured, interactive approach to mastering these fundamentals.",
        purpose:
          "To provide Arabic language learners with a comprehensive, interactive foundation in Arabic script through guided letter tracing, pronunciation training, and contextual practice that builds confidence in reading and writing Arabic text.",
      }}
    />
  );
}
