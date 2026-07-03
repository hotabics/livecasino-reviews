import Link from "next/link";
import type { ResolvedBonus } from "@/data/bonuses";
import { bonusHeadline } from "@/data/casinos";
import { LogoChip } from "./Bits";

export default function BonusCard({ pick }: { pick: ResolvedBonus }) {
  const c = pick.casino;
  return (
    <div className="card bonus-card">
      <div className="bonus-card-tag">{pick.category}</div>
      <div className="bonus-card-head">
        <LogoChip text={c.logoText} />
        <div>
          <strong>{c.name}</strong>
          <div className="small text-muted">{c.licenseAuthority.split(" ")[0]} · ⭐ {c.rating.toFixed(1)}/10</div>
        </div>
      </div>

      <div className="bonus-card-offer">
        <span className="bco-amount">{bonusHeadline(c)}</span>
      </div>

      <ul className="bonus-card-terms">
        <li><span>Wagering</span><strong>{c.wagering === "None" ? "None" : c.wagering}</strong></li>
        <li><span>Free spins</span><strong>{c.freeSpins > 0 ? c.freeSpins : "—"}</strong></li>
        <li><span>Min deposit</span><strong>{c.minDeposit}</strong></li>
        <li><span>Eligible games</span><strong>{c.eligibleGames}</strong></li>
        <li><span>Valid for</span><strong>{c.bonusValidity}</strong></li>
        <li><span>Max cashout</span><strong>{c.maxCashout}</strong></li>
      </ul>

      <div className="bonus-card-cta">
        <a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta btn-sm btn-block">Claim Bonus</a>
        <Link href={`/reviews/${c.slug}/#bonus`} className="btn btn-outline btn-sm btn-block">Read Terms</Link>
      </div>
      <p className="bonus-card-note">18+ · New players only · T&amp;Cs apply · Wagering applies · Play responsibly</p>
    </div>
  );
}
