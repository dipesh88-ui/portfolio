import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Abstract Glowing Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, and CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              FINAL-YEAR COMPUTER SCIENCE ENGINEERING STUDENT
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Dipesh Kumar</span>.
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-200 tracking-tight leading-snug">
                I build software and intelligent AI-powered applications.
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-2xl font-normal">
              Passionate about software development, machine learning, and Generative AI. I turn ideas into practical applications using modern technologies.
            </p>

            {/* 3 Compact Capability Labels */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {personalInfo.capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1628] border border-blue-500/20 text-xs font-medium text-gray-200 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{cap.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm sm:text-base font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-200 active:scale-95"
              >
                <span>Explore My Projects</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </button>

              {/* Secondary CTA */}
              <a
                href={personalInfo.resume.publicPath}
                download="Dipesh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm sm:text-base font-semibold border border-white/15 hover:border-white/25 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume</span>
              </a>

              {/* Tertiary Action */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-gray-300 hover:text-white text-sm sm:text-base font-medium hover:bg-white/5 transition-colors"
              >
                <span>Contact Me</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Social Profile Icons (Only rendered when URLs configured) */}
            <div className="flex items-center gap-3 pt-2 text-gray-400 text-xs">
              <span className="text-gray-500 font-mono text-[11px]">PROFILES:</span>
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                  aria-label="Dipesh Kumar GitHub Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                  aria-label="Dipesh Kumar LinkedIn Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {personalInfo.socialLinks.leetcode && (
                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                  aria-label="Dipesh Kumar LeetCode Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.774-4.04 4.502-4.821c.545-.545.545-1.42 0-1.964A1.368 1.368 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-.978.402l-4.78 4.78a1.38 1.38 0 0 0 0 1.952 1.38 1.38 0 0 0 1.951 0l4.78-4.78a1.38 1.38 0 0 0-.973-2.354zm6.91 5.385h-7.66a1.38 1.38 0 1 0 0 2.76h7.66a1.38 1.38 0 1 0 0-2.76z" />
                  </svg>
                </a>
              )}
              <span className="text-gray-400 font-mono text-[11px] ml-1">
                Lucknow, India
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual - Floating Code & Model Execution Panel */}
          <div className="lg:col-span-5 relative">
            {/* Background glow behind visual */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl" />

            {/* Floating Code Editor Panel */}
            <div className="relative rounded-2xl bg-[#0a0f1d] border border-blue-500/25 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="bg-[#0f172a] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-gray-400 font-medium ml-2 text-[11px]">
                    pipeline_eval.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Active</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-5 space-y-1.5 text-gray-300 leading-relaxed text-[11px] sm:text-xs overflow-x-auto">
                <p className="text-gray-500"># Engineering AI/ML & GenAI Systems</p>
                <p>
                  <span className="text-violet-400">from</span> sklearn.ensemble <span className="text-violet-400">import</span> RandomForestClassifier, VotingClassifier
                </p>
                <p>
                  <span className="text-violet-400">from</span> groq <span className="text-violet-400">import</span> GroqClient
                </p>
                <p className="pt-1">
                  <span className="text-blue-400">rf_model</span> = RandomForestClassifier(n_estimators=<span className="text-amber-300">100</span>)
                </p>
                <p>
                  <span className="text-blue-400">metrics</span> = evaluate_model(rf_model, X_test, y_test)
                </p>
                <p className="text-emerald-400 pt-1">
                  &gt;&gt;&gt; print(f"Accuracy: {metrics.accuracy:.2%}, Recall: {metrics.recall:.2%}")
                </p>
                <p className="text-emerald-300 font-bold bg-emerald-950/30 px-2 py-1 rounded border border-emerald-500/20">
                  Accuracy: 93.77%, Recall: 95.88%
                </p>
                <p className="pt-1">
                  <span className="text-gray-500"># Fast LLM inference with Groq API</span>
                </p>
                <p>
                  <span className="text-blue-400">response</span> = groq.chat(model=<span className="text-green-300">"llama-3-70b"</span>)
                </p>
              </div>

              {/* Technology Badges Floating Strip */}
              <div className="bg-[#0b1222] px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-sans font-medium text-[10px]">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-sans font-medium text-[10px]">
                    React
                  </span>
                  <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 font-sans font-medium text-[10px]">
                    Scikit-Learn
                  </span>
                </div>
                <span className="text-gray-400 font-mono text-[10px]">200+ DSA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
