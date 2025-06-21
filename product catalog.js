const productData = {
  electronics: [
    {
      name: "MacBook",
      image: "images/laptop.jpg",
      description: "High-performance laptop with latest processor and ample storage.",
      price: "$999.99",
      availability: "In stock",
      specs: [
        "Brand: XYZ Electronics",
        "Screen Size: 15.6 inches",
        "RAM: 8GB",
        "Storage: 512GB SSD"
      ]
    }
  ],
  clothing: [
    {
      name: "T-Shirt",
      image: "images/t-shirt.webp",
      description: "Casual and comfortable premium cotton t-shirt.",
      price: "$19.99",
      availability: "In stock",
      specs: [
        "Brand: Fashion Apparel",
        "Color: Black",
        "Size: S, M, L",
        "Material: 100% Cotton"
      ]
    }
  ],
  home: [
    {
      name: "Table Lamp",
      image: "images/table lamp.jpg",
      description: "Stylish lamp to enhance home decor.",
      price: "$39.99",
      availability: "In stock",
      specs: [
        "Brand: Home Essentials",
        "Color: White",
        "Height: 12 inches",
        "Material: Ceramic, Metal"
      ]
    }
  ]
};

let cartCount = 0;

function renderProducts(category) {
  const section = document.getElementById(category);
  section.innerHTML = `<h2>${capitalize(category)}</h2>`;

  productData[category].forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p><b>Description:</b> ${product.description}</p>
          <p><b>Price:</b> ${product.price}</p>
          <p><b>Availability:</b> ${product.availability}</p>
          <button onclick="addToCart()">Add to Cart</button>
          <ul>
            ${product.specs.map(spec => `<li><b>${spec}</b></li>`).join("")}
          </ul>
        </div>
      </div>
    `;
    section.innerHTML += productHTML;
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
}

// 🔁 Show Selected Category
function showCategory(categoryId) {
    const sections = document.querySelectorAll('.category');
    const buttons = document.querySelectorAll('.category-btn');

    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    const selectedSection = document.getElementById(categoryId);
    const activeButton = document.querySelector(`button[onclick="showCategory('${categoryId}')"]`);

    if (selectedSection) selectedSection.classList.add('active');
    if (activeButton) activeButton.classList.add('active');

    updateProductCount();
}

// 🔍 Search Functionality
function handleSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".category.active .product");
    let matchCount = 0;

    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        const isMatch = text.includes(searchTerm);
        product.style.display = isMatch ? "flex" : "none";
        if (isMatch) matchCount++;
    });

    document.getElementById("noResultsMessage").style.display = matchCount === 0 ? "block" : "none";
    updateProductCount();
}

// 🔢 Product Count
function updateProductCount() {
    const products = document.querySelectorAll(".category.active .product");
    const visibleProducts = Array.from(products).filter(p => p.style.display !== "none");
    document.getElementById("productCount").textContent = `Showing ${visibleProducts.length} product(s).`;
}

// 🔼 Back to Top
window.addEventListener("scroll", () => {
    document.getElementById("backToTop").style.display = window.scrollY > 200 ? "block" : "none";
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 🚀 On Page Load
document.addEventListener("DOMContentLoaded", () => {
    showCategory('electronics');
    document.getElementById("searchInput").addEventListener("input", handleSearch);
});
