<div align="center">

# 📄 ResumeCraft AI

### Build a professional, ATS-friendly resume in minutes — powered by AI.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Strapi](https://img.shields.io/badge/Strapi-Backend-2E7EEA?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Gemini](https://img.shields.io/badge/Google_Gemini-AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

[![Made with ❤️ by Afzal Ansari](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-Afzal%20Ansari-red?style=flat-square)](https://github.com/theafzalansari)

<br/>

**ResumeCraft AI** is a modern, AI-powered resume builder that helps students and professionals craft polished, ATS-friendly resumes in minutes — complete with real-time live preview, AI-generated content, and a clean, distraction-free editing experience.

</div>

---

## 📚 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🔄 How It Works](#-how-it-works)
- [⚙️ Installation](#️-installation)
- [🔐 Environment Variables](#-environment-variables)
- [🌐 Live Demo](#-live-demo)
- [🗺️ Future Improvements](#️-future-improvements)
- [👤 Author](#-author)

---

## ✨ Overview

Writing a resume from scratch is tedious — formatting, wording, and structuring content in a way that's both readable to humans and parseable by Applicant Tracking Systems (ATS) takes time most people don't have.

**ResumeCraft AI** solves this by combining a guided, section-based resume builder with AI assistance for the hardest parts — professional summaries and work experience descriptions — while giving users full control through a real-time live preview that updates as they type.

The project was built with a strong focus on:

- 🎯 **Simplicity** — a clear, linear editing flow with no unnecessary complexity
- ⚡ **Speed** — instant preview updates, minimal friction from signup to download
- 🎨 **Modern UI** — clean, accessible design built on Tailwind CSS and shadcn/ui

---

## 🚀 Features

### 🤖 AI-Generated Professional Summary
- Powered by **Google's Gemini AI**
- Generates a polished, role-specific professional summary
- One-click generation directly inside the editor

### 🤖 AI-Generated Work Experience
- Generates professional, achievement-oriented work experience bullet points
- Output is HTML-formatted and drops straight into the resume
- Fully editable afterward via rich text editing

### 📝 Modern Resume Builder
A structured, section-based editor covering everything a resume needs:

| Section | Description |
|---|---|
| **Personal Details** | Name, contact info, role, and links |
| **Summary** | AI-assisted or manually written professional summary |
| **Experience** | Job history with rich text descriptions |
| **Education** | Academic background and qualifications |
| **Skills** | Technical and soft skills, rated by proficiency |
| **Projects** | Personal or professional project highlights |

### 👁️ Live Resume Preview
- The preview pane updates **instantly** as you edit — no save button, no lag, no guesswork

### 🎨 Resume Theme Colors
- Choose from multiple accent color themes
- Preview reflects the selected theme in real time

### ➕ Multiple Resume Sections
- Add unlimited work experience entries
- Add unlimited education entries
- Add unlimited skills
- Add unlimited projects

### ⬇️ Download Resume
- Export a clean, print-ready **A4 layout**
- Optimized for both digital sharing and physical printing

### 🔐 Authentication
- Secure sign-in and sign-up powered by **Clerk**
- Protected dashboard and resume routes

### 📊 Dashboard
- Create new resumes
- Edit existing resumes
- Delete resumes
- View and share resumes

### 📱 Fully Responsive UI
- Optimized layouts for **mobile**, **tablet**, and **desktop**

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS, shadcn/ui, React Router DOM |
| **Rich Text Editing** | React Simple WYSIWYG |
| **Icons** | Lucide React |
| **Backend / CMS** | Strapi CMS |
| **Authentication** | Clerk |
| **AI Engine** | Google Gemini API |
| **HTTP Client** | Axios |
| **Notifications** | Sonner |

</div>

---

## 📁 Project Structure

```
resume-craft-ai/
├── public/                    # Static assets
├── src/
│   ├── assets/                 # Images, icons, static files
│   ├── auth/                   # Authentication-related pages
│   ├── components/
│   │   ├── custom/              # Shared custom components (Header, etc.)
│   │   ├── landing/             # Landing page sections (Hero, Features, CTA)
│   │   └── ui/                  # shadcn/ui components
│   ├── context/                 # React Context providers
│   ├── dashboard/
│   │   └── resume/
│   │       ├── components/       # Resume editor & preview components
│   │       └── edit/             # Resume editing flow
│   ├── service/                 # API service layer (Strapi, Gemini)
│   └── App.jsx                  # Root application component
├── .env                         # Environment variables (not committed)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔄 How It Works

```
Landing Page
     ↓
Authentication (Clerk)
     ↓
Dashboard
     ↓
Create Resume
     ↓
Fill Resume Sections
     ↓
AI Assistance (Summary & Experience)
     ↓
Live Preview
     ↓
Download Resume
```

Users land on the marketing page, sign in securely via Clerk, and are routed to their dashboard. From there, they create a new resume and move through each section — personal details, summary, experience, education, skills, and projects. At any point, AI assistance can generate a professional summary or work experience content, which updates the live preview instantly. Once satisfied, the user downloads a print-ready, A4-formatted resume.

---

## ⚙️ Installation

Follow these steps to run ResumeCraft AI locally:

```bash
# 1. Clone the repository
git clone https://github.com/theafzalansari/resume-craft-ai.git

# 2. Navigate into the project directory
cd resume-craft-ai

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_STRAPI_API_URL=
VITE_STRAPI_API_KEY=
VITE_GEMINI_API_KEY=
```

| Variable | Description |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Publishable key from your Clerk application |
| `VITE_STRAPI_API_URL` | Base URL of your Strapi backend instance |
| `VITE_STRAPI_API_KEY` | API token for authenticating with Strapi |
| `VITE_GEMINI_API_KEY` | API key for Google Gemini AI |

> ⚠️ Never commit your `.env` file. Make sure it's included in `.gitignore`.

---

## 🌐 Live Demo

> https://resume-craft-ai-eta.vercel.app/

---

## 🗺️ Future Improvements

Planned enhancements for upcoming releases:

- 🎨 **Resume Templates** — multiple layout templates to choose from
- 🔗 **Resume Sharing** — shareable public links for completed resumes
- 📄 **PDF Export Improvements** — higher-fidelity, more customizable exports
- 🖱️ **Drag and Drop Sections** — reorder resume sections visually
- 🌍 **Multi-language Support** — build resumes in multiple languages
- 📈 **Resume Analytics** — track views and engagement on shared resumes
- 🧠 **AI Resume Review** — AI-powered feedback and improvement suggestions

---

## 👤 Author

**Afzal Ansari**

[![GitHub](https://img.shields.io/badge/GitHub-theafzalansari-181717?style=flat-square&logo=github)](https://github.com/theafzalansari)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Afzal_Ansari-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/afzal-ansari-312942370/)

---

<div align="center">

If you found this project useful, consider giving it a ⭐ — it helps a lot!

</div>