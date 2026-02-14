import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function HeroSection() {
  const { eyebrow, title, description, ctas } = homeContent.hero;

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
      <div className="text-center lg:text-left">
        <Image
          alt="Logo de Vincoris, empresa de asistencia domiciliaria"
          className="mx-auto mb-6 h-auto w-44 lg:mx-0"
          height={220}
          priority
          sizes="(max-width: 768px) 176px, (max-width: 1280px) 200px, 220px"
          src="/images/brand/logo-vincoris.png"
          width={640}
        />
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 lg:mx-0">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          {ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg md:h-[460px]">
        <Image
          alt="Cuidadora asistiendo en silla de ruedas durante una visita de asistencia domiciliaria"
          className="hidden object-cover md:block"
          fill
          priority
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 42vw, 520px"
          src="/images/hero/hero-caregiver-wheelchair.png"
        />
        <Image
          alt="Cuidadora acompañando a una persona mayor en casa, versión recortada para móvil"
          className="object-cover md:hidden"
          fill
          priority
          sizes="(max-width: 768px) calc(100vw - 3rem), 0px"
          src="/images/hero/hero-caregiver-wheelchair-mobile.png"
        />
      </div>
    </section>
  );
}
