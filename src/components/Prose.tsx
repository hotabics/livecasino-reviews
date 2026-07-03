import type { Block } from "@/lib/content";

export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2": return <h2 key={i}>{b.text}</h2>;
          case "h3": return <h3 key={i}>{b.text}</h3>;
          case "p": return <p key={i}>{b.text}</p>;
          case "ul":
            return <ul key={i}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>;
          case "ol":
            return <ol key={i}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ol>;
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "takeaways":
            return (
              <div key={i} className="key-takeaways">
                <h3>Key takeaways</h3>
                <ul>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
              </div>
            );
          case "table":
            return (
              <div key={i} className="table-wrap" style={{ margin: "1.4em 0" }}>
                <table className="data">
                  <thead><tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default: return null;
        }
      })}
    </div>
  );
}
