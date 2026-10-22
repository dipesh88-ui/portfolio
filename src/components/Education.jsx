import React from 'react';
import { educationTimeline } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 relative scroll-mt-16 bg-[#080c16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>📚</span>
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            A consistent record in computer science engineering and mathematics foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-10 sm:space-y-12">
          {educationTimeline.map((item, idx) => (
            <div key={item.degree} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0a0f1d] border-2 border-blue-500 flex items-center justify-center text-xs text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md shadow-blue-500/20">
                {idx === 0 ? '🎓' : idx === 1 ? '🏫' : '📖'}
              </div>

              {/* Period marker on desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-2 sm:w-28 sm:text-right hidden sm:block">
                <span className="text-xs font-mono text-blue-400 font-semibold block">
                  {item.period}
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  {item.badge}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#0b101f] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden text-xs font-mono text-blue-400 font-semibold">
                    {item.period} · {item.badge}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.degree}
                </h3>

                <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                  {item.institution}
                  <span className="text-gray-500 font-normal"> — {item.location}</span>
                </div>

                <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
