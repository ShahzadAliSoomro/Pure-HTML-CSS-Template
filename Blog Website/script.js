// JavaScript code for handling card click events
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

// Define an array of URLs corresponding to each card
const cardUrls = [
    'https://quick-login.surge.sh/',
    'https://pathetic-signup.surge.sh/',
    'https://fantastic-login.surge.sh/',
    'https://illustrious-signup.surge.sh/',
    'https://elegant-login.surge.sh/',
    'https://obese-signin.surge.sh/',
    'https://tame-login.surge.sh/',
    'https://yalinkrahtihy',
    'https://zany-login.surge.sh/',
    'https://strange-signup.surge.sh/',
    'https://auspicious-dark.surge.sh/',
    'https://telling-dark.surge.sh/',
    
    'https://enchanted-wash.surge.sh',
    'https://ultra-spring.surge.sh',
    
    
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
