import { RotatingWord } from "./RotatingWord";
import { QuizButton } from "./QuizButton";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="eyebrow">Free to families</p>
        <h1>Find the right senior community for</h1>
        <RotatingWord />
        <p className="lede">
          Senior living is confusing, and the stakes are high. Tell us what your family needs and
          we&apos;ll bring you the communities, the honest context, and the details most families
          never see — so you can choose with confidence.
        </p>
        <QuizButton className="btn">
          Start your free search <span aria-hidden="true">→</span>
        </QuizButton>
        <p className="micro">Takes about 60 seconds. Free for families.</p>
      </div>
    </section>
  );
}
