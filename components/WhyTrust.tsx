const items = [
  {
    h: "Free to your family",
    p: "You never pay a cent. We're paid by partner communities, not by you.",
  },
  {
    h: "Backed by real data",
    p: "Licensing, inspection records, and safety history — we rank on fit, not on who pays us most.",
  },
  {
    h: "No pushy follow-up",
    p: "You hear from us to share your matches. After that, you set the pace.",
  },
  {
    h: "Your information stays private",
    p: "We don't sell your personal information. Data is transmitted securely.",
  },
];

export function WhyTrust() {
  return (
    <section className="band band-tint">
      <div className="wrap">
        <div className="sec-head">
          <h2>Why families trust us</h2>
        </div>
        <div className="trust4">
          {items.map((it) => (
            <div className="t4" key={it.h}>
              <span className="chip">✓</span>
              <div>
                <h4>{it.h}</h4>
                <p>{it.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
