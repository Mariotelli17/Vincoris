import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    title: "Marketing desconectado",
    description: "Canales y equipos operando sin una estrategia unificada.",
  },
  {
    title: "Poca trazabilidad",
    description: "Dificultad para medir impacto de acciones en resultados.",
  },
  {
    title: "Crecimiento estancado",
    description: "Falta de procesos para escalar de forma predecible.",
  },
];

export function Problem() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-8 text-3xl font-semibold text-white">
        El problema que resolvemos
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {painPoints.map((item) => (
          <Card
            key={item.title}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
