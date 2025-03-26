// footer.js
const footerContainer = document.getElementById('footer-container');

// Load the footer HTML template
const footerTemplate = document.getElementById('footer-template');
footerContainer.innerHTML = footerTemplate.innerHTML;

// Function to update footer content globally
function updateFooter(newContent) {
    const footerContent = document.querySelector('.footer-content');
    footerContent.innerHTML = newContent;
}