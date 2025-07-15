const products = {
  "Gold Bangles": [
    "Antique Temple Bangles", "24K Gold Bangles", "Unparalleled Gold Bangles", "exquisite Gold bangles", "Beautiful Gold Bangles"
  ],
  "Diamond Bangles": [
    "Silver Toned Blue stone Diamond Bangles", "American Diamond bangles", "Elegant Diamond bangles", "Artistic American Diamond Bangles", "Silver Toned Blue stone Diamond Bangles"
  ],
  "Gold Necklaces": [
    "24K pure Gold necklace", "HandCrafted Golden Necklace1", "HandCrafted Golden Necklace2", "HandCrafted Golden Necklace3", "Beautiful Gold Necklace"
  ],
  "Diamond Necklaces": [
    "American Diamond Necklace", "Elegant Diamond Necklace", "Wedding Diamond Neckpiece", "Wedding Collection", "Floral diamond necklace"
  ],
  "Gold Rings": [
    "Traditional Gold Ring", "Adjustable Gold ring", "Floral gold ring"
  ],
  "Diamond Rings": [
    "Solitaire Diamond Ring", "Double lined Diamond ring", "Flower diamond ring", "Emerald Diamond ring"
  ],
  "Bracelets": [
    "Infinity Bracelet", "Polished gold Bracelet", "Tennis Bracelet", "Simple & small Tennis Bracelet"
  ]
};

const prices = [
  499, 520, 540, 480, 510, 1200, 1450, 1300, 1600, 1700,
  1050, 1200, 1300, 980, 1100, 2100, 2300, 2600, 2400, 2750,
  300, 320, 350, 750, 880, 960, 1050, 420, 450, 500, 520
];

const container = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
let cart = [];
let priceIndex = 0;

for (const [category, images] of Object.entries(products)) {
  const section = document.createElement("section");
  section.className = "category-section";
  section.id = category.toLowerCase().replace(" ", "-");

  const heading = document.createElement("h2");
  heading.textContent = category;
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "product-grid";

  images.forEach(img => {
    const card = document.createElement("div");
    card.className = "product-card";

    const productName = img.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const productPrice = prices[priceIndex];

    card.innerHTML = `
      <img src="${img}.jpg" alt="${category} image">
      <h3>${productName}</h3>
      <p class="price">$${productPrice}</p>
      <button class="add-to-cart">Add to Cart</button>
      <button class="buy-now" onclick="window.location.href='billing.html'">Buy Now</button>
    `;

    // Add to Cart functionality
    card.querySelector(".add-to-cart").addEventListener("click", () => {
      cart.push({ name: productName, price: productPrice });
      cartCount.textContent = cart.length;
      alert(`${productName} added to cart!`);
    });

    grid.appendChild(card);
    priceIndex++;
  });

  section.appendChild(grid);
  container.appendChild(section);
}
