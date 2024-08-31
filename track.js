function copyDeliveryNumber() {
    const deliveryNumber = document.getElementById('delivery-number').innerText;
    const tempInput = document.createElement('input');
    tempInput.value = deliveryNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Delivery number copied to clipboard!');
}

function showReviewAndReturnSection() {
    const deliveredCircle = document.getElementById('circle-delivered');

    if (deliveredCircle && deliveredCircle.classList.contains('completed')) {
        document.getElementById('review-return-section').style.display = 'block';
    }
}

function updateTimeline(stage, date) {
    const stageId = `stage-${stage}`;
    const circleId = `circle-${stage}`;
    const dateId = `date-${stage}`;

    const stageElement = document.getElementById(stageId);
    const circleElement = document.getElementById(circleId);
    const dateElement = document.getElementById(dateId);

    if (stageElement && circleElement && dateElement) {
        circleElement.classList.add('completed');
        dateElement.innerText = date;

        // Add animation class to show element
        setTimeout(() => {
            stageElement.classList.add('show');
        }, 100); // Delay for animation effect
    }
}

// Example usage to dynamically update the timeline
updateTimeline('received', '27/08/2024');
updateTimeline('processed', '28/08/2024');
updateTimeline('dispatched', '29/08/2024');
updateTimeline('delivered', '30/08/2024');

// Call this function to check the delivery status and show the section if applicable
showReviewAndReturnSection();
