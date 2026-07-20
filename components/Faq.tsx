import { QuizButton } from "./QuizButton";

const faqs = [
  {
    q: "Is this service actually free?",
    a: "Yes. Communities pay us a referral fee when a family they're the right fit for moves in, so our help costs your family nothing — whether or not you choose one of them.",
  },
  {
    q: "How do you know which communities are any good?",
    a: "We look at licensing status, inspection records, and safety history — not just the brochure — and match on genuine fit for your parent's needs.",
  },
  {
    q: "Will I get spammed with calls after I submit?",
    a: "No. A specialist calls to share your matches. After that, you set the pace — we follow your lead.",
  },
  {
    q: "How fast will someone contact me?",
    a: "Usually within a few minutes of finishing the questions. Prefer to talk now? Call (888) 555-0123.",
  },
  {
    q: "Do you provide the care yourselves?",
    a: "No. SeniorCove helps you find and compare licensed communities near you. The community you choose provides the care — we're the free guide that gets you to the right door.",
  },
  {
    q: "What if we're not sure what type of care we need?",
    a: "That's common, and completely fine. Tell us the situation and the specialist will help you sort through independent living, assisted living, and memory care.",
  },
  {
    q: "Is my information kept private?",
    a: "We don't sell your personal information, and data is transmitted securely. See our Privacy Policy for details.",
  },
];

export function Faq() {
  return (
    <section className="band band-tint" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <h2>Questions we hear most</h2>
        </div>
        <div className="faqgrid">
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="chev" aria-hidden="true">
                    ▼
                  </span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
          <aside className="ask-card">
            <h4>Still have questions?</h4>
            <p>
              Tell us about your situation and a real person on our team will help you sort through
              the options.
            </p>
            <QuizButton className="btn btn-block">Start your free search</QuizButton>
            <p className="micro">About 60 seconds. No commitment.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
