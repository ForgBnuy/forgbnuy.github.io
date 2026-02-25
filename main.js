document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  // Check if the user has already seen the animation this session
  if (sessionStorage.getItem("booted")) {
    // If already booted, skip animation entirely
    if (preloader) preloader.style.display = "none";
  } else {
    // If first load, run the animation
    window.addEventListener("load", function () {
      setTimeout(() => {
        preloader.style.transition =
          "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        preloader.style.opacity = "0";

        // Set the flag so it doesn't run again
        sessionStorage.setItem("booted", "true");

        setTimeout(() => {
          preloader.style.display = "none";
        }, 600);
      }, 2500); // Duration of the "booting" feel
    });
  }
});
