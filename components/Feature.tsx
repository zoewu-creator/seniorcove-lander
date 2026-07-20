import { PhotoPlaceholder, PhIcon } from "./PhotoPlaceholder";

export function Feature({
  tint,
  reverse,
  eyebrow,
  title,
  body,
  icon,
  tag,
}: {
  tint?: boolean;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  body: string;
  icon: PhIcon;
  tag: string;
}) {
  return (
    <section className={`band${tint ? " band-tint" : ""}`}>
      <div className={`wrap feature${reverse ? " rev" : ""}`}>
        <div className="fx-media">
          <PhotoPlaceholder icon={icon} tag={tag} />
        </div>
        <div className="fx">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
}
