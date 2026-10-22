import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = featuredProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'genai') return p.techTags.includes('Generative AI') || p.techTags.includes('LLMs');
    if (filter === 'ml') return p.techTags.includes('Machine Learning') || p.techTags.includes('Clustering');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Featured Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Practical applications combining software engineering, machine learning, and Generative AI.
          </p>

          {/* Domain Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              All Projects (4)
            </button>
            <button
              onClick={() => setFilter('genai')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'genai'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              Generative AI (2)
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'ml'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#0f172a] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              Machine Learning (2)
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner with Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-xl mx-auto flex items-center justify-center gap-2">
            <span className="text-blue-400">✓</span>
            All 4 projects feature deployed live interactive demos hosted on Render and Streamlit.
          </p>
        </div>
      </div>
    </section>
  );
}
