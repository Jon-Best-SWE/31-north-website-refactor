/* Compass navigation behavior. */
document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".spinner");
  if (!spinner) return;

  const rotations = {
    north: 0,
    northeast: 45,
    east: 90,
    southeast: 135,
    south: 180,
    southwest: -135,
    west: -90,
    northwest: -45,
  };
  const labels = {
    northwest: ["label1", "assets/svg/compass-label-1.svg"],
    north: ["label2", "assets/svg/compass-label-2.svg"],
    northeast: ["label3", "assets/svg/compass-label-3.svg"],
    west: ["label4", "assets/svg/compass-label-4.svg"],
    east: ["label5", "assets/svg/compass-label-5.svg"],
  };

  spinner.style.transform = "rotate(0deg)";
  Object.entries(rotations).forEach(([direction, degrees]) => {
    document.querySelectorAll(`.${direction}`).forEach((control) => {
      const rotate = () => { spinner.style.transform = `rotate(${degrees}deg)`; };
      control.addEventListener("mouseenter", rotate);
      control.addEventListener("mouseleave", rotate);
    });
  });
  Object.entries(labels).forEach(([direction, [id, source]]) => {
    const label = document.getElementById(id);
    if (!label) return;
    document.querySelectorAll(`.${direction}`).forEach((control) => {
      const refresh = () => { label.src = source; };
      control.addEventListener("mouseenter", refresh);
      control.addEventListener("mouseleave", refresh);
    });
  });
});
