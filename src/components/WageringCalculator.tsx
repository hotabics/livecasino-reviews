"use client";

import { useState } from "react";

const currencies: Record<string, string> = { GBP: "£", EUR: "€", SEK: "kr", DKK: "kr", CAD: "C$" };

export default function WageringCalculator() {
  const [cur, setCur] = useState("GBP");
  const [bonus, setBonus] = useState(100);
  const [mult, setMult] = useState(35);
  const [contribution, setContribution] = useState(100);
  const [basis, setBasis] = useState<"bonus" | "deposit-bonus">("bonus");
  const [deposit, setDeposit] = useState(100);

  const sym = currencies[cur];
  const base = basis === "deposit-bonus" ? deposit + bonus : bonus;
  const turnover = base * mult;
  const effective = contribution > 0 ? turnover / (contribution / 100) : Infinity;
  const money = (n: number) =>
    isFinite(n) ? `${sym}${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "∞";

  return (
    <div className="calc">
      <div className="calc-grid">
        <label className="calc-field">
          <span>Currency</span>
          <select value={cur} onChange={(e) => setCur(e.target.value)}>
            {Object.keys(currencies).map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="calc-field">
          <span>Bonus amount ({sym})</span>
          <input type="number" min={0} value={bonus} onChange={(e) => setBonus(Math.max(0, +e.target.value))} />
        </label>
        <label className="calc-field">
          <span>Wagering (×)</span>
          <input type="number" min={0} value={mult} onChange={(e) => setMult(Math.max(0, +e.target.value))} />
        </label>
        <label className="calc-field">
          <span>Game weighting</span>
          <select value={contribution} onChange={(e) => setContribution(+e.target.value)}>
            <option value={100}>Slots — 100%</option>
            <option value={20}>Table games — 20%</option>
            <option value={10}>Live casino — 10%</option>
            <option value={5}>Live blackjack — 5%</option>
          </select>
        </label>
        <label className="calc-field">
          <span>Wagering applies to</span>
          <select value={basis} onChange={(e) => setBasis(e.target.value as "bonus" | "deposit-bonus")}>
            <option value="bonus">Bonus only</option>
            <option value="deposit-bonus">Deposit + bonus</option>
          </select>
        </label>
        {basis === "deposit-bonus" && (
          <label className="calc-field">
            <span>Deposit ({sym})</span>
            <input type="number" min={0} value={deposit} onChange={(e) => setDeposit(Math.max(0, +e.target.value))} />
          </label>
        )}
      </div>

      <div className="calc-result">
        <div className="calc-out">
          <span className="calc-out-label">Total you must wager</span>
          <span className="calc-out-num">{money(turnover)}</span>
        </div>
        <div className="calc-out">
          <span className="calc-out-label">Actual bets at {contribution}% weighting</span>
          <span className="calc-out-num accent">{money(effective)}</span>
        </div>
      </div>
      <p className="calc-note small">
        A {sym}{bonus.toLocaleString()} bonus at {mult}× {basis === "deposit-bonus" ? "on deposit + bonus" : ""} means you
        must place {money(turnover)} of qualifying bets. Because your chosen games count {contribution}% toward wagering,
        you&apos;d actually need to bet {money(effective)}. Lower weighting = much more play required. Always confirm the
        real terms at the casino. 18+ · Play responsibly.
      </p>
    </div>
  );
}
