// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("menuToggle");

//   toggleBtn.addEventListener("click", () => {
//     toggleBtn.classList.toggle("open");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("translate-x-0");

    // Toggle sidebar slide
    sidebar.classList.toggle("translate-x-0");
    sidebar.classList.toggle("-translate-x-full");

    // Toggle icons with animation
    if (!isOpen) {
      hamburgerIcon.classList.add("opacity-0", "scale-0");
      closeIcon.classList.remove("opacity-0", "scale-0");
    } else {
      hamburgerIcon.classList.remove("opacity-0", "scale-0");
      closeIcon.classList.add("opacity-0", "scale-0");
    }
  });
});
