import { homeContent } from "@/content/home";

export function TestimoniosSection() {
  const { title, items } = homeContent.testimonios;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-8 text-3xl font-semibold text-white">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/10"
            key={item.author}
          >
            <p className="mb-4 text-slate-200">“{item.quote}”</p>
            <p className="font-semibold text-white">{item.author}</p>
            <p className="text-sm text-slate-400">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
