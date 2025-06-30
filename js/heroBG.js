const heroSection = document.getElementById("heroSection");
const heroAudio = document.getElementById("heroAudio");
const playAudioBtn = document.getElementById("playAudioBtn");

function isMobile() {
  return window.innerWidth <= 768;
}

// ✅ Mobile: Do nothing — no audio
if (isMobile()) {
  playAudioBtn.classList.add("hidden"); 
  heroAudio.pause();
} else {
  // ✅ Desktop: Play on user gesture (once)
  const playAudio = () => {
    heroAudio.play().catch((e) => {
      console.log("Autoplay blocked:", e.message);
    });

    // remove all once triggered
    window.removeEventListener("click", playAudio);
    window.removeEventListener("mousemove", playAudio);
  };

  window.addEventListener("click", playAudio, { once: true });
  window.addEventListener("mousemove", playAudio, { once: true });

  // ✅ Desktop: IntersectionObserver to pause/play
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroAudio.play().catch((e) => console.log("Observer autoplay failed:", e.message));
        } else {
          heroAudio.pause();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(heroSection);
}
