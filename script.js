(() => {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const progress = document.querySelector(".reading-progress");
  let queued = false;
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    queued = false;
  }
  function scheduleProgress() {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(updateProgress);
    }
  }
  window.addEventListener("scroll", scheduleProgress, { passive: true });
  window.addEventListener("resize", scheduleProgress);
  document
    .querySelectorAll("details")
    .forEach((detail) => detail.addEventListener("toggle", scheduleProgress));
  updateProgress();
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (!motion.matches) entry.target.classList.add("entering");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((node) => observer.observe(node));
    motion.addEventListener("change", () => {
      if (motion.matches)
        document
          .querySelectorAll(".entering")
          .forEach((node) => node.classList.remove("entering"));
    });
  }
})();
