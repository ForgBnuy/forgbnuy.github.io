document.addEventListener("DOMContentLoaded", () => {
  const themeToggles = document.querySelectorAll(".theme-btn");
  const langToggles = document.querySelectorAll(".lang-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.getElementById("nav-links");
  const htmlElement = document.documentElement;

  // Auto-expand active sub-menus and color parent links
  const activeLink = document.querySelector(".nav-tree a.active");
  if (activeLink) {
    // 1. If it has a sibling UL, open it (e.g. we clicked the Hub page itself)
    let siblingUl = activeLink.nextElementSibling;
    if (
      siblingUl &&
      (siblingUl.classList.contains("tree-level-1") ||
        siblingUl.classList.contains("tree-level-2"))
    ) {
      siblingUl.classList.add("open");
    }

    // 2. Walk up and open parents
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

  // Theme Logic
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    htmlElement.setAttribute("data-theme", "dark");
  }

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

  // Language Logic
  const savedLang = localStorage.getItem("lang") || "en";
  htmlElement.setAttribute("lang", savedLang);
  langToggles.forEach(
    (btn) => (btn.textContent = savedLang === "en" ? "PL" : "EN"),
  );

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

  // Sidebar Toggling
  menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.toggle("active");
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  });

  // Mobile Link Auto-close
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});
