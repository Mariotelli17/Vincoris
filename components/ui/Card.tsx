type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/10">
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </article>
  );
}
