const roles = [
  "Frontend Developer",
  "Backend Developer",
  "AI/ML Student",
  "Data Science Student"
];

// Try both spans
const mobileSpan = document.getElementById("changingTextMobile");
const desktopSpan = document.getElementById("changingTextDesktop");

let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[currentRoleIndex];
  const currentText = currentRole.substring(0, charIndex);

  if (mobileSpan) mobileSpan.textContent = currentText;
  if (desktopSpan) desktopSpan.textContent = currentText;

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    typingSpeed = 300;
  } else {
    charIndex += isDeleting ? -1 : 1;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
