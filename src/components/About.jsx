import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: 'Building Practical Applications',
      description:
        'Focused on delivering real, interactive web software from end-to-end—combining reactive interfaces with resilient backends.',
      icon: '🚀',
    },
    {
      title: 'Algorithmic Problem Solving',
      description:
        'Solved 200+ Data Structures & Algorithms problems on LeetCode with strong foundation in Java, time-complexity analysis, and clean code.',
      icon: '💡',
    },
    {
      title: 'Applied Machine Learning',
      description:
        'Hands-on experience developing supervised classifiers (93.77% accuracy) and unsupervised clustering pipelines (K-Means, PCA) using Scikit-learn and Streamlit.',
      icon: '📊',
    },
    {
      title: 'Full-Stack & Generative AI Solutions',
      description:
        'Integrating high-speed LLM inference (Groq API, Claude, Google AI Studio) into practical tools for document processing, summarization, and chat.',
      icon: '⚡',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Professional Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
              <span>👤</span>
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Turning complex algorithmic logic into reliable, usable software.
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                {personalInfo.professionalSummary}
              </p>
              <p className="text-gray-400">
                My approach centers on pragmatic engineering: choosing the right tool for the job, writing clean and maintainable code, and focusing on measurable outcomes—whether that's achieving 95.88% recall in health prediction or sub-second LLM responses for legal documents.
              </p>
            </div>

            {/* Compact Education Summary Callout */}
            <div className="p-4 rounded-xl bg-[#0e1628] border border-blue-500/20 flex items-start gap-3.5">
              <span className="text-2xl mt-0.5">🎓</span>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  Academic Foundation
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  B.Tech in Computer Science Engineering (Pursuing)
                </div>
                <div className="text-xs text-gray-300 mt-0.5">
                  Babu Banarasi Das University, Lucknow · CGPA: 8.79 till 3rd Year
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars of Competence */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[#0b101e] border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
