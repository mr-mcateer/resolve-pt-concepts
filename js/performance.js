document.addEventListener('DOMContentLoaded', () => {

    // 1. Accessibility: Theme Toggler Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Check system preference & localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // Initialize Theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
        htmlEl.setAttribute('data-theme', 'dark');
        updateToggleButton(true);
    } else {
        htmlEl.removeAttribute('data-theme');
        updateToggleButton(false);
    }

    // Toggle event listener
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlEl.getAttribute('data-theme') === 'dark';
            if (isDark) {
                htmlEl.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateToggleButton(false);
            } else {
                htmlEl.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateToggleButton(true);
            }
        });
    }

    // Function to update aria label and inner icon logic
    function updateToggleButton(isDark) {
        if (!themeToggleBtn) return;
        if (isDark) {
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
            themeToggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
        } else {
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
            themeToggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        }
    }


    // 2. CountUp Animation for Stats (Checks for reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stats = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                stats.forEach(stat => {
                    const target = +stat.getAttribute('data-target');
                    if (prefersReducedMotion) {
                        stat.innerText = target;
                    } else {
                        const duration = 2000;
                        const step = target / (duration / 16);
                        let current = 0;
                        const updateCounter = () => {
                            current += step;
                            if (current < target) {
                                stat.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                stat.innerText = target;
                            }
                        };
                        updateCounter();
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const statSection = document.querySelector('.stat-bar');
    if (statSection) statObserver.observe(statSection);
});
