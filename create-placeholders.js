const fs = require("fs");
const path = require("path");

const createProfileSVG =
  () => `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="profile-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#profile-bg)"/>
  <circle cx="200" cy="160" r="50" fill="white" opacity="0.3"/>
  <circle cx="185" cy="145" r="8" fill="white" opacity="0.8"/>
  <circle cx="215" cy="145" r="8" fill="white" opacity="0.8"/>
  <path d="M 170 180 Q 200 200 230 180" stroke="white" stroke-width="4" fill="none" opacity="0.8"/>
  <text x="200" y="280" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">Ahmad Rifai</text>
  <text x="200" y="300" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle" opacity="0.8">Full-Stack Developer</text>
  <text x="200" y="320" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle" opacity="0.8">& Language Enthusiast</text>
</svg>`;

const createPlaceholderSVG = (
  title,
  color = "#3b82f6"
) => `<svg width="400" height="225" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg-gradient)"/>
  <rect x="20" y="20" width="360" height="185" rx="12" fill="url(#accent-gradient)" opacity="0.2"/>
  <circle cx="200" cy="80" r="25" fill="${color}" opacity="0.8"/>
  <circle cx="200" cy="80" r="15" fill="white" opacity="0.3"/>
  <rect x="50" y="130" width="300" height="3" rx="1.5" fill="${color}" opacity="0.6"/>
  <rect x="80" y="150" width="240" height="2" rx="1" fill="white" opacity="0.3"/>
  <text x="200" y="180" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#e2e8f0" text-anchor="middle">${title}</text>
  <text x="200" y="195" font-family="Arial, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Project Preview</text>
</svg>`;

const placeholders = [
  // Profile
  { path: "profile/ahmad-rifai.jpg", title: "Profile Photo", color: "#8b5cf6" },

  // ALBI Category
  {
    path: "projects/english-preview.jpg",
    title: "English Projects",
    color: "#3b82f6",
  },
  {
    path: "projects/arabic-preview.jpg",
    title: "Arabic Projects",
    color: "#10b981",
  },
  {
    path: "projects/korean-preview.jpg",
    title: "Korean Projects",
    color: "#f59e0b",
  },

  // Grammar Tutor Project
  {
    path: "projects/grammar-tutor.jpg",
    title: "Grammar Tutor",
    color: "#3b82f6",
  },
  {
    path: "projects/grammar-tutor-1.jpg",
    title: "Grammar Interface",
    color: "#3b82f6",
  },
  {
    path: "projects/grammar-tutor-2.jpg",
    title: "Grammar Exercises",
    color: "#3b82f6",
  },
  {
    path: "projects/grammar-tutor-3.jpg",
    title: "Grammar Analytics",
    color: "#3b82f6",
  },

  // Arabic Alphabet Project
  {
    path: "projects/arabic-alphabet.jpg",
    title: "Arabic Alphabet",
    color: "#10b981",
  },
  {
    path: "projects/arabic-alphabet-1.jpg",
    title: "Arabic Letters",
    color: "#10b981",
  },
  {
    path: "projects/arabic-alphabet-2.jpg",
    title: "Arabic Practice",
    color: "#10b981",
  },
  {
    path: "projects/arabic-alphabet-3.jpg",
    title: "Arabic Audio",
    color: "#10b981",
  },

  // Hangul Master Project
  {
    path: "projects/hangul-master.jpg",
    title: "Hangul Master",
    color: "#f59e0b",
  },
  {
    path: "projects/hangul-master-1.jpg",
    title: "Hangul Practice",
    color: "#f59e0b",
  },
  {
    path: "projects/hangul-master-2.jpg",
    title: "K-pop Learning",
    color: "#f59e0b",
  },
  {
    path: "projects/hangul-master-3.jpg",
    title: "Korean Culture",
    color: "#f59e0b",
  },

  // ALPHA Category
  { path: "projects/ar-preview.jpg", title: "AR Projects", color: "#8b5cf6" },
  { path: "projects/web-preview.jpg", title: "Web Projects", color: "#06b6d4" },
  {
    path: "projects/android-preview.jpg",
    title: "Android Projects",
    color: "#10b981",
  },
  {
    path: "projects/blender-preview.jpg",
    title: "3D Projects",
    color: "#f59e0b",
  },
  {
    path: "projects/game-preview.jpg",
    title: "Game Projects",
    color: "#ef4444",
  },
  { path: "projects/ml-preview.jpg", title: "ML Projects", color: "#8b5cf6" },
  { path: "projects/vr-preview.jpg", title: "VR Projects", color: "#06b6d4" },
  { path: "projects/ios-preview.jpg", title: "iOS Projects", color: "#64748b" },

  // AR Shopping Project
  { path: "projects/ar-shopping.jpg", title: "AR Shopping", color: "#8b5cf6" },
  { path: "projects/ar-shopping-1.jpg", title: "AR Try-On", color: "#8b5cf6" },
  {
    path: "projects/ar-shopping-2.jpg",
    title: "AR Visualization",
    color: "#8b5cf6",
  },
  {
    path: "projects/ar-shopping-3.jpg",
    title: "AR Interface",
    color: "#8b5cf6",
  },
  {
    path: "projects/ar-shopping-4.jpg",
    title: "AR Analytics",
    color: "#8b5cf6",
  },

  // E-commerce Platform
  {
    path: "projects/ecommerce-platform.jpg",
    title: "E-commerce Platform",
    color: "#06b6d4",
  },
  {
    path: "projects/ecommerce-platform-1.jpg",
    title: "Product Catalog",
    color: "#06b6d4",
  },
  {
    path: "projects/ecommerce-platform-2.jpg",
    title: "Shopping Cart",
    color: "#06b6d4",
  },
  {
    path: "projects/ecommerce-platform-3.jpg",
    title: "Admin Dashboard",
    color: "#06b6d4",
  },
  {
    path: "projects/ecommerce-platform-4.jpg",
    title: "Analytics",
    color: "#06b6d4",
  },

  // Fitness Tracker
  {
    path: "projects/fitness-tracker.jpg",
    title: "Fitness Tracker",
    color: "#10b981",
  },
  {
    path: "projects/fitness-tracker-1.jpg",
    title: "Workout Tracking",
    color: "#10b981",
  },
  {
    path: "projects/fitness-tracker-2.jpg",
    title: "Nutrition Guide",
    color: "#10b981",
  },
  {
    path: "projects/fitness-tracker-3.jpg",
    title: "Progress Analytics",
    color: "#10b981",
  },

  // Architectural Visualization
  {
    path: "projects/architectural-viz.jpg",
    title: "Architectural Viz",
    color: "#f59e0b",
  },
  {
    path: "projects/architectural-viz-1.jpg",
    title: "3D Rendering",
    color: "#f59e0b",
  },
  {
    path: "projects/architectural-viz-2.jpg",
    title: "Virtual Tour",
    color: "#f59e0b",
  },
  {
    path: "projects/architectural-viz-3.jpg",
    title: "Material Library",
    color: "#f59e0b",
  },
  {
    path: "projects/architectural-viz-4.jpg",
    title: "Lighting Setup",
    color: "#f59e0b",
  },

  // Puzzle Adventure Game
  {
    path: "projects/puzzle-adventure.jpg",
    title: "Puzzle Adventure",
    color: "#ef4444",
  },
  {
    path: "projects/puzzle-adventure-1.jpg",
    title: "Game World",
    color: "#ef4444",
  },
  {
    path: "projects/puzzle-adventure-2.jpg",
    title: "Puzzle Mechanics",
    color: "#ef4444",
  },
  {
    path: "projects/puzzle-adventure-3.jpg",
    title: "Character Art",
    color: "#ef4444",
  },

  // Medical Image Classifier
  {
    path: "projects/image-classifier.jpg",
    title: "Image Classifier",
    color: "#8b5cf6",
  },
  {
    path: "projects/image-classifier-1.jpg",
    title: "ML Model",
    color: "#8b5cf6",
  },
  {
    path: "projects/image-classifier-2.jpg",
    title: "Analysis Results",
    color: "#8b5cf6",
  },
  {
    path: "projects/image-classifier-3.jpg",
    title: "Medical Interface",
    color: "#8b5cf6",
  },

  // VR Training
  { path: "projects/vr-training.jpg", title: "VR Training", color: "#06b6d4" },
  {
    path: "projects/vr-training-1.jpg",
    title: "VR Environment",
    color: "#06b6d4",
  },
  {
    path: "projects/vr-training-2.jpg",
    title: "Safety Simulation",
    color: "#06b6d4",
  },
  {
    path: "projects/vr-training-3.jpg",
    title: "Training Analytics",
    color: "#06b6d4",
  },

  // Meditation App
  {
    path: "projects/meditation-app.jpg",
    title: "Meditation App",
    color: "#64748b",
  },
  {
    path: "projects/meditation-app-1.jpg",
    title: "Meditation Session",
    color: "#64748b",
  },
  {
    path: "projects/meditation-app-2.jpg",
    title: "Progress Tracking",
    color: "#64748b",
  },
  {
    path: "projects/meditation-app-3.jpg",
    title: "Content Library",
    color: "#64748b",
  },

  // JARVIS Category
  {
    path: "projects/cert-preview.jpg",
    title: "Certificates",
    color: "#10b981",
  },
  {
    path: "projects/research-preview.jpg",
    title: "Research",
    color: "#3b82f6",
  },
  { path: "projects/awards-preview.jpg", title: "Awards", color: "#f59e0b" },

  // AWS Certificate
  {
    path: "projects/aws-cert.jpg",
    title: "AWS Certification",
    color: "#10b981",
  },
  {
    path: "projects/aws-cert-1.jpg",
    title: "Cloud Architecture",
    color: "#10b981",
  },
  { path: "projects/aws-cert-2.jpg", title: "AWS Services", color: "#10b981" },
  {
    path: "projects/aws-cert-3.jpg",
    title: "Security Best Practices",
    color: "#10b981",
  },

  // NLP Research
  {
    path: "projects/nlp-research.jpg",
    title: "NLP Research",
    color: "#3b82f6",
  },
  {
    path: "projects/nlp-research-1.jpg",
    title: "Research Data",
    color: "#3b82f6",
  },
  {
    path: "projects/nlp-research-2.jpg",
    title: "Language Models",
    color: "#3b82f6",
  },
  {
    path: "projects/nlp-research-3.jpg",
    title: "Research Results",
    color: "#3b82f6",
  },

  // Innovation Award
  {
    path: "projects/innovation-award.jpg",
    title: "Innovation Award",
    color: "#f59e0b",
  },
  {
    path: "projects/innovation-award-1.jpg",
    title: "Award Ceremony",
    color: "#f59e0b",
  },
  {
    path: "projects/innovation-award-2.jpg",
    title: "Recognition",
    color: "#f59e0b",
  },
  {
    path: "projects/innovation-award-3.jpg",
    title: "Achievement",
    color: "#f59e0b",
  },
];

const publicDir = path.join(process.cwd(), "public");

placeholders.forEach(({ path: imagePath, title, color }) => {
  const fullPath = path.join(publicDir, imagePath);
  const dir = path.dirname(fullPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write SVG content
  if (imagePath === "profile/ahmad-rifai.jpg") {
    fs.writeFileSync(fullPath, createProfileSVG());
  } else {
    fs.writeFileSync(fullPath, createPlaceholderSVG(title, color));
  }
  console.log(`Created: ${imagePath}`);
});

console.log("All placeholder images created successfully!");
