'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const EvidenceGallery = () => {
  const [scrollAnimations, setScrollAnimations] = useState<{ [key: number]: boolean }>({});

  const evidenceItems = [
    {
      id: 1,
      title: 'Work Breakdown Structure',
      category: 'Documentation',
      description: 'Comprehensive project structure showing all deliverables and sub-tasks',
      image: '/evidence-1.png',
    },
    {
      id: 2,
      title: 'Gantt Chart Timeline',
      category: 'Planning',
      description: 'Detailed project schedule with milestones and dependencies',
      image: '/evidence-2.png',
    },
    {
      id: 3,
      title: 'RACI Matrix',
      category: 'Organization',
      description: 'Responsibility assignment matrix for team roles',
      image: '/evidence-3.png',
    },
    {
      id: 4,
      title: 'Operational Audit Report',
      category: 'Analysis',
      description: 'Detailed findings from café process audit',
      image: '/evidence-4.png',
    },
    {
      id: 5,
      title: 'Cost-Benefit Analysis',
      category: 'Financial',
      description: 'ROI calculations for proposed improvements',
      image: '/evidence-5.png',
    },
    {
      id: 6,
      title: 'Consultant Presentation',
      category: 'Presentation',
      description: 'Professional pitch with recommendations and strategies',
      image: '/evidence-6.png',
    },
    {
      id: 7,
      title: 'Customer Flow Diagram',
      category: 'Analysis',
      description: 'Visual mapping of customer journey and bottlenecks',
      image: '/evidence-7.png',
    },
    {
      id: 8,
      title: 'Sustainability Initiatives',
      category: 'CSR',
      description: 'Environmental and social responsibility recommendations',
      image: '/evidence-8.png',
    },
  ];

  const categories = [...new Set(evidenceItems.map((item) => item.category))];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setScrollAnimations((prev) => ({ ...prev, [index]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="evidence" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-violet-600/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Evidence Gallery
          </h2>
          <p className="text-foreground/70 text-lg font-medium">
            Professional project artifacts demonstrating applied expertise
          </p>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-violet-500/30 to-cyan-500/30 text-violet-200 rounded-full border border-violet-500/50 hover:border-violet-400 smooth-transition"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {evidenceItems.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              className={`group relative rounded-xl overflow-hidden smooth-transition ${scrollAnimations[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-cyan-500/30 group-hover:border-violet-400 smooth-transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 smooth-transition"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                  <p className="text-cyan-200 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <span className="inline-block text-xs bg-violet-600/60 text-white px-3 py-1 rounded-full font-semibold w-fit">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default EvidenceGallery;
