const count = document.querySelector("p");
const btn = document.querySelector("button");

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    count.textContent++;
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    count.textContent = 0;
  }
});

btn.addEventListener("click", function () {
  count.textContent = 0;
  this.blur();
});
