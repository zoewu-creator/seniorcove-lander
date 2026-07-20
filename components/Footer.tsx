import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="brand">
            <Logo px={23} />
            SeniorCove
          </div>
          <div className="foot-links">
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <a href="tel:+18885550123">(888) 555-0123</a>
          </div>
        </div>
        <div className="foot-legal">
          <p>
            SeniorCove is a free senior living referral service — not a care provider, medical
            service, or government agency — and is not affiliated with Medicare, Medicaid, or the
            Department of Veterans Affairs. We help families find and compare licensed senior living
            communities; each community is independently owned and responsible for the care it
            provides.
          </p>
          <p>
            By submitting your information you agree that SeniorCove and its senior living partners
            may contact you by phone, text, and email — including with automated technology — about
            senior living options. Consent is not a condition of any service. Message and data rates
            may apply.
          </p>
          <p>
            © 2026 SeniorCove &nbsp;·&nbsp; Placeholder brand for Factor lead-gen &nbsp;·&nbsp;
            Privacy Policy · Terms · Do Not Sell My Info &nbsp;·&nbsp; * Metrics are placeholders
            pending real network data.
          </p>
        </div>
      </div>
    </footer>
  );
}
