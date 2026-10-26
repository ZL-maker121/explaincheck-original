/** Fictional, hand-authored support tickets and reference queues. */
export const CATEGORIES = ["Billing", "Account", "Technical"];

export const CASES = [
  {
    id: "EC-01",
    subject: "The same plan was charged twice",
    text: "I checked my card statement and can see two charges for the same monthly plan on the same day. I only placed one order.",
    difficulty: "Easy",
    truth: "Billing",
    limitation: "This example does not inspect a real payment ledger; the matched words are cues in a simple rule engine.",
  },
  {
    id: "EC-02",
    subject: "I cannot sign in after changing my email",
    text: "I updated the email address on my profile yesterday. Now the login page does not recognise my account, and the password reset email never arrives.",
    difficulty: "Medium",
    truth: "Account",
    limitation: "The system cannot verify identity, account records or whether a password reset message was actually sent.",
  },
  {
    id: "EC-03",
    subject: "Cancelled subscription but still charged",
    text: "I cancelled my subscription last week, but a renewal payment was still taken yesterday. My account page now says the plan is inactive.",
    difficulty: "Hard",
    truth: "Billing",
    limitation: "The rule engine can emphasise account-state terms and underweight the payment event that determines the reference queue.",
  },
  {
    id: "EC-04",
    subject: "Invoice export fails with a server error",
    text: "The invoice amount looks correct, but when I export the invoice as a CSV the page returns a server error every time.",
    difficulty: "Hard",
    truth: "Technical",
    limitation: "The system cannot diagnose the export failure, inspect logs or confirm that the server is the cause.",
  },
  {
    id: "EC-05",
    subject: "A teammate was invited but cannot access the workspace",
    text: "I invited a teammate yesterday. They received the invitation email, but after joining they cannot see the project workspace or its shared files.",
    difficulty: "Medium",
    truth: "Account",
    limitation: "The example cannot inspect permission settings, role assignments or workspace configuration.",
  },
  {
    id: "EC-06",
    subject: "File uploads time out after an update",
    text: "Since today's app update, every file upload stops at about 90 percent and then times out. The same files uploaded correctly yesterday.",
    difficulty: "Easy",
    truth: "Technical",
    limitation: "The prototype cannot inspect logs, reproduce the upload or confirm that the update caused the issue.",
  }
];
