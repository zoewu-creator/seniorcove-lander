"use client";

import { useEffect, useState } from "react";
import { quizSteps } from "@/lib/quizSteps";
import { Logo } from "@/components/Logo";

type Answers = Record<string, string>;

export function QuizOverlay({ onClose }: { onClose: () => void }) {
  const total = quizSteps.length;
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const done = idx >= total;
  const progress = done ? 100 : Math.round((idx / total) * 100);
  const step = done ? null : quizSteps[idx];

  const setA = (k: string, v: string) => setAnswers((a) => ({ ...a, [k]: v }));
  const next = () => {
    setErr("");
    setIdx((i) => i + 1);
  };
  const back = () => {
    setErr("");
    setIdx((i) => Math.max(0, i - 1));
  };

  const submitContact = () => {
    if (!(answers.fn || "").trim() || !(answers.ph || "").trim() || !consent) {
      setErr("Please add your name, phone, and check the consent box.");
      return;
    }
    // TODO (launch): POST `answers` to the backend (GHL / distribution) + capture TrustedForm cert here.
    next();
  };

  return (
    <div className="quiz" role="dialog" aria-modal="true" aria-label="Free senior living search">
      <div className="quiz-head">
        <div className="wrap quiz-head-row">
          {idx > 0 && !done ? (
            <button type="button" className="quiz-back" onClick={back}>
              ← Back
            </button>
          ) : (
            <span style={{ width: 56 }} aria-hidden="true" />
          )}
          <div className="brand" style={{ fontSize: 16 }}>
            <Logo px={21} />
            SeniorCove
          </div>
          <button type="button" className="quiz-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="wrap" style={{ paddingBottom: 15 }}>
          <div className="progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="quiz-body">
        <div className="quiz-inner">
          {done ? (
            <div className="result">
              <div className="badge" aria-hidden="true">
                ✓
              </div>
              <h2>Thanks, {answers.fn || "there"} — you&apos;re all set.</h2>
              <p>
                We&apos;re matching you with senior living communities near{" "}
                <b>{answers.zip || "you"}</b> right now.
              </p>
              <div className="call-card">
                <span className="dot" aria-hidden="true" />
                <p>
                  <b>Keep your phone close.</b> A senior living specialist will call you shortly to
                  walk you through your matches and answer your questions. It&apos;s free, and
                  there&apos;s no obligation.
                </p>
              </div>
              <p style={{ fontSize: "14.5px" }}>
                Prefer to talk now? Call <b>(888) 555-0123</b>.
              </p>
              <div className="mock-flag">
                Prototype — no data is submitted. Wire to the backend / distribution before launch.
              </div>
            </div>
          ) : step ? (
            <>
              <p className="step-count">
                Question {idx + 1} of {total}
              </p>
              <h2 className="quiz-q">{step.q}</h2>
              <p className="quiz-hint">{step.hint}</p>

              {"opts" in step && (
                <div className="options">
                  {step.opts.map((o) => (
                    <button
                      type="button"
                      key={o}
                      className="opt"
                      onClick={() => {
                        setA(step.key, o);
                        next();
                      }}
                    >
                      {o}
                      <span className="arw" aria-hidden="true">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {"input" in step && step.input === "zip" && (
                <>
                  <div className="field">
                    <label htmlFor="zip">ZIP code or town</label>
                    <input
                      id="zip"
                      type="text"
                      placeholder="e.g. 90210 or Pasadena, CA"
                      value={answers.zip || ""}
                      onChange={(e) => setA("zip", e.target.value)}
                      autoComplete="postal-code"
                    />
                  </div>
                  {err && <p className="err">{err}</p>}
                  <button
                    type="button"
                    className="btn btn-block"
                    onClick={() => {
                      if (!(answers.zip || "").trim()) {
                        setErr("Please enter a ZIP code or town.");
                        return;
                      }
                      next();
                    }}
                  >
                    Continue <span aria-hidden="true">→</span>
                  </button>
                </>
              )}

              {"contact" in step && (
                <>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="fn">First name</label>
                      <input
                        id="fn"
                        value={answers.fn || ""}
                        onChange={(e) => setA("fn", e.target.value)}
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="ln">Last name</label>
                      <input
                        id="ln"
                        value={answers.ln || ""}
                        onChange={(e) => setA("ln", e.target.value)}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="ph">Phone</label>
                    <input
                      id="ph"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={answers.ph || ""}
                      onChange={(e) => setA("ph", e.target.value)}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="em">Email</label>
                    <input
                      id="em"
                      type="email"
                      placeholder="you@email.com"
                      value={answers.em || ""}
                      onChange={(e) => setA("em", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  <div className="consent">
                    <input
                      type="checkbox"
                      id="tcpa"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <label htmlFor="tcpa">
                      By checking this box and clicking below, I agree that SeniorCove and its senior
                      living partners may call and text me (including by automated means and
                      prerecorded messages) at the number I provided about senior living options.
                      Consent is not a condition of any service. Message and data rates may apply.
                    </label>
                  </div>
                  {err && <p className="err">{err}</p>}
                  <button type="button" className="btn btn-block" onClick={submitContact}>
                    Get my free matches <span aria-hidden="true">→</span>
                  </button>
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
