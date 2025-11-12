import { motion } from 'framer-motion';
import { Code2, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: '10+', label: 'Años de Experiencia', icon: Code2 },
    { value: '10', label: 'Lenguajes de Programación', icon: Brain },
    { value: '300-500%', label: 'ROI Comprobado', icon: Zap },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-linear-primary/5 via-transparent to-linear-secondary/5 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-linear-bg-secondary border border-linear-border rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-linear-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-linear-secondary"></span>
          </span>
          <span className="text-sm text-linear-text-secondary">Disponible para posiciones senior/founding engineer</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-linear-text mb-6"
        >
          AI-Native Full Stack
          <br />
          <span className="bg-gradient-to-r from-linear-primary to-linear-secondary bg-clip-text text-transparent">
            Architect
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-linear-text-secondary max-w-3xl mx-auto mb-12"
        >
          Especialista en sistemas multi-agente, arquitecturas escalables e integración de IA/ML. 
          Experiencia end-to-end desde prototipo hasta producción.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-linear-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-lg font-medium w-full sm:w-auto"
          >
            Agendar Sesión Técnica (60 min)
          </button>
          <a
            href="#projects"
            className="px-8 py-4 bg-linear-bg-secondary border border-linear-border text-linear-text rounded-lg hover:bg-linear-hover transition-all text-lg font-medium w-full sm:w-auto"
          >
            Ver Proyectos
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-linear-bg-secondary border border-linear-border rounded-xl p-6 hover:border-linear-primary/50 transition-all"
              >
                <Icon className="w-8 h-8 text-linear-primary mb-4 mx-auto" />
                <div className="text-4xl font-bold text-linear-text mb-2">{stat.value}</div>
                <div className="text-sm text-linear-text-secondary">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
