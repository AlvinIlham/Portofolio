# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing three main categories of projects and achievements.

## 📁 Portfolio Structure

### 🌍 ALBI - Language Learning Projects

- **English Language**: Interactive grammar tutors, conversation simulators, business English tools
- **Arabic Language**: Script mastery, MSA courses, poetry exploration
- **Korean Language**: Hangul learning games, K-drama language lab, business etiquette

### 🚀 ALPHA - Technology Projects

- **Augmented Reality**: AR shopping assistants, educational museum experiences
- **Website Development**: E-learning platforms, real estate portals, social media dashboards
- **Android Development**: Fitness trackers, language exchange apps
- **Blender/3D Modeling**: Architectural visualizations, character animations
- **Game Development**: VR space exploration, educational math games, strategy games
- **Machine Learning**: Image recognition APIs, NLP processors, recommendation engines
- **Virtual Reality**: Training simulators, virtual art galleries
- **iOS Development**: Finance managers, meditation apps

### 🏆 JARVIS - Achievements & Certifications

- **Professional Certifications**: AWS, Google Cloud, Microsoft Azure, Kubernetes
- **Research Projects**: ML for education, AR/VR collaboration, mobile frameworks
- **Awards & Recognition**: Innovation awards, research excellence, open source contributions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or other platforms

## 🎨 Features

- **Modern Design**: Clean, minimalist interface with dark theme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Interactive Navigation**: Fixed navigation bar with active states
- **Project Showcases**: Detailed project cards with technology stacks
- **Achievement Displays**: Professional certifications and research publications
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## 📱 Pages Structure

- `/` - Homepage with category overview
- `/albi` - Language learning projects
- `/alpha` - Technology projects
- `/jarvis` - Achievements and certifications

## 🎯 Customization

### Adding New Projects

1. Navigate to the relevant category page (`/src/app/[category]/page.tsx`)
2. Add your project to the appropriate array
3. Include project details like title, description, tech stack, and status

### Modifying Styles

- Global styles: `/src/app/globals.css`
- Tailwind config: `/tailwind.config.ts`
- Component-specific styles are inline with Tailwind classes

### Updating Content

- Edit the data arrays in each page component
- Update metadata in `/src/app/layout.tsx`
- Modify the hero section content in `/src/app/page.tsx`

## 📦 Project Structure

```
src/
├── app/
│   ├── albi/           # ALBI category page
│   ├── alpha/          # ALPHA category page
│   ├── jarvis/         # JARVIS category page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   └── GlobalNavigation.tsx  # Navigation component
└── ...
```

## 🌟 Key Design Principles

- **Mobile-First**: Designed for mobile devices, enhanced for desktop
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images and lazy loading
- **SEO-Friendly**: Proper meta tags and semantic structure
- **Modern UX**: Intuitive navigation and engaging interactions

## 🚀 Deployment

The portfolio is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Any static hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For any questions or suggestions, please reach out through the contact information provided in the portfolio.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
