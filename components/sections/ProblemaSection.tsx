import { Card } from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export function ProblemaSection() {
  const { title, items } = homeContent.problema;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
      <h2 className="mb-8 text-3xl font-semibold text-white">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} description={item.description} title={item.title} />
        ))}
      </div>
    </section>
  );
}
