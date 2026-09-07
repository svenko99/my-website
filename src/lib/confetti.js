/**
 * The confetti from the old site, kept. It fires on the 12th of every month
 * and whenever the counter is clicked.
 */
const COUNT = 160;
const GRAVITY = 0.5;
const TERMINAL_VELOCITY = 6;
const DRAG = 0.075;

// Apple's system colours, each with a darker back face.
const COLORS = [
  ["#ff3b30", "#b32820"],
  ["#ff9500", "#b36800"],
  ["#ffcc00", "#b38f00"],
  ["#34c759", "#248b3e"],
  ["#007aff", "#0055b3"],
  ["#af52de", "#7a399b"],
  ["#ff2d55", "#b31f3b"],
];

const rand = (min, max) => Math.random() * (max - min) + min;

export function confetti(canvas) {
  const ctx = canvas?.getContext("2d");
  if (!ctx) return () => {};

  let pieces = [];
  let running = false;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const render = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    pieces = pieces.filter((p) => p.y < h + 40);

    for (const p of pieces) {
      p.vx -= p.vx * DRAG;
      p.vy = Math.min(p.vy + GRAVITY, TERMINAL_VELOCITY);
      p.vx += Math.random() > 0.5 ? Math.random() : -Math.random();
      p.x += p.vx;
      p.y += p.vy;

      if (p.x > w) p.x = 0;
      if (p.x < 0) p.x = w;

      // Flipping the vertical scale is what makes a flat rectangle read as a
      // tumbling piece of paper; the sign picks the front or back colour.
      const flip = Math.cos(p.y * 0.1);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = flip > 0 ? p.color[0] : p.color[1];
      ctx.fillRect(-p.w / 2, (-p.h * flip) / 2, p.w, p.h * flip);
      ctx.restore();
    }

    if (pieces.length > 0) {
      requestAnimationFrame(render);
    } else {
      running = false;
      ctx.clearRect(0, 0, w, h);
    }
  };

  const burst = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    resize();
    for (let i = 0; i < COUNT; i += 1) {
      pieces.push({
        color: COLORS[Math.floor(rand(0, COLORS.length))],
        w: rand(7, 13),
        h: rand(7, 20),
        x: rand(0, window.innerWidth),
        y: window.innerHeight - 1,
        rotation: rand(0, 2 * Math.PI),
        vx: rand(-25, 25),
        vy: rand(0, -50),
      });
    }
    if (!running) {
      running = true;
      requestAnimationFrame(render);
    }
  };

  window.addEventListener("resize", resize, { passive: true });
  resize();
  return burst;
}
