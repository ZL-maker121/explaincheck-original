# ExplainCheck — Human-centred AI explanation and feedback prototype

**README prose word count: 580 (headings included; code blocks and setup commands excluded).**

## Project status

ExplainCheck is an original, dependency-free browser prototype for an Intelligent Interactive Systems coursework project. It explores how a person reviews an AI-like support-ticket routing recommendation, inspects an explanation, makes a decision and reports whether the explanation helped.

Implemented: six fictional tickets; local keyword-scoring recommendations; matched-keyword explanation cues and a manually written limitation; user decisions with the reference answer revealed after submission; feedback ratings, optional issue tags/comments, a local session summary and CSV export.

Limitations: the predictor is a small rule engine, not a trained model. Its score is a heuristic, not a probability. Reference answers and difficulty labels are illustrative, not user-validated. Feedback is saved locally and does not update the rules. No real ticket data, external AI API or user study is included.

## Technology and running

HTML structures the page; CSS styles responsive layouts and states; JavaScript ES modules implement cases, rule scoring, explanations, decision evaluation and export. Browser `localStorage` keeps the demo session on this device. Node's built-in test runner checks core logic. There are no third-party application dependencies.

Prerequisite: Python 3. From this repository folder, run:

```powershell
py -m http.server 8000 --directory app
```

If `py` is unavailable, use `python -m http.server 8000 --directory app`. Open `http://localhost:8000` and stop the server with `Ctrl+C`. Use an HTTP server because the app uses JavaScript ES modules.

## Tests

Prerequisite: Node.js 18 or later. Run `npm test` from the repository root. Five tests cover scenario structure, decision correctness, summary calculations, CSV escaping and expected rule-based recommendations. All five passed during packaging; repeat them after edits and on the final submitted commit.

## Architecture and evidence

- `docs/figures/system-architecture.svg` — implemented browser modules, data flows and out-of-scope features.
- `docs/figures/storyboard-1-review-prediction.svg`, `storyboard-2-question-error.svg` and `storyboard-3-send-feedback.svg` — three illustrated interaction paths.
- `docs/STEP_BY_STEP_GUIDE.md` — run, test and publish instructions.
- `docs/SCREENSHOT_PLACEMENT_GUIDE.md` — maps live screenshots to Figures 5–9 in the report.
- `report/Assignment_2_Project_Report_FINAL_DRAFT.docx` — editable report; replace all placeholders and insert the real screenshots before submission.

## Development record

1. **Scope:** selected a fictional ticket-routing task; excluded authentication, remote services, databases and model training.
2. **Interaction:** separated the ticket, recommendation, optional explanation, independent user choice, post-decision reference and feedback.
3. **Evaluation:** kept user correctness, AI correctness and avoided simulated AI errors separate; helpfulness is not treated as proof of decision quality.
4. **Data handling:** added local-only persistence, summary statistics and CSV export; feedback does not train the rule engine.
5. **Verification:** five automated tests passed in the packaging environment. Browser evidence supplied during development showed the EC-03 decision comparison, feedback confirmation and session summary. Repeat the full walkthrough on the final commit. This record describes stages, not a fabricated Git history; add real commit links after publishing.

## AI assistance

ChatGPT assisted with the original app scaffold, fictional case wording.
