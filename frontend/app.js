// Form Validation
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zip', 'paymentMethod'];
    requiredFields.forEach(field => {
        const input = this.elements[field];
        if (input.value.trim() === '') {
            input.setCustomValidity('Please fill out this field.');
            isValid = false;
        } else {
            input.setCustomValidity('');
        }
    });
    if (isValid) {
        alert('Form submitted successfully!');
        // Simulate form submission logic
        console.log('Form data:', this.elements);
    }
});

// Event Handling
document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});

// Button Actions
document.getElementById('updateDashboard').addEventListener('click', function() {
    const content = document.getElementById('dashboardContent').innerText;
    document.getElementById('dashboardContent').innerText = 'Content Updated!';
});

// Dynamic Content Updates
document.getElementById('updateButton').addEventListener('click', function() {
    const newContent = document.getElementById('newContent').value;
    const updateDiv = document.getElementById('updateContent');
    updateDiv.innerHTML = newContent;
});

// Error Handling
document.getElementById('submitForm').addEventListener('click', function() {
    try {
        const error = new Error('An error occurred while processing the form.');
        throw error;
    } catch (err) {
        console.error('Error:', err.message);
        alert('An error occurred, please try again.');
    }
});

// Dashboard Interactions
document.getElementById('dashboardBtn').addEventListener('click', function() {
    const dashboardInteract = function() {
        alert('Dashboard Interacted!');
    };
    dashboardInteract();
});