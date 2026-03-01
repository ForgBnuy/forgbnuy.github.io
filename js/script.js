document.addEventListener("DOMContentLoaded", () => {
  const themeToggles = document.querySelectorAll(".theme-btn");
  const langToggles = document.querySelectorAll(".lang-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.getElementById("nav-links");
  const htmlElement = document.documentElement;

  // Auto-expand active sub-menus and color parent links
  const activeLink = document.querySelector(".nav-tree a.active");
  if (activeLink) {
    let siblingUl = activeLink.nextElementSibling;
    if (
      siblingUl &&
      (siblingUl.classList.contains("tree-level-1") ||
        siblingUl.classList.contains("tree-level-2"))
    ) {
      siblingUl.classList.add("open");
    }

    let parentUl = activeLink.closest(".tree-level-1, .tree-level-2");
    while (parentUl) {
      parentUl.classList.add("open");
      if (
        parentUl.previousElementSibling &&
        parentUl.previousElementSibling.tagName === "A"
      ) {
        parentUl.previousElementSibling.classList.add("expanded-parent");
      }
      parentUl = parentUl.parentElement.closest(".tree-level-1, .tree-level-2");
    }
  }

  // Click logic for expandable category folders
  const navFolders = document.querySelectorAll(".nav-toggle");
  navFolders.forEach((folder) => {
    folder.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = folder.getAttribute("data-target");
      const targetUl = document.getElementById(targetId);
      targetUl.classList.toggle("open");
      folder.classList.toggle("expanded-parent");
    });
  });

  const currentLang = htmlElement.getAttribute("lang") || "en";
  langToggles.forEach(
    (btn) => (btn.textContent = currentLang === "en" ? "PL" : "EN"),
  );

  // Theme Toggle Button Logic
  themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        htmlElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  });

  // Language Toggle Button Logic
  langToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (htmlElement.getAttribute("lang") === "en") {
        htmlElement.setAttribute("lang", "pl");
        localStorage.setItem("lang", "pl");
        langToggles.forEach((b) => (b.textContent = "EN"));
      } else {
        htmlElement.setAttribute("lang", "en");
        localStorage.setItem("lang", "en");
        langToggles.forEach((b) => (b.textContent = "PL"));
      }
    });
  });

  // Sidebar Toggling (Mobile)
  menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.toggle("active");
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  });

  // Mobile Link Auto-close
  navLinks.querySelectorAll("a:not(.nav-toggle)").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });

  // --- LIGHTBOX (IMAGE ZOOM) LOGIC ---
  let lightboxObj = null;

  const createLightbox = () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const img = document.createElement("img");
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    // Close when clicking anywhere on the overlay
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    // Close when pressing the Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
      }
    });

    return { lightbox, img };
  };

  // Find all images we want to make zoomable
  const zoomableImages = document.querySelectorAll(
    ".event-bg-grid img, .design-image-grid img, .profile-photo",
  );

  zoomableImages.forEach((image) => {
    image.addEventListener("click", () => {
      if (!lightboxObj) {
        lightboxObj = createLightbox();
      }
      lightboxObj.img.src = image.src;
      if (image.alt) lightboxObj.img.alt = image.alt;
      lightboxObj.lightbox.classList.add("active");
    });
  });
});
