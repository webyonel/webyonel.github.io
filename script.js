/* =========================================================
   PORTFOLIO — INTERACTIONS
   ========================================================= */

(function () {
    'use strict';

    /* ---------- i18n (ES / EN) ---------- */
    const translations = {
        es: {
            meta: {
                title: 'Onel Martínez | Desarrollo Web Profesional para Negocios',
                description: 'Desarrollador web freelance especializado en páginas web modernas, rápidas y con diseño profesional para negocios y emprendimientos. Astro, React y TypeScript.',
                ogTitle: 'Onel Martínez | Desarrollo Web Profesional para Negocios',
                ogDesc: 'Páginas web modernas, rápidas y con diseño profesional para negocios y emprendimientos. Astro, React y TypeScript.',
                ogLocale: 'es_ES',
                twitterTitle: 'Onel Martínez | Desarrollo Web Profesional para Negocios',
                twitterDesc: 'Páginas web modernas, rápidas y con diseño profesional para negocios y emprendimientos.'
            },
            jsonLd: {
                name: 'Onel Martínez — Desarrollo Web',
                description: 'Desarrollo de páginas web profesionales para negocios y emprendimientos con tecnologías modernas como Astro, React y TypeScript.',
                jobTitle: 'Desarrollador Web',
                serviceName: 'Desarrollo de páginas web para negocios',
                availableLanguage: 'Spanish'
            },
            nav: {
                home: 'Inicio',
                about: 'Sobre mí',
                work: 'Trabajos',
                contact: 'Contacto'
            },
            hero: {
                badge: 'Disponible para nuevos proyectos',
                title1: 'Desarrollo web profesional',
                title2: 'para tu negocio',
                subtitle: 'Páginas web modernas, rápidas y diseñadas para que tu emprendimiento destaque en internet.',
                ctaPrimary: 'Ver mis trabajos',
                ctaGhost: 'Contactar'
            },
            about: {
                tag: 'Sobre mí',
                title: '¿Quién está detrás del código?',
                p1: 'Soy desarrollador web especializado en crear páginas web profesionales para negocios y emprendimientos. Me dedico a transformar ideas en productos digitales funcionales, rápidos y con un diseño que transmite profesionalidad.',
                p2: 'Trabajo con herramientas modernas y me enfoco en que cada proyecto resuelva un problema real: captar clientes, mostrar servicios o vender productos en línea.',
                locationLabel: 'Ubicación',
                locationValue: '🌎 Remoto · Global',
                focusLabel: 'Enfoque',
                focusValue: 'Negocios & emprendimientos'
            },
            works: {
                tag: 'Portafolio',
                title: 'Trabajos realizados',
                desc: 'Una muestra de proyectos desarrollados para clientes reales.',
                tuyoMio: {
                    alt: 'Sitio web de la hamburguesería Tuyo & Mío',
                    ariaDemo: 'Ver demo',
                    desc: 'Sitio web para hamburguesería con hamburguesas a la parrilla, pizzas artesanales y acompañamientos caseros.'
                },
                afterLife: {
                    alt: 'Sitio web del restaurante After Life',
                    ariaDemo: 'Ver demo de After Life',
                    desc: 'Sitio web para restaurante de pizzas, hamburguesas y lasañas caseras con carta digital y pedidos online.'
                },
                ciador: {
                    alt: 'Catálogo online de la tienda Ciador de relojes y perfumes',
                    ariaDemo: 'Ver demo de Ciador',
                    desc: 'Tienda de relojes y perfumes en Ciego de Ávila con catálogo público y atención directa por WhatsApp.'
                },
                jmHouse: {
                    alt: 'Tienda online de audio JM House',
                    ariaDemo: 'Ver demo de JM House',
                    desc: 'Catálogo online de productos de audio: altavoces, amplificadores y accesorios con categorías y carrito.'
                },
                ciadorAdmin: {
                    alt: 'Panel administrativo de gestión de catálogo Ciador Admin',
                    ariaDemo: 'Ver demo',
                    desc: 'Sistema de gestión de catálogo para tienda de relojes y perfumes con control de productos y stock.'
                }
            },
            skills: {
                tag: 'Stack',
                title: 'Tecnologías que uso',
                astro: 'Sitios rápidos con islas interactivas y SEO optimizado.',
                react: 'Interfaces dinámicas y componentes reutilizables.',
                responsive: 'Adaptado a móviles, tablets y escritorio.',
                git: 'Control de versiones y despliegue.',
                figma: 'Diseño de interfaces y prototipos.'
            },
            footer: {
                title: '¿Listo para empezar tu proyecto?',
                desc: 'Escríbeme y conversamos sobre cómo puedo ayudar a tu negocio a tener presencia en internet.',
                whatsapp: 'WhatsApp',
                instagram: 'Instagram',
                copyright: '© 2026 — Hecho con'
            },
            aria: {
                navToggle: 'Abrir menú'
            },
            whatsapp: {
                url: 'https://wa.me/5350200708?text=Buenas%2C%20me%20interesen%20tus%20servicios'
            }
        },
        en: {
            meta: {
                title: 'Onel Martínez | Professional Web Development for Business',
                description: 'Freelance web developer specialized in modern, fast websites with professional design for businesses and entrepreneurs. Astro, React and TypeScript.',
                ogTitle: 'Onel Martínez | Professional Web Development for Business',
                ogDesc: 'Modern, fast websites with professional design for businesses and entrepreneurs. Astro, React and TypeScript.',
                ogLocale: 'en_US',
                twitterTitle: 'Onel Martínez | Professional Web Development for Business',
                twitterDesc: 'Modern, fast websites with professional design for businesses and entrepreneurs.'
            },
            jsonLd: {
                name: 'Onel Martínez — Web Development',
                description: 'Professional web development for businesses and entrepreneurs using modern technologies like Astro, React and TypeScript.',
                jobTitle: 'Web Developer',
                serviceName: 'Web development for businesses',
                availableLanguage: 'English'
            },
            nav: {
                home: 'Home',
                about: 'About me',
                work: 'Work',
                contact: 'Contact'
            },
            hero: {
                badge: 'Available for new projects',
                title1: 'Professional web development',
                title2: 'for your business',
                subtitle: 'Modern, fast websites designed to make your business stand out online.',
                ctaPrimary: 'See my work',
                ctaGhost: 'Contact'
            },
            about: {
                tag: 'About me',
                title: 'Who is behind the code?',
                p1: 'I am a web developer specialized in building professional websites for businesses and entrepreneurs. I turn ideas into functional, fast digital products with a design that conveys professionalism.',
                p2: 'I work with modern tools and focus on making every project solve a real problem: attracting customers, showcasing services, or selling products online.',
                locationLabel: 'Location',
                locationValue: '🌎 Remote · Global',
                focusLabel: 'Focus',
                focusValue: 'Businesses & entrepreneurs'
            },
            works: {
                tag: 'Portfolio',
                title: 'Selected work',
                desc: 'A selection of projects developed for real clients.',
                tuyoMio: {
                    alt: 'Website for Tuyo & Mío burger restaurant',
                    ariaDemo: 'View demo',
                    desc: 'Website for a burger restaurant featuring grilled burgers, artisan pizzas and homemade sides.'
                },
                afterLife: {
                    alt: 'Website for After Life restaurant',
                    ariaDemo: 'View After Life demo',
                    desc: 'Website for a pizza, burger and homemade lasagna restaurant with digital menu and online ordering.'
                },
                ciador: {
                    alt: 'Online catalog for Ciador watches and perfumes store',
                    ariaDemo: 'View Ciador demo',
                    desc: 'Watch and perfume store in Ciego de Ávila with a public catalog and direct WhatsApp support.'
                },
                jmHouse: {
                    alt: 'JM House online audio store',
                    ariaDemo: 'View JM House demo',
                    desc: 'Online catalog of audio products: speakers, amplifiers and accessories with categories and cart.'
                },
                ciadorAdmin: {
                    alt: 'Ciador Admin catalog management panel',
                    ariaDemo: 'View demo',
                    desc: 'Catalog management system for a watch and perfume store with product and stock control.'
                }
            },
            skills: {
                tag: 'Stack',
                title: 'Technologies I use',
                astro: 'Fast sites with interactive islands and SEO optimization.',
                react: 'Dynamic interfaces and reusable components.',
                responsive: 'Adapted for mobile, tablet and desktop.',
                git: 'Version control and deployment.',
                figma: 'Interface design and prototypes.'
            },
            footer: {
                title: 'Ready to start your project?',
                desc: 'Write to me and let\'s talk about how I can help your business have a presence online.',
                whatsapp: 'WhatsApp',
                instagram: 'Instagram',
                copyright: '© 2026 — Made with'
            },
            aria: {
                navToggle: 'Open menu'
            },
            whatsapp: {
                url: 'https://wa.me/5350200708?text=Hi%2C%20I%27m%20interested%20in%20your%20services'
            }
        }
    };

    const SUPPORTED_LANGS = ['es', 'en'];
    const DEFAULT_LANG = 'es';
    const LANG_STORAGE_KEY = 'lang';

    const getLang = () => {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get('lang');
        if (queryLang && SUPPORTED_LANGS.includes(queryLang)) return queryLang;

        try {
            const stored = localStorage.getItem(LANG_STORAGE_KEY);
            if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
        } catch (e) { /* localStorage unavailable */ }

        const browserLang = (navigator.language || '').toLowerCase();
        if (browserLang.startsWith('en')) return 'en';

        return DEFAULT_LANG;
    };

    const setQueryLang = (lang) => {
        try {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            history.replaceState({}, '', url.toString());
        } catch (e) { /* ignore */ }
    };

    const getNested = (obj, path) => {
        return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    };

    const applyTranslations = (lang) => {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = getNested(dict, key);
            if (value !== undefined) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const spec = el.getAttribute('data-i18n-attr');
            spec.split(';').forEach((pair) => {
                const [attr, key] = pair.split(':').map((s) => s && s.trim());
                if (!attr || !key) return;
                const value = getNested(dict, key);
                if (value !== undefined) el.setAttribute(attr, value);
            });
        });

        // Swap JSON-LD localized fields
        const jsonLdScript = document.querySelector('script[type="application/ld+json"][data-i18n-jsonld]');
        if (jsonLdScript) {
            try {
                const data = JSON.parse(jsonLdScript.textContent);
                const j = dict.jsonLd;
                if (data.name !== undefined) data.name = j.name;
                if (data.description !== undefined) data.description = j.description;
                if (data.founder && data.founder.jobTitle !== undefined) data.founder.jobTitle = j.jobTitle;
                if (data.makesOffer && data.makesOffer.itemOffered && data.makesOffer.itemOffered.name !== undefined) {
                    data.makesOffer.itemOffered.name = j.serviceName;
                }
                if (data.contactPoint && data.contactPoint.availableLanguage !== undefined) {
                    data.contactPoint.availableLanguage = j.availableLanguage;
                }
                jsonLdScript.textContent = JSON.stringify(data, null, 2);
            } catch (e) { /* ignore malformed JSON-LD */ }
        }

        // Update active state on language toggle buttons
        document.querySelectorAll('[data-lang]').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
        });
    };

    const setLang = (lang) => {
        if (!SUPPORTED_LANGS.includes(lang)) return;
        applyTranslations(lang);
        try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }
        setQueryLang(lang);
    };

    // Initial application (synchronous, before paint of rest of body content)
    const initialLang = getLang();
    applyTranslations(initialLang);

    // Language toggle
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-lang]');
            if (!btn) return;
            setLang(btn.getAttribute('data-lang'));
        });
    }

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