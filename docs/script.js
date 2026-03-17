const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
  },
);

document.querySelectorAll(".reveal").forEach((node) => {
  revealObserver.observe(node);
});

const sectionLinks = [...document.querySelectorAll(".section-nav a")];
const linkMap = new Map(sectionLinks.map((link) => [link.getAttribute("href")?.slice(1), link]));

sectionLinks[0]?.setAttribute("aria-current", "true");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = linkMap.get(id);
      if (!link) {
        return;
      }

      if (entry.isIntersecting) {
        sectionLinks.forEach((item) => item.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "true");
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.01,
  },
);

document.querySelectorAll("main section[id]").forEach((section) => {
  navObserver.observe(section);
});

document.querySelector(".hero")?.classList.add("is-visible");
