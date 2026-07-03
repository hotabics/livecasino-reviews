import Link from "next/link";
import { casinos, type Casino } from "@/data/casinos";
import { LogoChip } from "./Bits";

export default function CasinoTable({ list = casinos }: { list?: Casino[] }) {
  return (
    <div className="table-wrap">
      <table className="data casino-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Casino</th>
            <th>Best For</th>
            <th className="bonus-col">Welcome Bonus</th>
            <th>Wagering</th>
            <th>Live Games</th>
            <th>Slots</th>
            <th>License</th>
            <th>Min Dep.</th>
            <th>Withdrawal</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {list.map((c, i) => (
            <tr key={c.slug}>
              <td className="rank-cell">#{i + 1}</td>
              <td>
                <div className="casino-cell">
                  <LogoChip text={c.logoText} />
                  <div>
                    <strong>{c.name}</strong>
                    {c.slotsOnlyLabel
                      ? <div className="slots-only-tag">{c.slotsOnlyLabel}</div>
                      : <div className="small text-muted">Since {c.established}</div>}
                  </div>
                </div>
              </td>
              <td><span className="badge badge-gold">{c.bestFor.replace(/^Best for |^Best /, "")}</span></td>
              <td className="bonus-col">
                <div className="bonus-cell">
                  <span className="bonus-amt">{c.welcomeBonus}</span>
                  {c.freeSpins > 0 && <span className="bonus-fs">+ {c.freeSpins} Free Spins</span>}
                </div>
              </td>
              <td><span className={c.wagering === "None" ? "wager-none" : "wager-x"}>{c.wagering === "None" ? "No wager" : c.wagering}</span></td>
              <td>{c.hasLiveCasino ? `${c.liveGames}+` : <span className="small text-muted">—</span>}</td>
              <td>{c.slotGames.toLocaleString()}+</td>
              <td className="small">{c.licenseAuthority.split(" ")[0]}</td>
              <td>{c.minDeposit}</td>
              <td className="small">{c.withdrawalSpeed}</td>
              <td><strong style={{ color: "var(--violet-600)" }}>{c.rating.toFixed(1)}</strong></td>
              <td><Link href={`/reviews/${c.slug}/`} className="btn btn-outline btn-sm">Review</Link></td>
              <td><a href={`/reviews/${c.slug}/`} className="btn btn-cta btn-sm" rel="sponsored nofollow">Claim Bonus</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
