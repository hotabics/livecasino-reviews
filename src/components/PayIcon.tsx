// Brand-neutral payment category glyphs (no trademarked logos), theme-aware via currentColor.
type Cat = "card" | "wallet" | "bank" | "mobile" | "voucher" | "instant";

function categoryFor(method: string): Cat {
  const m = method.toLowerCase();
  if (m.includes("paypal") || m.includes("skrill") || m.includes("neteller")) return "wallet";
  if (m.includes("trustly") || m.includes("bank") || m.includes("wire") || m.includes("interac")) return "bank";
  if (m.includes("apple") || m.includes("google") || m.includes("mobilepay") || m.includes("swish") || m.includes("pay n play")) return "mobile";
  if (m.includes("paysafe") || m.includes("voucher")) return "voucher";
  if (m.includes("visa") || m.includes("master") || m.includes("maestro") || m.includes("card")) return "card";
  return "instant";
}

const paths: Record<Cat, React.ReactNode> = {
  card: <><rect x="1.5" y="4" width="17" height="12" rx="2" /><path d="M1.5 8h17" strokeWidth="1.6" /></>,
  wallet: <><rect x="2" y="4.5" width="16" height="11" rx="2" /><path d="M13 10h3" strokeWidth="1.6" /></>,
  bank: <><path d="M10 3l7 4H3l7-4z" /><path d="M4 8v6M8 8v6M12 8v6M16 8v6M2.5 16h15" strokeWidth="1.4" fill="none" /></>,
  mobile: <><rect x="5.5" y="2.5" width="9" height="15" rx="2" /><path d="M9 15h2" strokeWidth="1.4" /></>,
  voucher: <><rect x="2" y="5" width="16" height="10" rx="2" /><path d="M7 5v10" strokeDasharray="1.6 1.6" strokeWidth="1.3" /></>,
  instant: <><circle cx="10" cy="10" r="7.5" /><path d="M10.5 5l-3 6h3l-.5 4 3-6h-3l.5-4z" fill="#fff" stroke="none" /></>,
};

export function PayIcon({ method, size = 22 }: { method: string; size?: number }) {
  const cat = categoryFor(method);
  return (
    <span className="pay-icon" title={method} aria-label={method} style={{ width: size, height: size }}>
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
        {paths[cat]}
      </svg>
    </span>
  );
}

export function PayIcons({ methods, max = 5 }: { methods: string[]; max?: number }) {
  const shown = methods.slice(0, max);
  const extra = methods.length - shown.length;
  return (
    <span className="pay-icons">
      {shown.map((m) => <PayIcon key={m} method={m} />)}
      {extra > 0 && <span className="pay-more">+{extra}</span>}
    </span>
  );
}
