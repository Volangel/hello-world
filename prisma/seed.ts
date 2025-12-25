import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const nichePacks = [
  {
    name: "Billionaire BDSM",
    slug: "billionaire-bdsm",
    description:
      "Power-rich alpha billionaire with explicit consent-driven BDSM rituals and luxury backdrops.",
    targetFantasy:
      "Control, luxury, and submission with safety, trust, and status escalation.",
    tropeLibrary: [
      "Dominant billionaire",
      "Contract & negotiation",
      "Private club initiation",
      "Protection + possessive care",
      "Public-private contrast",
      "Aftercare emphasis"
    ],
    heatCurve: {
      acts: [
        "Tease + negotiation",
        "First scene with limits",
        "Escalation + intimacy",
        "Emotional stake + risk",
        "Peak scene + commitment"
      ],
      pacing: "Ramp fast by 20% then escalate every 2-3 scenes."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2 scenes",
      pov: "single or dual"
    },
    forbiddenTerms: [
      "teen",
      "school",
      "student",
      "stepbrother",
      "stepsister",
      "rape",
      "nonconsensual",
      "dubious consent"
    ],
    titleFormulas: [
      "The Billionaire's {kink} Contract",
      "Owned by the Billionaire {role}",
      "His {adjective} {kink} Terms",
      "Bound to the Billionaire"
    ],
    blurbFormulas: [
      "Hook: power imbalance + forbidden desire. Fantasy: luxury + negotiated control. Tension: emotional risk + reputation. CTA: start the series now.",
      "Hook: billionaire makes the rules. Fantasy: lavish scenes + trust. Tension: can she surrender? CTA: one-click."
    ],
    keywordBank: [
      "billionaire bdsm",
      "dominant billionaire",
      "luxury kink",
      "alpha dom",
      "contract romance",
      "private club"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "Elite club network",
      nextBookHook: "Rival billionaire challenges the dynamic."
    }
  },
  {
    name: "Paranormal Shifter",
    slug: "paranormal-shifter",
    description:
      "Fated mates with shifter packs, primal claim, and protective alpha energy.",
    targetFantasy:
      "Belonging, destiny, and primal protection with consent-forward claiming.",
    tropeLibrary: [
      "Fated mates",
      "Alpha protector",
      "Pack hierarchy",
      "Heat/rut cycle",
      "Claiming bites",
      "Territory conflict"
    ],
    heatCurve: {
      acts: [
        "Scent recognition",
        "Chase + denial",
        "Claiming escalation",
        "Pack threat",
        "Bonded climax"
      ],
      pacing: "Fast mate recognition, escalating intimacy every 2 scenes."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2-3 scenes",
      pov: "dual"
    },
    forbiddenTerms: [
      "teen",
      "high school",
      "incest",
      "nonconsensual",
      "bestiality"
    ],
    titleFormulas: [
      "His {adjective} Mate",
      "Claimed by the {pack} Alpha",
      "The {pack} Shifter's Mate",
      "Marked for the Alpha"
    ],
    blurbFormulas: [
      "Hook: fated mate discovery. Fantasy: pack protection + primal heat. Tension: rival pack threat. CTA: binge the pack series.",
      "Hook: alpha finds his mate. Fantasy: claiming + belonging. Tension: can she accept the bond? CTA: one-click."
    ],
    keywordBank: [
      "shifter romance",
      "fated mates",
      "alpha shifter",
      "pack romance",
      "paranormal erotica",
      "mate bond"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "Pack territory network",
      nextBookHook: "Beta brother finds his mate."
    }
  },
  {
    name: "Reverse Harem (Why Choose)",
    slug: "reverse-harem",
    description:
      "One heroine, multiple devoted partners, clear consent, and emotional safety.",
    targetFantasy:
      "Abundance, choice without choosing, and a found-family of lovers.",
    tropeLibrary: [
      "Why choose",
      "Found family",
      "Distinct hero archetypes",
      "Jealousy managed",
      "Group scene escalation",
      "Emotional reassurance"
    ],
    heatCurve: {
      acts: [
        "Meet the group",
        "Pair bond development",
        "Triad/quad escalation",
        "Conflict + reassurance",
        "Unified commitment"
      ],
      pacing: "Rotate pair focus each segment; group scene by midbook."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2 scenes",
      pov: "single with multi-partner focus"
    },
    forbiddenTerms: [
      "teen",
      "stepbrother",
      "stepsister",
      "incest",
      "nonconsensual"
    ],
    titleFormulas: [
      "All of Them",
      "Why Choose the {group}",
      "Claimed by {count} {rolePlural}",
      "Their Shared {noun}"
    ],
    blurbFormulas: [
      "Hook: one woman, many protectors. Fantasy: devoted partners + safety. Tension: can they share her? CTA: start the harem.",
      "Hook: they want her together. Fantasy: multiple bonds. Tension: trust the arrangement. CTA: one-click."
    ],
    keywordBank: [
      "reverse harem",
      "why choose",
      "multiple partners",
      "spicy harem",
      "poly romance",
      "shared heroine"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "Academy-free urban pack",
      nextBookHook: "New member joins the circle."
    }
  },
  {
    name: "Dark Mafia (Consent-Safe)",
    slug: "dark-mafia-consent-safe",
    description:
      "Crime-family power dynamics with explicit consent, protection, and danger.",
    targetFantasy:
      "Dangerous protection, loyalty tests, and possessive alpha energy without coercion.",
    tropeLibrary: [
      "Mafia boss",
      "Protection deal",
      "Bodyguard proximity",
      "Rival family threat",
      "Possessive care",
      "Blood oath"
    ],
    heatCurve: {
      acts: [
        "Threat + protection offer",
        "Negotiated intimacy",
        "Territory conflict",
        "Kidnap attempt",
        "Claimed and safe"
      ],
      pacing: "Threat every 2-3 scenes; intimacy escalates with trust."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2 scenes",
      pov: "dual"
    },
    forbiddenTerms: [
      "nonconsensual",
      "dubious consent",
      "rape",
      "teen",
      "school",
      "incest"
    ],
    titleFormulas: [
      "The {family} Boss's {noun}",
      "Owned by the Mafia King",
      "His Dark {noun}",
      "The Mafia's Protected {role}"
    ],
    blurbFormulas: [
      "Hook: mafia boss offers protection. Fantasy: danger + devotion. Tension: loyalty tests. CTA: start the dark series.",
      "Hook: he owns the city. Fantasy: possessive protection. Tension: can she trust him? CTA: one-click."
    ],
    keywordBank: [
      "mafia romance",
      "dark romance",
      "mafia boss",
      "possessive alpha",
      "crime family",
      "bodyguard romance"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "City syndicate families",
      nextBookHook: "Underboss takes control."
    }
  },
  {
    name: "Forbidden-but-Allowed (Stepfamily, Adults Only)",
    slug: "forbidden-allowed-stepfamily",
    description:
      "Adults-only stepfamily tension with clear consent and legal separation.",
    targetFantasy:
      "Forbidden tension without taboo violations, strictly adult consent.",
    tropeLibrary: [
      "Adults-only step relation",
      "Forced proximity",
      "Hidden desire",
      "Slow-burn heat",
      "Family event pressure",
      "Secret relationship"
    ],
    heatCurve: {
      acts: [
        "Tension sparks",
        "Boundary discussion",
        "First intimate scene",
        "Secret risk",
        "Decision to go public"
      ],
      pacing: "Slow start, rapid escalation after consent talk."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2-3 scenes",
      pov: "single or dual"
    },
    forbiddenTerms: [
      "teen",
      "underage",
      "high school",
      "incest",
      "nonconsensual"
    ],
    titleFormulas: [
      "My {adjective} {stepRole}",
      "The {stepRole} Arrangement",
      "Forbidden {stepRole}",
      "Our Secret {noun}"
    ],
    blurbFormulas: [
      "Hook: stepfamily tension, adults only. Fantasy: forbidden heat with consent. Tension: family fallout. CTA: one-click."
    ],
    keywordBank: [
      "stepparent romance",
      "stepfamily erotica",
      "forbidden romance",
      "adult step romance",
      "secret affair",
      "spicy forbidden"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "Interlinked adult stepfamilies",
      nextBookHook: "Sister's new stepbrother tension."
    }
  },
  {
    name: "Kink Lifestyle (Hotwife/Swinger, Consent-Safe)",
    slug: "kink-lifestyle-hotwife-swinger",
    description:
      "Open relationship exploration with explicit consent, rules, and aftercare.",
    targetFantasy:
      "Exhibition, adventure, and trust-forward exploration between adults.",
    tropeLibrary: [
      "Rules & boundaries",
      "Club night",
      "Voyeurism",
      "Partner encouragement",
      "Aftercare",
      "Jealousy management"
    ],
    heatCurve: {
      acts: [
        "Negotiation + rules",
        "First club visit",
        "Escalation with safety",
        "Emotional check-in",
        "Confident lifestyle choice"
      ],
      pacing: "Negotiation early; escalation every 2 scenes."
    },
    pacingRules: {
      sceneLength: "600-900 words",
      cliffhangerCadence: "Every 2 scenes",
      pov: "dual or single"
    },
    forbiddenTerms: [
      "nonconsensual",
      "coercion",
      "teen",
      "incest"
    ],
    titleFormulas: [
      "Our {adjective} Rules",
      "The {noun} Night",
      "Hotwife {noun}",
      "Swinger {noun}"
    ],
    blurbFormulas: [
      "Hook: couple sets the rules. Fantasy: safe exploration + heat. Tension: can trust hold? CTA: start the lifestyle series.",
      "Hook: one night changes everything. Fantasy: consensual adventure. Tension: emotional risk. CTA: one-click."
    ],
    keywordBank: [
      "hotwife erotica",
      "swinger romance",
      "open marriage",
      "consensual nonmonogamy",
      "kink lifestyle",
      "club romance"
    ],
    seriesDefaults: {
      arcLength: 3,
      sharedWorld: "Consensual club community",
      nextBookHook: "Friends explore the rules."
    }
  }
];

async function main() {
  for (const pack of nichePacks) {
    await prisma.nichePack.upsert({
      where: { slug: pack.slug },
      update: pack,
      create: pack
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
