import { Card } from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export function DiferenciacionSection() {
  const { title, description, pillars } = homeContent.diferenciacion;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-4 text-3xl font-semibold text-white">{title}</h2>
      <p className="mb-8 max-w-3xl text-slate-300">{description}</p>
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
