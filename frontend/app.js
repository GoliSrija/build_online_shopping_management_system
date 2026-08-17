// HTML Elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const quantityInput = document.getElementById('quantity');
const dashboard = document.querySelector('#dashboard');

// Form Validation
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const quantity = quantityInput.value.trim();

    // Name validation
    if (!name) {
        alert('Name is required');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return;
    }

    // Quantity validation
    if (!quantity) {
        alert('Quantity is required');
        return;
    }
    quantityInput.value = parseInt(quantity);

    // Success message
    alert('Form submitted successfully!');
    updateDashboard(name, email, quantity);
});

// Dashboard Interactions
function updateDashboard(name, email, quantity) {
    dashboard.innerHTML = `
    <div>
        <h2>Welcome, ${name}!</h2>
        <p>Email: ${email}</p>
        <p>Product Quantity: ${quantity}</p>
    </div>
    `;
}