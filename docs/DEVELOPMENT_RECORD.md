# Development record — ExplainCheck

This is a staged summary of design and verification decisions, not a substitute for actual Git history. Add real commit links after publishing; do not fabricate dates or commits.

1. **Bound the scope.** Chose a fictional customer-support ticket-routing task with three queues. Excluded authentication, clinical use, server deployment and model training so the decision interaction can be inspected directly.
2. **Separate concerns.** Kept scenario data (`cases.js`), keyword-based recommendation (`predictor.js`), decision/summary/CSV logic (`logic.js`) and browser interaction (`app.js`) in separate modules.
3. **Expose the reasoning and limits.** Added an expandable explanation showing matched cues and a manually authored limitation; labelled the numeric value as a rule score, not a probability.
4. **Preserve independent judgment.** Keep the reference answer hidden until the user submits a queue, then show whether the user and rule-based recommendation match the reference.
5. **Add feedback without claiming learning.** Feedback rating, tags and comments are recorded in local browser storage. They do not update the rule engine.
6. **Add inspectability.** Session summary and CSV export support reviewing interaction records; the architecture diagram and three storyboards document control/data flow.
7. **Verify.** Five automated tests passed during packaging. The provided browser evidence shows EC-03 explanation, submitted Billing choice against Account recommendation, local feedback confirmation and the session summary. Before submission, repeat both tests and browser walkthrough on the final commit.

## AI assistance

ChatGPT assisted with scaffolding the HTML/CSS/JavaScript prototype, drafting fictional scenario copy, creating documentation and test drafts, and preparing the report. Review and modify all generated material as needed. The app itself calls no external AI service. The project author remains responsible for verifying operation, claims and the final submission.
