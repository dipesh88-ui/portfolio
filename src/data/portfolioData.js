/**
 * Centralized Portfolio Configuration for Dipesh Kumar
 * Software Developer | AI/ML Engineer
 *
 * Source of truth: Resume & Verified Project Information
 */

export const personalInfo = {
  name: "Dipesh Kumar",
  title: "Software Developer | AI/ML Engineer",
  location: "Lucknow, Uttar Pradesh, India",
  email: "dipesh11283@gmail.com",
  phone: "+91 9334752721",
  phoneDisplay: "+91 9334752721",
  
  // Education summary
  educationSummary: "B.Tech in Computer Science Engineering (Pursuing), Babu Banarasi Das University, Lucknow (CGPA: 8.79 till 3rd Year)",
  
  // Professional Summary from Resume
  professionalSummary:
    "Final-year B.Tech CSE student with strong skills in Java, Python, DSA, Software Development, and Machine Learning. Hands-on experience in building software and AI-powered applications. Seeking opportunities in Software Development and AI/ML to apply technical skills and build innovative solutions.",

  // Capability Labels displayed in Hero
  capabilities: [
    { label: "Software Development", icon: "Code2" },
    { label: "AI / Machine Learning", icon: "Brain" },
    { label: "Generative AI", icon: "Sparkles" },
  ],

  // Social Links (URLs configured, or empty string to hide)
  socialLinks: {
    github: "https://github.com", // update with direct username e.g. https://github.com/dipeshkumar
    linkedin: "https://linkedin.com", // update with direct profile
    leetcode: "https://leetcode.com", // update with leetcode handle
  },

  // Resume file configuration
  resume: {
    filename: "SDE, AIML Resume.pdf",
    publicPath: "./resume.pdf",
    viewablePath: "./resume.pdf",
    title: "Dipesh Kumar - SDE & AIML Resume",
  },
};

export const featuredProjects = [
  {
    id: "legaldoc-ai",
    title: "LegalDoc AI",
    category: "AI-Powered Legal Document Platform",
    tagline: "End-to-end full-stack platform for generating, analyzing, and simplifying legal contracts and documents.",
    liveDemoUrl: "https://byteblaze-harshmishra.onrender.com/",
    description:
      "A full-stack AI application designed to streamline the lifecycle of legal documentation. Generates agreements, performs automated compliance audits, simplifies convoluted legal clauses, and provides an intelligent conversational assistant tailored for legal questions.",
    keyFeatures: [
      "AI-driven legal document & contract generation",
      "Automated compliance checking & risk scoring",
      "Plain-language legal clause explanation & simplification",
      "Context-aware AI legal assistant powered by Groq API",
      "PDF export & secure document upload workflow",
      "Bilingual support (English & Hindi) for enhanced accessibility",
      "Ultra-low latency inference using Groq LPU acceleration",
    ],
    techTags: ["Generative AI", "Groq API", "Full-Stack Development", "Document Processing", "NLP"],
    metrics: "Sub-second LLM inference via Groq API",
    accentColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    previewType: "legal-workspace",
  },
  {
    id: "novagen-ai",
    title: "NovaGen AI",
    category: "Health Status Prediction System",
    tagline: "Supervised machine learning system predicting health risk indicators with soft voting ensemble.",
    liveDemoUrl: "https://novagenhealth.streamlit.app/",
    description:
      "A supervised machine learning application that predicts health status using physiological, lifestyle, and medical features. Compares multiple classifiers with rigorous StandardScaler feature preprocessing, cross-validation, and an interactive Streamlit UI.",
    keyFeatures: [
      "Evaluated Logistic Regression, KNN, Random Forest, & Gradient Boosting",
      "Implemented a Soft Voting Classifier combining top ensemble models",
      "StandardScaler feature scaling pipeline with medical parameter validation",
      "Rigorous metric evaluation: Accuracy, Precision, Recall, and F1-Score",
      "Random Forest achieved verified 93.77% Accuracy and 95.88% Recall",
      "Interactive Streamlit web deployment with real-time risk assessment",
    ],
    techTags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Streamlit"],
    metrics: "93.77% Accuracy · 95.88% Recall (Random Forest)",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    previewType: "health-analytics",
    disclaimer: "Engineered as an ML risk prediction prototype; not a clinically certified medical device.",
  },
  {
    id: "smartcart",
    title: "SmartCart",
    category: "Customer Segmentation System",
    tagline: "Unsupervised machine learning system grouping customer cohorts via K-Means and 3D PCA.",
    liveDemoUrl: "https://smartcartcustomers.streamlit.app/",
    description:
      "A customer segmentation intelligence system that discovers distinct customer clusters based on annual income, spending patterns, and behavioral attributes to power targeted marketing strategies.",
    keyFeatures: [
      "K-Means and Agglomerative Hierarchical Clustering models",
      "StandardScaler normalization & Principal Component Analysis (PCA)",
      "Elbow Method (WCSS) & Silhouette Score optimization",
      "Interactive 3D PCA cluster visualization in Streamlit",
      "Actionable customer cohort profiles (High-Value, Budget, Target)",
      "Real-time cluster assignment for novel customer profiles",
    ],
    techTags: ["Python", "Machine Learning", "Clustering", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    metrics: "Optimal K-Means clusters with 3D PCA dimension reduction",
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    previewType: "clustering-dashboard",
  },
  {
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    category: "Generative AI | Full-Stack Web Application",
    tagline: "Dynamic Flask & Groq API web application for instantaneous queries and 2-3 sentence email summarization.",
    liveDemoUrl: "https://ai-personal-assistant-37iv.onrender.com",
    description:
      "An AI-powered productivity web application built using Python, Flask, and Groq API. It delivers instant, conversational responses and compresses lengthy, complex emails into high-signal 2–3 sentence summaries with zero page reloads.",
    keyFeatures: [
      "Real-time conversational AI Chat Assistant with context retention",
      "Email summarization engine condensing threads into 2–3 sentences",
      "Asynchronous AJAX request pipeline with dynamic DOM updates",
      "Strict input validation and graceful backend error handling",
      "Integration with Groq API for rapid LLM inference",
      "Production deployment on Render cloud infrastructure",
    ],
    techTags: ["Python", "Flask", "Groq API", "LLMs", "HTML", "CSS", "JavaScript"],
    metrics: "2-3 Sentence Email Summaries · Render Deployed",
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    previewType: "assistant-workspace",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages used for algorithms, backends, and ML systems",
    skills: [
      { name: "Java", level: "DSA & OOP Focus", highlight: true },
      { name: "Python", level: "ML & Backend Core", highlight: true },
      { name: "JavaScript", level: "Modern ES6+ & Web" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "Layers",
    description: "Foundations in computer science and robust software architecture",
    skills: [
      { name: "Data Structures & Algorithms", level: "200+ LeetCode Solved", highlight: true },
      { name: "Object-Oriented Programming", level: "Clean Architecture" },
      { name: "RESTful API Design", level: "Scalable Contracts" },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Modern full-stack and frontend responsive web technologies",
    skills: [
      { name: "React.js", level: "Component Architectures", highlight: true },
      { name: "Node.js", level: "Backend Services" },
      { name: "HTML5 & Modern CSS", level: "Responsive & Accessible" },
      { name: "REST APIs", level: "Client-Server Integration" },
    ],
  },
  {
    category: "Machine Learning",
    icon: "BrainCircuit",
    description: "Predictive modeling, statistical learning, and model evaluation",
    skills: [
      { name: "Supervised Learning", level: "Regression & Classification", highlight: true },
      { name: "Unsupervised Learning", level: "Clustering & PCA", highlight: true },
      { name: "Clustering Algorithms", level: "K-Means & Hierarchical" },
      { name: "Natural Language Processing (NLP)", level: "Text & Tokenization" },
      { name: "Model Evaluation", level: "Precision, Recall, ROC-AUC, F1" },
    ],
  },
  {
    category: "Deep Learning & GenAI",
    icon: "Sparkles",
    description: "Neural network fundamentals and modern LLM application workflows",
    skills: [
      { name: "Neural Networks", level: "Feedforward & Loss Functions" },
      { name: "Deep Learning Fundamentals", level: "Backpropagation & Optimizers" },
      { name: "PyTorch", level: "Tensor Workflows" },
      { name: "Groq API & LLM Tooling", level: "High-Speed Inference", highlight: true },
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: "Binary",
    description: "Data manipulation, scientific computing, and rapid UI prototyping",
    skills: [
      { name: "Pandas", level: "Data Wrangling & Pipeline" },
      { name: "NumPy", level: "Array Computation" },
      { name: "Scikit-learn", level: "Pipeline, Estimators, Metrics", highlight: true },
      { name: "Matplotlib & Seaborn", level: "Exploratory Visualization" },
      { name: "Streamlit", level: "Interactive ML Dashboards", highlight: true },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational data design and querying",
    skills: [
      { name: "MySQL", level: "Relational Schemas & Queries", highlight: true },
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Version control, AI accelerators, and engineering workflows",
    skills: [
      { name: "Git & GitHub", level: "Collaboration & CI/CD" },
      { name: "Google AI Studio", level: "Prompt Engineering & Prototyping" },
      { name: "Claude & Antigravity", level: "AI-Augmented Engineering" },
    ],
  },
];

export const educationTimeline = [
  {
    degree: "B.Tech in Computer Science Engineering (Pursuing)",
    institution: "Babu Banarasi Das University",
    location: "Lucknow, Uttar Pradesh",
    period: "2023 – Present",
    score: "CGPA: 8.79 till 3rd Year",
    badge: "Current / Final Year",
    details:
      "Core coursework in Data Structures, Object-Oriented Programming, Operating Systems, Database Management Systems, Machine Learning, and Computer Networks.",
  },
  {
    degree: "Intermediate (Class XII, CBSE)",
    institution: "Divine Sainik School",
    location: "Varanasi, Uttar Pradesh",
    period: "2022",
    score: "78.2%",
    badge: "Senior Secondary",
    details: "Science stream curriculum with Mathematics, Physics, and Chemistry foundations.",
  },
  {
    degree: "High School (Class X, CBSE)",
    institution: "RNP Public School",
    location: "Saran, Bihar",
    period: "2020",
    score: "74.8%",
    badge: "Secondary School",
    details: "Foundational academic curriculum with distinction in Science and Mathematics.",
  },
];

export const trainingsAndCertifications = [
  {
    title: "Project-Based Summer Training — Data Science & AI",
    provider: "GRAStech",
    duration: "90 Hours",
    period: "June – August 2026",
    description:
      "Intensive, hands-on industrial training focusing on real-world data pipelines, exploratory data analysis, predictive modeling with Scikit-learn, and end-to-end AI project development.",
    badge: "90-Hour Practical Training",
  },
  {
    title: "Soft Skills Training Program",
    provider: "Learnovate Enterprises",
    duration: "Professional Development",
    period: "Completed",
    description:
      "Comprehensive program covering technical communication, professional teamwork, presentation delivery, and interview readiness.",
    badge: "Professional Skills",
  },
];

export const achievementsAndLeadership = [
  {
    category: "Algorithmic Problem Solving",
    title: "Solved 200+ DSA Problems on LeetCode",
    description:
      "Demonstrated strong problem-solving, algorithmic efficiency, and mastery of arrays, strings, two pointers, trees, graphs, and dynamic programming.",
    icon: "Trophy",
    metric: "200+ Solved",
  },
  {
    category: "Leadership & Community",
    title: "Assistant Student Coordinator — IBM Club",
    description:
      "Coordinated student engagement, technical seminars, and peer-to-peer coding sessions at Babu Banarasi Das University, Lucknow.",
    icon: "Users",
    metric: "IBM Club BBDU",
  },
  {
    category: "Workshops & Tech Sessions",
    title: "AI Workshops: Google Developer Group & Be10x",
    description:
      "Actively participated in the Google Developer Group (GDG) Lucknow AI Workshop and the AI Tools Workshop by Be10x on generative AI workflows.",
    icon: "Award",
    metric: "GDG Lucknow & Be10x",
  },
];

export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Hindi", proficiency: "Native Proficiency" },
];
