export type Criterion = { name: string; score: number }; // score out of 10

export default function ScoreWidget({
  overall,
  criteria,
  label = "Overall score",
}: {
  overall: number;
  criteria: Criterion[];
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round((overall / 10) * 100)));
  return (
    <div className="score-widget">
      <div className="sw-left">
        <div className="sw-donut" style={{ "--pct": pct } as React.CSSProperties} role="img" aria-label={`${label}: ${overall.toFixed(1)} out of 10`}>
          <div className="sw-donut-inner">
            <span className="sw-num">{overall.toFixed(1)}</span>
            <span className="sw-out">/ 10</span>
          </div>
        </div>
        <span className="sw-label">{label}</span>
      </div>
      <div className="sw-bars">
        {criteria.map((c) => (
          <div className="sw-bar-row" key={c.name}>
            <span className="sw-bar-name">{c.name}</span>
            <span className="sw-bar"><span style={{ width: `${Math.min(100, c.score * 10)}%` }} /></span>
            <span className="sw-bar-val tnum">{c.score.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
