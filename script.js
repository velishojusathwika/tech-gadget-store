const container = document.getElementById("products");

const products = [
  {
    name: "Laptop",
    price: 55000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    name: "Smartphone",
    price: 25000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "Headphones",
    price: 3000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  }
];

container.innerHTML = "";

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}')">
        Add to Cart
      </button>
    </div>
  `;
});

function addToCart(name) {
  alert(name + " added to cart 🛒");
}