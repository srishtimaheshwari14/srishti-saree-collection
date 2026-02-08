const banarasiData = [
  { img: "https://images.unsplash.com/photo-1598514982841-8d94d5bcb98b", price: 4499 },
  { img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519", price: 5299 },
  { img: "https://images.unsplash.com/photo-1583391733956-375b2a3f7c04", price: 6199 },
  { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c", price: 5999 }
];

let banarasiIndex = 0;

function showBanarasi(){
  document.getElementById("banarasiImg").src = banarasiData[banarasiIndex].img;
  document.getElementById("banarasiPrice").innerText = "₹" + banarasiData[banarasiIndex].price;
}

function banarasiNext(){
  banarasiIndex = (banarasiIndex + 1) % banarasiData.length;
  showBanarasi();
}

function banarasiPrev(){
  banarasiIndex = (banarasiIndex - 1 + banarasiData.length) % banarasiData.length;
  showBanarasi();
}

function addBanarasiToCart(){
  addToCart("Banarasi Saree", banarasiData[banarasiIndex].price);
}

showBanarasi();
