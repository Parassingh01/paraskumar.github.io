// Initialize EmailJS (replace with your user ID)
(function() {
    emailjs.init("parassinghrajput786@gmail.com"); // Replace with your actual EmailJS user ID
})();

// Toggle Sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '250px';
    }
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Send message using EmailJS
    emailjs.send("service_cj6btb3", "template_bl2l1wm", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        // Success message
        alert('Message sent successfully!');
        // Reset form fields after submission
        document.getElementById('contact-form').reset();
    }, function(error) {
        // Error message
        alert('Failed to send message. Please try again later.');
    });
});
