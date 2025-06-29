"use client";
import ProjectDetailTemplate from "../../../../../components/ProjectDetailTemplate";
import { architecturalVizMedia } from "./media";

export default function ArchitecturalVizProjectPage() {
  return (
    <ProjectDetailTemplate
      title="Architectural Visualization"
      subtitle="3D Modeling • Architectural Design"
      backUrl="/alpha/blender"
      backText="Kembali ke Blender Projects"
      heroTitle="Photorealistic Architecture"
      heroDescription="Proyek visualisasi arsitektur yang menampilkan rendering fotorealistik dan virtual walkthrough untuk project residensial dan komersial menggunakan teknik advanced lighting dan material creation."
      themeColor="from-orange-500 to-red-500"
      background="from-slate-900 via-gray-900 to-slate-800"
      challenges={[
        "Menciptakan material yang photorealistic dengan physically-based rendering",
        "Optimasi lighting simulation untuk hasil yang natural dan dramatic",
        "Modeling detail arsitektur yang complex dengan geometry nodes",
        "Rendering time optimization untuk scene yang detail dan besar",
        "Post-processing workflow untuk enhance realism tanpa over-processing",
        "Creating smooth camera animations untuk virtual walkthroughs",
      ]}
      benefits={[
        "Menghasilkan visualisasi arsitektur dengan quality studio-level",
        "Mempercepat approval process client dengan realistic previews",
        "Memungkinkan eksplorasi design alternatives sebelum construction",
        "Virtual walkthrough yang immersive untuk marketing dan presentasi",
        "Cost-effective solution dibanding physical model atau photography",
        "Reusable assets dan materials untuk future projects",
      ]}
      images={architecturalVizMedia.images}
      videos={architecturalVizMedia.videos}
      sections={{
        background:
          "Architectural Visualization project dikembangkan untuk memenuhi kebutuhan industri arsitektur dan real estate yang memerlukan presentasi visual yang compelling dan realistic. Traditional methods seperti physical models atau 2D drawings seringkali tidak dapat mengkomunikasikan design intent dengan efektif kepada client dan stakeholders.",
        purpose:
          "Proyek ini bertujuan untuk menyediakan solusi visualisasi arsitektur yang comprehensive, mulai dari still renders hingga animated walkthroughs, yang dapat membantu arsitek dan developer dalam mempresentasikan design mereka dengan cara yang engaging dan mudah dipahami oleh client.",
      }}
    />
  );
}
