'use client';

import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CVPage() {
  const downloadCV = () => {
    const cvText = `PROFESSIONAL CURRICULUM VITAE

PERSONAL INFORMATION
Name: Lucky Ale
Email: l.ale@students.rave.ac.uk
Phone: +44 7459 115064
LinkedIn: [linkedin.com/in/lucky-ale]
Location: London, UK

PROFESSIONAL SUMMARY
Results-driven Business Management graduate with demonstrated expertise in operational excellence, project management, and strategic business improvement. Proven track record of identifying inefficiencies, implementing data-driven solutions, and delivering measurable organizational improvements. Strong analytical capabilities combined with exceptional stakeholder management and cross-functional team leadership skills. Committed to driving sustainable business growth through process optimization and evidence-based decision-making.

KEY COMPETENCIES

Strategic Management
- Strategic business analysis and planning
- Operational process optimization
- Financial decision-making and cost-benefit analysis
- Change management and implementation

Project Management
- Project planning and coordination
- Work breakdown structure (WBS) development
- Gantt chart and timeline management
- Risk assessment and mitigation
- Stakeholder engagement and communication

Business Analysis
- Process mapping and workflow optimization
- Performance metrics and KPI analysis
- Data interpretation and insight generation
- Bottleneck identification and resolution

Leadership & Collaboration
- Team coordination and cross-functional collaboration
- Stakeholder communication and management
- Staff training and development program design
- Presentation and persuasion skills

Specialized Skills
- Financial modeling and ROI calculation
- Inventory management systems
- Customer experience optimization
- Sustainability and ethical business practices

PROFESSIONAL EXPERIENCE

EXTERNAL BUSINESS CONSULTANT
RainyDay Café Operational Improvement Project
[Month Year] – [Month Year] | London, UK

Project Overview:
Led comprehensive operational transformation initiative for established café facing declining efficiency and customer satisfaction challenges.

Key Achievements:
- Operational Analysis: Conducted detailed audit identifying critical inefficiencies including 8-minute peak-hour wait times (baseline: 3 minutes), staffing bottlenecks, and inventory management failures
- Strategic Implementation: Designed and implemented multi-phase improvement program addressing process optimization, staff training, and technology integration
- Financial Impact: Developed cost-benefit analysis projecting £12,500 annual benefits against £4,100 investment (205% ROI, 3.2-month payback period)
- Efficiency Gains: Proposed solutions targeting 25% wait time reduction, 15% transaction increase, and 20% food waste reduction
- Team Leadership: Coordinated cross-functional team including Operations Lead, IT specialist, and Staff Training coordinator
- Stakeholder Management: Engaged café owner, staff, customers, and suppliers through strategic power-interest matrix approach

Deliverables:
- Comprehensive work breakdown structure with three major phases
- 12-week detailed project timeline with milestone tracking
- RACI responsibility matrix for team accountability
- Operational audit findings report with metric analysis
- Cost-benefit analysis with financial projections
- Stakeholder engagement strategy and power-interest grid
- Process flow diagrams (current-state vs. future-state)
- Staff training program design and implementation plan
- Inventory management system recommendations

EDUCATION

BSc (Hons) Business Management
Ravensbourne University London
2024 – 2025

Relevant Modules:
- Operations and Project Management
- Business Strategy and Planning
- Financial Management and Analysis
- Organizational Behavior and Leadership
- Business Research Methods

PROFESSIONAL CERTIFICATIONS & TRAINING
- Project Management Fundamentals
- Business Analysis and Process Improvement
- Financial Modeling and Analysis
- Stakeholder Engagement and Communication

TECHNICAL PROFICIENCIES

Business Tools:
- Project Management Software (Gantt charts, WBS, timeline management)
- Financial Analysis Tools (cost-benefit analysis, ROI modeling)
- Inventory Management Systems
- Data Analysis and Interpretation
- Spreadsheet Applications (Advanced Excel)

Professional Software:
- Microsoft Office Suite (Word, Excel, PowerPoint)
- Project Planning and Tracking Tools
- Business Intelligence and Analytics Platforms

LANGUAGES
- English (Native)

REFERENCES
Available upon request

Last Updated: December 2025

This CV is based on demonstrated competencies from the RainyDay Café Operational Improvement Project, showcasing practical application of business management principles and professional expertise in strategic operations and project delivery.`;

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(cvText)
    );
    element.setAttribute('download', 'CV_Professional.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 smooth-transition mb-8"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
            Professional CV
          </h1>
          <p className="text-foreground/70 text-lg">
            Comprehensive curriculum vitae highlighting business management expertise and operational excellence achievements
          </p>
        </div>

        {/* CV Content */}
        <div className="relative rounded-2xl border border-cyan-500/30 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12 mb-12">
          <div className="prose prose-invert max-w-none">
            {/* Personal Info */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/80">
                <p>
                  <span className="font-semibold text-cyan-200">Name:</span> [Your Name]
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">Email:</span> [your.email@example.com]
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">Phone:</span> [+44 (0) XXXX XXXXXX]
                </p>
                <p>
                  <span className="font-semibold text-cyan-200">LinkedIn:</span> [linkedin.com/in/yourprofile]
                </p>
              </div>
            </section>

            {/* Professional Summary */}
            <section className="mb-8 pb-8 border-b border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
              <p className="text-foreground/80 leading-relaxed">
                Results-driven Business Management graduate with demonstrated expertise in operational excellence, project management, and strategic business improvement. Proven track record of identifying inefficiencies, implementing data-driven solutions, and delivering measurable organizational improvements.
              </p>
            </section>

            {/* Key Competencies */}
            <section className="mb-8 pb-8 border-b border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Key Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Strategic Management', items: ['Business analysis and planning', 'Process optimization', 'Financial decision-making'] },
                  { title: 'Project Management', items: ['Planning and coordination', 'Timeline management', 'Stakeholder engagement'] },
                  { title: 'Business Analysis', items: ['Process mapping', 'Performance metrics', 'Data interpretation'] },
                  { title: 'Leadership', items: ['Team coordination', 'Staff development', 'Presentation skills'] },
                ].map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-cyan-200 mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-foreground/70 text-sm flex items-start gap-2">
                          <span className="text-violet-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8 pb-8 border-b border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">External Business Consultant</h3>
                <p className="text-cyan-200 font-medium mb-4">RainyDay Café Operational Improvement Project</p>
                <p className="text-foreground/70 mb-4">Led comprehensive operational transformation delivering 205% ROI through process optimization, staff training, and technology integration.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-violet-300 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {[
                        'Operational audit identifying 8-minute wait times and staffing bottlenecks',
                        'Strategic implementation program targeting 25% wait time reduction',
                        'Financial modeling projecting £12,500 annual benefits',
                        'Cross-functional team coordination and stakeholder management',
                        'Comprehensive project deliverables including WBS, Gantt chart, and RACI matrix',
                      ].map((achievement, idx) => (
                        <li key={idx} className="text-foreground/70 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">BSc (Hons) Business Management</h3>
                <p className="text-cyan-200 font-medium mb-4">Ravensbourne University London | 2024 – 2025</p>
                <div>
                  <h4 className="font-semibold text-violet-300 mb-2">Relevant Modules:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Operations and Project Management',
                      'Business Strategy and Planning',
                      'Financial Management and Analysis',
                      'Organizational Behavior and Leadership',
                    ].map((module, idx) => (
                      <p key={idx} className="text-foreground/70 text-sm">
                        • {module}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={downloadCV}
          className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold rounded-lg smooth-hover shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 text-lg"
        >
          <Download size={24} />
          Download CV
        </button>
      </div>
    </main>
  );
}
