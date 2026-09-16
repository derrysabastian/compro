const header = document.querySelector(".site-header");
const floatingWa = document.querySelector(".floating-wa");
const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 40);
  floatingWa?.classList.toggle("visible", scrollY > innerHeight * 0.65);
  if (!prefersReducedMotion)
    document.documentElement.style.setProperty("--hero-shift", `${Math.min(scrollY * 0.12, 90)}px`);
}, { passive: true });
const menu = document.querySelector(".menu-toggle"),
  links = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
  links.classList.toggle("open");
  menu.setAttribute("aria-expanded", links.classList.contains("open"));
});
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open")),
  );
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -8%" },
);
document.querySelectorAll(".reveal").forEach((e, i) => {
  e.style.setProperty("--reveal-delay", `${Math.min(i % 5, 4) * 70}ms`);
  observer.observe(e);
});
document.querySelectorAll("[data-count]").forEach((el) => {
  const obs = new IntersectionObserver(
    (es) => {
      if (es[0].isIntersecting) {
        let n = 0,
          max = +el.dataset.count;
        const timer = setInterval(() => {
          n += Math.ceil(max / 25);
          if (n >= max) {
            n = max;
            clearInterval(timer);
          }
          el.textContent = n;
        }, 35);
        obs.disconnect();
      }
    },
    { threshold: 1 },
  );
  obs.observe(el);
});
document.querySelectorAll("[data-filter]").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".project-card,.squeeze-slide").forEach((card) => {
      const show = btn.dataset.filter === "all" || card.dataset.category === btn.dataset.filter;
      card.classList.toggle("filter-hidden", !show);
    });
  }),
);
const contactForm = document.querySelector(".contact-form");
if (contactForm)
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const msg = `Halo Sabar Renovation,\nNama: ${data.get("name")}\nNo. WhatsApp: ${data.get("phone")}\nLokasi proyek: ${data.get("location")}\nKebutuhan: ${data.get("need")}`;
    window.open(
      `https://wa.me/6285793365019?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    e.target.querySelector(".form-status").textContent =
      "Pesan siap dikirim ke WhatsApp Sabar Renovation.";
  });
document.querySelectorAll(".service-card a").forEach((link) => link.remove());
const serviceGrid = document.querySelector(".service-grid");
if (
  serviceGrid &&
  !serviceGrid.querySelector('[data-service="architecture"]')
) {
  const card = document.createElement("article");
  card.className = "service-card reveal visible";
  card.dataset.service = "architecture";
  card.innerHTML =
    "<span>05</span><b>⌑</b><h3>Jasa Arsitektur</h3><p>Konsep, denah, tampak, dan arahan desain sesuai kebutuhan serta karakter lahan Anda.</p>";
  serviceGrid.append(card);
}
const contactDetails = document.querySelector(".contact-details");
if (contactDetails)
  contactDetails.innerHTML =
    'WhatsApp<br><a href="https://wa.me/6285793365019" target="_blank">+62 857 9336 5019 ↗</a>';
if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "favicon.svg";
  favicon.type = "image/svg+xml";
  document.head.append(favicon);
}
const squeeze = document.querySelector("[data-squeeze-carousel]");
if (squeeze) {
  const track = squeeze.querySelector(".squeeze-track"),
    cards = [...squeeze.querySelectorAll(".squeeze-slide")],
    copyTitle = squeeze.querySelector(".squeeze-copy strong"),
    copyText = squeeze.querySelector(".squeeze-copy span");
  const descriptions = [
    "Rumah modern, rapi, dan hangat. Setiap ruang dirancang untuk mengikuti ritme hidup penghuninya.",
    "Dapur fungsional dengan material hangat dan detail yang mudah dirawat.",
    "Interior terang dengan alur ruang yang nyaman untuk aktivitas keluarga.",
    "Fasad tegas dengan sentuhan hijau yang membuat rumah terasa hidup.",
    "Ruang kerja representatif yang mendukung fokus dan kolaborasi.",
  ];
  let current = 0;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = (index) => {
    current = (index + cards.length) % cards.length;
    cards.forEach((card, i) =>
      card.classList.toggle("is-active", i === current),
    );
    copyTitle.textContent = cards[current].querySelector("h3").textContent;
    copyText.textContent = descriptions[current];
    if (innerWidth < 761 && !reduced)
      cards[current].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
  };
  cards.forEach((card, i) => card.addEventListener("click", () => show(i)));
  squeeze
    .querySelector("[data-squeeze-prev]")
    .addEventListener("click", () => show(current - 1));
  squeeze
    .querySelector("[data-squeeze-next]")
    .addEventListener("click", () => show(current + 1));
  squeeze.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(current - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(current + 1);
    }
  });
  show(0);
}
