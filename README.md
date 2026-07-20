# SeniorCove — senior-care lead-gen lander (Next.js)

Generic, reusable senior-care **placement** funnel: a landing page + a 60-second qualification
quiz, modeled on [go.assists.com](https://go.assists.com) and the `leadgen-funnels` pattern.
"SeniorCove" is a placeholder brand — rename per client.

Built with **Next.js (App Router) + TypeScript**, `next/font` (Inter), no external services.
Fully self-contained: clone, install, run.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

Deploy: works as a standard Next.js app on Vercel (import the repo — zero config).

## Structure

```
app/
  layout.tsx        Inter font + metadata
  globals.css       full design system + liquid-glass UI
  page.tsx          composes the sections + quiz provider
components/
  Header, Hero, TrustPill, Steps, Feature, Coast, Gallery,
  Testimonials, WhyTrust, FinalCta, Faq, Footer, Logo, ...
  quiz/             QuizContext (open/close) + QuizOverlay (the 7-step flow)
lib/
  quizSteps.ts      the qualification questions (the fork target)
```

## Status: prototype — NOT client-ready

Before launch:
- swap placeholder metrics + testimonials for real, backed data
- wire the quiz submission (`QuizOverlay` `onComplete`) to the backend (GHL / distribution) + TrustedForm
- build the appointment-split routing (see `senior-care-routing-spec.md`)

The quiz currently collects answers client-side and shows a confirmation; it does not POST anywhere yet.
