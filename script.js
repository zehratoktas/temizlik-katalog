const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");
const addButtons = document.querySelectorAll(".add-button");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let count = 0;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;
    products.forEach((product) => {
      product.classList.toggle(
        "hidden",
        category !== "all" && product.dataset.category !== category
      );
    });
  });
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count;
    toast.textContent = `${button.dataset.name} sepete eklendi`;
    toast.classList.add("show");
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
