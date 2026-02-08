function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  let cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert("🛒 Item added to cart");
}

function loadCart() {
  let cart = getCart();
  let list = document.getElementById("cart-items");
  let total = 0;

  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<p>Your cart is empty 🛒</p>";
    document.getElementById("total").innerText = 0;
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

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  loadCart();
}

function orderOnWhatsApp() {
  let cart = getCart();

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let msg = "🛍️ *Order Details* %0A%0A";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  msg += `%0A*Total: ₹${total}*`;

  window.open(
    "https://wa.me/91XXXXXXXXXX?text=" + msg,
    "_blank"
  );
}
