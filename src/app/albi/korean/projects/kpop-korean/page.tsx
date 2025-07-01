"use client";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function KpopKoreanPage() {
  return (
    <ProjectDetailTemplate
      title="K-Pop Korean Learner"
      subtitle="Korean Language Learning"
      backUrl="/albi/korean"
      backText="Back to Korean Projects"
      heroTitle="K-Pop Korean Learner"
      heroDescription="Innovative Korean learning platform that uses K-Pop songs and lyrics to teach vocabulary, grammar, and cultural expressions through popular music and entertainment."
      themeColor="from-pink-400 to-purple-400"
      background="from-pink-900 via-gray-900 to-purple-800"
      challenges={[
        "Content curation - Selecting appropriate K-Pop content for language learning",
        "Cultural context - Explaining cultural references and slang in lyrics",
        "Difficulty progression - Organizing songs by language learning complexity",
        "Copyright management - Handling music and video content legally",
        "Engagement balance - Balancing entertainment with educational value",
        "Vocabulary relevance - Teaching practical Korean through music content",
      ]}
      benefits={[
        "Lyric-based vocabulary learning with K-Pop song integration",
        "Cultural context explanations for Korean expressions and slang",
        "Interactive karaoke mode for pronunciation practice",
        "Artist and song recommendations based on learning progress",
        "Community features for discussions and shared learning",
        "Music-driven motivation for sustained Korean study",
      ]}
      images={[
        "/projects/kpop-korean-1.jpg",
        "/projects/kpop-korean-2.jpg",
        "/projects/kpop-korean-3.jpg",
      ]}
      videos={[
        "/projects/kpop-korean-demo.mp4",
        "/projects/kpop-korean-karaoke.mp4",
      ]}
      sections={{
        background:
          "K-Pop Korean Learner leverages the global popularity of Korean pop music to make language learning engaging and culturally relevant. K-Pop has become a major gateway for international interest in Korean language and culture. This platform transforms that cultural interest into structured language learning through music, lyrics, and cultural context.",
        purpose:
          "To make Korean language learning engaging and culturally relevant by using K-Pop music as a teaching medium, helping learners acquire vocabulary, understand cultural expressions, and develop genuine interest in Korean language through popular entertainment.",
      }}
    />
  );
}
