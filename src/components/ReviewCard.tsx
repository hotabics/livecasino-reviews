import Link from "next/link";
import type { Casino } from "@/data/casinos";
import { LogoChip, RatingBadge, Stars } from "./Bits";

export default function ReviewCard({ c }: { c: Casino }) {
  return (
    <div className="card review-card">
      <div className="review-card-head">
        <LogoChip text={c.logoText} />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0 }}>{c.name}</h3>
          <div className="flex items-center gap" style={{ marginTop: 4 }}>
            <Stars value={c.rating} />
            <span className="badge badge-gold">{c.bestFor}</span>
          </div>
        </div>
        <RatingBadge value={c.rating} />
      </div>

      <ul className="review-stats">
        <li><span>License</span><strong>{c.licenseAuthority.split(" ")[0]}</strong></li>
        <li><span>Live games</span><strong>{c.liveGames}+</strong></li>
        <li><span>Blackjack tables</span><strong>{c.blackjackTables}</strong></li>
        <li><span>Poker games</span><strong>{c.pokerGames}</strong></li>
        <li><span>Withdrawal</span><strong>{c.withdrawalSpeed}</strong></li>
        <li><span>Min deposit</span><strong>{c.minDeposit}</strong></li>
      </ul>

      <div className="review-card-pc">
        <div>
          <span className="pc-label pc-label-pro">Pros</span>
          <ul className="mini-list mini-pro">
            {c.pros.slice(0, 2).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div>
          <span className="pc-label pc-label-con">Cons</span>
          <ul className="mini-list mini-con">
            {c.cons.slice(0, 2).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>

      <Link href={`/reviews/${c.slug}/`} className="btn btn-gold btn-block">Read Full Review</Link>
    </div>
  );
}
