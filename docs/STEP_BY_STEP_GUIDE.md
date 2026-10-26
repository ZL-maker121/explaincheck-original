# ExplainCheck: step-by-step guide for Assignment 2

This guide starts from the newly created ExplainCheck project in this folder. It does not require the earlier HEAR-UI archive and does not copy that project's code. Follow the steps in order. Do not claim an item is completed until you have done it and checked the result on your own machine.

## Step 1 — Unzip and inspect

1. Download `ExplainCheck_Original_Project.zip` and extract it to a short path, for example `Documents/ExplainCheck`.
2. Open the extracted folder in VS Code (or another text editor).
3. Check the main structure:
   - `app/index.html` — page structure
   - `app/styles.css` — visual design and responsive layout
   - `app/src/cases.js` — fictional support-ticket scenarios and simulated outputs
   - `app/src/logic.js` — decision comparison and summary functions
   - `app/src/app.js` — interactions and local data handling
   - `tests/core.test.js` — automated logic tests
   - `docs/figures/` — editable SVG system diagram and storyboards
   - `report/Assignment_2_Project_Report_FINAL_DRAFT.docx` — draft report to review and complete

## Step 2 — Start the webpage

Prerequisite: Python 3. Open a terminal in the project root (the folder containing `package.json`) and run:

```bash
python -m http.server 8000 --directory app
```

On some Windows installations, use `py -m http.server 8000 --directory app`.

Open <http://localhost:8000> in Chrome or Edge. To stop the local server, return to the terminal and press `Ctrl+C`.

## Step 3 — Walk through the implemented interaction

1. Choose **EC-01** in the sample case queue.
2. Read the ticket and note the rule-based AI-like recommendation and its illustrative rule score (not a probability).
3. Click **Reveal explanation**; read the cue labels and known limitation.
4. Keep Billing selected and click **Submit my decision**.
5. Confirm the reference answer, user decision and AI correctness are displayed only after submission.
6. Rate the explanation usefulness, optionally tick an issue tag and write a non-sensitive comment, then click **Save feedback**.
7. Open **Session summary**. Confirm the reviewed case appears in the table.
8. Click **Export CSV** and confirm the browser downloads `explaincheck-session.csv`.
9. Open **About** and verify that the page explains simulation, scope and local-only data handling.
10. Try EC-03 or EC-04 to see a deliberately incorrect recommendation. Consider selecting the reference category instead of automatically accepting the AI suggestion.
11. Use **Clear local session** only after you have checked the record; confirm the prompt to delete it.

## Step 4 — Run the tests

Prerequisite: Node.js 18 or later. From the project root:

```bash
npm test
```

All tests should pass. If a test fails, do not hide or delete it just to make the command pass; inspect the function and scenario data, fix the issue and run the tests again.

## Step 5 — Capture honest evidence

Use screenshots from the running app, not mockups, for evidence that a feature works. Capture at least:

1. A case before the explanation is expanded.
2. The expanded explanation and known limitation.
3. The post-decision state revealing the reference answer.
4. The feedback-confirmation state.
5. The session summary and CSV download (if possible).

The SVG storyboards in `docs/figures/` describe the interaction sequence; update them if your final UI differs. The report already includes Figure 1 (architecture) and Figures 2–4 (storyboards), with marked insertion points for five browser screenshots as Figures 5–9. Follow `docs/SCREENSHOT_PLACEMENT_GUIDE.md` to match each screenshot to its marker. Distinguish implemented behaviour from hand-authored reference answers; do not describe illustrative results as an actual user study.

## Step 6 — Review the system architecture diagram

Open `docs/figures/system-architecture.svg` in a browser or vector editor. It shows:

- user input to the interaction layer;
- fictional scenario data, a local keyword-scoring predictor and decision-evaluation logic;
- localStorage and CSV export;
- features explicitly not implemented (trained model, live inference, automatic learning and server analytics).

Do not change the diagram to show a real model or cloud service unless you implement it and check it. Keep the “simulated” labels.

## Step 7 — Publish your own public GitHub repository

1. Sign in to GitHub and create a **new empty public repository** named `explaincheck-original` (or another name you choose). Do not choose to initialise it with a README, because this project already has one.
2. In the project root, run the following commands, replacing the URL with your new repository URL:

```bash
git init
git add .
git commit -m "Build original ExplainCheck interaction prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/explaincheck-original.git
git push -u origin main
```

3. Open the repository in a browser and check the source files, README, docs and report draft are present.
4. Record the commit hash from `git rev-parse HEAD`:

```bash
git rev-parse HEAD
```

5. If you make further changes, commit and push those changes. Use the **final tested commit hash** in the report, not an earlier commit.

## Step 8 — Complete and submit the report

1. Open `report/Assignment_2_Project_Report_FINAL_DRAFT.docx`.
2. Replace `[ADD YOUR PUBLIC REPOSITORY URL]` and `[ADD FINAL COMMIT HASH]` with real values after publishing and testing.
3. Review each design claim against the code and your actual interaction test. Edit any claim that does not match your work.
4. Keep the abstract at or below 300 words, the main report at or below 1,100 words, and abstract + main report at or below 1,400 words. The draft includes word counts; recalculate after editing.
5. Ensure the final report contains the system diagram and the three storyboard panels and that each figure caption is at most one sentence.
6. Check the README's stated word count and make sure the development record and AI-assistance section are truthful. Remove the `DRAFT CHECK` note and all screenshot marker text after replacing the markers with images, but keep the single-sentence figure captions.
7. Submit the report with the repository link. Submit a ZIP only if a required file genuinely cannot live in GitHub; the app, SVGs, tests and README can all be kept in the repository.

## Scope and limitations to explain in the report

- Predictions are generated by a small local keyword-scoring rule engine; no trained model or model API is included.
- The displayed rule score is illustrative and not a probability or calibrated confidence estimate.
- All cases, limitations and reference answers are fictional, manually authored examples; the rule engine is intentionally simple and may be wrong.
- Difficulty labels are illustrative, not validated by a user study.
- Feedback is stored locally and does not change model behaviour.
- The prototype illustrates an interaction idea; it does not establish that explanations improve real user performance.

## AI assistance record

ChatGPT assisted with project scaffolding, initial scenario wording, documentation, report drafting and creation of the tests. The author must inspect the source, run the tests and browser walkthrough, check all report claims, and revise any generated material they do not understand or cannot verify. Update this statement if your actual use differs.
