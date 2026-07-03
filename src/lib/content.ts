import type { Article } from "@/data/articles";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "takeaways"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type Faq = { q: string; a: string };

const RG =
  "Live casino games are designed to make a profit for the operator over time. Play for entertainment, set a budget before you start, and never chase losses.";

// ── shared reusable sections ─────────────────────────────────
function howWeChose(topic: string): Block[] {
  return [
    { t: "h2", text: `How we chose the ${topic}` },
    {
      t: "p",
      text: `Every ranking on LiveCasino.Reviews follows the same structured checklist. We don't rank on bonus size alone — we weight the factors that actually affect your experience and your money.`,
    },
    {
      t: "ul",
      items: [
        "Valid gambling licence from a respected regulator (UKGC, MGA and similar).",
        "Live game range and studio quality from providers like Evolution, Pragmatic Play Live and Playtech.",
        "Real withdrawal speed — we time payouts rather than trust marketing claims.",
        "Mobile experience across phones and tablets.",
        "Transparent, readable bonus terms with fair wagering.",
        "Responsive customer support and working responsible gambling tools.",
      ],
    },
    {
      t: "p",
      text: "You can read the full breakdown on our How We Review page, including the exact weightings we apply to each criterion.",
    },
  ];
}

function faqTail(a: Article): Faq[] {
  return [
    {
      q: `Is ${a.title.replace(/\?$/, "")} suitable for beginners?`,
      a: "Yes. This guide is written to be beginner-friendly, with plain-English explanations and no assumed knowledge. If a term is new, we define it the first time it appears.",
    },
    {
      q: "How often is this page updated?",
      a: `We review this page regularly and update it whenever rules, operators or our testing results change. The last-updated date is shown at the top of the article.`,
    },
    {
      q: "Do you gamble responsibly?",
      a: "We put responsible gambling first across the whole site. Set deposit and time limits, only stake what you can afford to lose, and use self-exclusion tools if play stops being fun.",
    },
  ];
}

// ── kind-specific generators ─────────────────────────────────
function bestListBody(a: Article): Block[] {
  const topic = a.keyword;
  return [
    { t: "takeaways", items: [
      `Our top pick balances game quality, licensing and fast withdrawals.`,
      `Rankings are based on hands-on testing, not the size of the bonus.`,
      `Only licensed operators appear in this list.`,
    ]},
    { t: "h2", text: `Quick summary` },
    { t: "p", text: `Below is our current shortlist for the ${topic}. Each casino is licensed, uses recognised live studios, and has been checked against our full review methodology. Use the comparison table above to weigh them against each other, then read the individual review before you sign up.` },
    ...howWeChose(topic),
    { t: "h2", text: `What to look for yourself` },
    { t: "p", text: `Rankings are a starting point, not a substitute for your own checks. Before you deposit, confirm the licence in the site footer, read the bonus terms in full, and check that the payment method you want is supported for withdrawals — not just deposits.` },
    { t: "ul", items: [
      "A licence you can verify on the regulator's own website.",
      "Live tables from providers you recognise.",
      "Withdrawal limits and processing times that suit how you play.",
      "Bonus wagering you can realistically meet — and that includes live tables.",
    ]},
    { t: "h2", text: "A note on bonuses" },
    { t: "p", text: "Live casino bonuses are usually less generous than slots offers because live games contribute little toward wagering. Always check the game weighting before opting in — a large bonus you cannot clear is worth less than a small one you can. Our bonus terms guide explains exactly how to read the fine print." },
    { t: "quote", text: RG },
  ];
}

function guideBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      `${a.title.replace(/\?$/, "")} — explained in plain English for new players.`,
      "No prior experience needed; every term is defined as it comes up.",
      "Practical tips you can use at the table today.",
    ]},
    { t: "h2", text: "The basics" },
    { t: "p", text: `${a.intro} We'll build up from the fundamentals so that by the end you can sit down at a table and know exactly what is happening and why.` },
    { t: "h2", text: "How it works step by step" },
    { t: "ol", items: [
      "Choose a licensed live casino and open the relevant game lobby.",
      "Pick a table with limits that suit your bankroll — start low while you learn.",
      "Place your bet within the betting timer shown on screen.",
      "Watch the real dealer resolve the round on a live video stream.",
      "Winnings are credited automatically; you can then bet again or cash out.",
    ]},
    { t: "h2", text: "Tips for getting it right" },
    { t: "ul", items: [
      "Learn the core rules before you play with real money — most casinos offer a demo or low-stakes table.",
      "Set a session budget and a time limit before you start.",
      "Understand the house edge of the specific game you're playing.",
      "Take breaks — live games are fast and it's easy to lose track of time.",
    ]},
    { t: "h2", text: "Common questions new players ask" },
    { t: "p", text: "Live games are streamed in real time from professional studios using real cards, wheels and equipment. Licensed studios are independently audited, so results are not manipulated. The house edge — not rigging — is how the casino makes money over the long run." },
    { t: "quote", text: RG },
  ];
}

function strategyBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      "Strategy lowers the house edge — it does not guarantee wins.",
      "The correct play is based on maths, not gut feeling or streaks.",
      "Consistency matters more than any single decision.",
    ]},
    { t: "h2", text: "Why strategy matters" },
    { t: "p", text: `${a.intro} No strategy makes a negative-expectation game profitable, but the right approach keeps far more of your money in play over a session.` },
    { t: "h2", text: "The core rules" },
    { t: "ol", items: [
      "Follow the mathematically correct decision for each situation, every time.",
      "Ignore hunches, hot streaks and the gambler's fallacy — past rounds don't affect future ones.",
      "Bet within a fixed unit size relative to your bankroll.",
      "Never increase stakes to chase back losses.",
    ]},
    { t: "h2", text: "Putting it into practice" },
    { t: "p", text: "Start at a low-stakes table where mistakes are cheap. Keep a strategy reference open until the decisions become second nature. Track your sessions so you can see whether you're sticking to the plan — discipline is the real edge for a recreational player." },
    { t: "h3", text: "What strategy can't do" },
    { t: "p", text: "It can't remove the house edge, predict the next card or wheel result, or turn a losing session into a win through 'systems' like Martingale. Progressive staking systems only change how your losses arrive, not whether they arrive." },
    { t: "quote", text: RG },
  ];
}

function rulesBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      `${a.title.replace(/ Explained| Guide/g, "")} — full rules and payouts in one place.`,
      "House-banked game: you play against the dealer, not other players.",
      "Learn the optimal decision to keep the house edge as low as possible.",
    ]},
    { t: "h2", text: "Objective of the game" },
    { t: "p", text: `${a.intro} Because it's banked by the house, the rules are fixed and the same every hand — which makes the optimal strategy easy to learn.` },
    { t: "h2", text: "How a round plays out" },
    { t: "ol", items: [
      "Place your opening bet (the ante or base wager).",
      "Cards are dealt by the live dealer.",
      "You make your decision — raise, call, fold or place an optional side bet.",
      "The dealer reveals their hand and the round is settled.",
      "Winning hands are paid according to the paytable shown at the table.",
    ]},
    { t: "h2", text: "Payouts and house edge" },
    { t: "p", text: "Always check the specific paytable at your table — payouts can vary between studios, and small differences meaningfully change the return to player. Optional side bets are fun but carry a much higher house edge than the main game." },
    { t: "h3", text: "Optimal strategy in one line" },
    { t: "p", text: "Learn the single decision rule for the game (for example, when to raise versus fold), apply it consistently, and skip the high-edge side bets unless you're purely playing for entertainment." },
    { t: "quote", text: RG },
  ];
}

function comparisonBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      "Neither option is 'better' — it depends on what you value.",
      "We compare fairness, pace, skill, cost and atmosphere.",
      "Beginners should usually start with the simpler, lower-edge option.",
    ]},
    { t: "h2", text: "The short answer" },
    { t: "p", text: `${a.intro}` },
    { t: "h2", text: "Side-by-side comparison" },
    { t: "table", head: ["Factor", "Option A", "Option B"], rows: [
      ["House edge", "Lower with correct play", "Fixed by game rules"],
      ["Skill involved", "Higher", "Lower"],
      ["Pace of play", "Slower, more decisions", "Faster, fewer decisions"],
      ["Beginner friendly", "Moderate", "High"],
      ["Atmosphere", "Immersive, social", "Immersive, social"],
    ]},
    { t: "h2", text: "Which should you choose?" },
    { t: "p", text: "If you enjoy making decisions and want the lowest house edge, choose the more strategic option and learn its basic strategy. If you prefer a relaxed, low-effort experience, the simpler option is more forgiving. Many players enjoy both depending on their mood and bankroll." },
    { t: "quote", text: RG },
  ];
}

function paymentBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      `How ${a.keyword} deposits and withdrawals actually work.`,
      "Check the method is supported for withdrawals, not just deposits.",
      "E-wallets are usually fastest; cards and bank transfer can be slower.",
    ]},
    { t: "h2", text: "How it works" },
    { t: "p", text: `${a.intro}` },
    { t: "h2", text: "Deposits" },
    { t: "p", text: "Deposits are almost always instant. Log in, choose the method in the cashier, enter the amount and confirm — funds appear in your balance straight away, ready for the live tables." },
    { t: "h2", text: "Withdrawals" },
    { t: "p", text: "Withdrawal speed is where methods differ most. After you request a payout, the casino runs its internal review (and KYC if you haven't verified yet), then sends the funds. E-wallets typically clear fastest once approved; cards and bank transfers can take longer." },
    { t: "h3", text: "Things to check first" },
    { t: "ul", items: [
      "Is the method available for withdrawals as well as deposits?",
      "Are there minimum or maximum withdrawal limits?",
      "Will using this method exclude you from a bonus? (Some do.)",
      "Have you completed KYC verification to avoid a first-payout delay?",
    ]},
    { t: "p", text: "See our fast withdrawal casinos ranking and KYC guide for the full picture on getting paid quickly." },
    { t: "quote", text: RG },
  ];
}

function safetyBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      "Safety starts with a verifiable licence from a respected regulator.",
      "Red flags: no licence, vague terms, blocked or delayed withdrawals.",
      "Licensed live games are independently audited for fairness.",
    ]},
    { t: "h2", text: "Why this matters" },
    { t: "p", text: `${a.intro}` },
    { t: "h2", text: "The checklist" },
    { t: "ul", items: [
      "A valid licence you can verify on the regulator's own website.",
      "Clear, readable terms and conditions with no contradictions.",
      "A transparent withdrawal policy with reasonable limits.",
      "Recognised live game providers such as Evolution or Playtech.",
      "SSL encryption on every page (look for https and the padlock).",
      "Working responsible gambling tools — limits, time-outs, self-exclusion.",
      "No unrealistic 'guaranteed win' marketing claims.",
      "Public information about the operator and its parent company.",
    ]},
    { t: "h2", text: "Understanding licences" },
    { t: "p", text: "The UK Gambling Commission and Malta Gaming Authority offer the strongest player protection and dispute resolution. A Curaçao licence is legitimate but generally provides weaker safeguards. Our licences-compared guide breaks down the differences in detail." },
    { t: "h2", text: "If something goes wrong" },
    { t: "p", text: "Contact the casino's support first and keep records. If you can't resolve a dispute, escalate to the licensing authority or its approved alternative dispute resolution (ADR) provider. A properly licensed casino gives you this route; an unlicensed one does not." },
    { t: "quote", text: RG },
  ];
}

function bonusBody(a: Article): Block[] {
  return [
    { t: "takeaways", items: [
      "The terms matter far more than the headline number.",
      "Live games usually contribute little toward wagering requirements.",
      "A small bonus you can clear beats a big one you can't.",
    ]},
    { t: "h2", text: "The essentials" },
    { t: "p", text: `${a.intro}` },
    { t: "h2", text: "The clauses that decide everything" },
    { t: "ul", items: [
      "Wagering requirement — how many times you must stake the bonus (e.g. 35x).",
      "Game weighting — how much each game counts; live tables often count 10% or less.",
      "Maximum bet while wagering — breaching it can void the bonus.",
      "Expiry — how long you have to meet the requirement.",
      "Maximum cashout — a cap on what you can withdraw from bonus winnings.",
    ]},
    { t: "h2", text: "A worked example" },
    { t: "p", text: "A £50 bonus at 35x wagering means £1,750 of qualifying stakes. If live blackjack counts only 10%, you'd need £17,500 of blackjack bets to clear it — which is why live players should look for low wagering or no-wagering offers instead." },
    { t: "p", text: "Read our wagering requirements and bonus terms guides before opting in to any offer." },
    { t: "quote", text: RG },
  ];
}

export function buildArticle(a: Article): { blocks: Block[]; faqs: Faq[] } {
  let blocks: Block[];
  switch (a.kind) {
    case "best-list": blocks = bestListBody(a); break;
    case "strategy": blocks = strategyBody(a); break;
    case "rules": blocks = rulesBody(a); break;
    case "comparison": blocks = comparisonBody(a); break;
    case "payment": blocks = paymentBody(a); break;
    case "safety": blocks = safetyBody(a); break;
    case "bonus": blocks = bonusBody(a); break;
    default: blocks = guideBody(a);
  }

  const kindFaqs: Record<string, Faq[]> = {
    "best-list": [
      { q: "How are these casinos ranked?", a: "By our structured methodology: licensing, live game quality, withdrawal speed, mobile experience, bonus transparency, support and responsible gambling tools. Commercial partnerships never change the order." },
      { q: "Are these casinos safe?", a: "Every operator we rank holds a licence from a recognised regulator. We still recommend verifying the licence yourself and reading the terms before depositing." },
    ],
    payment: [
      { q: "Is this payment method available for withdrawals?", a: "Availability varies by operator and country. Always check the cashier's withdrawal section, as some methods are deposit-only." },
      { q: "How long do withdrawals take?", a: "Once approved, e-wallets are usually fastest (often within hours). Cards and bank transfers can take one to five business days depending on the casino and your bank." },
    ],
    safety: [
      { q: "How do I verify a casino's licence?", a: "Find the licence number in the site footer and look it up on the regulator's official register (for example the UKGC or MGA website). If you can't find or verify it, don't deposit." },
      { q: "Are live casino games fair?", a: "At licensed casinos, live games use real equipment and are independently tested. The house edge is disclosed and is how the casino profits over time — the games are not rigged." },
    ],
    bonus: [
      { q: "Why do live casino bonuses have high wagering?", a: "Because live games have a low, predictable house edge, casinos limit how much they contribute to wagering to manage risk. That's why live players benefit most from low- or no-wagering offers." },
      { q: "Can I withdraw a bonus immediately?", a: "Only no-wagering bonuses let you withdraw winnings straight away. Standard bonuses require you to meet the wagering requirement first." },
    ],
  };

  const faqs = [...(kindFaqs[a.kind] ?? []), ...faqTail(a)].slice(0, 5);
  return { blocks, faqs };
}

// Internal links per section, following the site linking strategy
export function relatedLinks(a: Article): { label: string; href: string }[] {
  const base: Record<string, { label: string; href: string }[]> = {
    "/live-blackjack/": [
      { label: "Best Live Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
      { label: "Live Blackjack Basic Strategy", href: "/live-blackjack/basic-strategy/" },
      { label: "Live Blackjack Side Bets", href: "/live-blackjack/side-bets/" },
      { label: "Live vs RNG Blackjack", href: "/live-blackjack/live-blackjack-vs-rng/" },
      { label: "Safe Live Casino Checklist", href: "/casino-safety/safe-live-casino-checklist/" },
    ],
    "/live-poker/": [
      { label: "Live Casino Poker Guide", href: "/live-poker/live-casino-poker-guide/" },
      { label: "Poker Hand Rankings", href: "/live-poker/poker-hand-rankings/" },
      { label: "Casino Hold'em Rules", href: "/live-poker/casino-holdem-rules/" },
      { label: "Bankroll Management", href: "/live-poker/bankroll-management/" },
      { label: "Responsible Gambling", href: "/responsible-gambling/" },
    ],
    "/live-dealer-games/": [
      { label: "Best Games for Beginners", href: "/live-dealer-games/best-live-dealer-games-for-beginners/" },
      { label: "Live Roulette Guide", href: "/live-dealer-games/live-roulette-guide/" },
      { label: "Live Casino RTP Explained", href: "/live-dealer-games/live-casino-rtp/" },
      { label: "Best Live Casino Providers", href: "/providers/best-live-casino-providers/" },
    ],
    "/payment-methods/": [
      { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
      { label: "Live Casino KYC Explained", href: "/payment-methods/live-casino-kyc/" },
      { label: "Payment Methods Compared", href: "/payment-methods/casino-payment-methods/" },
      { label: "Safe Live Casino Checklist", href: "/casino-safety/safe-live-casino-checklist/" },
    ],
    "/casino-safety/": [
      { label: "How to Check a Casino is Legit", href: "/casino-safety/how-to-check-if-a-live-casino-is-legit/" },
      { label: "Licenses Compared", href: "/casino-safety/casino-licenses-compared/" },
      { label: "Responsible Gambling Tools", href: "/casino-safety/responsible-gambling-tools/" },
      { label: "How We Review", href: "/how-we-review/" },
    ],
    "/casino-bonuses/": [
      { label: "Best Live Casino Bonuses", href: "/casino-bonuses/best-live-casino-bonuses/" },
      { label: "Wagering Requirements Explained", href: "/casino-bonuses/wagering-requirements-explained/" },
      { label: "How to Avoid Bonus Traps", href: "/casino-safety/casino-bonus-traps/" },
      { label: "Casino Bonus Terms", href: "/casino-safety/casino-bonus-terms-explained/" },
    ],
    "/providers/": [
      { label: "Best Live Casino Providers", href: "/providers/best-live-casino-providers/" },
      { label: "Evolution Review", href: "/providers/evolution-live-casino-review/" },
      { label: "Live Dealer Games", href: "/live-dealer-games/" },
      { label: "Live Casino Reviews", href: "/live-casino-reviews/" },
    ],
  };
  return (base[a.section] ?? []).filter((l) => l.href !== a.slug).slice(0, 5);
}
