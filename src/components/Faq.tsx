import type { Faq } from "@/lib/content";

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="section--tight faq">
      <h2>{title}</h2>
      <div style={{ marginTop: 18 }}>
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <div className="faq-body"><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}
