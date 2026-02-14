import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 text-center lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
        Vincoris
      </p>
      <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
        Conectamos estrategia, diseño y tecnología para escalar tu negocio
      </h1>
      <p className="mx-auto max-w-3xl text-lg text-slate-300">
        Base inicial de la homepage construida con App Router y componentes
        reutilizables.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button>Agendar demo</Button>
        <Button variant="secondary">Ver caso de éxito</Button>
      </div>
    </section>
  );
}
