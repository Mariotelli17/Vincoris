import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export function ProcesoSection() {
  const { title, description, steps, cta } = homeContent.proceso;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-4 text-3xl font-semibold text-slate-900">{title}</h2>
      <p className="mb-8 max-w-3xl text-slate-600">{description}</p>
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} description={step.description} title={step.title} />
        ))}
      </div>
      <Button>{cta.label}</Button>
    </section>
  );
}
