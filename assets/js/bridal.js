const bridalData = [
  {
    img: "https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb",
    price: 8499
  },
  {
    img: "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb",
    price: 7299
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1724762182780-000d248f9301",
    price: 5999
  },
  {
    img: "https://images.unsplash.com/photo-1609748340878-c690e3e4706b",
    price: 3499
  }
];

let bridalIndex = 0;

function showBridal(){
  document.getElementById("bridalImg").src = bridalData[bridalIndex].img;
  document.getElementById("bridalPrice").innerText = "₹" + bridalData[bridalIndex].price;
}

function bridalNext(){
  bridalIndex = (bridalIndex + 1) % bridalData.length;
  showBridal();
}

function bridalPrev(){
  bridalIndex = (bridalIndex - 1 + bridalData.length) % bridalData.length;
  showBridal();
}

function addBridalToCart(){
  addToCart("Bridal Saree", bridalData[bridalIndex].price);
}

showBridal();
