# DevTherapy Landing Page

> 🎙️ **Therapy for developers, one bug at a time**

A modern, responsive landing page for DevTherapy - a podcast dedicated to developer mental health, technical deep dives, and dev culture discussions.

## 🌟 About DevTherapy

DevTherapy is where developers come to decompress, learn, and connect. We tackle the real challenges of software development - from imposter syndrome to technical debt, burnout to breakthrough moments.

### 🎯 What We Cover

- **Technical Deep Dives**: Cutting-edge technologies, architectural patterns, and maintainable code
- **Mental Health Focus**: Addressing burnout, stress, and psychological aspects of development
- **Dev Culture**: Remote work, team dynamics, career growth, and healthy engineering cultures

### 🎤 Hosts

- **Tornike Gomareli** - Senior Software Engineer with 10+ years experience in full-stack development
- **Avtandil Ushikishvili** - Tech lead and mental health advocate specializing in Enterprise Software

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly across all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 📺 **Episode Browser** - Browse and search through all podcast episodes
- 👥 **Guest Profiles** - Meet the amazing guests who've appeared on the show
- 🎉 **Events Section** - Stay updated with upcoming events and game jams
- 😂 **Memes Gallery** - Developer humor and community memes
- 🛍️ **Shop** - Merchandise and branded items
- ⌨️ **Keyboard Shortcuts** - Quick navigation with keyboard commands
- 🎯 **Command Palette** - Fast search and navigation
- 📊 **Analytics** - Track user engagement and popular content

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router v6
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Icons**: Lucide React
- **Animations**: CSS + Framer Motion patterns
- **Deployment**: GitHub Pages

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Devtherapycode/devtherapy-web
cd devtherapy-web

# Install dependencies
npm install
# or with bun
bun install

# Start development server
npm run dev
# or with bun
bun dev
```

The app will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run deploy       # Deploy to GitHub Pages
```

## 🎨 Key Components

- **HeroSection**: Landing page hero with animated background
- **EpisodesSection**: Featured episodes with search and filtering
- **AboutSection**: Information about the podcast and hosts
- **CommandPalette**: Quick navigation and search interface
- **MatrixBackground**: Animated matrix-style background effect
- **MemeGallery**: Masonry layout for developer memes

## 🔗 Links

- **🎥 YouTube**: [@Devtherapy](https://www.youtube.com/@Devtherapy)
- **💬 Discord**: [Join our community](https://discord.gg/devtherapy)
- **🌐 Website**: [Live Site](https://devtherapy.ge)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Adding New Episodes

1. Create a new file in `src/server/data/episodes/`
2. Follow the existing episode structure
3. Add the episode to `episodes.data.ts`
4. Update the `EpisodeSlugType` in `episodes.types.ts`

### Adding New Guests

1. Add guest photo to `src/assets/guests/`
2. Create guest data file in `src/server/data/guests/`
3. Export guest data in `guests.data.ts`

## 💬 Support

If you have any questions or need help:

- Join our [Discord community](https://discord.gg/devtherapy)
- Open an issue on GitHub
- Reach out to the hosts on LinkedIn

---

**Built with ❤️ by the DevTherapy team**
