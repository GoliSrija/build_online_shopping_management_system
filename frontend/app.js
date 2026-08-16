// Global Variables
let items = [];
let selectedItemId = null;

// Form Validation Function
function validateForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const isValid = formData.checkValidity();
    if (isValid) {
        addNewItem(formData);
    } else {
        formData.reportValidity();
    }
}

// Add Item to Items Array
function addNewItem(formData) {
    const newItem = {
        id: selectedItemId,
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        quantity: parseInt(formData.get('quantity'))
    };
    items.push(newItem);
    selectedItemId = items.length; // Update selectedItemId
    displayItems();
}

// Display Items on Dashboard
function displayItems() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <p>Item ID: ${item.id}</p>
            <p>Name: ${item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        dashboard.appendChild(itemDiv);
    });
}

// Event Handling for Dashboard Items
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        selectedItemId = parseInt(this.getAttribute('data-id'));
        const dashboard = document.getElementById('dashboard');
        dashboard.innerHTML = '';
        displayItems();
    });
});

// Form Elements
const form = document.getElementById('item-form');
const addBtn = document.getElementById('add-item');
const dashboard = document.getElementById('dashboard');

// Add Event Listeners
form.addEventListener('submit', validateForm);
addBtn.addEventListener('click', function() {
    const newItemForm = document.createElement('form');
    newItemForm.className = 'new-item-form';
    newItemForm.innerHTML = `
        <label>Item Name:</label>
        <input type="text" name="name" required>
        <label>Item Price:</label>
        <input type="number" name="price" step="0.01" required>
        <label>Item Quantity:</label>
        <input type="number" name="quantity" required>
        <button type="button">Add</button>
    `;
    addBtn.click = validateForm;
    addBtn.click = function() {
        const formData = new FormData(newItemForm);
        addNewItem(formData);
        newItemForm.remove();
        addBtn.click = null;
    };
    form.appendChild(newItemForm);
    dashboard.appendChild(newItemForm);
});