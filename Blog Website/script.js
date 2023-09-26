// JavaScript code for handling card click events
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Redirect to the full blog post page or show more content here
            alert('This is where you would display the full blog post.');
        });
    });
});
