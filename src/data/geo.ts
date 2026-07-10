// Geo-targeting + market-status compliance model.
// Statuses drive what the reviews page may show in each country.
export type MarketStatus = "open" | "restricted" | "prohibited" | "transitional";

export type RgLink = { name: string; url: string };

export type Country = {
  code: string;
  name: string; // correct spelling enforced here
  flag: string;
  currency: string;
  status: MarketStatus;
  regulator: string;
  regulatorUrl: string;
  /** Compliance / market note shown to the user. */
  note: string;
  /** Whether we may show operator rankings at all. */
  showRankings: boolean;
  /** Whether bonus offers may be shown (Ontario: public bonus ads are prohibited). */
  showBonuses: boolean;
  /** Whether a "Claim Bonus" CTA is ever permitted (still also requires a verified operator + affiliate link). */
  allowClaim: boolean;
  /** Short label for the CTA when claims aren't allowed but a site link is. */
  neutralCta: string;
  comingSoon?: boolean;
  rgLinks: RgLink[];
};

export const countries: Country[] = [
  {
    code: "international",
    name: "International",
    flag: "🌍",
    currency: "EUR",
    status: "open",
    regulator: "Varies (e.g. MGA)",
    regulatorUrl: "https://www.mga.org.mt/",
    note:
      "Casino availability, legality and bonus eligibility depend on your country. Always check local laws and the casino's terms before signing up. Operators that target restricted countries are excluded.",
    showRankings: true,
    showBonuses: true,
    allowClaim: true,
    neutralCta: "View Offer",
    rgLinks: [
      { name: "GamblingTherapy", url: "https://www.gamblingtherapy.org" },
      { name: "BeGambleAware", url: "https://www.begambleaware.org" },
    ],
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    status: "open",
    regulator: "UK Gambling Commission (UKGC)",
    regulatorUrl: "https://www.gamblingcommission.gov.uk/public-register",
    note:
      "We only list operators licensed by the UK Gambling Commission (UKGC). Verify any licence on the UKGC public register before registering.",
    showRankings: true,
    showBonuses: true,
    allowClaim: true,
    neutralCta: "View Offer",
    rgLinks: [
      { name: "GamStop", url: "https://www.gamstop.co.uk" },
      { name: "GambleAware", url: "https://www.begambleaware.org" },
      { name: "National Gambling Helpline", url: "https://www.gamcare.org.uk" },
      { name: "UK Gambling Commission", url: "https://www.gamblingcommission.gov.uk" },
    ],
  },
  {
    code: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    currency: "SEK",
    status: "open",
    regulator: "Spelinspektionen (SGA)",
    regulatorUrl: "https://www.spelinspektionen.se/",
    note:
      "We only list operators with a Swedish licence. Under Swedish rules an operator may offer only one welcome bonus, so offers are limited by design.",
    showRankings: true,
    showBonuses: true,
    allowClaim: true,
    neutralCta: "View Offer",
    rgLinks: [
      { name: "Spelpaus", url: "https://www.spelpaus.se" },
      { name: "Stödlinjen", url: "https://www.stodlinjen.se" },
      { name: "Spelinspektionen", url: "https://www.spelinspektionen.se" },
    ],
  },
  {
    code: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    currency: "DKK",
    status: "open",
    regulator: "Spillemyndigheden (DGA)",
    regulatorUrl: "https://www.spillemyndigheden.dk/en",
    note:
      "We only list operators licensed by the Danish Gambling Authority (Spillemyndigheden). Danish welcome bonuses are modest by regulation.",
    showRankings: true,
    showBonuses: true,
    allowClaim: true,
    neutralCta: "View Offer",
    rgLinks: [
      { name: "ROFUS", url: "https://www.spillemyndigheden.dk/en/rofus" },
      { name: "StopSpillet", url: "https://www.stopspillet.dk" },
      { name: "Spillemyndigheden", url: "https://www.spillemyndigheden.dk/en" },
    ],
  },
  {
    code: "canada",
    name: "Canada (Ontario)",
    flag: "🇨🇦",
    currency: "CAD",
    status: "open",
    regulator: "iGaming Ontario / AGCO",
    regulatorUrl: "https://www.igamingontario.ca/",
    note:
      "Online casino regulation in Canada is provincial. This page focuses on Ontario-regulated operators. Under AGCO rules, public advertising of bonuses and inducements is prohibited, so we do not display bonus offers or a 'Claim Bonus' button for Ontario — only operator information.",
    showRankings: true,
    showBonuses: false, // AGCO Standard 2.05 — public bonus/inducement ads prohibited
    allowClaim: false,
    neutralCta: "Visit Site",
    rgLinks: [
      { name: "ConnexOntario", url: "https://www.connexontario.ca" },
      { name: "AGCO Responsible Gambling", url: "https://www.agco.ca/en/lottery-and-gaming/responsible-gambling" },
    ],
  },
  {
    code: "germany",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    status: "open",
    regulator: "Gemeinsame Glücksspielbehörde (GGL)",
    regulatorUrl: "https://www.gluecksspiel-behoerde.de/en/",
    note:
      "Only casinos and slot operators permitted under German gambling regulation (verified against the GGL whitelist) should be shown for German users. Offshore casinos that are not licensed for Germany are excluded.",
    showRankings: true,
    showBonuses: true,
    allowClaim: true,
    neutralCta: "View Offer",
    rgLinks: [
      { name: "BZgA (Spielsucht)", url: "https://www.spielen-mit-verantwortung.de" },
      { name: "OASIS self-exclusion", url: "https://www.gluecksspiel-behoerde.de/en/" },
    ],
  },
  {
    code: "finland",
    name: "Finland",
    flag: "🇫🇮",
    currency: "EUR",
    status: "transitional",
    regulator: "Poliisihallitus (transition to licensed model in 2027)",
    regulatorUrl: "https://poliisi.fi/en/gambling-administration",
    note:
      "Finland is introducing a new licensing system, but private online casino licensing is not fully open until the regulated model comes into effect (from 2027). We do not show aggressive casino rankings or a 'Claim Bonus' button until operator licensing is verified.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    comingSoon: true,
    rgLinks: [
      { name: "Peluuri", url: "https://www.peluuri.fi/en" },
    ],
  },
  {
    code: "norway",
    name: "Norway",
    flag: "🇳🇴",
    currency: "NOK",
    status: "restricted",
    regulator: "Lotteritilsynet (monopoly model)",
    regulatorUrl: "https://lottstift.no/en/",
    note:
      "Norway currently has a restrictive gambling model dominated by state monopolies (Norsk Tipping / Norsk Rikstoto). We do not display casino bonus offers for Norwegian users unless local legality is verified.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    rgLinks: [
      { name: "Hjelpelinjen", url: "https://hjelpelinjen.no" },
    ],
  },
  {
    code: "austria",
    name: "Austria",
    flag: "🇦🇹",
    currency: "EUR",
    status: "restricted",
    regulator: "BMF / monopoly & reform in transition",
    regulatorUrl: "https://www.bmf.gv.at/",
    note:
      "Austrian online casino regulation is in transition and has historically followed a monopoly model. Casino offers should only be shown after legal verification, so we do not display bonus rankings or a 'Claim Bonus' button by default.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    rgLinks: [
      { name: "Spielerhilfe", url: "https://www.spielerhilfe.at" },
    ],
  },
  {
    code: "poland",
    name: "Poland",
    flag: "🇵🇱",
    currency: "PLN",
    status: "restricted",
    regulator: "Ministry of Finance (state monopoly — Total Casino)",
    regulatorUrl: "https://www.gov.pl/web/finance",
    note:
      "Poland has a highly restricted online casino market operated as a state monopoly. We do not show offshore casino bonus offers for Polish users unless local authorisation is verified.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    rgLinks: [
      { name: "Uzależnienia (KBPN)", url: "https://www.kbpn.gov.pl" },
    ],
  },
  {
    code: "australia",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    status: "prohibited",
    regulator: "ACMA (Interactive Gambling Act 2001)",
    regulatorUrl: "https://www.acma.gov.au/",
    note:
      "Online casino services are prohibited in Australia under the Interactive Gambling Act, and the ACMA actively blocks illegal operators. We do not display online casino offers or bonuses for Australian users.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    rgLinks: [
      { name: "Gambling Help Online", url: "https://www.gamblinghelponline.org.au" },
    ],
  },
  {
    code: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD",
    status: "transitional",
    regulator: "Department of Internal Affairs (licensing being introduced)",
    regulatorUrl: "https://www.dia.govt.nz/",
    note:
      "New Zealand online casino regulation is being implemented. Licensed operator rankings should be added only after licence status is confirmed, so no 'Claim Bonus' button is shown until then.",
    showRankings: false,
    showBonuses: false,
    allowClaim: false,
    neutralCta: "",
    comingSoon: true,
    rgLinks: [
      { name: "Gambling Helpline NZ", url: "https://www.gamblinghelpline.co.nz" },
    ],
  },
];

export const getCountry = (code: string) => countries.find((c) => c.code === code);

// Map an ISO-3166 alpha-2 country code (from geo-IP) to one of our market codes.
const isoToMarket: Record<string, string> = {
  GB: "uk", UK: "uk",
  SE: "sweden", DK: "denmark", DE: "germany", FI: "finland",
  NO: "norway", AT: "austria", PL: "poland",
  AU: "australia", NZ: "new-zealand", CA: "canada",
};
export function marketForCountryCode(iso: string): string {
  return isoToMarket[(iso || "").toUpperCase()] ?? "international";
}

export const statusLabel: Record<MarketStatus, string> = {
  open: "Open / licensed market",
  restricted: "Restricted / monopoly market",
  prohibited: "Prohibited market",
  transitional: "Transitional market",
};

export const statusTone: Record<MarketStatus, "green" | "gold" | "red" | "navy"> = {
  open: "green",
  restricted: "red",
  prohibited: "red",
  transitional: "gold",
};
