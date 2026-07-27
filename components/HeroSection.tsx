'use client';

import { ArrowDown, Sparkles, Users } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 gradient-shift"
        style={{
          background: 'linear-gradient(135deg, oklch(0.12 0.01 250), oklch(0.15 0.02 260), oklch(0.18 0.01 240), oklch(0.12 0.01 250))',
          backgroundSize: '300% 300%',
        }}
      />

      <div className="absolute top-20 right-32 w-96 h-96 bg-green-700/20 rounded-full filter blur-3xl float opacity-30 mix-blend-multiply" />
      <div className="absolute bottom-40 left-24 w-80 h-80 bg-amber-700/15 rounded-full filter blur-3xl float opacity-25 mix-blend-multiply" style={{ animationDelay: '1s' }} />

      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpeg"
          alt="Teamwork collaboration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-gradient-to-r from-green-700/40 to-amber-700/40 rounded-full border border-green-500/40 shadow-lg shadow-green-900/20">
              <Sparkles size={16} className="text-green-400" />
              <span className="text-sm font-semibold text-emerald-100 tracking-wide uppercase">Academic Portfolio</span>
            </div>

            <p className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Lucky Ale
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] text-white">
              Employability
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-green-300 to-amber-300 bg-clip-text text-transparent">
                Skills Portfolio
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-amber-100/90 mb-2">
              Comprehensive Competency Demonstration
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
              Hello, my name is <span className="text-amber-200 font-semibold">Lucky Ale</span>, and welcome to my Employability Skills Portfolio.

              Throughout this module, I have focused on developing key employability skills that will support my academic success and prepare me for future professional opportunities. These include <span className="text-cyan-300 font-medium">Teamwork</span>, <span className="text-cyan-300 font-medium">Adaptability</span>, <span className="text-cyan-300 font-medium">Problem Solving &amp; Critical Analysis</span>, and <span className="text-cyan-300 font-medium">People Management &amp; Leadership</span>, among others.

              This portfolio documents my learning journey by showcasing evidence of my work, practical experiences, and personal reflections. It demonstrates how I have developed these skills through academic activities, collaboration, and continuous professional growth, preparing me for future career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
              <button
                onClick={() => scrollToSection('skills')}
                className="px-8 py-4 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold rounded-lg smooth-hover shadow-lg shadow-green-900/40 smooth-transition text-lg"
              >
                View Competencies
              </button>
              <button
                onClick={() => scrollToSection('evidence')}
                className="px-8 py-4 border-2 border-amber-500/50 text-amber-100 font-bold rounded-lg smooth-hover hover:bg-amber-700/20 hover:border-amber-400 text-lg"
              >
                View Evidence
              </button>
            </div>
          </div>

          <div className="fade-in-up hidden lg:block" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-700/30 via-cyan-500/20 to-amber-700/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-effect">
                <img
                  src="/hero.jpeg"
                  alt="Teamwork collaboration"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-700/30 border border-green-500/50 flex items-center justify-center">
                      <Users size={20} className="text-green-300" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Teamwork in Action</p>
                      <p className="text-foreground/70 text-xs">Demonstrated through collaborative projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:hidden mt-8">
          <div className="relative rounded-xl overflow-hidden border border-white/10 glass-effect max-w-md w-full">
            <img
              src="/hero.jpeg"
              alt="Teamwork collaboration"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>

        <div className="flex justify-center animate-bounce mt-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-amber-300/70 hover:text-amber-200 smooth-transition p-2 hover:bg-amber-700/10 rounded-full"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
