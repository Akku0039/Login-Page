
const socket =io();
const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  // Validate mandatory fields
  if (name && email && password) {
    // Generate a random access token
    const accessToken = generateAccessToken();

    // Create user state with access token and other properties
    const user = {
      name,
      email,
      password,
      accessToken,
    };

    // Save user state to local storage
    localStorage.setItem('user', JSON.stringify(user));
 // Display success message
 const signupMessage = document.getElementById('signupMessage');
 signupMessage.textContent = 'Signup successful!';
 signupMessage.style.color = 'green';

 // Redirect to profile page
 window.location.href = '/profile';
} else {
 // Display error message
 const signupMessage = document.getElementById('signupMessage');
 signupMessage.textContent = 'Please fill in all fields.';
 signupMessage.style.color = 'red';
}
});

// Profile Page Logic
window.addEventListener('DOMContentLoaded', () => {
const user = JSON.parse(localStorage.getItem('user'));

// Check if the user is authenticated
if (user && user.accessToken) {
 const profileName = document.getElementById('profileName');
 const profileEmail = document.getElementById('profileEmail')

 profileName.textContent = user.name;
        profileEmail.textContent = user.email;

        // Show the profile page
        const profilePage = document.getElementById('profilePage');
        profilePage.style.display = 'block';
      } else {
        // Redirect to signup page if not authenticated
        window.location.href = '/signup';
      }
    });

    // Logout Functionality
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
      // Clear user state from local storage
      localStorage.removeItem('user');

      // Redirect to signup page
      window.location.href = '/signup';
    });
    function generateAccessToken() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 16; i++) {
          token += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return token;
      }