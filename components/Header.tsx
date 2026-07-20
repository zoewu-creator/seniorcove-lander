import { Logo } from "./Logo";
import { QuizButton } from "./QuizButton";

export function Header() {
  return (
    <header className="site-head">
      <div className="wrap head-row">
        <div className="brand">
          <Logo />
          SeniorCove
        </div>
        <div className="head-actions">
          <a className="head-phone" href="tel:+18885550123">
            Talk to us · <b>(888) 555-0123</b>
          </a>
          <QuizButton className="btn btn-sm">Start your free search</QuizButton>
        </div>
      </div>
    </header>
  );
}
