document.addEventListener("DOMContentLoaded", function() {
    var confirmCheckbox = document.getElementById("confirmCheckbox");
    var paymentOptions = document.getElementById("paymentOptions");
    var payButton = document.getElementById("payButton");
    var invoiceContainer = document.getElementById("invoiceContainer");
    var paymentContainer = document.getElementById("paymentContainer");

    // Show payment options when checkbox is checked
    confirmCheckbox.onchange = function() {
        if (confirmCheckbox.checked) {
            paymentOptions.style.display = "block";
        } else {
            paymentOptions.style.display = "none";
        }
    };

    // Handle payment button click
    payButton.onclick = function() {
        var selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        alert("You selected: " + selectedMethod);

        // Configure Razorpay payment options
        var options = {
            "key": "rzp_test_w2GcFdPyM2yKcH", // Replace with your Razorpay key ID
            "amount": "50000", // Example amount in paise (50000 paise = INR 500)
            "currency": "INR",
            "name": "John Doe",
            "description": "Payment for services",
            "handler": function (response) {
                alert("Payment ID: " + response.razorpay_payment_id);
                // Hide payment container and show invoice download link
                paymentContainer.style.display = "none";
                invoiceContainer.style.display = "block";
            },
            "prefill": {
                "email": "test@example.com"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        // Open Razorpay checkout
        var rzp = new Razorpay(options);
        rzp.open();
    };
});
