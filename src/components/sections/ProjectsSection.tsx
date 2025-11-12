import { motion } from 'framer-motion';
import { GitBranch, Boxes, Newspaper, Wrench, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: GitBranch,
      title: 'ARA (Academic Research Assistant)',
      subtitle: 'Sistema Multi-Agente con Orquestación CrewAI',
      problem: 'Investigación académica lenta y fragmentada con múltiples fuentes',
      solution: 'Orquestación de 4 agentes especializados con pipeline QA y validación',
      stack: ['Python', 'CrewAI', 'FastAPI', 'Next.js', 'TypeScript', 'Supabase', 'Claude Sonnet 4.5'],
      results: [
        { metric: '-70%', label: 'Tiempo de investigación' },
        { metric: 'p95 < 300ms', label: 'Latencia de API' },
        { metric: 'QA ≥ 90%', label: 'Calidad de respuestas' },
      ],
      highlight: 'CI/CD, tests, observabilidad',
      color: 'linear-primary',
    },
    {
      icon: Boxes,
      title: 'Portfolio 3D Interactivo',
      subtitle: 'Pipeline PBR y Demos Interactivas',
      problem: 'Mostrar calidad 3D y versatilidad técnica de forma profesional',
      solution: 'Pipeline completo con Unity, Blender, Maya y 3ds Max para demos interactivas',
      stack: ['Unity (C#)', 'Blender', 'Maya', '3ds Max', 'PBR Workflow', 'WebGL'],
      results: [
        { metric: '50+', label: 'Proyectos 3D' },
        { metric: 'FPS ≥ 60', label: 'Rendimiento' },
        { metric: '< 3s', label: 'Tiempo de carga' },
      ],
      highlight: 'Gaming, publicitario, product viz, real estate',
      color: 'linear-secondary',
    },
    {
      icon: Newspaper,
      title: 'AI News Aggregator',
      subtitle: 'Curación Inteligente de Noticias IA/ML',
      problem: 'Sobrecarga de información en el ecosistema de IA',
      solution: 'Ingestión automatizada + LLMs para resumen + dashboard analytics',
      stack: ['Python', 'FastAPI', 'React', 'LLM APIs', 'Web Scraping', 'PostgreSQL'],
      results: [
        { metric: '100+', label: 'Fuentes diarias' },
        { metric: 'En desarrollo', label: 'Estado actual' },
        { metric: 'Auto-refresh', label: 'Actualización' },
      ],
      highlight: 'Fuentes verificadas, calidad de resumen, deployment reproducible',
      color: 'linear-primary',
    },
    {
      icon: Wrench,
      title: 'Herramientas de Automatización',
      subtitle: 'Productividad con IA y Tooling',
      problem: 'Tareas repetitivas en desarrollo y operaciones',
      solution: 'Scripts Python + agentes de desarrollo + integración con Copilot/Cursor/MCP',
      stack: ['Python', 'APIs IA', 'Copilot', 'Cursor', 'MCP', 'Playwright', 'Bash'],
      results: [
        { metric: 'Declarado', label: 'Mejora productividad' },
        { metric: 'Reducción', label: 'Errores manuales' },
        { metric: 'Automated', label: 'Testing E2E' },
      ],
      highlight: 'Medición de mejoras (tiempo, errores)',
      color: 'linear-secondary',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-bg">
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
            Proyectos de Escalabilidad y Arquitectura
          </h2>
          <p className="text-xl text-linear-text-secondary max-w-3xl mx-auto">
            Casos orientados a arquitectura escalable, sistemas multi-agente y métricas de producción
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-linear-bg-secondary border border-linear-border rounded-xl p-8 hover:border-linear-primary/30 transition-all group"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-${project.color}/10 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-linear-text mb-1">{project.title}</h3>
                    <p className="text-sm text-linear-text-secondary">{project.subtitle}</p>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-linear-text-secondary uppercase tracking-wide">Problema</span>
                    <p className="text-sm text-linear-text mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-linear-text-secondary uppercase tracking-wide">Solución</span>
                    <p className="text-sm text-linear-text mt-1">{project.solution}</p>
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-linear-text-secondary uppercase tracking-wide mb-2 block">Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-linear-bg border border-linear-border rounded-md text-xs text-linear-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-lg font-bold text-${project.color}`}>{result.metric}</div>
                      <div className="text-xs text-linear-text-secondary">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlight */}
                <div className="flex items-center gap-2 text-sm text-linear-text-secondary">
                  <ArrowRight className="w-4 h-4" />
                  <span>{project.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-lg font-medium"
          >
            Solicitar Demo Técnico
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
