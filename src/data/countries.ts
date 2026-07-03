export type Country = {
  slug: string;
  name: string;
  flag: string;
  regulator: string;
  legalNote: string;
  taxNote: string;
  topPayments: string[];
  licensesAccepted: string[];
  helpline: { name: string; url: string };
  currency: string;
};

export const countries: Country[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    regulator: "UK Gambling Commission (UKGC)",
    legalNote:
      "Online live casinos are legal in Great Britain when operated under a UK Gambling Commission licence. Only play at UKGC-licensed sites, which enforce GAMSTOP self-exclusion, affordability checks and strict player protection.",
    taxNote:
      "Gambling winnings are not taxed for players in the UK — the operator pays Remote Gaming Duty, not you.",
    topPayments: ["PayPal", "Trustly", "Apple Pay", "Visa/Mastercard (deposit only)"],
    licensesAccepted: ["UKGC"],
    helpline: { name: "GamCare / National Gambling Helpline (0808 8020 133)", url: "https://www.gamcare.org.uk" },
    currency: "GBP",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    regulator: "Provincial regulators (e.g. AGCO / iGaming Ontario)",
    legalNote:
      "Online gambling in Canada is regulated at the provincial level. In Ontario, only iGaming Ontario–registered operators are legal; elsewhere many players use internationally licensed (MGA) sites. Always check the rules in your province.",
    taxNote:
      "Recreational gambling winnings are generally not taxable in Canada unless gambling is your profession.",
    topPayments: ["Interac", "PayPal", "Skrill", "Visa/Mastercard"],
    licensesAccepted: ["iGaming Ontario", "MGA", "Kahnawake"],
    helpline: { name: "ConnexOntario (1-866-531-2600)", url: "https://www.connexontario.ca" },
    currency: "CAD",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    regulator: "Gambling Regulatory Authority of Ireland (GRAI)",
    legalNote:
      "Online casino play is legal in Ireland. A new Gambling Regulatory Authority is rolling out under the Gambling Regulation Act 2024. Until domestic licensing is fully in force, most players use MGA-licensed operators.",
    taxNote: "Gambling winnings are not taxed for players in Ireland.",
    topPayments: ["PayPal", "Trustly", "Apple Pay", "Visa/Mastercard"],
    licensesAccepted: ["MGA", "GRAI (rolling out)"],
    helpline: { name: "Gambling Awareness Trust / Problem Gambling Ireland", url: "https://www.problemgambling.ie" },
    currency: "EUR",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    regulator: "Department of Internal Affairs (DIA)",
    legalNote:
      "There is currently no domestic online casino licensing in New Zealand, so players use internationally licensed (MGA) operators. A new online casino licensing regime is being introduced — only use reputable, licensed sites in the meantime.",
    taxNote: "Gambling winnings are not taxed for recreational players in New Zealand.",
    topPayments: ["POLi", "Skrill", "Neteller", "Visa/Mastercard"],
    licensesAccepted: ["MGA", "Curaçao"],
    helpline: { name: "Gambling Helpline NZ (0800 654 655)", url: "https://www.gamblinghelpline.co.nz" },
    currency: "NZD",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    regulator: "ACMA (Australian Communications and Media Authority)",
    legalNote:
      "Under the Interactive Gambling Act 2001, online casino gaming (including live casino) is prohibited for operators to offer to Australians. This page is informational only — we do not recommend playing at online casinos from Australia. Please gamble only where it is legal.",
    taxNote: "Not applicable — online casino play is restricted in Australia.",
    topPayments: [],
    licensesAccepted: [],
    helpline: { name: "Gambling Help Online (1800 858 858)", url: "https://www.gamblinghelponline.org.au" },
    currency: "AUD",
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}
