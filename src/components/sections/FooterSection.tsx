import { Github, Linkedin, Mail } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/alexanderwoodcock',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/alexanderwoodcock',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:alexander@awstudios.tech',
      label: 'Email',
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-bg border-t border-linear-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-linear-text mb-1">Alexander Woodcock</h3>
            <p className="text-sm text-linear-text-secondary">AI-Native Full Stack Architect</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-linear-text-secondary hover:text-linear-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-sm text-linear-text-secondary text-center md:text-right">
            © {currentYear} Alexander Woodcock. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
