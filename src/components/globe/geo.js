// Small spherical-geometry helpers used by the globe.

const RAD = Math.PI / 180;

// lat/lon in degrees → unit vector (x right, y up, z toward the viewer at lon 0)
export function toVec(lat, lon) {
  const la = lat * RAD;
  const lo = lon * RAD;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
}

// Great-circle arc between two unit vectors, lifted off the surface so it reads as a flight path.
export function arcPoints(a, b, n = 48) {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const om = Math.acos(dot);
  const lift = 0.08 + om * 0.16;
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const s1 = Math.sin((1 - t) * om) / Math.sin(om);
    const s2 = Math.sin(t * om) / Math.sin(om);
    const h = 1 + lift * Math.sin(Math.PI * t);
    out.push([(a[0] * s1 + b[0] * s2) * h, (a[1] * s1 + b[1] * s2) * h, (a[2] * s1 + b[2] * s2) * h]);
  }
  return out;
}

// Rotate a unit vector by the current view (yaw, then pitch) and project to screen space.
// Returns [x, y, depth] where depth > 0 means the point faces the viewer.
export function project(v, cy, sy, cp, sp, cx, cyy, R) {
  const x1 = v[0] * cy + v[2] * sy;
  const z1 = -v[0] * sy + v[2] * cy;
  const y2 = v[1] * cp - z1 * sp;
  const z2 = v[1] * sp + z1 * cp;
  return [cx + x1 * R, cyy - y2 * R, z2];
}
