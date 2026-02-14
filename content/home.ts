export type Cta = {
  label: string;
  variant?: "primary" | "secondary";
};

export type Item = {
  title: string;
  description: string;
};

export type Testimonio = {
  quote: string;
  author: string;
  role: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctas: [Cta, Cta];
  };
  problema: {
    title: string;
    items: Item[];
  };
  solucion: {
    title: string;
    items: Item[];
  };
  diferenciacion: {
    title: string;
    description: string;
    pillars: Item[];
  };
  proceso: {
    title: string;
    description: string;
    steps: Item[];
    cta: Cta;
  };
  testimonios: {
    title: string;
    items: Testimonio[];
  };
  ctaFinal: {
    title: string;
    description: string;
    ctas: [Cta, Cta];
  };
};

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Vincoris",
    title: "Estrategia y ejecución para convertir tu crecimiento en resultados medibles",
    description:
      "Alineamos marketing, procesos y tecnología para que tu empresa escale con claridad, foco y previsibilidad.",
    ctas: [
      { label: "Solicitar valoración gratuita" },
      { label: "Hablar con un asesor", variant: "secondary" },
    ],
  },
  problema: {
    title: "El problema que bloquea el crecimiento",
    items: [
      {
        title: "Acciones sin dirección",
        description: "Se ejecutan tareas aisladas sin una estrategia integral que las conecte.",
      },
      {
        title: "Baja visibilidad de resultados",
        description: "No hay datos claros para saber qué funciona y qué está frenando el avance.",
      },
      {
        title: "Dependencia operativa",
        description: "El negocio crece solo cuando el equipo se sobrecarga, sin procesos escalables.",
      },
    ],
  },
  solucion: {
    title: "Nuestra solución",
    items: [
      {
        title: "Diagnóstico estratégico",
        description: "Identificamos cuellos de botella y oportunidades de impacto inmediato.",
      },
      {
        title: "Implementación guiada",
        description: "Convertimos el plan en activos digitales, procesos y automatizaciones reales.",
      },
      {
        title: "Optimización continua",
        description: "Ajustamos en base a métricas para mejorar rendimiento y rentabilidad.",
      },
    ],
  },
  diferenciacion: {
    title: "¿Qué nos diferencia?",
    description:
      "Combinamos visión de negocio, experiencia digital y acompañamiento cercano para lograr avances sostenibles.",
    pillars: [
      {
        title: "Visión 360°",
        description: "Integramos estrategia comercial, marketing y operaciones en un mismo sistema.",
      },
      {
        title: "Equipo senior",
        description: "Trabajas con especialistas que priorizan resultados y no solo entregables.",
      },
      {
        title: "Acompañamiento humano",
        description: "Construimos una relación de confianza con foco en decisiones claras y ágiles.",
      },
    ],
  },
  proceso: {
    title: "Proceso de trabajo",
    description: "Un método claro para avanzar con control, velocidad y enfoque en resultados.",
    steps: [
      {
        title: "1. Descubrimiento",
        description: "Analizamos tu contexto, objetivos y puntos críticos para priorizar acciones.",
      },
      {
        title: "2. Plan de acción",
        description: "Definimos iniciativas concretas, responsables y métricas de seguimiento.",
      },
      {
        title: "3. Ejecución y mejora",
        description: "Implementamos, medimos y optimizamos en ciclos cortos de aprendizaje.",
      },
    ],
    cta: { label: "Pedir información" },
  },
  testimonios: {
    title: "Resultados contados por nuestros clientes",
    items: [
      {
        quote:
          "En 90 días pasamos de decisiones intuitivas a un sistema comercial con métricas y foco.",
        author: "Laura Méndez",
        role: "Directora Comercial",
      },
      {
        quote:
          "Nos ayudaron a simplificar procesos internos y recuperar tiempo para crecer con orden.",
        author: "Carlos Rivera",
        role: "CEO",
      },
    ],
  },
  ctaFinal: {
    title: "Da el siguiente paso con una estrategia clara",
    description:
      "Si quieres crecer con una hoja de ruta accionable y acompañamiento experto, conversemos.",
    ctas: [
      { label: "Solicitar valoración gratuita" },
      { label: "Hablar con un asesor", variant: "secondary" },
    ],
  },
};
