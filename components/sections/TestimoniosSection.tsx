import { homeContent } from "@/content/home";

export function TestimoniosSection() {
  const { title, items } = homeContent.testimonios;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-8 text-3xl font-semibold text-slate-900">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            key={item.author}
          >
            <p className="mb-4 text-slate-700 leading-relaxed">"{item.quote}"</p>
            <p className="font-semibold text-slate-900">{item.author}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
