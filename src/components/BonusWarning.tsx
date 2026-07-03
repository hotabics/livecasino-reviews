import { bonusTransparency } from "@/lib/site";

// Transparency + responsible-gambling notice shown on every bonus-related page.
export default function BonusWarning() {
  return (
    <div className="bonus-warning">
      <div className="bw-head">
        <span className="ic">⚠️</span>
        <strong>Bonus transparency &amp; responsible gambling</strong>
      </div>
      <ul>
        {bonusTransparency.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="small">
        Bonuses are optional and never guarantee a win. 18+ only (21+ in some jurisdictions).
      </p>
    </div>
  );
}
