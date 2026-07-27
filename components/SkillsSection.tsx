'use client';

import SkillCard from './SkillCard';
import {
  Zap,
  Users,
  BarChart3,
  Briefcase,
  TrendingUp,
  Leaf,
  Flame,
  Scale,
  Users2,
  RefreshCw,
  Target,
  Link2,
  Crown,
  Lightbulb,
  MessageSquare,
} from 'lucide-react';

const SkillsSection = () => {
  const level4Skills = [
    {
      title: 'Project Planning & Organisation',
      description: 'Demonstrated ability to structure complex projects and coordinate deliverables',
      icon: <Briefcase />,
      proficiency: 92,
      evidence: [
        'I created a work breakdown structure to map out every task and deadline for our project.',
        'Building the Gantt chart taught me how visual timelines help keep everyone aligned and on track.',
      ],
    },
    {
      title: 'Analytical & Problem-Solving',
      description: 'Strategic analysis of business processes and identification of improvement opportunities',
      icon: <BarChart3 />,
      proficiency: 88,
      evidence: [
        'I walked through the café\'s processes and noticed where things slowed down for customers.',
        'Analyzing the data helped me see patterns I would have missed just by observing casually.',
      ],
    },
    {
      title: 'Teamwork & Collaboration',
      description: 'Effective contribution within cross-functional project team',
      icon: <Users />,
      proficiency: 90,
      evidence: [
        'I joined weekly team meetings where we shared progress and helped each other move forward.',
        'Supporting my teammates with their presentation sections showed me how collaboration strengthens outcomes.',
      ],
    },
    {
      title: 'Communication & Presentation',
      description: 'Professional articulation of findings and recommendations',
      icon: <Zap />,
      proficiency: 87,
      evidence: [
        'I practiced explaining our findings clearly so stakeholders could understand the recommendations easily.',
        'Writing the report forced me to organize complex ideas into something readable and useful.',
      ],
    },
    {
      title: 'Financial Awareness',
      description: 'Understanding of cost-benefit analysis and financial decision-making',
      icon: <TrendingUp />,
      proficiency: 85,
      evidence: [
        'Estimating costs for our suggestions made me think carefully about what businesses can actually afford.',
        'Calculating potential returns helped me understand why every improvement needs a clear business case.',
      ],
    },
    {
      title: 'Ethical & Sustainable Decision-Making',
      description: 'Consideration of environmental and social responsibility in recommendations',
      icon: <Leaf />,
      proficiency: 88,
      evidence: [
        'I considered how our recommendations would affect café staff, not just efficiency numbers.',
        'Suggesting waste reduction measures taught me that good decisions balance profit with responsibility.',
      ],
    },
  ];

  const lowTierSkills = [
    {
      title: 'Active Participation',
      description: 'Engaging proactively in team activities and contributing ideas during collaborative work',
      icon: <Flame />,
      proficiency: 88,
      evidence: [
        'I spoke up during brainstorming sessions because I wanted my perspective to help shape the project.',
        'Taking on tricky tasks during planning showed me that stepping outside my comfort zone is worth it.',
      ],
    },
    {
      title: 'Managing Workloads',
      description: 'Organising and prioritising tasks to meet deadlines and maintain quality output',
      icon: <Scale />,
      proficiency: 86,
      evidence: [
        'I broke my assignments into smaller steps so nothing slipped through the cracks when deadlines approached.',
        'Adjusting my priorities mid-project taught me to stay flexible while still meeting what mattered most.',
      ],
    },
    {
      title: 'Teamwork',
      description: 'Collaborating effectively with others to achieve shared goals and deliverables',
      icon: <Users2 />,
      proficiency: 90,
      evidence: [
        'I made sure to share what I learned from my research so my teammates could work more efficiently.',
        'Checking in regularly with my group helped us catch misalignments before they became bigger problems.',
      ],
    },
  ];

  const middleTierSkills = [
    {
      title: 'Adaptability',
      description: 'Adjusting approach and responding positively to changing circumstances and new challenges',
      icon: <RefreshCw />,
      proficiency: 85,
      evidence: [
        'When feedback changed our direction, I adjusted my approach without feeling frustrated about rework.',
        'Learning a new tool mid-project was challenging, but it showed me I can pick things up when needed.',
      ],
    },
    {
      title: 'Emerging Leadership & Vision',
      description: 'Demonstrating initiative and guiding team members towards shared objectives',
      icon: <Target />,
      proficiency: 83,
      evidence: [
        'I took charge of a small sub-project and focused on keeping my teammates motivated toward our goal.',
        'Outlining a clear roadmap helped me see how smaller steps connect to something bigger and meaningful.',
      ],
    },
    {
      title: 'Relationship Building',
      description: 'Establishing and maintaining productive professional connections across teams',
      icon: <Link2 />,
      proficiency: 84,
      evidence: [
        'Talking with café staff during the consultation made the project feel more human and grounded.',
        'Keeping in touch with stakeholders reminded me that relationships matter as much as final results.',
      ],
    },
  ];

  const topTierSkills = [
    {
      title: 'People Management & Leadership',
      description: 'Directing and motivating teams to achieve high-quality outcomes and organisational goals',
      icon: <Crown />,
      proficiency: 82,
      evidence: [
        'Leading a small team meant I had to listen as much as I directed, which surprised me.',
        'Delegating work based on people\'s strengths taught me that good leadership starts with understanding others.',
      ],
    },
    {
      title: 'Problem Solving & Critical Analysis',
      description: 'Systematically evaluating complex situations and developing evidence-based solutions',
      icon: <Lightbulb />,
      proficiency: 86,
      evidence: [
        'I traced problems back to their root causes instead of just fixing surface symptoms.',
        'Weighing different solutions against real criteria helped me avoid jumping to the easiest answer.',
      ],
    },
    {
      title: 'Verbal, Written & Digital Communication',
      description: 'Delivering clear and impactful messages across multiple formats and audiences',
      icon: <MessageSquare />,
      proficiency: 85,
      evidence: [
        'Presenting our findings live taught me to keep explanations simple without losing important detail.',
        'Writing clear updates online showed me how digital tools can keep a team connected and informed.',
      ],
    },
  ];

  return (
    <div className="space-y-32">
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30">
              <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">Level 4</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
              Core Employability Skills
            </h2>
            <p className="text-foreground/70 text-lg font-medium">
              Six key competencies demonstrated through the RainyDay Café Operational Excellence Project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {level4Skills.map((skill, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <SkillCard
                  title={skill.title}
                  description={skill.description}
                  evidence={skill.evidence}
                  proficiency={skill.proficiency}
                  icon={skill.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills-level5" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-600/5 via-transparent to-violet-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-600/20 border border-cyan-500/30">
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Level 5</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200">
              Advanced Employability Skills
            </h2>
            <p className="text-foreground/70 text-lg font-medium">
              Nine competencies developed across three tiers during the Level 5 programme
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                Low-tier Employability Skills
              </h3>
              <p className="text-foreground/60 text-sm mb-8">Foundational skills for workplace effectiveness</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lowTierSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <SkillCard
                      title={skill.title}
                      description={skill.description}
                      evidence={skill.evidence}
                      proficiency={skill.proficiency}
                      icon={skill.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                Middle-tier Employability Skills
              </h3>
              <p className="text-foreground/60 text-sm mb-8">Intermediate skills for professional growth</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {middleTierSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <SkillCard
                      title={skill.title}
                      description={skill.description}
                      evidence={skill.evidence}
                      proficiency={skill.proficiency}
                      icon={skill.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                Top-tier Employability Skills
              </h3>
              <p className="text-foreground/60 text-sm mb-8">Advanced skills for leadership and strategic impact</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topTierSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <SkillCard
                      title={skill.title}
                      description={skill.description}
                      evidence={skill.evidence}
                      proficiency={skill.proficiency}
                      icon={skill.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
