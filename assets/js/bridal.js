const sarees = [
  {
    img:"https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb",
    price:"₹8,499"
  },
  {
    img:"https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb",
    price:"₹7,299"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1724762182780-000d248f9301",
    price:"₹5,999"
  },
  {
    img:"https://images.unsplash.com/photo-1609748340878-c690e3e4706b",
    price:"₹3,499"
  }
];

let index = 0;

function show(){
  document.getElementById("sareeImg").src = sarees[index].img;
  document.getElementById("price").innerText = sarees[index].price;
}

function next(){
  index = (index + 1) % sarees.length;
  show();
}

function prev(){
  index = (index - 1 + sarees.length) % sarees.length;
  show();
}

function orderNow(){
  alert("🛍️ Order placed!\nOur team will contact you on WhatsApp 💖");
}

show();
