import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please include a brief message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Build mailto query with pre-filled parameters so the message is actually sent via standard email client
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hi Dipesh,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [copiedMessage, setCopiedMessage] = useState(false);

  const copyMessage = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const formatted = `Subject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-16 bg-[#080c16]/50">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>📫</span>
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Meaningful.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              Have an opportunity, project idea, or collaboration in mind? Let's connect. I'm actively seeking opportunities in Software Development and AI/ML.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#0b101f] border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                    ✉️
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs rounded bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#0b101f] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                    📞
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-2.5 py-1 text-xs rounded bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
                >
                  Call
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#0b101f] border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0b101f] border border-white/10 shadow-2xl space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Fill in your note below to compose directly in your email client.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="SDE Opportunity / AI Project Collaboration"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070b14] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <span>Send via Email Client</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={copyMessage}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-xs border border-white/10 transition-colors"
                >
                  {copiedMessage ? 'Message Copied ✓' : 'Copy Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
