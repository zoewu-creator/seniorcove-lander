import { QuizButton } from "./QuizButton";

const steps = [
  {
    n: "STEP 01",
    h: "Tell us what you're looking for",
    p: "A few quick questions: who needs care, where, and what matters most to your family. About 60 seconds.",
  },
  {
    n: "STEP 02",
    h: "We pull the facts",
    p: "We match your needs against senior living communities near you and surface the licensing, inspection, and safety data behind each one.",
  },
  {
    n: "STEP 03",
    h: "You get an honest shortlist",
    p: "Communities that genuinely fit, with honest context on each — so your family can choose with confidence, not guesswork.",
  },
];

export function Steps() {
  return (
    <section className="band" id="how">
      <div className="wrap">
        <div className="sec-head">
          <h2>Three steps to your family&apos;s shortlist</h2>
          <p>Simple, free, and backed by real data.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <div className="rule" />
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <div className="steps-cta">
          <QuizButton className="link-cta">
            Ready to start? <span aria-hidden="true">→</span>
          </QuizButton>
        </div>
      </div>
    </section>
  );
}
