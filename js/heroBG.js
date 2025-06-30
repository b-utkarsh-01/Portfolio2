 const heroSection = document.getElementById("heroSection");
  const heroAudio = document.getElementById("heroAudio");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroAudio.play().catch(() => {});
        } else {
          heroAudio.pause();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(heroSection);
