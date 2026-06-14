document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: document.querySelector('.container'),
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine if the element itself should animate
                if (entry.target.classList.contains('animate-on-scroll')) {
                    const delay = entry.target.style.getPropertyValue('--delay') || '0s';
                    entry.target.style.transitionDelay = delay;
                    entry.target.classList.add('visible');
                }

                // If it's a slide, animate its children that need animating
                if (entry.target.classList.contains('slide')) {
                    // Update Navigation
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.progress-nav .dot').forEach(dot => {
                        dot.classList.remove('active');
                        if(dot.getAttribute('href') === `#${id}`) {
                            dot.classList.add('active');
                        }
                    });

                    // Animate list items and grid items within the slide
                    const childrenToAnimate = entry.target.querySelectorAll(
                        '.feature-list li, .grid-2 > div, .grid-4 > div, .clean-list li, .conclusion-list li, .animate-on-scroll'
                    );
                    
                    childrenToAnimate.forEach(child => {
                        const delay = child.style.getPropertyValue('--delay') || '0s';
                        child.style.transitionDelay = delay;
                        // Add a small timeout to allow layout to settle
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, 50);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all slides and individual elements
    document.querySelectorAll('.slide').forEach(slide => {
        observer.observe(slide);
    });

    // Smooth scrolling for the navigation dots
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const container = document.querySelector('.container');
            const target = document.querySelector(this.getAttribute('href'));
            if(target && container) {
                container.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fullscreen Toggle
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if(fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message}`);
                });
                fullscreenBtn.innerHTML = '🗗'; 
                fullscreenBtn.title = 'Vollbildmodus beenden';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    fullscreenBtn.innerHTML = '⛶'; 
                    fullscreenBtn.title = 'Vollbildmodus starten';
                }
            }
        });
    }
});
