document.addEventListener('DOMContentLoaded', () => {
    // 1. Ken Burns Hero Zoom trigger
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 100);
    }

    // 2. Navbar Sticky Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal for What Makes Us Different cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const diffObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay based on index (assuming standard DOM order)
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const diffCards = document.querySelectorAll('.diff-card');
    diffCards.forEach(card => diffObserver.observe(card));

    // 4. Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentIndex = 0;
    let autoPlayInterval;

    function showTestimonial(index) {
        // Hide all
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // Show current
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextTestimonial() {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    // Auto-advance every 8 seconds
    if (testimonials.length > 0) {
        autoPlayInterval = setInterval(nextTestimonial, 8000);

        // Click on dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(autoPlayInterval);
                showTestimonial(index);
                autoPlayInterval = setInterval(nextTestimonial, 8000);
            });
        });
    }

});
