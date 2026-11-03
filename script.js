const productImg = document.getElementById("productImg");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    productImg.src = button.dataset.image;
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
