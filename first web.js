document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    var form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the values of the form fields
        var name = form.querySelector('#name').value;
        var email = form.querySelector('#email').value;
        var message = form.querySelector('#message').value;

        // Display an alert with the form data
        alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

        // Clear the form fields after submission (optional)
        form.reset();
    });
});
