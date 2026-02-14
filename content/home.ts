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
    title: "Cuidado profesional en casa, con la confianza que tu familia merece",
    description:
      "Asistencia especializada para personas mayores y personas con discapacidad.",
    ctas: [
      { label: "Solicitar valoración gratuita" },
      { label: "Hablar con un asesor", variant: "secondary" },
    ],
  },
  problema: {
    title: "Sabemos lo difícil que es delegar el cuidado de un ser querido",
    items: [
      {
        title: "La preocupación constante",
        description: "No puedes estar siempre presente, pero necesitas saber que tu familiar está bien cuidado y acompañado.",
      },
      {
        title: "La inseguridad de confiar",
        description: "Entregar el cuidado de alguien que amas a otra persona genera miedo e incertidumbre.",
      },
      {
        title: "La falta de tiempo",
        description: "Entre el trabajo, tus responsabilidades y el cuidado, sientes que no llegas a todo y necesitas apoyo.",
      },
    ],
  },
  solucion: {
    title: "En VINCORIS ofrecemos asistencia profesional y humana en el hogar",
    items: [
      {
        title: "Asistencia personal",
        description: "Apoyo en higiene, movilidad y acompañamiento diario con respeto y dedicación.",
      },
      {
        title: "Cuidados especializados",
        description: "Atención para dependencia, discapacidad física o cognitiva con profesionales cualificados.",
      },
      {
        title: "Apoyo familiar",
        description: "Seguimiento continuo y comunicación constante para que estés siempre informado y tranquilo.",
      },
    ],
  },
  diferenciacion: {
    title: "¿Por qué elegir VINCORIS?",
    description:
      "Nos comprometemos a ofrecer un servicio que combine profesionalidad, calidez humana y tranquilidad para tu familia.",
    pillars: [
      {
        title: "Personal cualificado y verificado",
        description: "Todos nuestros profesionales pasan un proceso de selección riguroso y tienen formación específica en cuidados.",
      },
      {
        title: "Atención personalizada",
        description: "Adaptamos el servicio a las necesidades específicas de cada persona y su entorno familiar.",
      },
      {
        title: "Seguimiento continuo",
        description: "Mantenemos comunicación regular contigo para asegurar que todo funciona como esperas.",
      },
      {
        title: "Servicio flexible",
        description: "Ofrecemos asistencia por horas o servicio continuo, según lo que mejor se adapte a tu situación.",
      },
    ],
  },
  proceso: {
    title: "Así de sencillo es empezar",
    description: "Un proceso claro y transparente para que te sientas seguro desde el primer contacto.",
    steps: [
      {
        title: "1. Contactas con nosotros",
        description: "Llámanos o completa el formulario. Te escuchamos y resolvemos todas tus dudas sin compromiso.",
      },
      {
        title: "2. Evaluamos las necesidades",
        description: "Realizamos una valoración gratuita para entender las necesidades específicas de tu familiar.",
      },
      {
        title: "3. Asignamos el profesional adecuado",
        description: "Seleccionamos el perfil más adecuado y coordinamos el inicio del servicio con total transparencia.",
      },
    ],
    cta: { label: "Solicitar valoración gratuita" },
  },
  testimonios: {
    title: "Lo que dicen las familias que confían en nosotros",
    items: [
      {
        quote:
          "Desde que tenemos el apoyo de VINCORIS, mi madre está más tranquila y yo puedo trabajar con la tranquilidad de saber que está bien cuidada.",
        author: "María González",
        role: "Hija de usuaria",
      },
      {
        quote:
          "El profesional que nos asignaron es excelente. Tiene paciencia, es cariñoso y siempre nos mantiene informados. Es como un miembro más de la familia.",
        author: "José Martínez",
        role: "Hijo de usuario",
      },
    ],
  },
  ctaFinal: {
    title: "La tranquilidad de tu familia empieza hoy",
    description:
      "Contacta con nosotros sin compromiso. Estamos aquí para ayudarte a encontrar la mejor solución para tu familiar.",
    ctas: [
      { label: "Solicitar información ahora" },
      { label: "Hablar con un asesor", variant: "secondary" },
    ],
  },
};
