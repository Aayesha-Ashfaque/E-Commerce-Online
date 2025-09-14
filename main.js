// Close nav when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (
    list.classList.contains("navlist-active") &&
    !e.target.closest(".navlist") &&
    !e.target.closest(".fa-bars")
  ) {
    list.classList.remove("navlist-active");
    hamburger.classList.remove("fa-x");
  }
});

// Close nav when clicking a nav link (mobile)
document.querySelectorAll(".navlist .link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 900) {
      list.classList.remove("navlist-active");
      hamburger.classList.remove("fa-x");
    }
  });
});

// Hide nav on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    list.classList.remove("navlist-active");
    hamburger.classList.remove("fa-x");
  }
});

// Cart functionality
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const title = card.querySelector(".tittle").textContent;
    const price = card.querySelector(".amount").textContent;
    cart.push({ title, price });
    updateCart();
    cartModal.style.display = "block";
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - ${item.price}`;
    cartItems.appendChild(li);
  });
}

// Close cart modal
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Checkout button functionality
checkoutBtn.addEventListener("click", () => {
  alert("Proceeding to checkout...");
});