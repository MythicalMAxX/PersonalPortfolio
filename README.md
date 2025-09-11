# Premium Animated Portfolio

A visually premium, single-page portfolio website built with modern web technologies. This project focuses on a clean aesthetic, larger-than-life typography, and smooth, meaningful animations. It's designed to be lightweight, performant, and easily deployable on GitHub Pages.

## Features

- **Visually Premium Design**: A dark-themed design with a layered, glowing background, glassmorphism cards, and a harmonious color palette.
- **Advanced Animations**: Includes a floating SVG blob, gradient text, typewriter effects, scroll-reveal animations, and a subtle 3D tilt effect on cards.
- **Easily Editable**: All personal data is stored in a single `PROFILE` object in `main.js`. No need to dig through HTML.
- **Lightweight & Performant**: Built with plain HTML, CSS, and JavaScript. No heavy frameworks. Aims for a Lighthouse score of 90+.
- **Accessible**: Respects the `prefers-reduced-motion` media query and includes semantic HTML and focus states for keyboard navigation.

## Getting Started

### 1. Customize Your Content

All your personal information is located in the `PROFILE` object at the top of the `main.js` file.

```javascript
const PROFILE = {
  name: "Your Name",
  title: "Your Title (e.g., Software Engineer)",
  shortBio: "A brief and impactful bio about yourself.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-username",
  projects: [
    {
      title: "Project Alpha",
      description: "A description of your project.",
      link: "#"
    },
    // ... add more projects here
  ],
  skills: ["JavaScript", "React", "Node.js"] // Add skills here
};
```

- **Update the fields** with your own information.
- **Add or remove projects** from the `projects` array.
- **Add or remove skills** from the `skills` array. For each skill, make sure you have a corresponding `icon-skillname.svg` in the `assets/` folder (e.g., `icon-javascript.svg`).
- **Replace `assets/resume.pdf`** with your own resume.

### 2. Test Locally

To see your changes locally, you can use a simple HTTP server. If you have Python installed, you can run the following command in your project's root directory:

```bash
# For Python 3
python -m http.server
```

Then, open your browser and go to `http://localhost:8000`.

### 3. Deploy to GitHub Pages

This project is ready to be deployed on GitHub Pages.

1.  **Push your code** to a new GitHub repository.
2.  Go to your repository's **Settings** tab.
3.  Under the "Pages" section, select the `main` (or `master`) branch as the source.
4.  Click **Save**. Your portfolio will be live at `https://<your-username>.github.io/<your-repo-name>/` in a few minutes.
