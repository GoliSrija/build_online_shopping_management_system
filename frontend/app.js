// Global variables
let form = document.getElementById('shopping-form');
let submitBtn = document.getElementById('submit-btn');
let clearBtn = document.getElementById('clear-btn');
let dashboard = document.getElementById('dashboard');

// Function to handle form validation
function validateForm() {
  let isValid = true;
  const formData = {
    productName: document.getElementById('product-name').value,
    productPrice: document.getElementById('product-price').value,
    productQuantity: document.getElementById('product-quantity').value
  };

  if (!formData.productName || formData.productName.trim() === '') {
    isValid = false;
  }

  if (!formData.productPrice || formData.productPrice.trim() === '') {
    isValid = false;
  }

  if (!formData.productQuantity || formData.productQuantity.trim() === '') {
    isValid = false;
  }

  if (isValid) {
    updateDashboard(formData);
  } else {
    alert('Please fill all fields');
  }
}

// Function to handle button actions
function handleButtonActions(e) {
  e.preventDefault();
  if (e.target.id === 'submit-btn') {
    validateForm();
  } else if (e.target.id === 'clear-btn') {
    resetForm();
  }
}

// Function to update dashboard with form data
function updateDashboard(formData) {
  let dashboardItem = document.createElement('div');
  dashboardItem.innerHTML = `
    <p>Product Name: ${formData.productName}</p>
    <p>Product Price: ${formData.productPrice}</p>
    <p>Product Quantity: ${formData.productQuantity}</p>
  `;
  dashboard.appendChild(dashboardItem);
}

// Function to reset form
function resetForm() {
  form.reset();
}

// Event listeners
form.addEventListener('submit', handleButtonActions);
submitBtn.addEventListener('click', handleButtonActions);
clearBtn.addEventListener('click', handleButtonActions);