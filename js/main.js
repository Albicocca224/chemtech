// ── SCROLL FADE-IN ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedSelectors = [
    '.spec-item',
    '.kit-item',
    '.why-item',
    '.w-card',
    '.sol-card',
  ];

  document.querySelectorAll(animatedSelectors.join(', ')).forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
