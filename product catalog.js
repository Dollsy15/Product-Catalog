// 🔁 Show Selected Category
function showCategory(categoryId) {
    const sections = document.querySelectorAll('.category');
    sections.forEach(section => {
      section.classList.remove('active');
});

const selectedSection = document.getElementById(categoryId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
}

// 🚀 When page loads
document.addEventListener("DOMContentLoaded", () => {
// Show Electronics by default
showCategory('electronics');

// 🔍 Search Functionality
    document.getElementById("searchInput").addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const products = document.querySelectorAll(".product");

      products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(searchTerm) ? "flex" : "none";
      });
    });

    // 🌙 Dark Mode Toggle
    const toggleBtn = document.getElementById("toggleDarkMode");
    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Change icon text based on mode
      toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  });
