/* Shared About-page animation behavior. */
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS && document.querySelector("[data-aos]")) {
    window.AOS.init({ duration: 1200 });
  }

  const navbar = document.getElementById("secondrow2");
  if (navbar) {
    const placeholder = document.createElement("div");
    placeholder.style.display = "none";
    navbar.parentNode.insertBefore(placeholder, navbar);
    const sticky = navbar.getBoundingClientRect().top + window.pageYOffset;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky) {
        if (!navbar.classList.contains("stickybar")) {
          placeholder.style.height = `${navbar.offsetHeight}px`;
          placeholder.style.display = "block";
          navbar.classList.add("stickybar");
        }
      } else {
        navbar.classList.remove("stickybar");
        placeholder.style.display = "none";
        placeholder.style.height = "0";
      }
    });
  }

  const layers = [
    [".about-us-background", -30],
    [".cloud1", 10],
    [".cloud2", 20],
    [".cloud3", 30],
  ];
  document.addEventListener("mousemove", (event) => {
    layers.forEach(([selector, resistance]) => {
      document.querySelectorAll(selector).forEach((element) => {
        window.TweenLite.to(element, 0.2, {
          x: -((event.clientX - window.innerWidth / 2) / resistance),
          y: -((event.clientY - window.innerHeight / 2) / resistance),
        });
      });
    });
  });

  const scrollLayers = [
    ["parallax-bg-1", 0.25],
    ["parallax-bg-2", 0.4],
    ["parallax-bg-3", 0.75],
    ["parallax-bg-4", 0.5],
  ];
  window.addEventListener("scroll", () => {
    scrollLayers.forEach(([id, speed]) => {
      const layer = document.getElementById(id);
      if (layer) layer.style.top = `${-(window.pageYOffset * speed)}px`;
    });
  });
});
