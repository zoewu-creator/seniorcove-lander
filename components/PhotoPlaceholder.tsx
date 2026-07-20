export type PhIcon = "heart" | "building1" | "building2" | "building3" | "home";

function IconPath({ name }: { name: PhIcon }) {
  switch (name) {
    case "heart":
      return (
        <path d="M12 21s-7-4.35-9.5-8.5C.9 9.5 2.5 6 6 6c2 0 3 1 4 2 1-1 2-2 4-2 3.5 0 5.1 3.5 3.5 6.5C19 16.65 12 21 12 21z" />
      );
    case "building1":
      return <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />;
    case "building2":
      return <path d="M3 21h18M6 21V6h12v15M9 9h1M14 9h1M9 13h1M14 13h1" />;
    case "building3":
      return <path d="M4 21V9l8-6 8 6v12M4 21h16M10 21v-5h4v5" />;
    case "home":
      return <path d="M3 11l9-8 9 8M5 9v11h14V9M9 20v-6h6v6" />;
  }
}

export function PhotoPlaceholder({ icon, tag }: { icon: PhIcon; tag: string }) {
  return (
    <div className="ph">
      <div className="ico">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <IconPath name={icon} />
        </svg>
      </div>
      <span className="tag">{tag}</span>
    </div>
  );
}
