/*
  EDITABLE CONTENT
  - Replace placeholder data with your own
  - Add or remove projects as needed
  - Add or remove skills as needed
*/
const PROFILE = {
  name: "Your Name",
  title: "Your Title (e.g., Software Engineer)",
  shortBio: "A brief and impactful bio about yourself. Talk about your passions, what you do, and what you're looking for.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-username",
  projects: [
    {
      title: "Project Alpha",
      description: "A description of your project. What problem does it solve? What technologies did you use?",
      link: "#"
    },
    {
      title: "Project Beta",
      description: "Another project description. Focus on the impact and your role.",
      link: "#"
    },
    {
      title: "Project Gamma",
      description: "Showcase a variety of skills and experiences through your projects.",
      link: "#"
    }
  ],
  skills: ["JavaScript", "React", "Node.js"]
};

// --- APPLICATION LOGIC ---

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Populates the DOM with data from the PROFILE object.
 */
function populateContent() {
    document.title = `${PROFILE.name} | ${PROFILE.title}`;

    // Hero
    document.getElementById('hero-name').textContent = PROFILE.name;
    document.getElementById('hero-name').dataset.text = PROFILE.name;

    // About
    document.getElementById('profile-bio').textContent = PROFILE.shortBio;

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    PROFILE.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card scroll-reveal';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    PROFILE.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card scroll-reveal';
        skillCard.innerHTML = `
            <img src="assets/icon-${skill.toLowerCase().replace(' ', '')}.svg" alt="${skill}" class="skill-icon">
            <span>${skill}</span>
        `;
        skillsGrid.appendChild(skillCard);
    });

    // Contact
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
        <a href="mailto:${PROFILE.email}">Email</a>
        <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    `;

    // Footer
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = PROFILE.name;
}

/**
 * Typewriter effect for a given element.
 * @param {HTMLElement} element - The element to apply the effect to.
 * @param {string} text - The text to type out.
 * @param {number} speed - The typing speed in ms.
 */
function typewriter(element, text, speed = 40) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/**
 * Handles scroll-based animations using IntersectionObserver.
 */
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation
                entry.target.style.transitionDelay = `${index * 100}ms`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Handles the 3D tilt effect on cards.
 */
function setupCardTilt() {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = -y / 20;
            const rotateY = x / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

/**
 * Updates the scroll progress bar.
 */
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
}

// --- Main Initializer ---
document.addEventListener('DOMContentLoaded', () => {
    populateContent();

    if (!reducedMotion) {
        const heroTitleEl = document.getElementById('hero-title');
        const terminalTextEl = document.getElementById('terminal-text');

        typewriter(heroTitleEl, PROFILE.title, 50);
        setTimeout(() => {
            typewriter(terminalTextEl, 'git commit -m "Initial commit"', 40);
        }, 1500); // Start terminal typing after title is done

        setupScrollReveal();
        setupCardTilt();
        window.addEventListener('scroll', updateProgressBar);
    }
});
