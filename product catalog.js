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
