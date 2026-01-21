// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close nav on link click (mobile)
nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Animated stats (edit these numbers later)
const targets = {
  statWorkshops: 12,
  statYouth: 380,
  statPartners: 9,
};

function animateNumber(el, target) {
  const durationMs = 900;
  const start = 0;
  const startTime = performance.now();

  function tick(now) {
    const t = Math.min(1, (now - startTime) / durationMs);
    const value = Math.floor(start + (target - start) * t);
    el.textContent = value.toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

Object.entries(targets).forEach(([id, value]) => {
  const el = document.getElementById(id);
  if (el) animateNumber(el, value);
});

// Contact form placeholder (we’ll wire to email once hosted)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks! This is a placeholder form right now. Next step: connect it to email on publish.";
  form.reset();
});
