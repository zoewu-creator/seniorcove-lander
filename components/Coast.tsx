"use client";

import { useEffect, useRef, useState } from "react";

const PINS: [number, number][] = [
  [0.16, 0.42], [0.24, 0.3], [0.3, 0.6], [0.4, 0.45], [0.46, 0.66], [0.52, 0.34],
  [0.58, 0.52], [0.64, 0.4], [0.7, 0.62], [0.76, 0.36], [0.82, 0.5], [0.86, 0.3],
];

export function Coast() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [communities, setCommunities] = useState("5,000+");
  const [families, setFamilies] = useState("10,000+");

  useEffect(() => {
    const cv = canvasRef.current;
    const m = cv?.getContext("2d");
    if (cv && m) {
      const W = cv.width;
      const H = cv.height;
      let r = 0;
      const rnd = () => {
        r = (r * 9301 + 49297) % 233280;
        return r / 233280;
      };
      m.clearRect(0, 0, W, H);
      m.fillStyle = "rgba(23,132,90,.16)";
      for (let gx = 42; gx < W - 24; gx += 25) {
        for (let gy = 42; gy < H - 30; gy += 25) {
          const edge = Math.abs(gy - H / 2) / (H / 2);
          if (gx > W * 0.11 && gx < W * 0.9 && rnd() > edge * 0.6) {
            m.beginPath();
            m.arc(gx, gy, 1.5, 0, 7);
            m.fill();
          }
        }
      }
      PINS.forEach((p, i) => {
        const x = p[0] * W;
        const y = p[1] * H;
        const hub = i % 3 === 0;
        const g = m.createRadialGradient(x, y, 0, x, y, hub ? 26 : 16);
        g.addColorStop(0, hub ? "rgba(23,132,90,.55)" : "rgba(23,132,90,.28)");
        g.addColorStop(1, "rgba(23,132,90,0)");
        m.fillStyle = g;
        m.beginPath();
        m.arc(x, y, hub ? 26 : 16, 0, 7);
        m.fill();
        m.fillStyle = hub ? "#17845A" : "#7cb99a";
        m.beginPath();
        m.arc(x, y, hub ? 4.5 : 3, 0, 7);
        m.fill();
      });
    }

    let ran = false;
    const run = () => {
      if (ran) return;
      ran = true;
      const animate = (target: number, setter: (s: string) => void) => {
        let t0: number | null = null;
        const step = (ts: number) => {
          if (t0 === null) t0 = ts;
          const p = Math.min((ts - t0) / 1100, 1);
          setter(Math.round(target * p).toLocaleString() + "+");
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      animate(5000, setCommunities);
      animate(10000, setFamilies);
    };

    const el = metricsRef.current;
    if (el && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && run()),
        { threshold: 0.4 }
      );
      io.observe(el);
      return () => io.disconnect();
    }
    run();
  }, []);

  return (
    <section className="band">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Coast to coast</p>
          <h2>A real footprint, not just a search box.</h2>
          <p>
            Wherever your family member lives, we help you find vetted senior living communities
            nearby — and look at their inspection history and track record, not just their brochure.
          </p>
        </div>
        <div className="coast">
          <div className="mapcard">
            <canvas ref={canvasRef} width={620} height={426} aria-label="Coverage across the country" />
            <span className="cap">Active concierge regions. Coverage continues to grow.</span>
            <span className="legend">
              <span>
                <i style={{ background: "#17845A" }} />
                Major hub
              </span>
              <span>
                <i style={{ background: "#b8d6c4" }} />
                Coverage
              </span>
            </span>
          </div>
          <div className="metrics" ref={metricsRef}>
            <div className="metric">
              <div className="big">{communities}</div>
              <div className="lab">Communities in the network *</div>
            </div>
            <div className="metric">
              <div className="big">50</div>
              <div className="lab">States, coast to coast *</div>
            </div>
            <div className="metric">
              <div className="big">{families}</div>
              <div className="lab">Families helped this year *</div>
            </div>
            <div className="metric">
              <div className="big">$0</div>
              <div className="lab">What families pay us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
