# 🚀 Rijul Yadav - Full Stack Developer Portfolio

A modern, interactive 3D developer portfolio showcasing my skills in web development, featuring smooth animations, 3D visuals, and a fully functional contact system.

![Portfolio Preview](./public/assets/preview.png)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📧 Contact Form Setup](#-contact-form-setup)
- [🔧 Available Scripts](#-available-scripts)
- [📱 Connect With Me](#-connect-with-me)
- [📄 License](#-license)

---

## ✨ Features

- 🎯 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🔥 **3D Visuals** - Interactive 3D elements powered by Three.js and React Three Fiber
- ⚡ **Performance Optimized** - Fast loading with Vite bundler and optimized assets
- 💌 **Working Contact Form** - Integrated EmailJS for seamless communication
- 🎨 **Beautiful Animations** - Framer Motion for smooth transitions and micro-interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🌟 **Interactive Elements** - Hover effects, particle systems, and dynamic content
- 🎪 **Modern Tech Stack** - Built with latest React, TailwindCSS, and cutting-edge libraries

---

## 🛠 Tech Stack

### Frontend Framework
- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Production-ready motion library

### Styling & UI
- **TailwindCSS 4** - Utility-first CSS framework
- **Motion** - Modern animation library
- **Custom CSS** - Handcrafted styles and animations

### Backend & APIs
- **EmailJS** - Client-side email sending service
- **Form Validation** - Custom validation with user feedback

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugins** - Optimized development experience

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── logos/          # Technology logos and icons
│   │   ├── projects/       # Project screenshots and images
│   │   └── socials/        # Social media icons
│   └── models/             # 3D model files
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Alert.jsx       # Notification alerts
│   │   ├── Astronaut.jsx   # 3D astronaut model
│   │   ├── Card.jsx        # Project cards
│   │   ├── CopyEmailButton.jsx # Email copy functionality
│   │   ├── FlipWords.jsx   # Animated text effects
│   │   ├── Frameworks.jsx  # Technology showcase
│   │   ├── HeroText.jsx    # Hero section text
│   │   ├── Loader.jsx      # Loading animations
│   │   ├── Marquee.jsx     # Scrolling text
│   │   ├── OrbitingCircles.jsx # Circular animations
│   │   ├── Particles.jsx   # Particle effects
│   │   ├── Project.jsx     # Individual project component
│   │   ├── Timeline.jsx    # Experience timeline
│   │   └── globe.jsx       # Interactive globe
│   ├── constants/          # Static data and configurations
│   │   └── index.js        # Projects, social links, experiences
│   ├── sections/           # Main portfolio sections
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Experiences.jsx # Work experience
│   │   ├── Footer.jsx      # Footer with social links
│   │   ├── Hero.jsx        # Landing section
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Testimonial.jsx # Client testimonials
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # Application entry point
├── .env                    # Environment variables
├── _headers                # Deployment headers
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rijulyadav/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAIL_USER=your_email@gmail.com
   VITE_EMAIL_APP_PASSWORD=your_app_password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

---

## 📧 Contact Form Setup

The portfolio includes a fully functional contact form powered by EmailJS. To set it up:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Create a new email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{to_name}}`
   - `{{from_email}}`
   - `{{to_email}}`
   - `{{message}}`
4. **Update the `.env` file** with your EmailJS credentials

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 📱 Connect With Me

I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!

### 🌐 Social Media
- **Instagram**: [@rijul._yadav](https://www.instagram.com/rijul._yadav)
- **LinkedIn**: [Rijul Yadav](https://www.linkedin.com/in/rijul-yadav-1567b6324/)
- **WhatsApp**: [+91 8218859582](https://wa.me/918218859582)

### 📧 Contact
- **Email**: rijulyadav2002@gmail.com
- **Phone**: +91 8218859582

### 💼 Professional
- **Portfolio**: [rijulyadav.dev](https://rijulyadav.dev)
- **GitHub**: [rijulyadav](https://github.com/rijulyadav)

---

## 🎯 Key Projects

### 1. SDN Network Implementation
- **Tech**: Python, Mininet, Ryu Controller
- **Description**: Designed and simulated network topologies for SDN research
- **GitHub**: [sdn-mininet-project](https://github.com/Rijul202/sdn-mininet-project)

### 2. Facial Recognition Attendance System
- **Tech**: OpenCV, Python, Machine Learning
- **Description**: Real-time attendance system with 95% accuracy
- **GitHub**: [COLLEGE_ATTENDENCE_MANAGER](https://github.com/divijwadhwa1/COLLEGE_ATTENDENCE_MANAGER)

### 3. Portfolio Website (This!)
- **Tech**: React, Three.js, TailwindCSS, Framer Motion
- **Description**: Interactive 3D portfolio with modern animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **React Three Fiber** community for amazing 3D components
- **TailwindCSS** for the incredible utility-first approach
- **Framer Motion** for smooth animations
- **EmailJS** for seamless contact form integration

---

**Built with ❤️ by Rijul Yadav**

*Show your support by starring this repo! ⭐*