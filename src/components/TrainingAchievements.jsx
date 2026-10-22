import React from 'react';
import {
  trainingsAndCertifications,
  achievementsAndLeadership,
  languages,
} from '../data/portfolioData';

export default function TrainingAchievements() {
  return (
    <section className="py-20 sm:py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Practical Training */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🛠️</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Training & Programs
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              Practical industrial summer training and professional development.
            </p>

            <div className="space-y-4 pt-2">
              {trainingsAndCertifications.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[#0b101e] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>

                  <div className="text-xs text-indigo-300 font-medium mt-0.5">
                    {item.provider} · {item.duration}
                  </div>

                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages spoken */}
            <div className="p-4 rounded-xl bg-[#0e1628] border border-white/5 mt-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                Languages Spoken
              </span>
              <div className="flex flex-wrap gap-4 text-xs">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="font-semibold text-white">{lang.name}:</span>
                    <span className="text-gray-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Leadership */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏆</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Achievements & Leadership
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              Verified problem-solving milestones, university leadership, and community workshops.
            </p>

            <div className="space-y-4 pt-2">
              {achievementsAndLeadership.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[#0b101e] border border-white/5 hover:border-violet-500/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-lg text-violet-400 flex-shrink-0 mt-0.5">
                    {item.icon === 'Trophy' && '🏆'}
                    {item.icon === 'Users' && '👥'}
                    {item.icon === 'Award' && '🎯'}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-violet-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-0.5 rounded">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
