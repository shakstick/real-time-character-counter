const text = document.getElementById("input");
const total = document.getElementById("total");
const remain = document.getElementById("remain");

total.textContent = 0;
remain.textContent = text.getAttribute("maxlength");

text.addEventListener("input", () => {
  const length = text.value.length;
  total.textContent = 0 + length;
  remain.textContent = text.getAttribute("maxlength") - length;
});
