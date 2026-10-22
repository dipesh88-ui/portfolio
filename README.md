# Dipesh Kumar — Premium Developer & AI/ML Engineer Portfolio

A modern, production-grade, project-first portfolio website for **Dipesh Kumar** positioning him as a **Software Developer** and **AI/ML Engineer**. Built with a deep navy and near-black visual identity, refined glassmorphism, restrained gradients, and custom project-specific visual mockups.

---

## 🌟 Key Features

1. **Project-First Portfolio Strategy**:
   - Featured projects are prominently positioned immediately below the hero section.
   - Highlights 4 verified live applications with custom visual mockups:
     - **LegalDoc AI**: Full-stack legal document generation, compliance scoring, clause explanation, and bilingual assistant (English & Hindi) powered by Groq API.
       - *Live Demo*: [https://byteblaze-harshmishra.onrender.com/](https://byteblaze-harshmishra.onrender.com/)
     - **NovaGen AI**: Supervised machine learning health prediction system with StandardScaler pipeline, soft voting classifier, and verified results (*Random Forest: 93.77% Accuracy, 95.88% Recall*).
       - *Live Demo*: [https://novagenhealth.streamlit.app/](https://novagenhealth.streamlit.app/)
     - **SmartCart**: Customer segmentation system applying K-Means, Agglomerative clustering, and 3D PCA dimension reduction with Silhouette score optimization.
       - *Live Demo*: [https://smartcartcustomers.streamlit.app/](https://smartcartcustomers.streamlit.app/)
     - **AI Personal Assistant**: Full-stack Flask and Groq API web application delivering instant queries and 2–3 sentence email summarization with zero page reloads.
       - *Live Demo*: [https://ai-personal-assistant-37iv.onrender.com](https://ai-personal-assistant-37iv.onrender.com/)

2. **Accurate & Authentic Credentials**:
   - Direct extraction from verified resume:
     - **Education**: B.Tech CSE (2023 – Present) at Babu Banarasi Das University, Lucknow (CGPA: 8.79 till 3rd Year).
     - Intermediate (Divine Sainik School, 78.2%) & High School (RNP Public School, 74.8%).
     - **Training**: 90-Hour Practical Summer Training in Data Science & AI by GRAStech (June–August 2026), Soft Skills Training by Learnovate Enterprises.
     - **Achievements**: Solved 200+ DSA problems on LeetCode, IBM Club Assistant Student Coordinator at BBDU, GDG Lucknow and Be10x AI workshops.
     - **Languages**: English (Professional Working Proficiency), Hindi (Native).

3. **Centralized Configuration**:
   - All personal details, projects, live links, skills, and resume paths are maintained in a single source of truth at [`src/data/portfolioData.js`](file:///C:/Users/HP/.gemini/antigravity-ide/scratch/dipesh-portfolio/src/data/portfolioData.js).

4. **Zero-Friction Dual Execution**:
   - **Method A (Instant Double-Click)**: Open `index.html` directly in any web browser without running commands or installing dependencies.
   - **Method B (Vite Dev Server)**: Run `npm install` and `npm run dev` to start the modular Vite + React + Tailwind development server.

---

## 🚀 How to Run Locally

### Option 1: Instant Browser View (Zero dependencies)
Simply open `index.html` in your web browser:
- Double-click `index.html` in your file explorer, or
- Right-click and choose **Open With > Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Vite Local Server
In your terminal, navigate to the project directory and run:
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
dipesh-portfolio/
├── index.html                   # Production-ready entry with responsive UI & mockups
├── package.json                 # React 18, Vite, Tailwind CSS dependencies
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Theme and color token extension
├── postcss.config.js            # PostCSS pipeline
├── README.md                    # Project documentation
├── public/
│   ├── favicon.svg              # Custom developer/AI branded SVG favicon
│   └── resume.pdf               # Resume download asset
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main page layout & hierarchy
    ├── index.css                # Typography, custom scrollbar & animations
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all content
    └── components/
        ├── Navbar.jsx           # Sticky nav with active indicator & mobile drawer
        ├── Hero.jsx             # Hero with code editor panel & capability badges
        ├── Projects.jsx         # 2-column featured projects grid
        ├── ProjectCard.jsx      # Interactive card with live demo and metrics
        ├── ProjectMockups.jsx   # Custom visual preview components for each project
        ├── Skills.jsx           # 8 clean skill categories
        ├── About.jsx            # 4 engineering pillars & education highlight
        ├── Education.jsx        # Vertical academic timeline
        ├── TrainingAchievements.jsx # GRAStech training, LeetCode, IBM Club
        ├── Contact.jsx          # Validated email composition & direct links
        └── Footer.jsx           # Dynamic year, quick links, back to top
```

---

## 📄 Resume Configuration

Your resume PDF is linked in the hero, navbar, and contact sections.
- When opening locally, it links to the user-uploaded resume at:
  `C:\Users\HP\.gemini\antigravity-ide\brain\cd32b274-fa93-479a-b523-02ffc1bcb5f4\.user_uploaded\media_1792587774065.pdf`
- For web deployment, place a copy of `SDE, AIML Resume.pdf` as `resume.pdf` inside the `public/` directory or root directory.
