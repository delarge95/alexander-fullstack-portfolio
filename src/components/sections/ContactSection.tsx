import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { EDGE_FUNCTION_URL, SUPABASE_ANON_KEY } from '../../config';

interface FormData {
  full_name: string;
  email: string;
  company_name: string;
  position_type: string;
  project_type: string;
  tech_stack: string;
  timeline: string;
  budget_modality: string;
  message: string;
  github_url: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    company_name: '',
    position_type: '',
    project_type: '',
    tech_stack: '',
    timeline: '',
    budget_modality: '',
    message: '',
    github_url: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const positionTypes = [
    'Founding Full Stack Engineer',
    'Senior Full-Stack IA',
    'Lead Developer',
    'Technical Architect',
    'Staff Engineer',
    'Principal Engineer',
  ];

  const projectTypes = [
    'Multi-Agent Systems',
    'RAG Integration',
    'API Development',
    'Data App con IA',
    'Automatización Documental',
    'Prototipo 3D/AR Interactivo',
  ];

  const timelines = [
    '2-4 semanas (PoC)',
    '2-3 meses (MVP)',
    '3-6 meses (Product)',
    '6+ meses (Long-term)',
  ];

  const budgetModalities = [
    'Remoto (Full-time)',
    'Remoto (Part-time)',
    'Híbrido',
    'Equity + Salary',
    'Solo Equity',
    'Contract/Freelance',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        position_type: '',
        project_type: '',
        tech_stack: '',
        timeline: '',
        budget_modality: '',
        message: '',
        github_url: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-linear-text mb-4">
            Agendemos una Sesión Técnica
          </h2>
          <p className="text-xl text-linear-text-secondary max-w-2xl mx-auto">
            60 minutos para revisar arquitectura, perfilar p95/p99 y validar una hoja de ruta hacia producción
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-linear-bg border border-linear-border rounded-xl p-8 space-y-6"
        >
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-linear-text mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
                placeholder="Maria Rodriguez"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-linear-text mb-2">
                Email Corporativo *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
                placeholder="maria@techcorp.com"
              />
            </div>
          </div>

          {/* Row 2: Company & Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company_name" className="block text-sm font-medium text-linear-text mb-2">
                Empresa *
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                required
                value={formData.company_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
                placeholder="TechCorp Inc"
              />
            </div>

            <div>
              <label htmlFor="position_type" className="block text-sm font-medium text-linear-text mb-2">
                Tipo de Posición *
              </label>
              <select
                id="position_type"
                name="position_type"
                required
                value={formData.position_type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
              >
                <option value="">Seleccionar...</option>
                {positionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Project Type & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project_type" className="block text-sm font-medium text-linear-text mb-2">
                Tipo de Proyecto *
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                value={formData.project_type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
              >
                <option value="">Seleccionar...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-linear-text mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
              >
                <option value="">Seleccionar...</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Budget Modality */}
          <div>
            <label htmlFor="budget_modality" className="block text-sm font-medium text-linear-text mb-2">
              Modalidad *
            </label>
            <select
              id="budget_modality"
              name="budget_modality"
              required
              value={formData.budget_modality}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
            >
              <option value="">Seleccionar...</option>
              {budgetModalities.map((modality) => (
                <option key={modality} value={modality}>
                  {modality}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Tech Stack (optional) */}
          <div>
            <label htmlFor="tech_stack" className="block text-sm font-medium text-linear-text mb-2">
              Stack Tecnológico de Interés (Opcional)
            </label>
            <input
              type="text"
              id="tech_stack"
              name="tech_stack"
              value={formData.tech_stack}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
              placeholder="Python, FastAPI, React, TypeScript, Supabase"
            />
          </div>

          {/* Row 6: GitHub URL (optional) */}
          <div>
            <label htmlFor="github_url" className="block text-sm font-medium text-linear-text mb-2">
              GitHub / Portfolio URL (Opcional)
            </label>
            <input
              type="url"
              id="github_url"
              name="github_url"
              value={formData.github_url}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors"
              placeholder="https://github.com/techcorp"
            />
          </div>

          {/* Row 7: Message (optional) */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-linear-text mb-2">
              Mensaje (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-linear-bg-secondary border border-linear-border rounded-lg text-linear-text focus:outline-none focus:border-linear-primary transition-colors resize-none"
              placeholder="Buscamos un arquitecto senior para liderar el desarrollo de sistemas multi-agente con IA/ML..."
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 bg-linear-secondary/10 border border-linear-secondary rounded-lg text-linear-secondary"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Solicitud enviada exitosamente. Nos pondremos en contacto pronto.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 bg-linear-primary/10 border border-linear-primary rounded-lg text-linear-primary"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{errorMessage || 'Error al enviar el formulario. Inténtalo de nuevo.'}</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-linear-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Agendar Sesión Técnica
              </>
            )}
          </button>
        </motion.form>

        {/* Alternative CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-linear-text-secondary">
            ¿Prefieres una reunión más informal?{' '}
            <a
              href="mailto:alexander@awstudios.tech"
              className="text-linear-primary hover:underline"
            >
              Envíame un email directo
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
