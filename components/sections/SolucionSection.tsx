import { Card } from "@/components/ui/Card";
import { homeContent } from "@/content/home";
import Image from "next/image";

export function SolucionSection() {
  const { title, items } = homeContent.solucion;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <div className="relative h-52 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <Image
            alt="Equipo de asistencia domiciliaria coordinando cuidados personalizados en el hogar"
            className="object-cover"
            fill
            sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1280px) 35vw, 420px"
            src="/images/services/service-home-assistance-team.jpg"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} description={item.description} title={item.title} />
        ))}
      </div>
    </section>
  );
}
