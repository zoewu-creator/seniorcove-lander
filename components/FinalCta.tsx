import { QuizButton } from "./QuizButton";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <h2>Whenever you&apos;re ready, we&apos;re here.</h2>
        <p>
          There&apos;s no deadline and no pressure. When you&apos;re ready, we&apos;ll bring you the
          facts on the communities near you — free.
        </p>
        <QuizButton className="btn">
          Start your free search <span aria-hidden="true">→</span>
        </QuizButton>
        <p className="micro">About 60 seconds · No commitment</p>
      </div>
    </section>
  );
}
