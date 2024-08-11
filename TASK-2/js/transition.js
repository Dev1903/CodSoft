function checkVisibility() {
    const sections = document.querySelectorAll('.transition-section');
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionPosition = section.offsetTop;

        // Check if the section is within the viewport
        if ((sectionPosition < scrollPosition + viewportHeight) && 
            (sectionPosition + section.offsetHeight > scrollPosition)) {
            section.classList.add('visible'); // Add class to trigger transition
        } else {
            section.classList.remove('visible'); // Remove class to reset animation
        }
    });
}

// Check visibility on page load
window.addEventListener('DOMContentLoaded', (event) => {
    checkVisibility();
});

// Check visibility on scroll
window.addEventListener('scroll', function() {
    checkVisibility();
});

// Check visibility on resize (for responsive design)
window.addEventListener('resize', function() {
    checkVisibility();
});
