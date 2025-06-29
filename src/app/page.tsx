"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronRight,
  Languages,
  Cpu,
  Award,
  Globe,
  Code,
  Smartphone,
  Palette,
  Gamepad2,
  Brain,
  Eye,
  Apple,
  GraduationCap,
  FileText,
  Trophy,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: "albi",
    title: "ALBI",
    subtitle: "Language Learning Projects",
    description:
      "Comprehensive multilingual education platform featuring interactive learning experiences across English, Arabic, and Korean languages",
    detailedDescription:
      "Our ALBI category encompasses cutting-edge language learning solutions that bridge cultural gaps and enhance global communication. From AI-powered grammar tutors to immersive conversation simulators, each project is designed to make language learning engaging, effective, and accessible to learners worldwide.",
    highlights: [
      "3 Languages Supported",
      "AI-Powered Learning",
      "Cultural Integration",
      "Interactive Experiences",
    ],
    stats: {
      projects: 9,
      languages: 3,
      users: "2K+",
      completion: "87%",
    },
    color: "from-blue-500 to-cyan-500",
    icon: Languages,
    sections: [
      {
        name: "English Language",
        icon: Globe,
        description: "English learning and teaching projects",
        image: "/projects/english-preview.jpg",
        overview:
          "English Language learning encompasses comprehensive methodologies dan technologies untuk menguasai bahasa Inggris sebagai bahasa internasional yang paling banyak digunakan dalam komunikasi global, bisnis, dan teknologi.",
        history:
          "Pembelajaran bahasa Inggris modern dimulai dengan metode Grammar-Translation pada abad ke-19, berkembang menjadi Direct Method, lalu Audio-Lingual pada 1950-an, dan kini menggunakan Communicative Language Teaching yang diperkuat dengan teknologi AI dan aplikasi mobile.",
        technologies: [
          "AI/ML untuk personalized learning",
          "Natural Language Processing (NLP)",
          "Speech Recognition dan Text-to-Speech",
          "Adaptive Learning Algorithms",
          "Mobile Learning Apps (React Native, Flutter)",
          "Web-based Learning Platforms (React, Vue.js)",
          "Gamification Engines",
          "Progress Tracking Systems",
        ],
        applications: [
          "Grammar correction dan analysis tools",
          "Vocabulary building applications",
          "Pronunciation training dengan AI feedback",
          "Reading comprehension platforms",
          "Writing assistant tools",
          "Speaking practice dengan chatbots",
          "TOEFL/IELTS preparation systems",
          "Business English training platforms",
        ],
        currentTrends: [
          "AI-powered personalized learning paths",
          "Immersive VR language learning environments",
          "Microlearning dengan bite-sized lessons",
          "Social learning platforms dengan peer interaction",
          "Adaptive assessment systems",
          "Multimodal learning (visual, audio, kinesthetic)",
        ],
        challenges: [
          "Accent variation - Handling different English accents",
          "Context understanding - Teaching appropriate usage",
          "Motivation - Maintaining learner engagement",
          "Cultural context - Teaching language dalam cultural setting",
          "Individual pace - Accommodating different learning speeds",
          "Assessment accuracy - Measuring true language proficiency",
        ],
      },
      {
        name: "Arabic Language",
        icon: Globe,
        description: "Arabic language learning resources",
        image: "/projects/arabic-preview.jpg",
        overview:
          "Arabic Language learning focuses pada penguasaan bahasa Arab sebagai bahasa liturgi Islam dan bahasa resmi 22 negara, dengan emphasis pada penguasaan script, grammar, dan cultural context yang unique.",
        history:
          "Pembelajaran bahasa Arab dimulai dengan tradisi hafalan Al-Quran, berkembang dengan metode klasik nahw dan sarf pada abad ke-8, dan kini mengintegrasikan teknologi modern untuk non-native speakers dengan focus pada practical communication skills.",
        technologies: [
          "Arabic OCR dan text recognition",
          "Right-to-left text processing",
          "Arabic speech synthesis dan recognition",
          "Diacritics (harakat) processing systems",
          "Arabic keyboard input methods",
          "Morphological analysis tools",
          "Arabic-specific learning platforms",
          "Cultural context integration systems",
        ],
        applications: [
          "Arabic alphabet learning dengan interactive writing",
          "Quranic Arabic comprehension tools",
          "Modern Standard Arabic (MSA) learning",
          "Dialect-specific learning (Egyptian, Levantine, Gulf)",
          "Arabic calligraphy digital tools",
          "Arabic literature reading platforms",
          "Business Arabic communication training",
          "Arabic-English translation tools",
        ],
        currentTrends: [
          "AI-powered Arabic diacritization",
          "Cultural immersion through digital platforms",
          "Arabic content creation tools",
          "Cross-cultural communication training",
          "Heritage language preservation programs",
          "Arabic for specific purposes (business, academic)",
        ],
        challenges: [
          "Script complexity - Mastering Arabic writing system",
          "Dialectal variation - Managing multiple Arabic dialects",
          "Cultural sensitivity - Teaching appropriate cultural context",
          "Technical challenges - Right-to-left text processing",
          "Resource scarcity - Quality Arabic learning materials",
          "Pronunciation accuracy - Correctly producing Arabic sounds",
        ],
      },
      {
        name: "Korean Language",
        icon: Globe,
        description: "Korean language study materials",
        image: "/projects/korean-preview.jpg",
        overview:
          "Korean Language learning telah mengalami boom global berkat Korean Wave (Hallyu), dengan focus pada Hangul mastery, grammar patterns, dan cultural integration melalui K-pop, K-drama, dan Korean entertainment content.",
        history:
          "Hangul diciptakan pada 1443 oleh Raja Sejong the Great. Pembelajaran bahasa Korea modern berkembang pesat sejak 1990-an dengan Korean Wave, dan mencapai puncak popularity pada 2010-an dengan global spread dari K-pop dan K-drama.",
        technologies: [
          "Hangul recognition dan input systems",
          "Korean speech processing",
          "K-content integration platforms",
          "Korean grammar pattern analysis",
          "Cultural context learning systems",
          "Korean-specific mobile keyboards",
          "Subtitle-based learning tools",
          "Korean media content integration",
        ],
        applications: [
          "Hangul writing system mastery",
          "K-pop lyric-based vocabulary learning",
          "K-drama subtitle learning platforms",
          "Korean grammar pattern recognition",
          "Korean culture dan etiquette training",
          "TOPIK (Test of Proficiency in Korean) preparation",
          "Korean business communication training",
          "Korean cooking dan lifestyle vocabulary",
        ],
        currentTrends: [
          "K-content integrated learning - Using popular media",
          "Gamified Korean learning dengan K-pop elements",
          "Virtual Korean cultural experiences",
          "AI-powered Korean conversation practice",
          "Korean heritage language programs",
          "Professional Korean untuk career development",
        ],
        challenges: [
          "Honorific system complexity - Mastering formal/informal speech",
          "Cultural nuances - Understanding Korean social hierarchy",
          "Entertainment vs education - Balancing fun dengan serious learning",
          "Pronunciation accuracy - Korean specific sounds",
          "Grammar complexity - Korean sentence structure",
          "Motivation sustainability - Maintaining interest post-initial enthusiasm",
        ],
      },
    ],
  },
  {
    id: "alpha",
    title: "ALPHA",
    subtitle: "Technology Projects",
    description:
      "Revolutionary technology solutions spanning AR/VR, mobile development, web platforms, and AI-powered applications",
    detailedDescription:
      "ALPHA represents the pinnacle of technological innovation, showcasing projects that push the boundaries of what's possible. From immersive augmented reality experiences to sophisticated machine learning algorithms, each project demonstrates expertise in cutting-edge technologies and their practical applications.",
    highlights: [
      "8 Tech Domains",
      "AR/VR Experiences",
      "AI/ML Integration",
      "Cross-Platform Solutions",
    ],
    stats: {
      projects: 24,
      technologies: 8,
      users: "5K+",
      platforms: "Multi",
    },
    color: "from-purple-500 to-pink-500",
    icon: Cpu,
    sections: [
      {
        name: "Augmented Reality",
        icon: Eye,
        description: "AR applications and experiences",
        image: "/projects/ar-preview.jpg",
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
        name: "Website Development",
        icon: Code,
        description: "Modern web applications",
        image: "/projects/web-preview.jpg",
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
        name: "Android Development",
        icon: Smartphone,
        description: "Native Android applications",
        image: "/projects/android-preview.jpg",
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
        name: "Blender/3D Modeling",
        icon: Palette,
        description: "3D modeling and animation",
        image: "/projects/blender-preview.jpg",
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
        name: "Game Development",
        icon: Gamepad2,
        description: "Interactive games and experiences",
        image: "/projects/game-preview.jpg",
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
        name: "Machine Learning",
        icon: Brain,
        description: "AI and ML projects",
        image: "/projects/ml-preview.jpg",
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
        name: "Virtual Reality",
        icon: Eye,
        description: "VR applications and experiences",
        image: "/projects/vr-preview.jpg",
        overview:
          "Virtual Reality adalah teknologi yang menciptakan lingkungan simulasi tiga dimensi yang imersif, memungkinkan user berinteraksi dengan dunia digital seolah-oleh nyata melalui headset dan controller khusus.",
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
        name: "iOS Development",
        icon: Apple,
        description: "Native iOS applications",
        image: "/projects/ios-preview.jpg",
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
    ],
  },
  {
    id: "arc",
    title: "ARC",
    subtitle: "Achievements, Research & Certifications",
    description:
      "Distinguished professional accomplishments, industry certifications, academic research, and recognition in technology and innovation",
    detailedDescription:
      "ARC chronicles the journey of professional excellence and continuous learning. This collection features industry-recognized certifications, groundbreaking research contributions, and prestigious awards that demonstrate commitment to innovation and expertise in emerging technologies.",
    highlights: [
      "Industry Certifications",
      "Research Publications",
      "Innovation Awards",
      "Academic Excellence",
    ],
    stats: {
      certificates: 12,
      research: 6,
      awards: 8,
      recognition: "Global",
    },
    color: "from-green-500 to-emerald-500",
    icon: Award,
    sections: [
      {
        name: "Certificates",
        icon: GraduationCap,
        description: "Professional certifications",
        image: "/projects/cert-preview.jpg",
        overview:
          "Professional Certificates merupakan validasi formal terhadap keahlian dan kompetensi dalam bidang teknologi, yang diakui industri dan mendemonstrasikan commitment terhadap continuous learning dan professional development.",
        history:
          "Sertifikasi IT dimulai pada 1980-an dengan vendor-specific certifications. Perkembangan major termasuk Microsoft certifications (1990s), Cisco CCNA (1990s), AWS certifications (2013), dan era modern dengan cloud dan AI certifications yang berkembang pesat.",
        technologies: [
          "Cloud Platforms: AWS, Google Cloud, Microsoft Azure",
          "DevOps: Docker, Kubernetes, Jenkins, Terraform",
          "Security: CISSP, CEH, CompTIA Security+",
          "Data: Google Data Analytics, Microsoft Power BI",
          "AI/ML: TensorFlow, Google AI, AWS AI/ML",
          "Project Management: PMP, Scrum Master, Agile",
          "Programming: Oracle Java, Microsoft C#",
          "Networking: Cisco CCNA, CompTIA Network+",
        ],
        applications: [
          "Career advancement dan professional recognition",
          "Skill validation untuk employers dan clients",
          "Salary increase dan better job opportunities",
          "Industry credibility dan trust building",
          "Continuous learning dan staying current",
          "Compliance requirements untuk certain roles",
          "Personal branding dan professional portfolio",
          "Network expansion dengan certified professionals",
        ],
        currentTrends: [
          "Cloud certifications - AWS, Azure, GCP dominance",
          "AI/ML certifications - Growing demand for AI skills",
          "Cybersecurity certifications - Increasing security awareness",
          "Digital transformation certifications",
          "Remote proctoring - Online certification exams",
          "Micro-credentials - Specialized skill certifications",
        ],
        challenges: [
          "Rapidly changing technology - Keeping certifications current",
          "Cost considerations - Expensive certification fees",
          "Time investment - Balancing study dengan work demands",
          "Practical vs theoretical - Bridging knowledge dan real-world application",
          "Certification validity - Managing expiration dates",
          "ROI measurement - Quantifying certification value",
        ],
      },
      {
        name: "Research Projects",
        icon: FileText,
        description: "Academic and professional research",
        image: "/projects/research-preview.jpg",
        overview:
          "Research Projects encompass systematic investigation dan study dalam teknologi emerging, contributing to knowledge advancement dan practical solutions untuk real-world problems through rigorous methodology dan peer review.",
        history:
          "Technology research evolution dari academic institutions pada 1950-60s, corporate R&D labs pada 1970-80s, hingga modern collaborative research dengan open science, preprint servers, dan global research collaboration yang democratized knowledge sharing.",
        technologies: [
          "Research Tools: Jupyter Notebooks, R, MATLAB",
          "Data Analysis: Python (Pandas, NumPy), SQL",
          "Visualization: Matplotlib, Seaborn, D3.js",
          "Statistical Software: SPSS, SAS, Stata",
          "Survey Platforms: Qualtrics, SurveyMonkey",
          "Literature Management: Zotero, Mendeley",
          "Collaboration: GitHub, Overleaf (LaTeX)",
          "Publishing: ArXiv, ResearchGate, Academic journals",
        ],
        applications: [
          "Algorithm development dan optimization",
          "User experience research dan human-computer interaction",
          "Performance analysis dan benchmarking studies",
          "Security vulnerability research",
          "Educational technology effectiveness studies",
          "Market research dan technology adoption studies",
          "Interdisciplinary research combining tech dengan other fields",
          "Open source project contributions dan documentation",
        ],
        currentTrends: [
          "Open science initiatives - Making research accessible",
          "Reproducible research - Ensuring research can be replicated",
          "Interdisciplinary collaboration - Tech meets other domains",
          "AI-assisted research - Using AI tools untuk analysis",
          "Real-time research sharing - Preprint servers dan rapid publication",
          "Citizen science - Involving public in research projects",
        ],
        challenges: [
          "Funding acquisition - Securing research grants dan sponsorship",
          "Publication pressure - Balancing quality dengan quantity",
          "Reproducibility crisis - Ensuring research can be replicated",
          "Ethical considerations - Responsible research conduct",
          "Data privacy - Handling sensitive research data",
          "Time constraints - Long research cycles vs fast-moving tech",
        ],
      },
      {
        name: "Achievements",
        icon: Trophy,
        description: "Awards and recognitions",
        image: "/projects/awards-preview.jpg",
        overview:
          "Professional Achievements represent recognition of outstanding contributions, innovative solutions, dan leadership in technology field, serving as milestones dalam career development dan industry impact.",
        history:
          "Technology awards evolution dari early computing pioneers recognition (1960s-70s), corporate excellence programs (1980s-90s), hingga modern diverse recognition including diversity awards, innovation competitions, dan social impact recognitions.",
        technologies: [
          "Innovation Platforms: Hackathons, Innovation challenges",
          "Competition Platforms: TopCoder, Kaggle competitions",
          "Portfolio Platforms: GitHub showcases, Personal websites",
          "Professional Networks: LinkedIn achievements",
          "Award Management: Digital badges, Blockchain certificates",
          "Measurement Tools: Impact metrics, Citation tracking",
          "Presentation Tools: Demo videos, Case studies",
          "Recognition Systems: Peer nomination platforms",
        ],
        applications: [
          "Industry recognition awards untuk innovative solutions",
          "Academic achievements dalam research dan publication",
          "Competition wins dalam programming dan AI contests",
          "Leadership recognition dalam team dan project management",
          "Community contributions dalam open source projects",
          "Speaking engagements dan conference presentations",
          "Mentorship dan knowledge sharing recognition",
          "Social impact awards untuk technology for good initiatives",
        ],
        currentTrends: [
          "Diversity dan inclusion awards - Recognizing underrepresented groups",
          "Sustainability awards - Green technology innovations",
          "AI ethics awards - Responsible AI development",
          "Remote work leadership recognition",
          "Digital transformation success stories",
          "Open source contribution recognition",
        ],
        challenges: [
          "Subjective evaluation - Ensuring fair assessment criteria",
          "Visibility challenges - Getting work noticed by award committees",
          "Documentation burden - Properly documenting achievements",
          "Imposter syndrome - Self-advocacy dan confidence building",
          "Time investment - Balancing achievement pursuit dengan actual work",
          "Meaningful impact - Focusing on substance over recognition",
        ],
      },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "suggestion", // suggestion or criticism
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Navigation function
  const handleExploreClick = (categoryId: string) => {
    router.push(`/${categoryId}`);
  };
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFeedbackForm({ name: "", email: "", message: "", type: "suggestion" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const personalInfo = {
    name: "Alvin Ilham",
    title: "Technology Innovator & Multilingual Solutions Architect",
    description:
      "Pioneering the future of education through AI-powered language learning, immersive AR/VR experiences, and cutting-edge full-stack development",
    education: "Pendidikan Teknik Informatika, Universitas Negeri Padang",
    location: "Padang, Indonesia",
    github: "https://github.com/alvinilham",
    linkedin: "https://www.linkedin.com/in/alvinilham",
    whatsapp: "+6281996114027",
    email: "alvinilham.play@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Personal Information Section - Moved to top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              damping: 20,
            }}
            className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">
                      <stop
                        offset="0%"
                        style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#06b6d4", stopOpacity: 0.4 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 100 Q 100 20 180 100 Q 100 180 20 100"
                    fill="url(#gradient1)"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Main Title */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                type: "spring",
                damping: 15,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 relative z-10"
              style={{
                textShadow: "0 0 50px rgba(59, 130, 246, 0.3)",
                filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))",
              }}>
              Welcome to the Future
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-6 relative z-10 font-light tracking-wide">
              Where Innovation Meets Passion
            </motion.p>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -120],
                  x: [0, (i % 2 === 0 ? 60 : -60) + (Math.random() - 0.5) * 40],
                }}
                transition={{
                  duration: 4,
                  delay: 2 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 4 === 0
                    ? "bg-blue-400"
                    : i % 4 === 1
                    ? "bg-purple-400"
                    : i % 4 === 2
                    ? "bg-cyan-400"
                    : "bg-pink-400"
                }`}
                style={{
                  left: `${25 + i * 7}%`,
                  top: "60%",
                  boxShadow: `0 0 20px ${
                    i % 4 === 0
                      ? "#60a5fa"
                      : i % 4 === 1
                      ? "#a78bfa"
                      : i % 4 === 2
                      ? "#22d3ee"
                      : "#f472b6"
                  }`,
                }}
              />
            ))}

            {/* Additional Glow Effects */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <User className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-2xl font-bold text-white">
              About Me
            </motion.h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Profile Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-8">
                {/* Name and Title */}
                <div className="space-y-4">
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {personalInfo.name}
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="relative">
                    <p className="text-lg md:text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                      {personalInfo.title}
                    </p>
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 2 }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-slate-300 leading-relaxed text-base">
                  {personalInfo.description}
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  className="grid grid-cols-3 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400">3+</div>
                    <div className="text-sm text-slate-400">Years Exp</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400">50+</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400">
                      15+
                    </div>
                    <div className="text-sm text-slate-400">Technologies</div>
                  </motion.div>
                </motion.div>

                {/* Education & Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Education</p>
                      <p className="text-white text-sm font-medium">
                        {personalInfo.education}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white text-sm font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400 mb-4">Connect with me</p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-600/20 text-gray-300 hover:bg-gray-600/30 hover:text-white transition-all duration-200 border border-gray-600/30">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 hover:text-white transition-all duration-200 border border-blue-600/30">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/${personalInfo.whatsapp.replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600/20 text-green-300 hover:bg-green-600/30 hover:text-white transition-all duration-200 border border-green-600/30">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">WhatsApp</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 hover:text-white transition-all duration-200 border border-purple-600/30">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Futuristic Profile Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="relative flex justify-center lg:justify-end">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Rotating Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-80 h-80 rounded-full border border-blue-500/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-96 h-96 rounded-full border border-purple-500/20"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-[26rem] h-[26rem] rounded-full border border-cyan-500/20"
                  />

                  {/* Glowing Orbs */}
                  {[
                    {
                      left: "80%",
                      top: "15%",
                      color: "bg-blue-400",
                      shadow: "#60a5fa",
                    },
                    {
                      left: "85%",
                      top: "45%",
                      color: "bg-purple-400",
                      shadow: "#a78bfa",
                    },
                    {
                      left: "65%",
                      top: "75%",
                      color: "bg-cyan-400",
                      shadow: "#22d3ee",
                    },
                    {
                      left: "25%",
                      top: "80%",
                      color: "bg-blue-400",
                      shadow: "#60a5fa",
                    },
                    {
                      left: "15%",
                      top: "50%",
                      color: "bg-purple-400",
                      shadow: "#a78bfa",
                    },
                    {
                      left: "35%",
                      top: "20%",
                      color: "bg-cyan-400",
                      shadow: "#22d3ee",
                    },
                  ].map((orb, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className={`absolute w-3 h-3 rounded-full ${orb.color}`}
                      style={{
                        left: orb.left,
                        top: orb.top,
                        boxShadow: `0 0 20px ${orb.shadow}`,
                      }}
                    />
                  ))}
                </div>

                {/* Profile Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10">
                  {/* Hexagonal Frame */}
                  <div className="relative w-80 h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl" />

                    {/* Main Photo Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group shadow-2xl">
                      {/* Animated border glow */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                      />

                      <Image
                        src="/profile/alvin2.jpg"
                        alt={personalInfo.name}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-500"
                        priority
                        sizes="(max-width: 768px) 80vw, 320px"
                      />

                      {/* Holographic Overlay */}
                      <motion.div
                        animate={{
                          opacity: [0, 0.3, 0],
                          x: [-100, 100],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12"
                      />

                      {/* Online Status - Removed */}

                      {/* Floating Tech Icons */}
                      {[Languages, Cpu, Brain, Eye].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20, -40],
                          }}
                          transition={{
                            duration: 4,
                            delay: 3 + i * 0.8,
                            repeat: Infinity,
                            repeatDelay: 8,
                          }}
                          className={`absolute ${
                            i === 0
                              ? "top-8 left-8"
                              : i === 1
                              ? "top-8 right-8"
                              : i === 2
                              ? "bottom-8 left-8"
                              : "bottom-8 right-8"
                          } p-2 rounded-lg bg-gradient-to-br ${
                            i === 0
                              ? "from-blue-500 to-cyan-500"
                              : i === 1
                              ? "from-purple-500 to-pink-500"
                              : i === 2
                              ? "from-green-500 to-emerald-500"
                              : "from-orange-500 to-red-500"
                          } shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Data Panels */}
                {[
                  {
                    label: "ALBI",
                    value: "9 Projects",
                    delay: 2.5,
                    position: "top-0 right-20",
                  },
                  {
                    label: "ALPHA",
                    value: "24 Projects",
                    delay: 3,
                    position: "top-20 right-0",
                  },
                  {
                    label: "ARC",
                    value: "26 Achievements",
                    delay: 3.5,
                    position: "bottom-20 right-0",
                  },
                ].map((panel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: panel.delay }}
                    className={`absolute ${panel.position} bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center shadow-lg`}>
                    <div className="text-sm font-bold text-white">
                      {panel.value}
                    </div>
                    <div className="text-xs text-slate-400">{panel.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group">
              <div
                className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )
                }>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                        selectedCategory === category.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-300 text-base mb-4 font-medium">
                    {category.subtitle}
                  </p>

                  {/* Main Description */}
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 text-sm font-semibold mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                          <span className="text-slate-400 text-xs">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-slate-300 text-sm font-semibold mb-3">
                      Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(category.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-slate-500 text-xs capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Area */}
                  <div className="space-y-3">
                    {/* Click to expand hint */}
                    <div className="text-center py-2">
                      <span className="text-slate-500 text-xs">
                        {selectedCategory === category.id
                          ? "Click to collapse"
                          : "Click to view sections"}
                      </span>
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExploreClick(category.id);
                      }}
                      className={`block w-full px-6 py-3 rounded-xl bg-gradient-to-r ${category.color} text-white font-semibold transition-all duration-300 hover:shadow-2xl shadow-xl cursor-pointer border-none relative overflow-hidden group`}>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="flex items-center justify-center space-x-2 relative z-10">
                        <span className="text-sm">
                          Explore {category.title}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Expanded Sections */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedCategory === category.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <div className="px-8 pb-8">
                    {/* Detailed Description when expanded */}
                    {selectedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="text-slate-300 text-sm font-semibold mb-2">
                          About {category.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {category.detailedDescription}
                        </p>
                      </motion.div>
                    )}

                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-slate-300 text-sm font-semibold mb-4">
                        Technology Fields
                      </h4>
                      <div className="grid grid-cols-1 gap-6">
                        {category.sections.map((section, sectionIndex) => (
                          <motion.div
                            key={section.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: selectedCategory === category.id ? 1 : 0,
                              x: selectedCategory === category.id ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: sectionIndex * 0.1,
                            }}
                            className="group">
                            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/30">
                              {/* Section Header */}
                              <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                                  {section.image ? (
                                    <Image
                                      src={section.image}
                                      alt={section.name}
                                      width={48}
                                      height={48}
                                      className="object-cover"
                                    />
                                  ) : (
                                    <section.icon className="w-6 h-6 text-slate-300" />
                                  )}
                                </div>
                                <div>
                                  <h5 className="text-white font-semibold text-lg">
                                    {section.name}
                                  </h5>
                                  <p className="text-slate-400 text-sm">
                                    {section.description}
                                  </p>
                                </div>
                              </div>

                              {/* Field Overview */}
                              <div className="mb-6">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                  {section.overview}
                                </p>
                              </div>

                              {/* Technologies */}
                              <div className="mb-6">
                                <h6 className="text-slate-300 text-sm font-semibold mb-3 flex items-center">
                                  <Code className="w-4 h-4 mr-2" />
                                  Technologies & Tools
                                </h6>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {section.technologies
                                    .slice(0, 6)
                                    .map((tech, techIndex) => (
                                      <div
                                        key={techIndex}
                                        className="flex items-center text-slate-400 text-xs">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                                        {tech}
                                      </div>
                                    ))}
                                </div>
                                {section.technologies.length > 6 && (
                                  <p className="text-slate-500 text-xs mt-2">
                                    +{section.technologies.length - 6} more
                                    technologies
                                  </p>
                                )}
                              </div>

                              {/* Applications */}
                              <div className="mb-6">
                                <h6 className="text-slate-300 text-sm font-semibold mb-3 flex items-center">
                                  <Lightbulb className="w-4 h-4 mr-2" />
                                  Key Applications
                                </h6>
                                <div className="grid grid-cols-1 gap-2">
                                  {section.applications
                                    .slice(0, 4)
                                    .map((app, appIndex) => (
                                      <div
                                        key={appIndex}
                                        className="flex items-start text-slate-400 text-xs">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-1.5 flex-shrink-0"></div>
                                        {app}
                                      </div>
                                    ))}
                                </div>
                                {section.applications.length > 4 && (
                                  <p className="text-slate-500 text-xs mt-2">
                                    +{section.applications.length - 4} more
                                    applications
                                  </p>
                                )}
                              </div>

                              {/* Current Trends */}
                              <div className="mb-4">
                                <h6 className="text-slate-300 text-sm font-semibold mb-3 flex items-center">
                                  <TrendingUp className="w-4 h-4 mr-2" />
                                  Current Trends
                                </h6>
                                <div className="flex flex-wrap gap-2">
                                  {section.currentTrends
                                    .slice(0, 3)
                                    .map((trend, trendIndex) => (
                                      <span
                                        key={trendIndex}
                                        className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">
                                        {trend.split(" - ")[0]}
                                      </span>
                                    ))}
                                  {section.currentTrends.length > 3 && (
                                    <span className="px-2 py-1 rounded-md bg-slate-500/20 text-slate-400 text-xs">
                                      +{section.currentTrends.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feedback Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-slate-800/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Feedback & Suggestions
                </h3>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <p className="text-slate-300 mb-6 text-center">
                  Your feedback helps me improve! Please share your thoughts,
                  suggestions, or constructive criticism.
                </p>

                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={feedbackForm.name}
                        onChange={(e) =>
                          setFeedbackForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={feedbackForm.email}
                        onChange={(e) =>
                          setFeedbackForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Type of Feedback
                    </label>
                    <select
                      value={feedbackForm.type}
                      onChange={(e) =>
                        setFeedbackForm((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                      <option value="suggestion" className="bg-slate-800">
                        Suggestion
                      </option>
                      <option value="criticism" className="bg-slate-800">
                        Constructive Criticism
                      </option>
                      <option value="general" className="bg-slate-800">
                        General Feedback
                      </option>
                      <option value="collaboration" className="bg-slate-800">
                        Collaboration Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={feedbackForm.message}
                      onChange={(e) =>
                        setFeedbackForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                      placeholder="Share your thoughts, suggestions, or feedback..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Feedback</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-center">
                      <p className="font-medium">
                        Thank you for your feedback!
                      </p>
                      <p className="text-sm mt-1">
                        Your message has been sent successfully.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-slate-800/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Languages className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Cpu className="w-6 h-6" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors duration-200">
                <Award className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
