// Global Variables
let form = document.querySelector('#shopping-form');
let dashboard = document.querySelector('#dashboard');
let cart = document.querySelector('#cart');
let errorMessage = document.querySelector('#error-message');

// Form Validation
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let valid = true;
  let inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = '2px solid red';
      valid = false;
    } else {
      input.style.border = '';
    }
  });
  if (!valid) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    updateDashboard();
  }
}

// Button Actions
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
  updateCart();
});

function updateCart() {
  let inputs = form.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    let value = parseInt(input.value);
    input.closest('.item').querySelector('span').textContent = value;
  });
}

// Dynamic Content Updates
function updateDashboard() {
  dashboard.innerHTML = '';
  fetch('/api/dashboard').then(response => response.json()).then(data => {
    data.forEach(item => {
      dashboard.innerHTML += `
        <div class="item">
          <div>${item.name}</div>
          <div>${item.quantity}</div>
          <button class="decrease">-</button>
          <button class="increase">+</button>
        </div>
      `;
    });
  });
}

// Error Handling
form.addEventListener('invalid', function(event) {
  event.preventDefault();
  errorMessage.style.display = 'block';
});

// Dashboard Interactions
dashboard.addEventListener('click', function(event) {
  if (event.target.classList.contains('increase')) {
    event.target.closest('.item').querySelector('span').textContent = parseInt(event.target.closest('.item').querySelector('span').textContent) + 1;
  } else if (event.target.classList.contains('decrease')) {
    event.target.closest('.item').querySelector('span').textContent = parseInt(event.target.closest('.item').querySelector('span').textContent) - 1;
  }
});

// Initial Dashboard Update
updateDashboard();