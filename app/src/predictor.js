import { CATEGORIES } from "./cases.js";

/**
 * A deliberately small, transparent keyword-scoring classifier.
 * This is a handcrafted heuristic, not a trained or statistically validated model.
 */
const RULES = {
  Billing: [
    { term: "charge", points: 3, signal: "charge-related wording" },
    { term: "payment", points: 3, signal: "payment" },
    { term: "invoice", points: 2, signal: "invoice" },
    { term: "billing", points: 4, signal: "billing" },
    { term: "card", points: 2, signal: "payment card" },
    { term: "renewal", points: 2, signal: "renewal" },
    { term: "refund", points: 3, signal: "refund" },
    { term: "subscription", points: 1, signal: "subscription" },
    { term: "monthly plan", points: 1, signal: "monthly plan" },
    { term: "statement", points: 1, signal: "statement" }
  ],
  Account: [
    { term: "account", points: 3, signal: "account" },
    { term: "login", points: 3, signal: "login" },
    { term: "log in", points: 3, signal: "log in" },
    { term: "email address", points: 2, signal: "email address" },
    { term: "password", points: 3, signal: "password" },
    { term: "profile", points: 2, signal: "profile" },
    { term: "invited", points: 2, signal: "invitation" },
    { term: "teammate", points: 2, signal: "teammate" },
    { term: "workspace", points: 1, signal: "workspace" },
    { term: "permission", points: 3, signal: "permission" },
    { term: "permissions", points: 3, signal: "permissions" },
    { term: "inactive", points: 2, signal: "inactive plan status" },
    { term: "cancelled", points: 2, signal: "cancellation" },
    { term: "access", points: 1, signal: "access" }
  ],
  Technical: [
    { term: "server error", points: 2, signal: "server error" },
    { term: "error", points: 1, signal: "error" },
    { term: "export", points: 2, signal: "export" },
    { term: "csv", points: 1, signal: "CSV" },
    { term: "upload", points: 3, signal: "upload" },
    { term: "timeout", points: 3, signal: "timeout" },
    { term: "times out", points: 3, signal: "times out" },
    { term: "update", points: 2, signal: "recent update" },
    { term: "app", points: 1, signal: "app" },
    { term: "workspace", points: 2, signal: "workspace" },
    { term: "shared files", points: 2, signal: "shared files" },
    { term: "cannot see", points: 2, signal: "cannot see" },
    { term: "stops", points: 1, signal: "stops during a task" }
  ]
};

export function predictTicket(text) {
  const normalized = String(text ?? "").toLowerCase();
  const scores = Object.fromEntries(CATEGORIES.map((category) => [category, 0]));
  const signals = Object.fromEntries(CATEGORIES.map((category) => [category, []]));
  for (const category of CATEGORIES) {
    for (const rule of RULES[category]) {
      if (normalized.includes(rule.term)) {
        scores[category] += rule.points;
        signals[category].push(rule.signal);
      }
    }
    signals[category] = [...new Set(signals[category])];
  }
  const ranked = CATEGORIES.map((category, order) => ({ category, score: scores[category], order }))
    .sort((a, b) => b.score - a.score || a.order - b.order);
  const winner = ranked[0];
  const runnerUp = ranked[1];
  const margin = winner.score - runnerUp.score;
  // A presentation-only score. It is not a probability or model calibration measure.
  const ruleScore = Math.max(55, Math.min(92, Math.round(55 + margin * 6)));
  const matchedSignals = signals[winner.category];
  return {
    label: winner.category,
    score: winner.score,
    runnerUpScore: runnerUp.score,
    margin,
    displayScore: ruleScore,
    categoryScores: scores,
    signals: matchedSignals.length ? matchedSignals : ["no category-specific keyword matched"],
    explanation: matchedSignals.length
      ? `The rule engine assigned ${winner.category} the highest keyword score. Matched cues: ${matchedSignals.join(", ")}.`
      : `No category-specific cue matched, so the rule engine used its default tie-break order and suggested ${winner.category}.`,
    explanationNote: "This rationale shows matched keywords, not a faithful explanation of a trained model. A keyword can be relevant without being decisive."
  };
}

export function getRuleDescription() {
  return "Local keyword scoring over fixed scenario text; no network request or model training.";
}
