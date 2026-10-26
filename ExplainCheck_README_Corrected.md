# ExplainCheck — Human-centred AI explanation and feedback prototype

**README prose word count: 640 (headings included; code blocks and setup commands excluded).**

## Project status

ExplainCheck is an original, dependency-free browser prototype for an Intelligent Interactive Systems coursework project. It explores how a person reviews an AI-like support-ticket recommendation, inspects an explanation, makes a decision and reports whether the explanation helped.

Implemented: six fictional tickets; a local keyword-scoring rule engine; matched-keyword explanation cues and a manually written limitation; independent user decisions with the reference answer shown after submission; feedback ratings, optional issue tags/comments; a local session summary and CSV export.

This is an educational simulation, not an operational support tool. The rule score is a heuristic, not a probability. Reference answers and difficulty labels are illustrative and have not been validated with users. No trained model, external AI API, real ticket data, server-side database, user study or automatic learning from feedback is included.

## Technology stack

* **HTML/CSS:** page structure, responsive layout and focus states.
* **JavaScript ES modules:** case data, keyword scoring, explanations, decision evaluation, feedback, summary and CSV export.
* **Browser `localStorage`:** saves this demonstration session on the current device only.
* **Node.js built-in test runner:** tests core logic; no npm packages are required.

## Run and test

Prerequisite: Python 3. From the repository root, run:

```bash
py -m http.server 8000 --directory app
```

If `py` is unavailable, use `python -m http.server 8000 --directory app`. Open `http://localhost:8000`; stop the server with `Ctrl+C`. The app uses JavaScript ES modules, so serve it over HTTP instead of opening `index.html` directly.

For automated tests, install Node.js 18 or later and run:

```bash
npm test
```

Five tests cover case structure, rule recommendations, decision evaluation, summary calculations and CSV escaping. They passed in the packaging environment; rerun them on the final submitted commit.

## Architecture and evidence

* `docs/figures/system-architecture.svg` — implemented modules, flows and out-of-scope features.
* `docs/figures/storyboard-1-review-prediction.svg`, `storyboard-2-question-error.svg`, `storyboard-3-send-feedback.svg` — three interaction paths.
* `docs/STEP\_BY\_STEP\_GUIDE.md` — run, test and publishing instructions.
* The Assignment 2 report is submitted separately through the course submission system, not stored in this repository.

## Development record

1. **Scope:** chose fictional support-ticket routing to keep the decision task low-risk and inspectable; excluded login, a server, database and model training.
2. **Interaction:** separated the case, recommendation, optional explanation, user decision, post-decision reference and feedback.
3. **Evaluation:** kept user correctness, rule recommendation correctness and avoided simulated AI errors as separate measures. A positive helpfulness rating is not proof of decision quality.
4. **Data handling:** added browser-local storage, session statistics and CSV export. Feedback does not change the rule engine.
5. **Verification:** added five unit tests. Browser walkthrough evidence covers the EC-03 recommendation, explanation, decision, feedback confirmation and session summary. No participant evaluation has been conducted.

The published history reflects the web-upload workflow: [initial project-file upload (`ab80ab8`)](https://github.com/ZL-maker121/explaincheck-original/commit/ab80ab8), followed by [the `.gitignore` addition (`ebf3ab3`)](https://github.com/ZL-maker121/explaincheck-original/commit/ebf3ab3). The initial upload grouped the source and documents together; this record does not pretend there was a separate commit for every feature.

## AI assistance

ChatGPT assisted with scaffolding the original HTML/CSS/JavaScript application, drafting fictional ticket text.

