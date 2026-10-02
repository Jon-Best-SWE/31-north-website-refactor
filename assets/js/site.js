/* Shared navigation and scroll behavior. */
(() => {
  "use strict";

  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  };

  ready(() => {
    document.querySelectorAll(".nav-icon").forEach((icon) => {
      const navigation = document.getElementById("top-nav");
      icon.setAttribute("role", "button");
      icon.setAttribute("tabindex", "0");
      icon.setAttribute("aria-label", "Toggle navigation");
      icon.setAttribute("aria-expanded", String(navigation?.classList.contains("mobile") ?? false));

      const toggleNavigation = () => {
        if (!navigation) return;
        navigation.classList.toggle("mobile");
        icon.classList.toggle("change");
        icon.setAttribute("aria-expanded", String(navigation.classList.contains("mobile")));
      };

      icon.addEventListener("click", toggleNavigation);
      icon.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleNavigation();
        }
      });
    });

    document.querySelectorAll('a[href*="#top"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        if (link.hash === "#" || link.hash === "#0") return;
        const samePage = location.pathname.replace(/^\//, "") === link.pathname.replace(/^\//, "") && location.hostname === link.hostname;
        const target = samePage ? document.querySelector(link.hash) : null;
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  });
})();
