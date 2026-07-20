const items = [
  "Free to families",
  "No obligation, ever",
  "Real inspection & safety data",
  "A real person calls you",
  "Your info stays private",
];

export function TrustPill() {
  return (
    <div className="trustwrap">
      <div className="trust-pill glass">
        {items.map((t) => (
          <span key={t}>
            <span className="tk">✓</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
