// JavaScript code for handling card click events
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

// Define an array of URLs corresponding to each card
const cardUrls = [
    'https://enchanted-wash.surge.sh',
    'https://ultra-spring.surge.sh',
    'https://early-believe.surge.sh/',
    'https://resolute-pizzas.surge.sh/',
    'https://auspicious-dark.surge.sh/',
    'https://telling-dark.surge.sh/',
    'https://elegant-login.surge.sh/',
    'https://obese-signin.surge.sh/',
    'https://black-login.surge.sh/',
    'https://tearful-signin.surge.sh/',
    
    // Add more URLs as needed for each card
];

// Add a click event listener to each card
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Redirect to the URL associated with the clicked card
        window.location.href = cardUrls[index];
    });
})
});
