'use client';

import Image from 'next/image';
import { Linkedin, Globe, TrendingUp, UserCheck } from 'lucide-react';

const PersonalBrandSection = () => {
  const subsections = [
    {
      title: 'LinkedIn & Digital Presence',
      icon: <Linkedin size={32} className="text-cyan-300" />,
      subtitle: 'Building My Online Professional Identity',
      image: '/linkedin.jpg',
      imageAlt: 'Professional networking and digital presence',
      content:
        'I updated my LinkedIn profile to highlight my volunteer work, academic achievements, and professional experiences. I also created a personal website where I showcase my projects, share my interests, and build a stronger online presence that represents my skills and career goals.',
      tags: ['LinkedIn', 'Personal Website', 'Digital Portfolio'],
    },
    {
      title: 'Personal Growth & Confidence',
      icon: <UserCheck size={32} className="text-emerald-300" />,
      subtitle: 'Growing Through Self-Presentation',
      image: '/brand.jpg',
      imageAlt: 'Personal growth and professional confidence',
      content:
        'Building my personal brand has improved my confidence in presenting my abilities and connecting with others. I have learned the importance of maintaining a professional image, developing my skills, and creating meaningful opportunities through continuous learning and networking.',
      tags: ['Confidence', 'Networking', 'Continuous Learning'],
    },
  ];

  return (
    <section id="personal-brand" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-600/5 via-transparent to-violet-500/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full border border-cyan-500/30">
            <Globe size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-200">Professional Identity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Personal Brand
          </h2>
          <p className="text-foreground/70 text-lg font-medium max-w-3xl mx-auto">
            Showcasing my journey of developing a professional identity, strengthening my digital presence, and building confidence in presenting my skills and experiences.
          </p>
        </div>

        {/* Subsections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subsections.map((subsection, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-violet-500/30 hover:border-cyan-400 smooth-transition fade-in-up"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={subsection.image}
                  alt={subsection.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 smooth-transition">
                  {subsection.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    {index === 0 ? 'Digital Identity' : 'Self-Development'}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 smooth-transition">
                  {subsection.title}
                </h3>
                <p className="text-cyan-200/80 text-sm font-semibold mb-5 tracking-wide uppercase">
                  {subsection.subtitle}
                </p>

                <p className="text-foreground/85 leading-relaxed mb-6 text-base sm:text-lg font-light">
                  {subsection.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {subsection.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-violet-600/30 to-cyan-500/30 text-violet-200 rounded-full border border-violet-500/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-violet-600/5 pointer-events-none opacity-0 group-hover:opacity-100 smooth-transition" />
            </div>
          ))}
        </div>

        {/* Bottom Reflection */}
        <div
          className="mt-16 relative rounded-2xl border border-cyan-500/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 text-center hover:border-violet-400 smooth-transition"
          data-aos="fade-up-scale"
          data-aos-delay="300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 rounded-2xl pointer-events-none" />
          <TrendingUp className="mx-auto mb-6 text-cyan-400" size={40} />
          <p className="text-foreground/85 text-lg font-medium relative leading-relaxed max-w-3xl mx-auto">
            Through personal branding, I have learned that presenting myself authentically online and offline opens doors to new opportunities. It is not just about looking professional — it is about being intentional about the story I tell and the connections I make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandSection;
