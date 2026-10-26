/** Pure evaluation helpers, kept separate so they can be tested without a browser. */
export function evaluateDecision({ userLabel, aiLabel, truthLabel }) {
  const userCorrect = userLabel === truthLabel;
  const aiCorrect = aiLabel === truthLabel;
  return {
    userCorrect,
    aiCorrect,
    avoidedAiError: !aiCorrect && userCorrect,
    followedWrongAi: !aiCorrect && userLabel === aiLabel
  };
}

export function summariseRecords(records, cases) {
  const completed = Object.values(records).filter((record) => record.decisionSubmitted);
  const feedbackCount = completed.filter((record) => record.feedbackSubmitted).length;
  const aiErrors = completed.filter((record) => record.aiCorrect === false).length;
  const userCorrect = completed.filter((record) => record.userCorrect === true).length;
  const avoidedErrors = completed.filter((record) => record.avoidedAiError === true).length;
  return {
    totalCases: cases.length,
    completed: completed.length,
    feedbackCount,
    aiErrors,
    userCorrect,
    avoidedErrors,
    accuracyPercent: completed.length ? Math.round((userCorrect / completed.length) * 100) : 0
  };
}

export function escapeCsv(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}
