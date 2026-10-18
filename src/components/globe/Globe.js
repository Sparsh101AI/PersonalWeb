import { useEffect, useMemo, useRef, useState } from "react";
import { LAND } from "./landDots";
import { toVec, arcPoints, project } from "./geo";
import "./Globe.css";

// Dotted 3D globe drawn on a canvas. Highlighted countries come from the flag in
// landDots.js; pins and light trails come from the `places` prop.

const RAD = Math.PI / 180;
const DOTS = LAND.map(([lat, lon, c]) => ({ v: toVec(lat, lon), c }));

const COLORS = {
  landDot: (a) => `rgba(160,190,235,${0.75 * a})`,
  hlGlow: (a) => `rgba(246,193,119,${0.18 * a})`,
  hlDot: (a) => `rgba(255,214,150,${0.95 * a})`,
  arc: "rgba(246,193,119,0.35)",
  arcHead: (a) => `rgba(255,236,200,${0.9 * a})`,
  pin: (a) => `rgba(255,248,230,${a})`,
  pulse: (a) => `rgba(246,193,119,${a})`,
  labelBg: (a) => `rgba(10,22,40,${0.72 * a})`,
  labelText: (a) => `rgba(233,238,247,${a})`,
};

export function Globe({ places, focus }) {
  const canvasRef = useRef(null);
  const view = useRef({ lon: 95, lat: 22, vLon: 0, dragging: false, last: null, target: null, hover: false, visible: true, ready: false });
  const [ready, setReady] = useState(false);

  // Pre-compute pin vectors and arcs whenever the places change.
  const model = useMemo(() => {
    const pins = places.map((p) => ({ ...p, v: toVec(p.lat, p.lon) }));
    const home = pins.find((p) => p.home) || pins[0];
    const arcs = pins
      .filter((p) => p !== home && p.arc !== false)
      .map((p, i) => ({ pts: arcPoints(home.v, p.v), offset: i * 0.17 }));
    return { pins, arcs };
  }, [places]);
  const modelRef = useRef(model);
  modelRef.current = model;

  // Fly to a place when asked.
  useEffect(() => {
    const p = places.find((x) => x.id === focus);
    if (p) view.current.target = { lon: -p.lon, lat: Math.max(-35, Math.min(45, p.lat * 0.8)) };
  }, [focus, places]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const s = view.current;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, R = 0, raf = 0, last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height; R = Math.min(W, H) * 0.38;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    ro && ro.observe(canvas);

    // Pause the animation while the globe is off screen.
    const io = "IntersectionObserver" in window ? new IntersectionObserver(([e]) => (s.visible = e.isIntersecting)) : null;
    io && io.observe(canvas);

    const step = (dt) => {
      if (s.target) {
        const d = ((s.target.lon - s.lon + 540) % 360) - 180;
        s.lon += d * 0.08;
        s.lat += (s.target.lat - s.lat) * 0.08;
        if (Math.abs(d) < 0.3 && Math.abs(s.target.lat - s.lat) < 0.3) s.target = null;
      } else if (!s.dragging) {
        s.lon += s.vLon;
        s.vLon *= 0.95;
        if (!reduceMotion && !s.hover && Math.abs(s.vLon) < 0.02) s.lon += dt * 0.006;
      }
    };

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (!s.visible) return;
      const dt = Math.min(50, now - last);
      last = now;
      const time = now / 1000;
      step(dt);

      const yaw = s.lon * RAD, pitch = s.lat * RAD;
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const cx = W / 2, cyy = H / 2;
      const P = (v) => project(v, cy, sy, cp, sp, cx, cyy, R);
      const { pins, arcs } = modelRef.current;
      ctx.clearRect(0, 0, W, H);

      // atmosphere
      let g = ctx.createRadialGradient(cx, cyy, R * 0.95, cx, cyy, R * 1.3);
      g.addColorStop(0, "rgba(143,182,240,0.28)"); g.addColorStop(0.4, "rgba(143,182,240,0.08)"); g.addColorStop(1, "rgba(143,182,240,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cyy, R * 1.3, 0, Math.PI * 2); ctx.fill();

      // sphere, lit from the upper left
      g = ctx.createRadialGradient(cx - R * 0.35, cyy - R * 0.4, R * 0.1, cx, cyy, R);
      g.addColorStop(0, "#1d3558"); g.addColorStop(0.6, "#11233d"); g.addColorStop(1, "#0a1628");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cyy, R, 0, Math.PI * 2); ctx.fill();

      // land dots
      const base = Math.max(1, R / 210);
      for (const d of DOTS) {
        const p = P(d.v);
        if (p[2] <= 0) continue;
        const depth = 0.35 + 0.65 * p[2];
        if (d.c) {
          ctx.fillStyle = COLORS.hlGlow(depth);
          ctx.beginPath(); ctx.arc(p[0], p[1], base * 3.2, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = COLORS.hlDot(depth);
          ctx.beginPath(); ctx.arc(p[0], p[1], base * 1.25, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.fillStyle = COLORS.landDot(depth);
          ctx.beginPath(); ctx.arc(p[0], p[1], base * 0.95, 0, Math.PI * 2); ctx.fill();
        }
      }

      // rim light
      g = ctx.createRadialGradient(cx, cyy, R * 0.82, cx, cyy, R);
      g.addColorStop(0, "rgba(143,182,240,0)"); g.addColorStop(1, "rgba(143,182,240,0.22)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cyy, R, 0, Math.PI * 2); ctx.fill();

      // light trails with a travelling glow
      const inFront = (p) => p[2] > 0 || Math.hypot(p[0] - cx, p[1] - cyy) > R;
      ctx.lineCap = "round";
      for (const a of arcs) {
        const pts = a.pts.map(P);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = COLORS.arc;
        for (let i = 1; i < pts.length; i++) {
          if (!inFront(pts[i]) || !inFront(pts[i - 1])) continue;
          ctx.beginPath(); ctx.moveTo(pts[i - 1][0], pts[i - 1][1]); ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke();
        }
        const head = (time * 0.35 + a.offset) % 1.4;
        ctx.lineWidth = 2.2;
        for (let i = 1; i < pts.length; i++) {
          const k = 1 - Math.abs(i / (pts.length - 1) - head) / 0.12;
          if (k <= 0 || !inFront(pts[i]) || !inFront(pts[i - 1])) continue;
          ctx.strokeStyle = COLORS.arcHead(k);
          ctx.beginPath(); ctx.moveTo(pts[i - 1][0], pts[i - 1][1]); ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke();
        }
      }

      // pins
      const visible = [];
      for (const p of pins) {
        const q = P(p.v);
        if (q[2] <= 0.05) continue;
        const a = Math.min(1, q[2] * 2.5);
        const pulse = (time * 0.8 + (p.lat % 1)) % 1;
        ctx.strokeStyle = COLORS.pulse((1 - pulse) * 0.8 * a);
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(q[0], q[1], 3 + pulse * 14, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = COLORS.pin(a);
        ctx.beginPath(); ctx.arc(q[0], q[1], p.home ? 4 : 3, 0, Math.PI * 2); ctx.fill();
        if (p.label !== false) visible.push({ p, q, a });
      }

      // labels: nearest-to-viewer first, each one takes the first side that doesn't overlap an earlier label
      ctx.font = `600 ${Math.max(11, R / 26)}px Inter, system-ui, sans-serif`;
      ctx.textBaseline = "middle";
      const placed = [];
      const overlaps = (r) => placed.some((o) => r.x < o.x + o.w && r.x + r.w > o.x && r.y < o.y + o.h && r.y + r.h > o.y);
      visible.sort((m, n) => n.q[2] - m.q[2]);
      for (const { p, q, a } of visible) {
        const tw = ctx.measureText(p.name).width;
        const w = tw + 12, h = 20;
        const sides = [[10, -14], [10, 14], [-w + 2, -14], [-w + 2, 14], [-w / 2 + 6, -26], [-w / 2 + 6, 26]];
        let spot = null;
        for (const [dx, dy] of sides) {
          const r = { x: q[0] + dx - 6, y: q[1] + dy - 10, w, h };
          if (!overlaps(r)) { spot = r; break; }
        }
        if (!spot) continue;
        placed.push(spot);
        ctx.fillStyle = COLORS.labelBg(a);
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(spot.x, spot.y, w, h, 10); else ctx.rect(spot.x, spot.y, w, h);
        ctx.fill();
        ctx.fillStyle = COLORS.labelText(a);
        ctx.fillText(p.name, spot.x + 6, spot.y + 10);
      }
      if (!s.ready) { s.ready = true; setReady(true); }
    };
    raf = requestAnimationFrame(draw);

    // drag to spin
    const down = (e) => { s.dragging = true; s.target = null; s.last = [e.clientX, e.clientY]; canvas.setPointerCapture(e.pointerId); };
    const move = (e) => {
      if (!s.dragging) return;
      const dx = e.clientX - s.last[0], dy = e.clientY - s.last[1];
      s.last = [e.clientX, e.clientY];
      s.lon += dx * 0.35; s.vLon = dx * 0.35;
      s.lat = Math.max(-50, Math.min(60, s.lat + dy * 0.25));
    };
    const up = () => { s.dragging = false; };
    const enter = () => { s.hover = true; };
    const leave = () => { s.hover = false; s.dragging = false; };
    const handlers = [["pointerdown", down], ["pointermove", move], ["pointerup", up], ["pointercancel", up], ["pointerenter", enter], ["pointerleave", leave]];
    handlers.forEach(([ev, fn]) => canvas.addEventListener(ev, fn));

    return () => {
      cancelAnimationFrame(raf);
      ro && ro.disconnect();
      io && io.disconnect();
      handlers.forEach(([ev, fn]) => canvas.removeEventListener(ev, fn));
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`globe ${ready ? "is-ready" : ""}`}
      role="img"
      aria-label="Interactive globe highlighting the countries Sparsh has lived in or visited"
    />
  );
}
