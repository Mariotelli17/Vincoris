import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "Diagnóstico",
    description: "Analizamos funnel, procesos y propuesta de valor actual.",
  },
  {
    title: "Implementación",
    description: "Construimos activos digitales y automatizaciones clave.",
  },
  {
    title: "Optimización continua",
    description: "Iteramos con datos para sostener crecimiento rentable.",
  },
];

export function Solution() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-8 text-3xl font-semibold text-white">Nuestra solución</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            description={pillar.description}
            title={pillar.title}
          />
        ))}
      </div>
    </section>
  );
}
