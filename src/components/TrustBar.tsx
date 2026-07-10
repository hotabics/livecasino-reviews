import { operators } from "@/data/operators";
import { countries } from "@/data/geo";

const verifiedCount = operators.filter((o) => o.verified).length;
const operatorCount = operators.filter((o) => o.status === "active").length;

const items = [
  { ic: "✓", n: `${operatorCount}`, l: "Operators tracked" },
  { ic: "★", n: `${verifiedCount}`, l: "Offers verified with sources" },
  { ic: "🌍", n: `${countries.length}`, l: "Markets with legal status" },
  { ic: "🛡", n: "UKGC · MGA · SGA · DGA", l: "Licences we check" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-bar-inner">
        {items.map((it) => (
          <div className="tb-item" key={it.l}>
            <span className="tb-ic">{it.ic}</span>
            <span className="tb-text"><strong>{it.n}</strong><span>{it.l}</span></span>
          </div>
        ))}
        <div className="tb-item tb-rg">
          <span className="tb-ic">18+</span>
          <span className="tb-text"><strong>Independent &amp; transparent</strong><span>Play responsibly</span></span>
        </div>
      </div>
    </div>
  );
}
