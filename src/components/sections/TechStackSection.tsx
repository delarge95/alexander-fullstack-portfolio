import { motion } from 'framer-motion';

const TechStackSection = () => {
  const techStack = [
    {
      category: 'Backend & APIs',
      technologies: [
        { name: 'Python', level: 95, years: '10+' },
        { name: 'FastAPI', level: 90, years: '4' },
        { name: 'Node.js', level: 75, years: '6' },
        { name: 'PostgreSQL', level: 85, years: '8' },
      ],
    },
    {
      category: 'Frontend & UI',
      technologies: [
        { name: 'React', level: 90, years: '6' },
        { name: 'Next.js', level: 85, years: '4' },
        { name: 'TypeScript', level: 90, years: '5' },
        { name: 'Tailwind CSS', level: 90, years: '4' },
      ],
    },
    {
      category: 'AI & Multi-Agent Systems',
      technologies: [
        { name: 'CrewAI', level: 90, years: '2' },
        { name: 'LLMs (Claude, GPT)', level: 85, years: '3' },
        { name: 'RAG Systems', level: 80, years: '2' },
        { name: 'Prompt Engineering', level: 90, years: '3' },
      ],
    },
    {
      category: '3D & AR Development',
      technologies: [
        { name: 'Unity (C#)', level: 85, years: '7' },
        { name: 'Blender', level: 80, years: '7' },
        { name: 'Maya', level: 75, years: '6' },
        { name: 'Meta AR', level: 80, years: '2' },
      ],
    },
    {
      category: 'DevOps & Testing',
      technologies: [
        { name: 'Git/GitHub', level: 95, years: '10+' },
        { name: 'Playwright', level: 85, years: '3' },
        { name: 'Supabase', level: 90, years: '3' },
        { name: 'CI/CD', level: 80, years: '5' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-linear-text mb-4">
            Stack Tecnológico Completo
          </h2>
          <p className="text-xl text-linear-text-secondary max-w-3xl mx-auto">
            10 lenguajes de programación y ecosistemas tecnológicos para desarrollo end-to-end
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-linear-bg border border-linear-border rounded-xl p-6 hover:border-linear-primary/30 transition-all"
            >
              <h3 className="text-xl font-bold text-linear-text mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-linear-primary rounded-full"></span>
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-linear-text font-medium">{tech.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-linear-text-secondary">{tech.years} años</span>
                        <span className="text-sm font-mono text-linear-secondary">{tech.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-linear-bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + techIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-linear-primary to-linear-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-linear-bg border border-linear-border rounded-xl px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-linear-primary">10+</div>
              <div className="text-sm text-linear-text-secondary">Lenguajes</div>
            </div>
            <div className="w-px h-12 bg-linear-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-linear-secondary">20+</div>
              <div className="text-sm text-linear-text-secondary">Frameworks</div>
            </div>
            <div className="w-px h-12 bg-linear-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-linear-text">Full-Stack</div>
              <div className="text-sm text-linear-text-secondary">End-to-End</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
