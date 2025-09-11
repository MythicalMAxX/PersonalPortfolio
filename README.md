# Animated Personal Portfolio

A modern, animated, and accessible personal portfolio website designed to be easily customizable and deployed on GitHub Pages.

![Screenshot of the portfolio](./assets/screenshot.svg)

## Features

- **Mesmerising Design**: A beautiful, dark-themed design with subtle animations and a starry background effect.
- **Easily Editable**: All personal data is stored in a single `PROFILE` object in `main.js`. No need to dig through HTML.
- **Lightweight & Performant**: Built with plain HTML, CSS, and JavaScript. No heavy frameworks. Uses lightweight SVGs for icons.
- **Accessible**: Semantic HTML and ARIA attributes for better screen reader support.
- **Responsive**: Looks great on all devices, from mobile phones to desktops.

## Getting Started

### 1. Customize Your Content

All your personal information is located in the `PROFILE` object at the top of the `main.js` file.

```javascript
const PROFILE = {
  name: "Your Name",
  title: "Creative Developer & Designer",
  bio: "A short and impactful bio...",
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username"
  },
  projects: [
    {
      title: "Project One",
      description: "A brief description of your project.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "#" // Link to your project
    },
    // ... add more projects here
  ],
  resumeUrl: "assets/resume.pdf"
};
```

- **Update the fields** with your own information.
- **Add or remove projects** from the `projects` array.
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
3.  In the **Pages** section, select the `main` (or `master`) branch as the source.
4.  Click **Save**. Your portfolio will be live at `https://<your-username>.github.io/<your-repo-name>/` in a few minutes.

## License

This project is open source and available under the [MIT License](LICENSE).
