const quotes = [
  "From the very first call, they understood what families really need. They asked about our priorities — location, medical support, lifestyle — and matched us with communities that genuinely fit. My dad is happy where he landed.",
  "They made my search for memory care for my father straightforward and steered me away from bad options. What started as a stressful process got a lot calmer with someone walking us through it.",
];

export function Testimonials() {
  return (
    <section className="band band-dark">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Families we&apos;ve helped</p>
          <h2>Real families. Real guidance.</h2>
          <p>Reviews from families who searched with us — names, locations, and dates kept on file.</p>
        </div>
        <div className="quotes">
          {quotes.map((q, i) => (
            <div className="quote" key={i}>
              <div className="stars" aria-label="5 stars">
                ★★★★★
              </div>
              <p className="q">&ldquo;{q}&rdquo;</p>
              <div className="by">
                <span className="av">SR</span>
                <span className="who">
                  <b>Sample review</b>
                  <span>Family in the US · placeholder</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="quotes-note">
          Placeholder testimonials — replace with real, dated reviews (with consent) before launch.
        </p>
      </div>
    </section>
  );
}
