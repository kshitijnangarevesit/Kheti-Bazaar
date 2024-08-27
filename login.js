// scripts.js

// Simulate sending OTP
function sendOTP() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        alert('OTP sent to ' + phone + ': ' + otp);
        // Normally, you'd integrate with an SMS API here
        localStorage.setItem('otp', otp); // Store OTP for validation
    } else {
        alert('Please enter a valid mobile number.');
    }
}

// Validate OTP
function validateOTP() {
    const enteredOtp = document.getElementById('otp').value;
    const generatedOtp = localStorage.getItem('otp');
    
    if (enteredOtp === generatedOtp) {
        alert('OTP validated successfully!');
        localStorage.removeItem('otp'); // Clear OTP after validation
        return true;
    } else {
        alert('Invalid OTP. Please try again.');
        return false;
    }
}

// Handle sign-up form submission
function handleSignup(event) {
    event.preventDefault();
    if (validateOTP()) {
        alert('Account created successfully!');
        // Here, you'd normally send the form data to the server
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    alert('Login functionality to be implemented.');
    // Here, you'd normally validate login credentials with the server
}

// Event listeners for form submission
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
