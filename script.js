document.addEventListener('DOMContentLoaded', () => {

    // Select all elements that have the 'fade-in' class
    const faders = document.querySelectorAll('.fade-in');

    // Options for the observer (triggers when 15% of the element is visible)
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    // Create the observer
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // If it's not on screen, do nothing
            } else {
                // If it is on screen, add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                // Stop observing the element once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Tell the observer to watch each of our fade-in elements
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});