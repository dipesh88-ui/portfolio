import React, { useState } from 'react';

/**
 * Custom Project Preview Mockups
 * Built specifically for Dipesh Kumar's portfolio projects to accurately showcase what each application does.
 */

// 1. LegalDoc AI Workspace Preview
export function LegalDocPreview() {
  const [activeTab, setActiveTab] = useState('editor');
  const [lang, setLang] = useState('en');

  return (
    <div className="w-full bg-[#0a0f1d] rounded-xl border border-blue-500/20 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Top Application Bar */}
      <div className="bg-[#0f172a] px-3 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-gray-400 font-medium ml-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            LegalDoc AI Workspace
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-2 py-0.5 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-[10px] font-semibold border border-blue-500/30 transition-colors"
          >
            {lang === 'en' ? 'EN / हिंदी' : 'हिंदी / EN'}
          </button>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 text-[10px] border border-indigo-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Groq LPU Active
          </span>
        </div>
      </div>

      {/* Workspace Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[260px] bg-[#070b14]">
        {/* Document Editor Pane */}
        <div className="md:col-span-7 p-3.5 border-r border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 font-semibold flex items-center gap-1 text-[11px]">
                <span className="text-blue-400">📄</span> Non-Disclosure Agreement.pdf
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Audited & Verified
              </span>
            </div>

            <div className="space-y-2 text-gray-300/90 text-[11px] leading-relaxed bg-[#0b1120] p-3 rounded-lg border border-white/5">
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Clause 4.2 — Confidentiality Duration</p>
              <p className="bg-blue-500/10 p-1.5 rounded border-l-2 border-blue-400 text-gray-200">
                "Each party agrees to hold all proprietary trade secrets in strict confidence for a period of thirty-six (36) months from disclosure..."
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 pt-1">
                <span className="text-blue-400 font-medium">Compliance Check:</span>
                <span className="text-emerald-400">Standard Indian Contract Act Compliant</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-gray-400 border-t border-white/5 mt-3">
            <span>Clauses: 14 Analyzed</span>
            <span className="text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
              Download PDF Export ↓
            </span>
          </div>
        </div>

        {/* AI Assistant & Compliance Panel */}
        <div className="md:col-span-5 p-3.5 flex flex-col justify-between bg-[#0a0f1d]">
          <div>
            <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-white/5">
              <span className="text-gray-300 font-semibold text-[11px] flex items-center gap-1">
                <span className="text-indigo-400">✨</span> AI Legal Assistant
              </span>
              <span className="text-[9px] text-gray-400">Groq LLM</span>
            </div>

            {/* Chat Conversation */}
            <div className="space-y-2">
              <div className="bg-[#11192e] p-2 rounded-lg text-[10px] text-gray-300 border border-white/5">
                <span className="text-blue-400 font-semibold block text-[9px] mb-0.5">User Prompt</span>
                "Explain clause 4.2 in simple plain English."
              </div>

              <div className="bg-indigo-950/40 p-2 rounded-lg text-[10px] text-indigo-100 border border-indigo-500/20">
                <span className="text-indigo-400 font-semibold block text-[9px] mb-0.5">AI Response (0.18s)</span>
                {lang === 'en'
                  ? "Both companies must safeguard proprietary information and cannot share it with third parties for exactly 3 years."
                  : "दोनों पक्ष 3 साल तक गोपनीय व्यावसायिक जानकारी किसी तीसरे पक्ष के साथ साझा नहीं करेंगे।"}
              </div>
            </div>
          </div>

          {/* Compliance Meter */}
          <div className="mt-3 pt-2 border-t border-white/5">
            <div className="flex justify-between text-[10px] text-gray-300 mb-1">
              <span>Overall Compliance Score</span>
              <span className="text-emerald-400 font-bold">96%</span>
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. NovaGen AI Analytics Preview
export function NovaGenPreview() {
  return (
    <div className="w-full bg-[#0a0f1d] rounded-xl border border-emerald-500/20 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Top Application Bar */}
      <div className="bg-[#0f172a] px-3 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-gray-400 font-medium ml-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            NovaGen AI — Health Status Classifier
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] border border-emerald-500/20">
          Streamlit App
        </span>
      </div>

      <div className="p-3.5 bg-[#070b14] space-y-3">
        {/* Verified Resume Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-[#0b1220] p-2 rounded-lg border border-emerald-500/20 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">RF Accuracy</div>
            <div className="text-emerald-400 font-bold text-sm">93.77%</div>
          </div>
          <div className="bg-[#0b1220] p-2 rounded-lg border border-emerald-500/20 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">RF Recall</div>
            <div className="text-emerald-400 font-bold text-sm">95.88%</div>
          </div>
          <div className="bg-[#0b1220] p-2 rounded-lg border border-white/5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Ensemble</div>
            <div className="text-blue-400 font-bold text-sm">Soft Voting</div>
          </div>
          <div className="bg-[#0b1220] p-2 rounded-lg border border-white/5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Preprocessing</div>
            <div className="text-indigo-400 font-bold text-sm">StandardScaler</div>
          </div>
        </div>

        {/* Feature Inputs & Model Verdict */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          {/* Physiological Parameters */}
          <div className="md:col-span-7 bg-[#0b1120] p-3 rounded-lg border border-white/5 space-y-2">
            <div className="text-gray-300 font-semibold text-[11px] flex justify-between items-center">
              <span>Physiological Parameters</span>
              <span className="text-[10px] text-gray-400 font-normal">Standardized Z-Score</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-[#101728] p-1.5 rounded flex justify-between">
                <span className="text-gray-400">Glucose:</span>
                <span className="text-gray-200 font-mono">112 mg/dL</span>
              </div>
              <div className="bg-[#101728] p-1.5 rounded flex justify-between">
                <span className="text-gray-400">Blood Pressure:</span>
                <span className="text-gray-200 font-mono">74 mmHg</span>
              </div>
              <div className="bg-[#101728] p-1.5 rounded flex justify-between">
                <span className="text-gray-400">BMI:</span>
                <span className="text-gray-200 font-mono">23.8</span>
              </div>
              <div className="bg-[#101728] p-1.5 rounded flex justify-between">
                <span className="text-gray-400">Insulin:</span>
                <span className="text-gray-200 font-mono">82 μU/mL</span>
              </div>
            </div>
          </div>

          {/* Prediction Output */}
          <div className="md:col-span-5 bg-emerald-950/30 p-3 rounded-lg border border-emerald-500/20 flex flex-col justify-between">
            <div>
              <span className="text-emerald-400 font-semibold text-[11px] block">Model Prediction</span>
              <div className="text-white font-bold text-base mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Optimal / Low Risk
              </div>
              <div className="text-[10px] text-emerald-200/80 mt-1">
                Confidence Probability: <span className="font-semibold text-emerald-300">94.6%</span>
              </div>
            </div>
            <div className="text-[9px] text-gray-400 mt-2 border-t border-white/5 pt-1.5 italic">
              ML prediction experiment · Non-clinical tool
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. SmartCart Clustering Preview
export function SmartCartPreview() {
  return (
    <div className="w-full bg-[#0a0f1d] rounded-xl border border-purple-500/20 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Top Application Bar */}
      <div className="bg-[#0f172a] px-3 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-gray-400 font-medium ml-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            SmartCart — Customer Segmentation (3D PCA)
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 text-[10px] border border-purple-500/20">
          K-Means & Agglomerative
        </span>
      </div>

      <div className="p-3.5 bg-[#070b14] space-y-3">
        {/* Interactive Cluster Visualization Graphic */}
        <div className="bg-[#0b1120] p-3 rounded-lg border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 font-semibold text-[11px]">PCA Dimensionality Reduction (3 Components)</span>
            <div className="flex gap-2 text-[10px]">
              <span className="flex items-center gap-1 text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> High Spenders
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Budget Conscious
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Target Growth
              </span>
            </div>
          </div>

          {/* SVG Cluster Plot */}
          <div className="h-32 w-full bg-[#080d19] rounded-md relative flex items-center justify-center overflow-hidden border border-white/5">
            <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1="40" y1="60" x2="380" y2="60" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1="40" y1="100" x2="380" y2="100" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />

              {/* Cluster 1: High Spenders (Purple) */}
              <circle cx="80" cy="35" r="4" fill="#a855f7" opacity="0.8" />
              <circle cx="95" cy="40" r="5" fill="#a855f7" opacity="0.9" />
              <circle cx="110" cy="28" r="4.5" fill="#a855f7" opacity="0.75" />
              <circle cx="88" cy="50" r="4" fill="#a855f7" opacity="0.85" />
              <circle cx="120" cy="42" r="5.5" fill="#c084fc" />
              <ellipse cx="98" cy="38" rx="35" ry="22" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

              {/* Cluster 2: Budget Conscious (Cyan) */}
              <circle cx="210" cy="85" r="4" fill="#06b6d4" opacity="0.8" />
              <circle cx="225" cy="78" r="5" fill="#06b6d4" opacity="0.9" />
              <circle cx="240" cy="90" r="4.5" fill="#06b6d4" opacity="0.75" />
              <circle cx="215" cy="95" r="4" fill="#06b6d4" opacity="0.85" />
              <circle cx="230" cy="82" r="5.5" fill="#22d3ee" />
              <ellipse cx="225" cy="86" rx="32" ry="18" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

              {/* Cluster 3: Target Growth (Amber) */}
              <circle cx="320" cy="45" r="4.5" fill="#f59e0b" opacity="0.8" />
              <circle cx="335" cy="38" r="5" fill="#f59e0b" opacity="0.9" />
              <circle cx="350" cy="55" r="4" fill="#f59e0b" opacity="0.8" />
              <circle cx="330" cy="62" r="4" fill="#f59e0b" opacity="0.7" />
              <circle cx="342" cy="48" r="5.5" fill="#fbbf24" />
              <ellipse cx="335" cy="50" rx="32" ry="22" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Evaluation Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="bg-[#0b1220] p-2 rounded border border-white/5">
            <span className="text-gray-400 block">Elbow Method (WCSS)</span>
            <span className="text-purple-300 font-bold text-xs">Optimal K = 3</span>
          </div>
          <div className="bg-[#0b1220] p-2 rounded border border-white/5">
            <span className="text-gray-400 block">Silhouette Score</span>
            <span className="text-purple-300 font-bold text-xs">0.68 (Strong Separation)</span>
          </div>
          <div className="bg-[#0b1220] p-2 rounded border border-white/5">
            <span className="text-gray-400 block">Clustering Algorithm</span>
            <span className="text-purple-300 font-bold text-xs">K-Means + Agglomerative</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. AI Personal Assistant Preview
export function AssistantPreview() {
  return (
    <div className="w-full bg-[#0a0f1d] rounded-xl border border-cyan-500/20 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Top Application Bar */}
      <div className="bg-[#0f172a] px-3 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-gray-400 font-medium ml-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            AI Personal Assistant — Dual Workspace
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/20">
          Flask + Groq LLM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#070b14] divide-y md:divide-y-0 md:divide-x divide-white/5">
        {/* Left Column: AI Chat Panel */}
        <div className="p-3 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1">
                💬 Instant Chat Query
              </span>
              <span className="text-[9px] text-gray-400">Zero Reload AJAX</span>
            </div>

            <div className="space-y-1.5">
              <div className="bg-[#0f172a] p-2 rounded-lg text-gray-300 text-[10px] border border-white/5">
                <span className="text-gray-400 text-[9px] block">Query:</span>
                "Summarize how Random Forest prevents overfitting."
              </div>
              <div className="bg-cyan-950/40 p-2 rounded-lg text-cyan-100 text-[10px] border border-cyan-500/20">
                <span className="text-cyan-400 text-[9px] block font-semibold">Assistant Response:</span>
                "Random Forest combines multiple decorrelated decision trees built on bootstrap samples and random feature subsets to lower variance."
              </div>
            </div>
          </div>

          <div className="bg-[#0b1120] px-2.5 py-1.5 rounded-md border border-white/5 flex items-center justify-between text-[10px] text-gray-400">
            <span>Ask anything...</span>
            <span className="text-cyan-400 font-semibold">Send ↵</span>
          </div>
        </div>

        {/* Right Column: Email Summarizer */}
        <div className="p-3 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-indigo-400 font-semibold text-[11px] flex items-center gap-1">
                ✉️ Email Summarization
              </span>
              <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                2-3 Sentences
              </span>
            </div>

            <div className="bg-[#0b1120] p-2 rounded text-[10px] text-gray-400 border border-white/5 mb-1.5">
              <span className="text-gray-400 text-[9px] block mb-0.5">Input: 400-word stakeholder update</span>
              <p className="line-clamp-2 text-gray-300 text-[9px]">
                "Team, the Q3 data engineering deliverables have transitioned into staging. Please verify the automated integration pipelines..."
              </p>
            </div>

            <div className="bg-indigo-950/30 p-2 rounded-lg border border-indigo-500/20 text-[10px] text-indigo-100">
              <span className="text-indigo-400 font-semibold text-[9px] block">Generated Summary:</span>
              <ol className="list-decimal pl-3 space-y-0.5 text-[9px] mt-1 text-gray-200">
                <li>Q3 engineering deliverables are live in staging for review.</li>
                <li>All automated data pipelines completed health validation.</li>
                <li>Final sign-off requested by Friday EOD.</li>
              </ol>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-gray-400 pt-1 border-t border-white/5">
            <span>Compression Ratio: 78%</span>
            <span className="text-indigo-300">Fast Groq Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Master Preview Selector Component
export default function ProjectMockup({ previewType }) {
  switch (previewType) {
    case 'legal-workspace':
      return <LegalDocPreview />;
    case 'health-analytics':
      return <NovaGenPreview />;
    case 'clustering-dashboard':
      return <SmartCartPreview />;
    case 'assistant-workspace':
      return <AssistantPreview />;
    default:
      return null;
  }
}
