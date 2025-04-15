// frontend/script.js

document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const userData = {
        name: name,
        email: email,
        password: password
    };

    try {
        // Send a POST request to the backend
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        // Handle the response
        const messageDiv = document.getElementById('message');
        if (response.ok) {
            messageDiv.textContent = 'User  registered successfully!';
            messageDiv.style.color = 'green';
            // Clear the form
            document.getElementById('registrationForm').reset();
        } else {
            const errorText = await response.text();
            messageDiv.textContent = 'Error: ' + errorText;
            messageDiv.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Error: ' + error.message;
        messageDiv.style.color = 'red';
    }
});