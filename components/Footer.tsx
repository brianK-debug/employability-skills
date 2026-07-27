'use client';

import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-navy-dark via-navy-dark/95 to-transparent pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Portfolio</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Employability Skills Log showcasing professional competencies and project achievements. Built with modern web technologies and designed for optimal user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Evidence', href: '#evidence' },
                { label: 'Career', href: '#career' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary text-sm smooth-transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-primary hover:bg-primary/20 smooth-transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-white/10 text-primary hover:bg-primary/20 smooth-transition"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-primary hover:bg-primary/20 smooth-transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>
            &copy; {currentYear} Employability Skills Portfolio. Ravensbourne University London.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
