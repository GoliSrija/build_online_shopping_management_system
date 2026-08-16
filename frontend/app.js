// Global variables
let products = [
    { id: 1, name: "Product 1", price: 100, quantity: 10 },
    { id: 2, name: "Product 2", price: 200, quantity: 5 }
];

function handleFormSubmit(event) {
    event.preventDefault();
    let productId = parseInt(document.getElementById("productId").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let product = products.find(p => p.id === productId);
    if (product) {
        if (quantity > 0 && quantity <= product.quantity) {
            product.quantity -= quantity;
            updateDashboard();
            alert("Product quantity updated successfully.");
        } else {
            alert("Invalid quantity or insufficient stock.");
        }
    } else {
        alert("Product not found.");
    }
}

function updateDashboard() {
    let dashboardHtml = "<table>";
    dashboardHtml += "<tr><th>Product</th><th>Price</th><th>Quantity</th></tr>";
    products.forEach(product => {
        dashboardHtml += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.quantity}</td></tr>`;
    });
    dashboardHtml += "</table>";
    document.getElementById("dashboard").innerHTML = dashboardHtml;
}

function handleQuantityChange(event) {
    let productId = parseInt(event.target.dataset.productid);
    let quantity = parseInt(event.target.value);
    let product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = quantity;
        updateDashboard();
    }
}

document.getElementById("productForm").addEventListener("submit", handleFormSubmit);
document.getElementById("quantityInput").addEventListener("input", handleQuantityChange);

let productIdInput = document.getElementById("productId");
for (let product of products) {
    productIdInput.innerHTML += `<option value="${product.id}">${product.name}</option>`;
}