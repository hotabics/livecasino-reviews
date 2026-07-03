import Link from "next/link";
import { casinos, type Casino } from "@/data/casinos";
import { LogoChip } from "./Bits";

export default function CasinoTable({ list = casinos }: { list?: Casino[] }) {
  return (
    <div className="table-wrap">
      <table className="data">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Casino</th>
            <th>Best For</th>
            <th>Live Games</th>
            <th>License</th>
            <th>Min Deposit</th>
            <th>Withdrawal</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Visit</th>
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
                    <div className="small text-muted">Since {c.established}</div>
                  </div>
                </div>
              </td>
              <td><span className="badge badge-gold">{c.bestFor.replace("Best for ", "").replace("Best ", "")}</span></td>
              <td>{c.liveGames}+</td>
              <td className="small">{c.licenseAuthority.split(" ")[0]}</td>
              <td>{c.minDeposit}</td>
              <td className="small">{c.withdrawalSpeed}</td>
              <td><strong style={{ color: "var(--gold-600)" }}>{c.rating.toFixed(1)}</strong></td>
              <td><Link href={`/reviews/${c.slug}/`} className="btn btn-outline btn-sm">Review</Link></td>
              <td>
                <a
                  href={`/reviews/${c.slug}/`}
                  className="btn btn-cta btn-sm"
                  rel="sponsored nofollow"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
