import Link from "next/link";
import type { Casino } from "@/data/casinos";
import { bonusHeadline } from "@/data/casinos";
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

      {/* Bonus highlight */}
      <div className="review-card-bonus">
        <span className="rcb-label">Welcome Bonus</span>
        <span className="rcb-amount">{bonusHeadline(c)}</span>
        <span className="rcb-wager">Wagering: {c.wagering === "None" ? "None" : c.wagering} · Min {c.minDeposit}</span>
      </div>

      <ul className="review-stats">
        <li><span>License</span><strong>{c.licenseAuthority.split(" ")[0]}</strong></li>
        <li><span>Withdrawal</span><strong>{c.withdrawalSpeed}</strong></li>
        <li><span>Live games</span><strong>{c.hasLiveCasino ? `${c.liveGames}+` : "—"}</strong></li>
        <li><span>Slot games</span><strong>{c.slotGames.toLocaleString()}+</strong></li>
      </ul>

      {c.slotsOnlyLabel && <div className="slots-only-tag" style={{ alignSelf: "flex-start" }}>{c.slotsOnlyLabel}</div>}

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

      <div className="review-card-cta">
        <Link href={`/reviews/${c.slug}/`} className="btn btn-outline btn-block">Read Review</Link>
        <a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta btn-block">Claim Bonus</a>
      </div>
      <p className="bonus-card-note">18+ · T&amp;Cs apply · Wagering applies · Play responsibly</p>
    </div>
  );
}
