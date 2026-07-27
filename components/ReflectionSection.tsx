'use client';

import { Quote, Lightbulb } from 'lucide-react';

const ReflectionSection = () => {
  return (
    <section id="reflection" className="py-32 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-600/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full border border-cyan-500/30">
            <Lightbulb size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-200">Personal Reflection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Learning & Growth
          </h2>
          <p className="text-foreground/70 text-lg font-medium">
            Developing Skills Through Learning and Experience
          </p>
        </div>

        {/* Reflection Card */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32">
            <div className="relative rounded-xl overflow-hidden w-full">
              <img
                src="/learn.jpeg"
                alt="Learning and growth"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/30 border border-teal-400/50 flex items-center justify-center">
                    <Lightbulb size={20} className="text-teal-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Communication in Action</p>
                    <p className="text-foreground/70 text-xs">Demonstrated through collaborative learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 relative">
            <div
              className="relative rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 hover:border-violet-400 smooth-transition"
              data-aos="fade-up-scale"
              data-aos-delay="100"
            >
              <Quote className="absolute top-8 right-8 text-cyan-400/20" size={50} />

              <div className="prose prose-invert max-w-none relative">
                <p className="text-foreground/85 leading-relaxed mb-8 text-xl italic font-light">
                  I have focused on developing key employability skills by actively participating in group projects, class discussions, presentations, and collaborative activities. These experiences have helped me become more confident, organised, and effective when working with others while strengthening my professional and academic abilities.
                </p>

                <p className="text-foreground/85 leading-relaxed text-xl font-light">
                  Through continuous learning and practical experience, I have progressed several of my employability skills to a higher level. Skills such as communication, leadership, and teamwork have developed significantly through consistent practice, while adaptability, problem-solving, and relationship building have further enhanced my professional growth and career readiness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Data-Driven Thinking',
              description: 'Importance of empirical analysis in business decisions',
            },
            {
              title: 'Ethical Leadership',
              description: 'Balancing efficiency with responsibility to stakeholders',
            },
            {
              title: 'Collaborative Excellence',
              description: 'Power of diverse perspectives in problem-solving',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-violet-500/30 p-6 hover:border-cyan-400 smooth-transition text-center fade-in-up"
              data-aos="fade-up"
              data-aos-delay={`${150 + index * 100}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
              <h3 className="font-bold text-white mb-3 relative text-lg">{item.title}</h3>
              <p className="text-sm text-foreground/70 relative leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
