/*
  EDITABLE CONTENT
  - Replace placeholder data with your own
  - Add or remove projects as needed
  - Add or remove skills as needed
*/
const PROFILE = {
  name: "Vinamra Yadav",
  title: "Associate Software Engineer",
  shortBio: "A passionate software engineer with experience in developing high-performance backend services, automation scripts, and full-stack applications. Proficient in Go, Python, and modern web technologies like Next.js and React.",
  email: "myselfvinamrayadav@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinamrayadav/",
  github: "https://github.com/MythicalMAxX",
  workExperience: [
    {
      company: "BigOhTech",
      location: "Noida, Uttar Pradesh",
      date: "Jan 2025 - Present",
      title: "Associate Software Engineer",
      description: "Developed and optimized high-performance backend services using Go, achieving a 40% reduction in response time and improving overall system throughput."
    },
    {
      company: "Grade Up Assignment",
      location: "Lucknow, Uttar Pradesh",
      date: "Jun 2024 - Jan 2025",
      title: "Subject Matter Expert",
      description: "Developed 100% error-free, step-by-step solutions for computer science topics, including data structures and OOP concepts."
    },
    {
        company: "Zenchi Softwares",
        location: "Lucknow, Uttar Pradesh",
        date: "Jan 2023 - Feb 2024",
        title: "Python Development Intern",
        description: "Engineered automation scripts using Python and Selenium, increasing operational efficiency by 30%."
    }
  ],
  projects: [
    {
      title: "Costimizer",
      description: "Optimized cost management processes for multiple cloud providers, achieving a 15% reduction in overall expenditures.",
      link: "#"
    },
    {
      title: "Client Portal & CRM Website",
      description: "Spearheaded the development of a responsive client-facing website utilizing Next.js and Golang.",
      link: "#"
    },
    {
      title: "DevBlog",
      description: "Engineered a platform for real-time article generation that mimics individual writing styles using advanced NLP.",
      link: "#"
    }
  ],
  education: [
    {
      institution: "Babu Banarsi Das Northern India Institute of Technology",
      degree: "B. Tech (Computer Science Engineering)",
      date: "Aug 2025"
    },
    {
      institution: "Kendriya Vidyalaya IIM Lucknow",
      degree: "Senior Secondary (12th)",
      date: "Jul 2021"
    }
  ],
  skills: ["Python", "Golang", "JavaScript", "React", "Next.js", "Node.js", "LLM", "REST API", "Generative AI", "MySQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Azure", "GCloud"],
  achievements: [
    "Microsoft Learn Student Ambassador",
    "Google Developer Group On Campus Organizer",
    "Technical Club Coordinator",
    "Google Developer Student Club - Web Lead (2022-2023)"
  ]
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
        const iconName = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
        skillCard.innerHTML = `
            <img src="assets/icon-${iconName}.svg" alt="${skill}" class="skill-icon">
            <span>${skill}</span>
        `;
        skillsGrid.appendChild(skillCard);
    });

    // Work Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    PROFILE.workExperience.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item scroll-reveal';
        timelineItem.innerHTML = `
            <div class="timeline-item-content">
                <h3>${item.title} @ ${item.company}</h3>
                <p class="date">${item.date} | ${item.location}</p>
                <p>${item.description}</p>
            </div>
        `;
        experienceTimeline.appendChild(timelineItem);
    });

    // Education
    const educationTimeline = document.getElementById('education-timeline');
    PROFILE.education.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item scroll-reveal';
        timelineItem.innerHTML = `
            <div class="timeline-item-content">
                <h3>${item.degree}</h3>
                <p class="date">${item.institution} | ${item.date}</p>
            </div>
        `;
        educationTimeline.appendChild(timelineItem);
    });

    // Achievements
    const achievementsList = document.getElementById('achievements-list');
    PROFILE.achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.className = 'scroll-reveal';
        listItem.textContent = achievement;
        achievementsList.appendChild(listItem);
    });

    // Contact
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
        <a href="mailto:${PROFILE.email}">Email</a>
        <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
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
