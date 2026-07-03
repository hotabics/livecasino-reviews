import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import CasinoTable from "@/components/CasinoTable";
import { SectionHead } from "@/components/Bits";
import { casinos } from "@/data/casinos";

export const metadata: Metadata = {
  title: "Live Casino Payment Methods & Withdrawals Compared",
  description:
    "Compare live casino payment methods: PayPal, Skrill, Neteller, Trustly, Apple Pay and cards, ranked by deposit speed, withdrawal speed, fees and safety.",
  alternates: { canonical: "/payment-methods/" },
};

const payments = [
  ["PayPal", "Instant", "Fast", "Low/None", "Security"],
  ["Skrill", "Instant", "Fast", "Possible fees", "E-wallet users"],
  ["Neteller", "Instant", "Fast", "Possible fees", "Frequent players"],
  ["Trustly", "Instant", "Fast", "Usually low", "Bank transfers"],
  ["Apple Pay", "Instant", "Depends", "Usually low", "Mobile users"],
  ["Visa/Mastercard", "Instant", "Medium", "Varies", "Beginners"],
];

const faqs = [
  { q: "What is the fastest casino withdrawal method?", a: "E-wallets such as PayPal, Skrill and Neteller are usually fastest once your account is verified, often clearing within hours. Trustly bank payments are also quick. Cards and bank transfers take longer." },
  { q: "Why do casino withdrawals take time?", a: "Most delays come from KYC verification, a pending/reversal window, or your bank's processing time. Completing verification early is the best way to avoid a first-payout delay." },
  { q: "Can I use PayPal at live casinos?", a: "Yes, at many licensed casinos. PayPal adds a layer of security because the casino never sees your card details. Check it is available for withdrawals, not just deposits." },
  { q: "What is KYC verification?", a: "KYC (Know Your Customer) is the identity check licensed casinos must complete before paying out. You typically submit ID and proof of address once. Our KYC guide explains the process." },
];

export default function PaymentMethodsPage() {
  const fast = casinos.filter((c) => c.tags.includes("fast-withdrawal")).slice(0, 5);
  return (
    <SectionLanding
      section="/payment-methods/"
      eyebrow="Payments Hub"
      title="Live Casino Payment Methods & Withdrawals"
      lede="Compare deposit and withdrawal options at live casinos — e-wallets, cards, bank transfer and mobile pay — and learn how to get paid faster."
      crumbs={[{ name: "Payment Methods", href: "/payment-methods/" }]}
      stats={[{ n: "6+", l: "Methods compared" }, { n: "0–24h", l: "Fastest payouts" }, { n: "£/€5", l: "From, min deposit" }]}
      intro={<p>Your choice of payment method affects how fast you get paid, whether you pay fees, and even your bonus eligibility. This hub compares every major option and links to detailed guides for each, plus our fastest-paying licensed casinos.</p>}
      guidesTitle="Payment Guides"
      faqs={faqs}
    >
      <section className="section--tight container">
        <SectionHead title="Fast Withdrawal Live Casinos" intro="Licensed casinos with the quickest verified payouts in our testing." />
        <CasinoTable list={fast} />
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHead title="Payment Method Comparison" intro="Deposit speed, withdrawal speed, fees and what each method is best for." />
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr><th>Payment Method</th><th>Deposit Speed</th><th>Withdrawal Speed</th><th>Fees</th><th>Best For</th></tr>
              </thead>
              <tbody>
                {payments.map((r) => (
                  <tr key={r[0]}>
                    <td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SectionLanding>
  );
}
