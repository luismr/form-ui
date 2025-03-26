document.addEventListener('DOMContentLoaded', function() {
    // Reveal button functionality
    const revealButton = document.getElementById('revealButton');
    const hiddenContent = document.getElementById('hiddenContent');
    
    revealButton.addEventListener('click', function() {
        hiddenContent.classList.toggle('hidden');
    });

    // Form validation
    const sampleForm = document.getElementById('sampleForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const formMessage = document.getElementById('formMessage');

    // Create validation message elements
    const nameError = document.createElement('div');
    nameError.className = 'error-message';
    nameInput.parentNode.appendChild(nameError);

    const ageError = document.createElement('div');
    ageError.className = 'error-message';
    ageInput.parentNode.appendChild(ageError);

    nameInput.addEventListener('input', function() {
        if (this.value.length <= 8) {
            this.setCustomValidity('Name must be more than 8 characters');
            nameError.textContent = 'Name must be more than 8 characters';
            nameError.style.display = 'block';
        } else {
            this.setCustomValidity('');
            nameError.style.display = 'none';
        }
    });

    ageInput.addEventListener('input', function() {
        const age = parseInt(this.value);
        if (isNaN(age) || age < 4 || age > 99) {
            this.setCustomValidity('Age must be between 4 and 99');
            ageError.textContent = 'Age must be between 4 and 99';
            ageError.style.display = 'block';
        } else {
            this.setCustomValidity('');
            ageError.style.display = 'none';
        }
    });

    sampleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (nameInput.value.length > 8 && 
            parseInt(ageInput.value) >= 4 && 
            parseInt(ageInput.value) <= 99) {
            formMessage.classList.remove('hidden');
            nameError.style.display = 'none';
            ageError.style.display = 'none';
        }
    });
}); 