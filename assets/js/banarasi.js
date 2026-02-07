const banarasiData = [
  { img:"https://images.unsplash.com/photo-1598514982841-8d94d5bcb98b", price:"₹4,499" },
  { img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519", price:"₹5,299" },
  { img:"https://images.unsplash.com/photo-1583391733956-375b2a3f7c04", price:"₹6,199" },
  { img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c", price:"₹5,999" }
];

let banarasiIndex = 0;

const banarasiImg = document.getElementById("banarasiImg");
const banarasiPrice = document.getElementById("banarasiPrice");

function showBanarasi(){
  banarasiImg.src = banarasiData[banarasiIndex].img;
  banarasiPrice.innerText = banarasiData[banarasiIndex].price;
}

function banarasiNext(){
  banarasiIndex = (banarasiIndex + 1) % banarasiData.length;
  showBanarasi();
}

function banarasiPrev(){
  banarasiIndex = (banarasiIndex - 1 + banarasiData.length) % banarasiData.length;
  showBanarasi();
}

function orderBanarasi(){
  alert("🛍️ Order received!\nWe’ll contact you on WhatsApp 💖");
}

showBanarasi();
