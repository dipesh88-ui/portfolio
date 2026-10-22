import React, { useState } from 'react';
import ProjectMockup from './ProjectMockups';

export default function ProjectCard({ project }) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <article
      id={`project-${project.id}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0b0f19]/90 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30 overflow-hidden backdrop-blur-sm"
    >
      {/* Ambient gradient glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative p-6 sm:p-7 flex flex-col flex-1">
        {/* Top Header: Category & Live Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${project.badgeColor}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
            {project.category}
          </span>

          {project.metrics && (
            <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Tagline */}
        <p className="text-sm text-gray-300 mt-1 mb-4 font-medium leading-relaxed">
          {project.tagline}
        </p>

        {/* Custom Project Preview Mockup */}
        <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectMockup previewType={project.previewType} />
        </div>

        {/* Detailed Description */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features Bullet points */}
        <div className="mb-5 bg-[#080c16]/80 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-2">
            <span>Key Engineering Features</span>
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-blue-400 hover:text-blue-300 text-[11px] underline font-normal transition-colors"
              aria-label={`Toggle feature list for ${project.title}`}
            >
              {showAllFeatures ? 'Show Less' : `+${project.keyFeatures.length - 3} More`}
            </button>
          </div>

          <ul className="space-y-1.5">
            {(showAllFeatures ? project.keyFeatures : project.keyFeatures.slice(0, 3)).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                <svg
                  className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {project.disclaimer && (
            <p className="text-[10px] text-gray-400 mt-2.5 pt-2 border-t border-white/5 italic">
              ℹ️ {project.disclaimer}
            </p>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-[#131b2e] text-gray-300 border border-white/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-[0.98]"
            aria-label={`Explore live demo for ${project.title}`}
          >
            <span>Explore Live Project</span>
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* Only render Source Code button if a verified GitHub repository URL is configured */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors"
              aria-label={`View source code for ${project.title}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
