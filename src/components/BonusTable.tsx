import Link from "next/link";
import { type Casino } from "@/data/casinos";
import { bonusTableCasinos } from "@/data/bonuses";
import { LogoChip } from "./Bits";

export default function BonusTable({ list }: { list?: Casino[] }) {
  const rows = list ?? bonusTableCasinos();
  return (
    <div className="table-wrap">
      <table className="data bonus-comparison">
        <thead>
          <tr>
            <th>Casino</th>
            <th className="bonus-col">Bonus</th>
            <th>Free Spins</th>
            <th>Wagering</th>
            <th>Min Dep.</th>
            <th>Eligible Games</th>
            <th>Max Cashout</th>
            <th>Review</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.slug}>
              <td>
                <div className="casino-cell">
                  <LogoChip text={c.logoText} />
                  <div>
                    <strong>{c.name}</strong>
                    {c.slotsOnlyLabel && <div className="slots-only-tag">{c.slotsOnlyLabel}</div>}
                  </div>
                </div>
              </td>
              <td className="bonus-col"><span className="bonus-amt">{c.welcomeBonus}</span></td>
              <td>{c.freeSpins > 0 ? <strong style={{ color: "var(--green-700)" }}>{c.freeSpins}</strong> : "—"}</td>
              <td><span className={c.wagering === "None" ? "wager-none" : "wager-x"}>{c.wagering === "None" ? "None" : c.wagering}</span></td>
              <td>{c.minDeposit}</td>
              <td className="small">{c.eligibleGames}</td>
              <td className="small">{c.maxCashout}</td>
              <td><Link href={`/reviews/${c.slug}/`} className="btn btn-outline btn-sm">Review</Link></td>
              <td><a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta btn-sm">Claim</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
