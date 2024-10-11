// Simple interactivity
document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to my brutalist website!");

    const contactLink = document.querySelector('a[href^="mailto"]');
    contactLink.addEventListener('click', () => {
        alert('You are about to email me!');
    });
});
42