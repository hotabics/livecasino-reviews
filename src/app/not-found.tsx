import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "50vh", display: "grid", placeItems: "center" }}>
      <div className="container center">
        <span className="eyebrow" style={{ color: "var(--gold-400)" }}>404</span>
        <h1>Page not found</h1>
        <p className="lede" style={{ margin: "0 auto 20px", maxWidth: 520 }}>
          The page you&apos;re looking for has moved or never existed. Try one of these instead.
        </p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-gold">Back to Home</Link>
          <Link href="/live-casino-reviews/" className="btn btn-ghost">Compare Live Casinos</Link>
          <Link href="/blog/" className="btn btn-ghost">Read the Blog</Link>
        </div>
      </div>
    </section>
  );
}
