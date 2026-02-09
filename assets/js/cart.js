// ===== CART STORAGE =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== ADD TO CART =====
function addToCart(name, price) {
  let cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert("🛒 Item added to cart");
}

// ===== LOAD CART (cart.html) =====
function loadCart() {
  let cart = getCart();
  let list = document.getElementById("cart-items");
  let totalBox = document.getElementById("total");
  let total = 0;

  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalBox.innerText = "₹0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `
      <div class="cart-item">
        <p>${index + 1}. ${item.name} – ₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "₹" + total;
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  loadCart();
}

// ===== ORDER ON WHATSAPP =====
function orderOnWhatsApp() {
  let cart = getCart();

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let msg = "🛍️ *Order Details*%0A%0A";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  msg += `%0A*Total: ₹${total}*`;

  window.open(
    "https://wa.me/919109965678?text=" + msg,
    "_blank"
  );
}

// ===== AUTO BIND ADD TO CART BUTTONS =====
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".order-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      const price = parseInt(btn.getAttribute("data-price"));
      addToCart(name, price);
    });
  });
});

