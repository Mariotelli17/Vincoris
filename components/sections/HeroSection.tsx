import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { eyebrow, title, description, ctas } = homeContent.hero;

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 text-center lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
        {eyebrow}
      </p>
      <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto max-w-3xl text-lg text-slate-300">{description}</p>
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
