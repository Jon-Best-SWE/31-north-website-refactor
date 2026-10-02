/* Highlight the current weekday in the hours list. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(`.d${new Date().getDay()}`).forEach((row) => row.classList.add("highlight"));
});
