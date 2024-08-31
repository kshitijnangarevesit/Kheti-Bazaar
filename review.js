// script.js

// Get modal elements
const modal = document.getElementById("reviewModal");
const openButton = document.getElementById("openReviewForm");
const closeButton = document.getElementsByClassName("close")[0];
const reviewForm = document.getElementById("reviewForm");

// Function to open the modal
openButton.onclick = function () {
    modal.style.display = "block";
}

// Function to close the modal
closeButton.onclick = function () {
    modal.style.display = "none";
    
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Submit form and log data
reviewForm.onsubmit = function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form values
    const quality = d3.select("#quality").node().value;
    const deliveryTime = d3.select("#deliveryTime").node().value;
    const description = d3.select("#description").node().value;

    // Log the review data (you could send it to a server here)
    console.log("Quality of Crop: " + quality);
    console.log("Delivery Time: " + deliveryTime);
    console.log("Description: " + description);

    // Close the modal after submission
    modal.style.display = "none";

    // Clear form fields
    d3.select("#quality").node().value = "Excellent";
    d3.select("#deliveryTime").node().value = "On Time";
    d3.select("#description").node().value = "";
}
