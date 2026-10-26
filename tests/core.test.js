import test from "node:test";
import assert from "node:assert/strict";
import { CASES, CATEGORIES } from "../app/src/cases.js";
import { evaluateDecision, summariseRecords, escapeCsv } from "../app/src/logic.js";

test("the scenario set is complete, fictional and uses the supported queues", () => {
  assert.equal(CASES.length, 6);
  assert.deepEqual(CATEGORIES, ["Billing", "Account", "Technical"]);
  assert.equal(new Set(CASES.map((item) => item.id)).size, CASES.length);
  for (const item of CASES) {
    assert.ok(CATEGORIES.includes(item.truth));
    assert.ok(["Easy", "Medium", "Hard"].includes(item.difficulty));
    assert.ok(item.limitation.length > 10);
  }
});

test("evaluation distinguishes user correctness, AI correctness and avoided errors", () => {
  assert.deepEqual(evaluateDecision({ userLabel: "Billing", aiLabel: "Account", truthLabel: "Billing" }), {
    userCorrect: true, aiCorrect: false, avoidedAiError: true, followedWrongAi: false
  });
  assert.deepEqual(evaluateDecision({ userLabel: "Account", aiLabel: "Account", truthLabel: "Billing" }), {
    userCorrect: false, aiCorrect: false, avoidedAiError: false, followedWrongAi: true
  });
  assert.deepEqual(evaluateDecision({ userLabel: "Technical", aiLabel: "Technical", truthLabel: "Technical" }), {
    userCorrect: true, aiCorrect: true, avoidedAiError: false, followedWrongAi: false
  });
});

test("summary reports only submitted decisions and local feedback", () => {
  const records = {
    "EC-01": { decisionSubmitted: true, userCorrect: true, aiCorrect: true, avoidedAiError: false, feedbackSubmitted: true },
    "EC-03": { decisionSubmitted: true, userCorrect: true, aiCorrect: false, avoidedAiError: true, feedbackSubmitted: false },
    "EC-04": { decisionSubmitted: false, userCorrect: false, aiCorrect: false, avoidedAiError: false, feedbackSubmitted: false }
  };
  assert.deepEqual(summariseRecords(records, CASES), {
    totalCases: 6, completed: 2, feedbackCount: 1, aiErrors: 1, userCorrect: 2, avoidedErrors: 1, accuracyPercent: 100
  });
});

test("CSV escaping preserves commas, quotes and line breaks safely", () => {
  assert.equal(escapeCsv('hello, "world"'), '"hello, ""world"""');
  assert.equal(escapeCsv(undefined), '""');
});

test("the local rule engine is transparent and produces both matching and mismatching suggestions", async () => {
  const { predictTicket } = await import("../app/src/predictor.js");
  const predictions = Object.fromEntries(CASES.map((item) => [item.id, predictTicket(item.text)]));
  assert.equal(predictions["EC-01"].label, "Billing");
  assert.equal(predictions["EC-02"].label, "Account");
  assert.equal(predictions["EC-03"].label, "Account");
  assert.equal(predictions["EC-04"].label, "Technical");
  assert.equal(predictions["EC-05"].label, "Technical");
  assert.equal(predictions["EC-06"].label, "Technical");
  assert.ok(predictions["EC-01"].displayScore >= 55 && predictions["EC-01"].displayScore <= 92);
  assert.ok(predictions["EC-03"].signals.length > 0);
  assert.match(predictions["EC-03"].explanationNote, /not a faithful explanation/i);
  assert.notEqual(predictions["EC-03"].label, CASES.find((item) => item.id === "EC-03").truth);
});
