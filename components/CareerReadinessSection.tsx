'use client';

import { useState, useEffect } from 'react';
import { Download, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';

const CareerReadinessSection = () => {
  const [counters, setCounters] = useState({
    skills: 0,
    tools: 0,
    deliverables: 0,
  });

  useEffect(() => {
    const targets = { skills: 6, tools: 12, deliverables: 8 };
    const interval = setInterval(() => {
      setCounters((prev) => ({
        skills: Math.min(prev.skills + 1, targets.skills),
        tools: Math.min(prev.tools + 1, targets.tools),
        deliverables: Math.min(prev.deliverables + 1, targets.deliverables),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="career" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full border border-violet-500/30">
            <span className="text-sm font-semibold text-violet-200">Next Steps</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
            Career Readiness & Impact
          </h2>
          <p className="text-foreground/70 text-lg font-medium">
            Prepared for professional advancement in business management and strategic planning roles
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              value: counters.skills,
              label: 'Core Skills Developed',
              icon: '🎯',
            },
            {
              value: counters.tools,
              label: 'Business Tools Applied',
              icon: '🛠️',
            },
            {
              value: counters.deliverables,
              label: 'Project Deliverables',
              icon: '📦',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent border border-violet-500/30 p-8 text-center hover:border-cyan-400 smooth-transition fade-in-up"
              data-aos="fade-up"
              data-aos-delay={`${150 + index * 100}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
              <div className="text-5xl font-bold mb-4 relative">{stat.icon}</div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-3 relative">
                {stat.value}
              </div>
              <p className="text-foreground/80 font-medium relative">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Competency Checklist */}
        <div
          className="relative rounded-2xl border border-cyan-500/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 mb-16 hover:border-violet-400 smooth-transition"
          data-aos="fade-up-scale"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 rounded-2xl pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-10 relative">Professional Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            {[
              'Strategic business analysis',
              'Project management and coordination',
              'Financial decision-making',
              'Stakeholder communication',
              'Team leadership potential',
              'Sustainability and ethics awareness',
              'Process improvement methodology',
              'Presentation and persuasion',
              'Cross-functional collaboration',
              'Data interpretation and insight',
              'Business planning',
              'Change management',
            ].map((competency, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 smooth-transition">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex-shrink-0" />
                <span className="text-foreground/85 font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent border border-violet-500/30 p-8 hover:border-cyan-400 smooth-transition flex items-center justify-center gap-4 md:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
            <Linkedin size={40} className="text-violet-400 group-hover:text-cyan-400 group-hover:scale-110 smooth-transition flex-shrink-0 relative" />
            <div className="text-left relative">
              <h4 className="font-bold text-white text-lg">Connect on LinkedIn</h4>
              <p className="text-sm text-foreground/70">Professional networking profile</p>
            </div>
          </a>

          {/* View CV Button */}
          <Link
            href="/cv"
            className="group relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent border border-cyan-500/30 p-8 hover:border-violet-400 smooth-transition flex items-center justify-center gap-4 md:text-left"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-violet-500/10 pointer-events-none" />
            <FileText size={40} className="text-cyan-400 group-hover:text-violet-400 group-hover:scale-110 smooth-transition flex-shrink-0 relative" />
            <div className="text-left relative">
              <h4 className="font-bold text-white text-lg">View Full CV</h4>
              <p className="text-sm text-foreground/70">Comprehensive curriculum vitae</p>
            </div>
          </Link>
        </div>

        {/* Closing Statement */}
        <div
          className="relative text-center rounded-2xl border border-violet-500/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-10 hover:border-cyan-400 smooth-transition"
          data-aos="fade-up-scale"
          data-aos-delay="300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 rounded-2xl pointer-events-none" />
          <p className="text-foreground/85 text-lg font-medium relative leading-relaxed">
            This portfolio demonstrates readiness for roles in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold">business management, operations, strategic planning, and organizational improvement</span>. The skills and evidence presented showcase the competencies required for meaningful professional contribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerReadinessSection;
