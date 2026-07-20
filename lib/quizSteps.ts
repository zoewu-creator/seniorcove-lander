// The senior-care placement qualification quiz — the fork target.
// Gates: who / care type / timeline / location / funding / situation / contact.

export type QuizStep =
  | { key: string; q: string; hint: string; opts: string[] }
  | { key: string; q: string; hint: string; input: "zip" }
  | { key: string; q: string; hint: string; contact: true };

export const quizSteps: QuizStep[] = [
  {
    key: "who",
    q: "Who are you finding care for?",
    hint: "This just helps us set the right tone when we call.",
    opts: ["My parent", "My spouse", "Myself", "Another relative"],
  },
  {
    key: "care",
    q: "What kind of care is needed?",
    hint: "Not sure is a perfectly good answer — we'll help you figure it out.",
    opts: [
      "Assisted living",
      "Memory care (dementia / Alzheimer's)",
      "Independent living",
      "I'm not sure yet",
    ],
  },
  {
    key: "when",
    q: "How soon do you need to decide?",
    hint: "There's no wrong answer — it just tells us how quickly to move.",
    opts: [
      "Right away (0–30 days)",
      "In 1–3 months",
      "In 3–6 months",
      "Just starting to research",
    ],
  },
  {
    key: "zip",
    q: "Where should we look?",
    hint: "Enter a ZIP code or town so we can match communities nearby.",
    input: "zip",
  },
  {
    key: "fund",
    q: "How will care be paid for?",
    hint: "This helps us only show communities that fit — no surprises later.",
    opts: [
      "Private funds / savings",
      "Long-term care insurance",
      "Veterans benefits",
      "Medicaid",
      "I'm not sure",
    ],
  },
  {
    key: "situation",
    q: "Where is your loved one right now?",
    hint: "It helps us understand how urgent things are.",
    opts: ["At home, mostly alone", "At home with family", "In a hospital or rehab now"],
  },
  {
    key: "contact",
    q: "Where should the specialist reach you?",
    hint: "A real person will call to share your matches — usually within minutes.",
    contact: true,
  },
];
