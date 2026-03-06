document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar blur on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. CountUp Animation for Stats
    const stats = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                stats.forEach(stat => {
                    const target = +stat.getAttribute('data-target');
                    const duration = 2000; // ms
                    const stepName = target / (duration / 16);

                    let current = 0;
                    const updateCounter = () => {
                        current += stepName;
                        if (current < target) {
                            stat.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.innerText = target;
                        }
                    };
                    updateCounter();
                });
            }
        });
    }, { threshold: 0.5 });

    const statSection = document.querySelector('.stat-bar');
    if (statSection) statObserver.observe(statSection);

    // 3. Staggered Service Card Reveals
    const cards = document.querySelectorAll('.service-card');
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => cardObserver.observe(card));

    // 4. Parallax Hero Image (subtle)
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
            const offset = window.scrollY * 0.4;
            if (heroBg) heroBg.style.transform = `translateY(${offset}px)`;
        }
    });
});
