/*
  EDITABLE CONTENT
  - Replace placeholder data with your own
  - Add or remove projects as needed
  - Add or remove social media links as needed
*/
const PROFILE = {
    name: "Vinamra Yadav",
    title: "Associate Software Engineer",
    bio: "Associate Software Engineer with experience in backend development using Go and Python. Passionate about building high-performance services, RESTful APIs, and automation scripts. Skilled in a wide range of technologies including AI/ML, cloud platforms, and various programming languages.",
    contact: {
        email: "myselfvinamrayadav@gmail.com",
        github: "https://github.com/MythicalMAxX",
        linkedin: "https://www.linkedin.com/in/vinamrayadav/",
        website: "https://vinamrayadav.me"
    },
    resumeUrl: "assets/resume.pdf",
    workExperience: [
        {
            company: "BigOhTech",
            location: "Noida, Uttar Pradesh",
            date: "Jan 2025 - Present",
            title: "Associate Software Engineer",
            description: [
                "Developed and optimized high-performance backend services using Go, achieving a 40% reduction in response time and improving overall system throughput.",
                "Designed and implemented RESTful APIs, collaborating with cross-functional teams to integrate user-facing elements with server-side logic.",
                "Enhanced system architecture by writing clean and efficient code that facilitated the deployment of scalable solutions."
            ]
        },
        {
            company: "Grade Up Assignment",
            location: "Lucknow, Uttar Pradesh",
            date: "Jun 2024 - Jan 2025",
            title: "Subject Matter Expert",
            description: [
                "Developed 100% error-free, step-by-step solutions for computer science topics, including data structures and OOP concepts.",
                "Conducted extensive research to create 100+ unique, plagiarism-free content pieces and code for various projects."
            ]
        },
        {
            company: "Zenchi Softwares",
            location: "Lucknow, Uttar Pradesh",
            date: "Jan 2023 - Feb 2024",
            title: "Python Development Intern",
            description: [
                "Engineered 7 automation scripts using Python and Selenium, increasing operational efficiency by 30% and reducing manual errors by 25%.",
                "Contributed to 4 software projects, showcasing proficiency in Python, HTML, CSS, JavaScript, and LLM integration."
            ]
        }
    ],
    projects: [
        {
            title: "Costimizer",
            description: "Optimized cost management processes for multiple cloud providers, achieving a 15% reduction in overall expenditures.",
            stack: ["Go", "Python", "Cloud"],
            link: "#"
        },
        {
            title: "Client Portal & CRM Website",
            description: "Spearheaded the development of a responsive client-facing website utilizing Next.js, resulting in a 40% increase in lead generation.",
            stack: ["Next.js", "Golang", "RESTful APIs", "Gemini AI"],
            link: "#"
        },
        {
            title: "DevBlog",
            description: "Engineered the DevBlog platform, driving user engagement with a real-time article generation that mimics individual writing styles.",
            stack: ["Next.js", "Golang", "NLP", "AI"],
            link: "#"
        }
    ],
    education: [
        {
            institution: "Babu Banarsi Das Northern India Institute of Technology",
            degree: "B. Tech (Computer Science Engineering)",
            location: "Lucknow, Uttar Pradesh",
            date: "Graduation Date: Aug 2025"
        },
        {
            institution: "Kendriya Vidyalaya IIM Lucknow",
            degree: "Senior Secondary (12th)",
            location: "Lucknow, Uttar Pradesh",
            date: "Graduation Date: Jul 2021"
        }
    ],
    skills: ["Python", "Golang", "C/C++", "JavaScript", "Java", "ReactJS", "LLM", "Artificial Intelligence", "REST API", "Machine Learning", "Generative AI", "Pytorch", "MySQL", "PostgreSQL", "GCloud", "Nextjs", "TensorFlow", "Nodejs", "Git & Github", "DSA", "OOPS", "Kafka", "MongoDB", "Django/Flask", "Linux/Ubuntu", "Docker", "REST", "Azure", "Rust", "Kubernetes", "CI/CD"],
    achievements: [
        "Microsoft Learn Student Ambassador",
        "Google Developer Group On Campus Organizer",
        "Technical Club Coordinator",
        "Google Developer Student Club - Web Lead (2022-2023)"
    ]
};

// --- Application Logic ---

/**
 * Populates the DOM with data from the PROFILE object.
 */
function populateProfileData() {
    document.title = `${PROFILE.name} | ${PROFILE.title}`;

    // Hero section
    document.getElementById('profile-name').textContent = PROFILE.name;
    document.getElementById('profile-name').setAttribute('data-text', PROFILE.name);
    document.getElementById('profile-title').textContent = PROFILE.title;
    document.getElementById('resume-button').href = PROFILE.resumeUrl;

    // About section
    document.getElementById('profile-bio').textContent = PROFILE.bio;

    // Projects section
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear existing projects
    PROFILE.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
            <p>${project.description}</p>
            <div class="stack">
                ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact section
    const contactLinksContainer = document.getElementById('contact-links');
    contactLinksContainer.innerHTML = '';
    for (const [key, value] of Object.entries(PROFILE.contact)) {
        const link = document.createElement('a');
        link.href = key === 'email' ? `mailto:${value}` : value;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `My ${key}`);
        // Simple SVG icons will be added in a later step
        const iconName = key;
        const iconUrl = `assets/icon-${iconName.toLowerCase()}.svg`;
        fetch(iconUrl)
            .then(response => response.text())
            .then(svgData => {
                link.innerHTML = svgData;
                contactLinksContainer.appendChild(link);
            });
    }

    // Work Experience
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer && PROFILE.workExperience) {
        experienceContainer.innerHTML = '';
        PROFILE.workExperience.forEach((job, index) => {
            const item = document.createElement('div');
            item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
            item.innerHTML = `
                <div class="timeline-content">
                    <h3>${job.title}</h3>
                    <p><strong>${job.company}</strong> | ${job.location}</p>
                    <span class="date">${job.date}</span>
                    <ul>
                        ${job.description.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
            experienceContainer.appendChild(item);
        });
    }

    // Education
    const educationContainer = document.getElementById('education-container');
    if (educationContainer && PROFILE.education) {
        educationContainer.innerHTML = '';
        PROFILE.education.forEach((edu, index) => {
            const item = document.createElement('div');
            item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
            item.innerHTML = `
                <div class="timeline-content">
                    <h3>${edu.degree}</h3>
                    <p><strong>${edu.institution}</strong> | ${edu.location}</p>
                    <span class="date">${edu.date}</span>
                </div>
            `;
            educationContainer.appendChild(item);
        });
    }

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && PROFILE.skills) {
        skillsContainer.innerHTML = '';
        PROFILE.skills.forEach(skill => {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }

    // Achievements
    const achievementsContainer = document.getElementById('achievements-container');
    if (achievementsContainer && PROFILE.achievements) {
        achievementsContainer.innerHTML = '';
        PROFILE.achievements.forEach(achievement => {
            const listItem = document.createElement('li');
            listItem.textContent = achievement;
            achievementsContainer.appendChild(listItem);
        });
    }

    // Footer
    document.getElementById('footer-name').textContent = PROFILE.name;
}

/**
 * Adds intersection observer to animate elements on scroll.
 */
function observeSections() {
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    populateProfileData();
    observeSections();
});
