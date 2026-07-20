import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Gallery() {
  return (
    <section className="band band-tint">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">See the real picture</p>
          <h2>Real communities, not just a brochure.</h2>
          <p>
            Real photos, inspection records, and safety history for every community we share — so
            you can compare with clarity long before you visit.
          </p>
        </div>
        <div className="gallery">
          <PhotoPlaceholder icon="building1" tag="Community photo" />
          <PhotoPlaceholder icon="building2" tag="Community photo" />
          <PhotoPlaceholder icon="building3" tag="Community photo" />
        </div>
      </div>
    </section>
  );
}
