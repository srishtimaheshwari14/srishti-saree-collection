let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Item added to cart");
}

function loadCart() {
  let list = document.getElementById("cart-items");
  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `<p>${index+1}. ${item.name} – ₹${item.price}</p>`;
  });

  document.getElementById("total").innerText = total;
}

function orderOnWhatsApp() {
  let msg = "Order Details:%0A";
  let total = 0;

  cart.forEach((item, i) => {
    msg += `${i+1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  msg += `%0ATotal: ₹${total}`;

  window.open("https://wa.me/91XXXXXXXXXX?text=" + msg, "_blank");
}
