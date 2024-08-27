// Add event listeners for the navigation links
document.getElementById('contract-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    loadContent('contract.html'); // Load the contract.html file
});

document.getElementById('past-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    loadContent('past.html'); // Load the past.html file
});

document.getElementById('pending-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    loadContent('pending.html'); // Load the pending.html file
});

// Function to load content dynamically using AJAX
function loadContent(page) {
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    xhr.open('GET', page, true); // Initialize the request
    xhr.onload = function() {
        if (xhr.status === 200) { // If the request was successful
            document.getElementById('content').innerHTML = xhr.responseText; // Load the content
        } else {
            document.getElementById('content').innerHTML = 'Content not found.'; // Handle errors
        }
    };
    xhr.send(); // Send the request
}


// Toggle night mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const bodyElement = document.body;

toggleDarkModeButton.addEventListener('click', () => {
bodyElement.classList.toggle('dark-mode');
// Change the icon depending on the mode
if (bodyElement.classList.contains('dark-mode')) {
toggleDarkModeButton.textContent = '☀️'; // Sun icon for day mode
} else {
toggleDarkModeButton.textContent = '🌙'; // Moon icon for night mode
}
});


// Toggle Form Modal
const modal = document.getElementById('newContractForm');
const btn = document.getElementById('newContractButton');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
modal.style.display = 'block';
}

span.onclick = function () {
modal.style.display = 'none';
}

window.onclick = function (event) {
if (event.target == modal) {
modal.style.display = 'none';
}
}
