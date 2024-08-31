let currentSlide = 0;
const slides = document.querySelectorAll('.crop-card');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

function editDetails() {
    const editableDetails = document.querySelectorAll('.farmer-details .detail-item p:not(.status)');
    const statusDetails = document.querySelectorAll('.farmer-details .detail-item p.status');
    
    editableDetails.forEach(detail => {
        detail.setAttribute('contenteditable', 'true');
    });

    // Set the status details as editable
    statusDetails.forEach(status => {
        status.setAttribute('contenteditable', 'true');
        status.classList.add('editable-status');
    });

    document.querySelector('.farmer-details .edit-button').style.display = 'none';
    document.querySelector('.farmer-details .save-button').style.display = 'inline-block';
}

function saveDetails() {
    const editableDetails = document.querySelectorAll('.farmer-details .detail-item p:not(.status)');
    const statusDetails = document.querySelectorAll('.farmer-details .detail-item p.status');
    
    editableDetails.forEach(detail => {
        detail.setAttribute('contenteditable', 'false');
    });

    // Set the status details as non-editable
    statusDetails.forEach(status => {
        status.setAttribute('contenteditable', 'false');
        status.classList.remove('editable-status');
    });

    document.querySelector('.farmer-details .edit-button').style.display = 'inline-block';
    document.querySelector('.farmer-details .save-button').style.display = 'none';
}


function editCrops() {
    const cropHeaders = document.querySelectorAll('.crop-card h3');
    const cropDescriptions = document.querySelectorAll('.crop-card p');
    
    cropHeaders.forEach(header => {
        header.setAttribute('contenteditable', 'true');
    });

    cropDescriptions.forEach(description => {
        description.setAttribute('contenteditable', 'true');
    });

    document.querySelector('.crops-section .edit-button').style.display = 'none';
    document.querySelector('.crops-section .save-button').style.display = 'inline-block';
}

function saveCrops() {
    const cropHeaders = document.querySelectorAll('.crop-card h3');
    const cropDescriptions = document.querySelectorAll('.crop-card p');
    
    cropHeaders.forEach(header => {
        header.setAttribute('contenteditable', 'false');
    });

    cropDescriptions.forEach(description => {
        description.setAttribute('contenteditable', 'false');
    });

    document.querySelector('.crops-section .edit-button').style.display = 'inline-block';
    document.querySelector('.crops-section .save-button').style.display = 'none';
}

