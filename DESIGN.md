# LiveCasino.Reviews — Design System v2

A redesign of LiveCasino.Reviews that modernises the platform by adopting the best
elements of **[casino.org](https://www.casino.org)** — one of the most established,
trusted casino-guide sites — while keeping our independent, editorial, safety-first
brand identity.

---

## 1. What we took from casino.org (and why)

casino.org was analysed for typography, colour, layout and navigation. The following
elements were adopted because they are what make it read as a *trustworthy authority
site* rather than a bonus-spam affiliate:

| casino.org element | How we applied it | Why |
|---|---|---|
| **Light-first, white/off-white surfaces** | Body `#f5f6fb`, white content cards | Light layouts read as editorial and credible; heavy dark UIs read as "gambling". Improves readability and dwell time. |
| **Violet/purple primary accent** | `--violet-600 #6d28d9` for links, primary buttons, logo, mega-menu | Purple signals premium + trust without the "flashing casino" cliché. It's casino.org's signature and differentiates us from red/gold competitors. |
| **Emerald "Play Now" CTA** | `--green-600 #059669` reserved *only* for convert actions ("Visit casino") | A single high-intent conversion colour, distinct from navigation, mirrors casino.org's green Play buttons and lifts CTR. |
| **Gold reserved for ratings & bonuses** | Rating badges + bonus notices only | Restricting gold to evaluative signals keeps it meaningful instead of decorative. |
| **Column mega-menus** | New `Header` mega-menu (see §3) | Surfaces the deep content library directly in the nav. |
| **Generous whitespace + soft rounded cards** | 16px radii, layered soft shadows, 68px section rhythm | Modern, premium spacing; reduces visual noise. |
| **Trust strip / social proof** | Hero trust chips + "trust strip" band | casino.org leans on "30+ years / 1M players / eCOGRA". We surface *licence-verified, independently-rated, payouts-timed, 18+*. |
| **Icon quick-links under the hero** | 4 `quick-tiles` (Reviews, Blackjack, Fast Withdrawals, Safety) | Mirrors casino.org's icon shortcuts; gives users an instant path to intent. |

## 2. Typography

- **Display / headings:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  (600–800) — a modern geometric grotesk that reads premium and contemporary, close to
  casino.org's proprietary sans.
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — the reference UI text
  face for legibility at small sizes.
- Loaded via `next/font` (self-hosted, zero layout shift, no external request).
- Tight heading tracking (`-0.022em`) and fluid `clamp()` sizing for a confident,
  modern editorial voice.

## 3. Navigation — the mega-menu (the "best menu" adopted)

**Decision:** replace the flat top bar + single "Best Of" dropdown with a **casino.org-style
columned mega-menu**, plus a slim top **utility bar** and a persistent green
**"Compare Casinos"** CTA.

**Structure**
- **Utility bar** (dark): independence/updated/18+ signal on the left; *How we review · About ·
  Responsible gambling* on the right. Keeps trust + compliance links always reachable without
  cluttering the main nav.
- **Main bar** (light, sticky, blurred): logo · 8 primary items · green CTA.
- **Mega panels**: `Reviews`, `Live Blackjack`, `Live Poker`, `Live Games`, `Payments`,
  `Safety` each open a full-width panel with **2 topic columns + 1 "Editor's pick" feature
  card** linking to the highest-value page.
- **Mobile**: the same tree collapses into an accessible, JS-free `<details>` drawer.

**Why this is the right menu for this site**
1. **Discoverability of a deep library.** We publish 55+ guides and reviews. A flat menu
   hides them 2–3 clicks deep; the mega-menu exposes the whole architecture in one hover, so
   users (and crawlers) reach money pages and supporting guides immediately.
2. **SEO internal linking.** Every mega panel is a curated internal-link hub from the
   sitewide header, pushing authority to ranking targets (best-lists, strategy, licences)
   on every page — a core reason casino.org ranks.
3. **Intent routing.** Columns are grouped by *user intent* (Learn / Play smarter / By method
   / Getting paid / Stay safe), matching how visitors actually shop for a casino.
4. **Editor's-pick feature cards** turn navigation into gentle conversion without looking
   like ads, echoing casino.org's promoted modules.
5. **Trust stays first.** Responsible-gambling and methodology links live in the utility bar,
   permanently visible — reinforcing that we're an independent guide, not a funnel.

## 4. Colour tokens (CSS variables in `globals.css`)

```
--bg        #f5f6fb   page background
--surface   #ffffff   cards / header
--ink-900   #14161f   headings
--ink-700   #3c4152   body
--violet-600 #6d28d9  primary (links, buttons, logo)
--green-600 #059669   convert CTA only
--gold-500  #f59e0b   ratings & bonus highlights
--navy-900  #12141f   footer + dark accent panels
```

Dark navy is retained for the footer, `verdict`/`takeaway` panels and the homepage safety
band, giving high-contrast rhythm between light sections — the same "mostly light, punctuated
with dark" pattern casino.org uses.

## 5. What we deliberately did **not** copy

- No slot-machine artwork, spinning graphics, or "WIN BIG" language.
- No pop-ups or sticky bonus bars.
- Gold is never used for large surfaces (keeps it from looking like bonus spam).

The result is a modern, premium, casino.org-grade *feel* on top of our existing
independent-review substance, with responsible-gambling messaging preserved on every page.
