const canvas = document.getElementById("canvas");
const context = canvas?.getContext("2d");

if (canvas && context) {
  const EXECUTION_DAY = 12;
  const CONFETTI_COUNT = 200;
  const GRAVITY = 0.5;
  const TERMINAL_VELOCITY = 6;
  const DRAG = 0.075;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = [
    { front: "red", back: "darkred" },
    { front: "green", back: "darkgreen" },
    { front: "blue", back: "darkblue" },
    { front: "yellow", back: "darkyellow" },
    { front: "orange", back: "darkorange" },
    { front: "pink", back: "darkpink" },
    { front: "purple", back: "darkpurple" },
    { front: "turquoise", back: "darkturquoise" },
  ];

  let confetti = [];

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const randomRange = (min, max) => Math.random() * (max - min) + min;

  const initConfetti = () => {
    confetti = [];
    for (let i = 0; i < CONFETTI_COUNT; i += 1) {
      confetti.push({
        color: colors[Math.floor(randomRange(0, colors.length))],
        dimensions: {
          x: randomRange(10, 20),
          y: randomRange(10, 30),
        },
        position: {
          x: randomRange(0, canvas.width),
          y: canvas.height - 1,
        },
        rotation: randomRange(0, 2 * Math.PI),
        scale: { x: 1, y: 1 },
        velocity: {
          x: randomRange(-25, 25),
          y: randomRange(0, -50),
        },
      });
    }
  };

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    confetti = confetti.filter((confetto) => confetto.position.y < canvas.height);
    confetti.forEach((confetto) => {
      const width = confetto.dimensions.x * confetto.scale.x;
      const height = confetto.dimensions.y * confetto.scale.y;

      context.translate(confetto.position.x, confetto.position.y);
      context.rotate(confetto.rotation);

      confetto.velocity.x -= confetto.velocity.x * DRAG;
      confetto.velocity.y = Math.min(confetto.velocity.y + GRAVITY, TERMINAL_VELOCITY);
      confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

      confetto.position.x += confetto.velocity.x;
      confetto.position.y += confetto.velocity.y;

      if (confetto.position.x > canvas.width) confetto.position.x = 0;
      if (confetto.position.x < 0) confetto.position.x = canvas.width;

      confetto.scale.y = Math.cos(confetto.position.y * 0.1);
      context.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
      context.fillRect(-width / 2, -height / 2, width, height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    });

    if (confetti.length > 0) {
      window.requestAnimationFrame(render);
    }
  };

  resizeCanvas();
  const currentDate = new Date();
  if (!prefersReducedMotion && currentDate.getDate() === EXECUTION_DAY) {
    initConfetti();
    render();
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
}
