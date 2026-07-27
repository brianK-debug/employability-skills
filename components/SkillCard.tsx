'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  evidence: string[];
  proficiency: number;
  icon?: React.ReactNode;
}

const SkillCard = ({ title, description, evidence, proficiency, icon }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative rounded-xl overflow-hidden smooth-transition cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />

      {/* Main card content */}
      <div className="relative backdrop-blur-md bg-white/5 border border-violet-500/30 group-hover:border-cyan-400/50 smooth-transition rounded-xl p-8 flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          {icon && (
            <div className="text-3xl flex-shrink-0 p-3 bg-gradient-to-br from-violet-600/30 to-cyan-500/30 rounded-lg group-hover:from-violet-500/40 group-hover:to-cyan-400/40 smooth-transition">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 smooth-transition">
              {title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Proficiency Indicator */}
        <div className="mb-6 mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-foreground/60">Proficiency Level</span>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              {proficiency}%
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-violet-500 via-cyan-400 to-teal-400 h-full rounded-full smooth-transition shadow-lg shadow-cyan-500/20"
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button className="flex items-center gap-2 text-cyan-300 text-sm font-bold hover:text-cyan-100 smooth-transition mt-2">
          <span>{isExpanded ? 'Hide' : 'View'} Evidence</span>
          <ChevronDown
            size={18}
            className={`smooth-transition transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable Evidence Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4 pt-4 border-t border-cyan-500/20' : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'}`}
        >
          <div className="space-y-3">
            {evidence.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex-shrink-0 mt-2" />
                <span className="text-foreground/80 text-sm leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
