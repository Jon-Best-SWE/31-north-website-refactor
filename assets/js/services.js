/* Services-page parallax, progress, and sticky navigation behavior. */
document.addEventListener("DOMContentLoaded", () => {
  const parallaxImages = [...document.querySelectorAll(".img-parallax")];
  const navbar = document.getElementById("secondrow2");
  const sticky = navbar?.offsetTop ?? 0;
  const offsets = [1000, 1800, 2600, 3400, 4200, 5000];

  const update = () => {
    const scrollTop = window.pageYOffset;
    const viewportHeight = window.innerHeight;
    parallaxImages.forEach((image) => {
      const parent = image.parentElement;
      const speed = Number(image.dataset.speed);
      const imageY = parent.getBoundingClientRect().top + scrollTop;
      const parentHeight = parent.clientHeight;
      const viewportBottom = scrollTop + viewportHeight;
      if (viewportBottom > imageY && scrollTop < imageY + parentHeight) {
        const percent = (((viewportBottom - imageY) * speed) / (viewportHeight + parentHeight) * 100) + (50 - speed * 50);
        image.style.top = `${percent}%`;
        image.style.transform = `translate(-50%, -${percent}%)`;
      }
    });

    const denominator = document.body.offsetHeight - viewportHeight;
    offsets.forEach((offset, index) => {
      document.body.style.setProperty(`--scroll${index + 1}`, (scrollTop - offset) / denominator);
    });
    navbar?.classList.toggle("stickybar", scrollTop >= sticky);
  };

  window.addEventListener("scroll", update, { passive: true });
});
