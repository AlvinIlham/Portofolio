"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Cpu,
  Eye,
  Code,
  Smartphone,
  Palette,
  Gamepad2,
  Brain,
  Apple,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const techCategories = [
  {
    id: "ar",
    name: "Augmented Reality",
    description: "Immersive AR experiences and applications",
    icon: Eye,
    color: "from-cyan-500 to-blue-500",
    overview:
      "Augmented Reality (AR) adalah teknologi yang menggabungkan dunia nyata dengan elemen digital, menciptakan pengalaman interaktif yang mengubah cara kita berinteraksi dengan lingkungan sekitar.",
    history:
      "AR pertama kali dikembangkan pada tahun 1968 oleh Ivan Sutherland dengan perangkat 'The Sword of Damocles'. Perkembangan signifikan terjadi pada 1990-an dengan istilah 'Augmented Reality' yang diciptakan oleh Tom Caudell. Era modern AR dimulai dengan peluncuran ARToolkit pada 1999 dan mencapai puncaknya dengan ARCore (Google) dan ARKit (Apple) pada 2017.",
    technologies: [
      "ARCore (Google) - Platform AR untuk Android",
      "ARKit (Apple) - Framework AR untuk iOS",
      "Unity 3D - Engine untuk pengembangan aplikasi AR",
      "Vuforia - Platform AR enterprise",
      "8th Wall - AR berbasis web",
      "WebXR - Standar web untuk AR/VR",
      "OpenCV - Computer vision library",
      "SLAM - Simultaneous Localization and Mapping",
    ],
    applications: [
      "E-commerce - Virtual try-on dan product visualization",
      "Pendidikan - Interactive learning dan virtual laboratories",
      "Healthcare - Surgical planning dan medical training",
      "Manufacturing - Assembly guidance dan quality control",
      "Entertainment - Gaming dan interactive experiences",
      "Marketing - Interactive advertising campaigns",
      "Navigation - AR-based GPS dan indoor navigation",
      "Social Media - AR filters dan effects",
    ],
    currentTrends: [
      "WebAR - AR yang berjalan di browser tanpa aplikasi",
      "Cloud-based AR - Processing di cloud untuk performa optimal",
      "AI-powered AR - Integrasi machine learning dan computer vision",
      "Social AR - Shared AR experiences untuk multiple users",
      "Industrial AR - Aplikasi untuk manufacturing dan maintenance",
      "AR Glass - Wearable AR devices seperti HoloLens dan Magic Leap",
    ],
    challenges: [
      "Hardware limitations - Keterbatasan processing power device mobile",
      "Tracking accuracy - Maintaining precise object tracking",
      "User experience - Creating intuitive AR interfaces",
      "Battery consumption - Optimizing power usage",
      "Content creation - Developing high-quality 3D assets",
      "Privacy concerns - Handling camera dan location data",
    ],
  },
  {
    id: "web",
    name: "Website Development",
    description: "Modern web applications and platforms",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    overview:
      "Website Development adalah proses menciptakan aplikasi web modern yang responsif, interaktif, dan user-friendly menggunakan teknologi terdepan untuk memberikan pengalaman digital yang optimal.",
    history:
      "Pengembangan web dimulai dari HTML statis pada 1990-an, berkembang menjadi dynamic websites dengan PHP dan JavaScript pada 2000-an, hingga era modern dengan framework seperti React, Vue, dan Angular pada 2010-an. Saat ini, fokus pada JAMstack, serverless, dan Progressive Web Apps (PWA).",
    technologies: [
      "Frontend: React, Vue.js, Angular, Svelte",
      "Backend: Node.js, Python (Django/Flask), PHP (Laravel)",
      "Full-stack: Next.js, Nuxt.js, SvelteKit",
      "Database: PostgreSQL, MongoDB, Redis, Supabase",
      "Cloud: Vercel, Netlify, AWS, Google Cloud",
      "DevOps: Docker, Kubernetes, CI/CD pipelines",
      "Styling: Tailwind CSS, Styled Components, SCSS",
      "Testing: Jest, Cypress, Playwright, Vitest",
    ],
    applications: [
      "E-commerce platforms dengan AI recommendations",
      "Content Management Systems (CMS)",
      "Social media platforms dan community websites",
      "Educational platforms dan Learning Management Systems",
      "Business applications dan enterprise solutions",
      "Portfolio websites dan company profiles",
      "Blogging platforms dan news websites",
      "Real-time applications dengan WebSocket integration",
    ],
    currentTrends: [
      "JAMstack architecture - JavaScript, APIs, dan Markup",
      "Serverless computing - Function-as-a-Service (FaaS)",
      "Progressive Web Apps (PWA) - Web apps yang berfungsi seperti native apps",
      "Headless CMS - Content management terpisah dari frontend",
      "Micro-frontends - Modular frontend architecture",
      "Edge computing - Computing yang lebih dekat dengan user",
    ],
    challenges: [
      "Performance optimization - Loading speed dan user experience",
      "Security - Protecting against cyber threats dan vulnerabilities",
      "Cross-browser compatibility - Ensuring consistent experience",
      "Mobile responsiveness - Optimal display pada semua device",
      "SEO optimization - Search engine visibility",
      "Accessibility - Making websites usable for all users",
    ],
  },
  {
    id: "android",
    name: "Android Development",
    description: "Native Android applications and services",
    icon: Smartphone,
    color: "from-green-600 to-lime-500",
    overview:
      "Android Development adalah proses pembuatan aplikasi mobile untuk platform Android menggunakan teknologi modern seperti Kotlin, Jetpack Compose, dan Android SDK untuk menciptakan pengalaman mobile yang native dan optimal.",
    history:
      "Android pertama kali diumumkan Google pada 2007 dan diluncurkan pada 2008. Perkembangan signifikan termasuk pengenalan Android Studio (2013), Kotlin sebagai bahasa resmi (2017), Jetpack Compose (2021), dan fokus pada Material You design (2021).",
    technologies: [
      "Bahasa: Kotlin (primary), Java, Dart (Flutter)",
      "UI Framework: Jetpack Compose, XML layouts",
      "Architecture: MVVM, Clean Architecture, Repository Pattern",
      "Database: Room, SQLite, Firebase Firestore",
      "Networking: Retrofit, OkHttp, Ktor",
      "Dependency Injection: Hilt, Dagger",
      "Testing: JUnit, Espresso, Mockito",
      "Tools: Android Studio, Gradle, ADB",
    ],
    applications: [
      "Social media dan messaging apps",
      "E-commerce dan shopping applications",
      "Health & fitness tracking apps",
      "Educational apps dan e-learning platforms",
      "Entertainment apps (streaming, gaming)",
      "Productivity tools dan business apps",
      "IoT control applications",
      "Augmented Reality (AR) applications",
    ],
    currentTrends: [
      "Jetpack Compose - Modern declarative UI toolkit",
      "Kotlin Multiplatform - Shared code across platforms",
      "Android 14 features - Privacy improvements dan better performance",
      "Material You - Dynamic theming based on user preferences",
      "Foldable devices support - Adaptive UI for flexible screens",
      "5G integration - High-speed connectivity features",
    ],
    challenges: [
      "Device fragmentation - Supporting various screen sizes dan Android versions",
      "Performance optimization - Battery life dan memory management",
      "Security - Protecting user data dan preventing malware",
      "App size optimization - Reducing APK size",
      "Compatibility - Ensuring app works across different devices",
      "User experience - Creating intuitive dan engaging interfaces",
    ],
  },
  {
    id: "blender",
    name: "Blender/3D Modeling",
    description: "3D models, animations, and visual effects",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    overview:
      "Blender/3D Modeling adalah seni dan ilmu menciptakan objek, karakter, dan lingkungan tiga dimensi menggunakan software canggih untuk visualisasi, animasi, dan rendering yang realistis.",
    history:
      "3D modeling dimulai pada 1960-an dengan wireframe graphics, berkembang pesat pada 1980-an dengan software seperti AutoCAD. Blender diluncurkan pada 1998 sebagai software open-source dan menjadi standar industri untuk 3D creation suite yang gratis namun powerful.",
    technologies: [
      "Blender - Open-source 3D creation suite",
      "Autodesk Maya - Professional 3D animation software",
      "3ds Max - 3D modeling dan rendering",
      "Cinema 4D - Motion graphics dan 3D animation",
      "ZBrush - Digital sculpting",
      "Substance Suite - Texturing dan material creation",
      "Houdini - Procedural 3D animation",
      "Unity/Unreal Engine - Real-time 3D engines",
    ],
    applications: [
      "Architectural visualization - Building dan interior design",
      "Product visualization - Marketing dan prototyping",
      "Character modeling - Gaming dan animation",
      "Motion graphics - Advertising dan branding",
      "Visual effects (VFX) - Film dan television",
      "3D printing - Prototyping dan manufacturing",
      "Virtual Reality environments",
      "Medical visualization - Anatomy dan surgical planning",
    ],
    currentTrends: [
      "Real-time rendering - Instant visual feedback",
      "Procedural modeling - Algorithm-based object creation",
      "PBR materials - Physically Based Rendering",
      "Cloud rendering - GPU farms untuk complex scenes",
      "AI-assisted modeling - Machine learning untuk automation",
      "VR sculpting - Creating 3D art in virtual reality",
    ],
    challenges: [
      "Learning curve - Mastering complex software interfaces",
      "Hardware requirements - High-end GPUs untuk rendering",
      "Time consumption - Detailed models require significant time",
      "File management - Organizing complex project assets",
      "Rendering optimization - Balancing quality dan speed",
      "Staying updated - Rapidly evolving software features",
    ],
  },
  {
    id: "games",
    name: "Game Development",
    description: "Interactive games and gaming experiences",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-500",
    overview:
      "Game Development adalah proses kreatif pembuatan video game yang menggabungkan programming, desain, seni, dan storytelling untuk menciptakan pengalaman interaktif yang engaging dan memorable.",
    history:
      "Game development dimulai pada 1950-an dengan game sederhana seperti Tennis for Two. Era arcade 1970-80an, konsol gaming 1980-90an, dan revolusi mobile gaming 2000-an membentuk industri modern yang kini bernilai ratusan miliar dollar.",
    technologies: [
      "Game Engines: Unity, Unreal Engine, Godot",
      "Programming: C#, C++, JavaScript, Python",
      "Graphics: OpenGL, DirectX, Vulkan",
      "Audio: FMOD, Wwise, OpenAL",
      "Physics: Box2D, Bullet Physics, Havok",
      "Networking: Photon, Mirror, Custom solutions",
      "Platform SDKs: Steam, Mobile (iOS/Android)",
      "Version Control: Git, Perforce, Plastic SCM",
    ],
    applications: [
      "Mobile games - Casual dan hyper-casual gaming",
      "PC games - Indie dan AAA development",
      "Console games - PlayStation, Xbox, Nintendo",
      "Web games - Browser-based gaming",
      "VR/AR games - Immersive gaming experiences",
      "Educational games - Gamification of learning",
      "Serious games - Training dan simulation",
      "Esports - Competitive gaming platforms",
    ],
    currentTrends: [
      "Cloud gaming - Streaming games without downloads",
      "Indie game renaissance - Small teams creating hit games",
      "Live service games - Ongoing content updates",
      "Cross-platform play - Gaming across multiple devices",
      "AI in games - Procedural generation dan smart NPCs",
      "Blockchain gaming - NFTs dan play-to-earn models",
    ],
    challenges: [
      "Technical complexity - Optimizing for multiple platforms",
      "Creative vision - Balancing innovation dengan market demands",
      "Team coordination - Managing multidisciplinary teams",
      "Budget constraints - Controlling development costs",
      "Quality assurance - Thorough testing across platforms",
      "Market competition - Standing out in saturated market",
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "AI models and intelligent applications",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    overview:
      "Machine Learning adalah cabang artificial intelligence yang memungkinkan komputer belajar dan membuat prediksi atau keputusan tanpa pemrograman eksplisit, menggunakan algoritma untuk menganalisis data dan menemukan pola.",
    history:
      "ML dimulai pada 1950-an dengan konsep neural networks. Perkembangan significant pada 1980-90an dengan backpropagation, lalu revolusi deep learning pada 2010-an dengan breakthrough seperti AlexNet (2012) dan GPT models yang mengubah landscape AI modern.",
    technologies: [
      "Frameworks: TensorFlow, PyTorch, Scikit-learn",
      "Languages: Python, R, Julia, Scala",
      "Cloud Platforms: AWS ML, Google AI, Azure ML",
      "Data Processing: Pandas, NumPy, Apache Spark",
      "Visualization: Matplotlib, Seaborn, Plotly",
      "MLOps: MLflow, Kubeflow, DVC",
      "Specialized: OpenCV (Computer Vision), NLTK (NLP)",
      "Hardware: GPUs, TPUs, specialized AI chips",
    ],
    applications: [
      "Computer Vision - Image recognition dan object detection",
      "Natural Language Processing - Chatbots dan language translation",
      "Recommendation Systems - Personalized content delivery",
      "Predictive Analytics - Business forecasting dan insights",
      "Healthcare AI - Medical diagnosis dan drug discovery",
      "Autonomous Systems - Self-driving cars dan robots",
      "Financial Services - Fraud detection dan algorithmic trading",
      "Smart IoT - Intelligent connected devices",
    ],
    currentTrends: [
      "Large Language Models (LLMs) - GPT, BERT, dan successors",
      "Generative AI - Creating content from text prompts",
      "Edge AI - Running ML models on mobile devices",
      "Federated Learning - Training models without centralizing data",
      "AutoML - Automated machine learning pipelines",
      "Explainable AI - Understanding model decision-making",
    ],
    challenges: [
      "Data quality - Ensuring clean dan representative datasets",
      "Model interpretability - Understanding black box decisions",
      "Bias dan fairness - Preventing discriminatory outcomes",
      "Computational costs - Managing expensive training processes",
      "Privacy concerns - Protecting sensitive training data",
      "Deployment complexity - Moving from lab to production",
    ],
  },
  {
    id: "vr",
    name: "Virtual Reality",
    description: "Immersive VR experiences and applications",
    icon: Eye,
    color: "from-pink-500 to-rose-500",
    overview:
      "Virtual Reality adalah teknologi yang menciptakan lingkungan simulasi tiga dimensi yang imersif, memungkinkan user berinteraksi dengan dunia digital seolah-olah nyata melalui headset dan controller khusus.",
    history:
      "Konsep VR dimulai pada 1960-an dengan Sensorama dan HMD pertama. Perkembangan modern dimulai dengan Oculus Rift Kickstarter (2012), diikuti PlayStation VR, HTC Vive, dan generasi terbaru seperti Meta Quest dan Apple Vision Pro.",
    technologies: [
      "Hardware: Oculus/Meta Quest, PICO, HTC Vive, PlayStation VR",
      "Game Engines: Unity 3D, Unreal Engine",
      "SDKs: OpenXR, Oculus SDK, SteamVR",
      "Tracking: 6DOF tracking, hand tracking, eye tracking",
      "Audio: Spatial audio, haptic feedback",
      "Development: C#, C++, JavaScript (WebXR)",
      "Platforms: PC VR, Standalone VR, Mobile VR",
      "Cloud: VR streaming dan remote rendering",
    ],
    applications: [
      "Gaming dan Entertainment - Immersive gaming experiences",
      "Education dan Training - Virtual classrooms dan simulations",
      "Healthcare - Medical training dan therapy applications",
      "Architecture - Virtual building walkthroughs",
      "Manufacturing - Assembly training dan design review",
      "Social VR - Virtual meetings dan social spaces",
      "Tourism - Virtual travel experiences",
      "Fitness - VR workout dan sports simulation",
    ],
    currentTrends: [
      "Standalone VR - No PC required, all-in-one headsets",
      "Mixed Reality (MR) - Blending virtual dengan real world",
      "Social VR platforms - Virtual workspaces dan hangouts",
      "Haptic technology - Advanced touch feedback",
      "Eye tracking - Foveated rendering dan gaze interaction",
      "Wireless VR - Eliminating cables untuk better mobility",
    ],
    challenges: [
      "Motion sickness - Reducing VR-induced discomfort",
      "Hardware costs - Making VR accessible to mainstream",
      "Content creation - Developing compelling VR experiences",
      "User interface - Designing intuitive VR interactions",
      "Performance optimization - Maintaining high framerates",
      "Physical space - Requiring adequate room for VR",
    ],
  },
  {
    id: "ios",
    name: "iOS Development",
    description: "Native iOS applications and experiences",
    icon: Apple,
    color: "from-blue-500 to-indigo-500",
    overview:
      "iOS Development adalah proses pembuatan aplikasi native untuk perangkat Apple (iPhone, iPad, Apple Watch) menggunakan bahasa Swift dan tools resmi Apple untuk menghadirkan pengalaman user yang optimal dan terintegrasi.",
    history:
      "iOS SDK pertama kali dirilis pada 2008 bersamaan dengan App Store. Perkembangan major termasuk pengenalan Swift (2014), SwiftUI (2019), dan berbagai framework seperti Core ML, ARKit, yang terus berkembang seiring update iOS tahunan.",
    technologies: [
      "Languages: Swift (primary), Objective-C (legacy)",
      "UI Frameworks: SwiftUI, UIKit",
      "Development: Xcode, Interface Builder",
      "Architecture: MVC, MVVM, VIPER, Clean Architecture",
      "Database: Core Data, SQLite, Realm",
      "Networking: URLSession, Alamofire",
      "Testing: XCTest, Quick/Nimble",
      "Distribution: App Store Connect, TestFlight",
    ],
    applications: [
      "Social networking apps dengan iOS integration",
      "Productivity tools memanfaatkan ecosystem Apple",
      "Health & fitness apps dengan HealthKit integration",
      "E-commerce apps dengan Apple Pay integration",
      "Creative apps untuk photography dan video editing",
      "Educational apps dengan Apple Pencil support",
      "AR applications menggunakan ARKit",
      "Watch apps untuk Apple Watch integration",
    ],
    currentTrends: [
      "SwiftUI adoption - Declarative UI framework",
      "iOS 17 features - Interactive widgets dan enhanced privacy",
      "Apple Silicon optimization - Native performance on M-series chips",
      "App Clips - Lightweight app experiences",
      "Privacy-first development - App Tracking Transparency",
      "Cross-platform dengan Swift - Server-side Swift development",
    ],
    challenges: [
      "App Store guidelines - Strict review process dan policies",
      "Device compatibility - Supporting various iOS versions",
      "Performance optimization - Efficient memory dan battery usage",
      "Design consistency - Following Human Interface Guidelines",
      "Testing complexity - Multiple device sizes dan configurations",
      "Development costs - Apple Developer Program dan hardware requirements",
    ],
  },
];

export default function AlphaPage() {
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleExploreProjects = (categoryId: string) => {
    router.push(`/alpha/${categoryId}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">ALPHA</h1>
                <p className="text-slate-300 text-sm">Technology Projects</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Innovation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge projects spanning AR/VR, web development, mobile apps,
            3D modeling, game development, and machine learning. Innovation
            meets practical application.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleExploreProjects(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-medium hover:shadow-lg transition-all duration-200`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>Explore Projects</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-200">
                    {expandedCategories.includes(category.id) ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Hide Details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>Show Details</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Field Information - Conditional Rendering */}
              {expandedCategories.includes(category.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 overflow-hidden">
                  {/* Overview Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {category.overview}
                    </p>
                  </motion.div>

                  {/* History Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      History & Evolution
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {category.history}
                    </p>
                  </motion.div>

                  {/* Technologies Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Technologies & Tools
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/30 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                          <span className="text-slate-200 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Applications Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Applications & Use Cases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                          <span className="text-slate-200 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Current Trends Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Current Trends
                    </h4>
                    <div className="space-y-3">
                      {category.currentTrends.map((trend, trendIndex) => (
                        <div
                          key={trendIndex}
                          className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                          <span className="text-slate-200 text-sm leading-relaxed">
                            {trend}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Challenges Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Challenges & Considerations
                    </h4>
                    <div className="space-y-3">
                      {category.challenges.map((challenge, challengeIndex) => (
                        <div
                          key={challengeIndex}
                          className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:border-red-400/30 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2"></div>
                          <span className="text-slate-200 text-sm leading-relaxed">
                            {challenge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technology Stack Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-slate-300">Tech Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-slate-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                2.5K+
              </div>
              <div className="text-slate-300">GitHub Stars</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
