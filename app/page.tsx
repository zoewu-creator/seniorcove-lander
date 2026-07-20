import { QuizProvider } from "@/components/quiz/QuizContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustPill } from "@/components/TrustPill";
import { Steps } from "@/components/Steps";
import { Feature } from "@/components/Feature";
import { Coast } from "@/components/Coast";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { WhyTrust } from "@/components/WhyTrust";
import { FinalCta } from "@/components/FinalCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <QuizProvider>
      <div className="ambient" aria-hidden="true">
        <i className="a1" />
        <i className="a2" />
        <i className="a3" />
      </div>

      <Header />
      <Hero />
      <TrustPill />
      <Steps />
      <Feature
        tint
        eyebrow="You're not alone"
        title="One of the hardest decisions you'll make for someone you love."
        body="A fall. A diagnosis. A parent who shouldn't be living alone anymore. Whatever brought you here, you don't have to figure it out by yourself. We pair honest guidance with real data on every community, so you can move forward knowing you got it right."
        icon="heart"
        tag="Family photo"
      />
      <Coast />
      <Gallery />
      <Testimonials />
      <Feature
        reverse
        eyebrow="What's possible"
        title="The right community feels like home, not a facility."
        body="The goal isn't just somewhere safe. It's somewhere your parent feels comfortable, connected, and genuinely at ease. With the full picture in front of you, you can choose a place that fits the life they want to keep living."
        icon="home"
        tag="Community photo"
      />
      <WhyTrust />
      <FinalCta />
      <Faq />
      <Footer />

      <div className="proto">Prototype · not live</div>
    </QuizProvider>
  );
}
