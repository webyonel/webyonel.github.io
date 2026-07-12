/* =========================================================
   PORTFOLIO — INTERACTIONS
   ========================================================= */

(function () {
    'use strict';

    /* ---------- Navbar scroll ---------- */
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* ---------- Mobile menu toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    /* Close menu when clicking a link */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* Close menu on outside click */
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    /* ---------- Reveal on scroll ---------- */
    const revealSelectors = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.hero-cta',
        '.section-tag',
        '.section-title',
        '.section-desc',
        '.about-image',
        '.about-text',
        '.work-card',
        '.skill-card',
        '.footer-title',
        '.footer-text',
        '.footer-actions'
    ];

    const elementsToReveal = document.querySelectorAll(revealSelectors.join(','));

    elementsToReveal.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        });

        elementsToReveal.forEach(el => observer.observe(el));
    } else {
        elementsToReveal.forEach(el => el.classList.add('visible'));
    }

    /* ---------- Active link highlight on scroll ---------- */
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const setActiveLink = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });

    /* ---------- Smooth scroll offset for fixed nav ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.pageYOffset - 60;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

})();