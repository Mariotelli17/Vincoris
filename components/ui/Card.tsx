type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </article>
  );
}
