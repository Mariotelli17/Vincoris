import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";

export function CtaFinalSection() {
  const { title, description, ctas } = homeContent.ctaFinal;

  return (
    <section className="mx-auto mb-20 w-full max-w-6xl rounded-3xl border border-brand-500/30 bg-brand-500/10 px-6 py-14 text-center lg:px-12">
      <h2 className="mb-4 text-3xl font-semibold text-white">{title}</h2>
      <p className="mx-auto mb-8 max-w-2xl text-slate-200">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {ctas.map((cta) => (
          <Button key={cta.label} variant={cta.variant}>
            {cta.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
