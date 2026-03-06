(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // 1. SCROLL PROGRESS BAR
  // ============================================================
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ============================================================
  // 2. NAVBAR TRANSPARENT -> SOLID
  // ============================================================
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');

  if (hero && navbar) {
    const heroObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            navbar.classList.remove('scrolled');
          } else {
            navbar.classList.add('scrolled');
          }
        });
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    heroObserver.observe(hero);
  }

  // ============================================================
  // 4. STAT COUNTER (IntersectionObserver, cubic ease-out, 2s)
  // ============================================================
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(element) {
    var target = parseFloat(element.getAttribute('data-target'));
    var suffix = element.getAttribute('data-suffix') || '';
    var isDecimal = element.getAttribute('data-decimal') === 'true';
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var current = easedProgress * target;

      if (isDecimal) {
        element.textContent = current.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    if (prefersReducedMotion) {
      element.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    } else {
      requestAnimationFrame(step);
    }
  }

  var statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    var statObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var items = entry.target.querySelectorAll('.stat-number');
            items.forEach(function(item) {
              animateCounter(item);
            });
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    var statGrid = document.querySelector('.stat-grid');
    if (statGrid) statObserver.observe(statGrid);
  }

  // ============================================================
  // 5. CARD STAGGER REVEAL (IntersectionObserver, 200ms delays)
  // ============================================================
  var revealCards = document.querySelectorAll('.reveal-card');
  if (revealCards.length > 0 && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            // Find siblings in the same parent
            var parent = entry.target.parentElement;
            var siblings = parent.querySelectorAll('.reveal-card');
            var targetIndex = Array.from(siblings).indexOf(entry.target);

            setTimeout(function() {
              entry.target.classList.add('revealed');
            }, targetIndex * 200);

            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealCards.forEach(function(card) {
      revealObserver.observe(card);
    });
  } else if (prefersReducedMotion) {
    revealCards.forEach(function(card) {
      card.classList.add('revealed');
    });
  }

  // ============================================================
  // 6. PARALLAX (requestAnimationFrame, passive scroll)
  // ============================================================
  if (!prefersReducedMotion) {
    var parallaxBg = document.querySelector('.parallax-bg');
    var parallaxContainer = document.querySelector('.parallax-container');
    var ticking = false;

    function updateParallax() {
      if (!parallaxContainer) return;
      var rect = parallaxContainer.getBoundingClientRect();
      var viewHeight = window.innerHeight;
      var containerHeight = rect.height;

      if (rect.top < viewHeight && rect.bottom > 0) {
        var scrollPercent = (viewHeight - rect.top) / (viewHeight + containerHeight);
        var translateY = (scrollPercent - 0.5) * 60;
        parallaxBg.style.transform = 'scale(1.08) translateY(' + translateY + 'px)';
      }
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // 7. APPROACH LINE ANIMATION
  // ============================================================
  var approachSection = document.querySelector('.approach-steps');
  if (approachSection) {
    var lineObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var fills = entry.target.querySelectorAll('.approach-line-fill');
            fills.forEach(function(fill, index) {
              setTimeout(function() {
                fill.classList.add('filled');
              }, (index + 1) * 500);
            });
            lineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    lineObserver.observe(approachSection);
  }

  // ============================================================
  // 8. TESTIMONIAL CAROUSEL
  // ============================================================
  var track = document.getElementById('testimonialTrack');
  var dots = document.querySelectorAll('.testimonial-dot');
  var currentSlide = 0;
  var totalSlides = dots.length;
  var autoplayInterval = null;
  var wrapper = document.querySelector('.testimonials-wrapper');

  function goToSlide(index) {
    currentSlide = index;
    if (track) {
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }
    dots.forEach(function(dot, i) {
      dot.setAttribute('aria-selected', i === currentSlide ? 'true' : 'false');
    });
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var slideIndex = parseInt(this.getAttribute('data-slide'));
      goToSlide(slideIndex);
      resetAutoplay();
    });
  });

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }

  function startAutoplay() {
    if (!prefersReducedMotion) {
      autoplayInterval = setInterval(nextSlide, 7000);
    }
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();

  if (wrapper) {
    wrapper.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    wrapper.addEventListener('mouseleave', function() {
      startAutoplay();
    });
    wrapper.addEventListener('focusin', function() {
      clearInterval(autoplayInterval);
    });
    wrapper.addEventListener('focusout', function() {
      startAutoplay();
    });
  }

  // ============================================================
  // 9. FAQ ACCORDION
  // ============================================================
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answerId = this.getAttribute('aria-controls');
      var answerWrapper = document.getElementById(answerId);

      // Close all other FAQs
      faqQuestions.forEach(function(otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          var otherAnswerId = otherBtn.getAttribute('aria-controls');
          var otherAnswer = document.getElementById(otherAnswerId);
          if (otherAnswer) {
            otherAnswer.hidden = true;
            otherAnswer.style.maxHeight = '0';
          }
        }
      });

      if (expanded) {
        this.setAttribute('aria-expanded', 'false');
        answerWrapper.style.maxHeight = '0';
        setTimeout(function() {
          answerWrapper.hidden = true;
        }, 300);
      } else {
        this.setAttribute('aria-expanded', 'true');
        answerWrapper.hidden = false;
        answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
      }
    });
  });

  // ============================================================
  // 10. DARK MODE
  // ============================================================
  var darkToggle = document.getElementById('darkToggle');
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('resolve-pt-theme', theme);
    } catch(e) {}
  }

  function initTheme() {
    try {
      var saved = localStorage.getItem('resolve-pt-theme');
      if (saved) {
        setTheme(saved);
        return;
      }
    } catch(e) {}

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }

  initTheme();

  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      var current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    try {
      if (!localStorage.getItem('resolve-pt-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    } catch(err) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ============================================================
  // 11. MOBILE NAV
  // ============================================================
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  var navOverlay = document.getElementById('navOverlay');

  function openNav() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      var isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  // Close nav on link click
  var navAnchors = navLinks ? navLinks.querySelectorAll('a') : [];
  navAnchors.forEach(function(link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
      closeNav();
      hamburger.focus();
    }
  });

  // ============================================================
  // 12. MAGNETIC BUTTONS
  // ============================================================
  if (!prefersReducedMotion) {
    var magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(function() {
          btn.style.transition = '';
        }, 400);
      });
    });
  }

  // ============================================================
  // 13. SMOOTH SCROLL (anchor links)
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var navHeight = navbar ? navbar.offsetHeight : 0;
        var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // ============================================================
  // 14. FORM VALIDATION
  // ============================================================
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var isValid = true;

      var nameInput = document.getElementById('contact-name');
      var phoneInput = document.getElementById('contact-phone');
      var emailInput = document.getElementById('contact-email');

      // Reset errors
      [nameInput, phoneInput, emailInput].forEach(function(input) {
        if (input) {
          input.classList.remove('error');
        }
      });

      // Validate name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
      }

      // Validate phone
      var phoneRegex = /^[\d\s\-\(\)\+\.]{7,}$/;
      if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
        phoneInput.classList.add('error');
        isValid = false;
      }

      // Validate email (only if provided)
      if (emailInput.value.trim()) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add('error');
          isValid = false;
        }
      }

      if (isValid) {
        contactForm.style.display = 'none';
        formSuccess.classList.add('visible');
      } else {
        // Focus first error
        var firstError = contactForm.querySelector('.error');
        if (firstError) firstError.focus();
      }
    });

    // Clear errors on input
    contactForm.querySelectorAll('input, textarea').forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('error');
      });
    });
  }

  // ============================================================
  // INITIAL SCROLL PROGRESS UPDATE
  // ============================================================
  updateScrollProgress();

})();
