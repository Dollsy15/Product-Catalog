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

// Show the first category by default
document.addEventListener("DOMContentLoaded", () => {
    showCategory('electronics');
});
