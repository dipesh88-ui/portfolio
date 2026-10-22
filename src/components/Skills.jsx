import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 relative scroll-mt-16 bg-[#080c16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>⚡</span>
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Organized across core languages, machine learning pipelines, full-stack development, and modern AI toolchains.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="rounded-xl bg-[#0b101d] border border-white/5 hover:border-blue-500/30 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2 pb-2.5 border-b border-white/5">
                  <span className="text-base text-blue-400">
                    {idx === 0 && '☕'}
                    {idx === 1 && '🧩'}
                    {idx === 2 && '🌐'}
                    {idx === 3 && '🤖'}
                    {idx === 4 && '🧠'}
                    {idx === 5 && '📚'}
                    {idx === 6 && '🗄️'}
                    {idx === 7 && '🛠️'}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-[11px] text-gray-400 mb-4 line-clamp-1">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                        skill.highlight
                          ? 'bg-blue-600/10 border border-blue-500/20 text-blue-200'
                          : 'bg-[#111827]/70 border border-white/5 text-gray-300'
                      }`}
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-gray-400 font-mono">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
