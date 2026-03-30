type TechStack = {
  name: string;
  icon: string;
};

type TechStackCategory = {
  title: string;
  skills: TechStack[];
};

export const techStacksData: TechStackCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        icon: "javascript",
        name: "JavaScript (ES6+)",
      },
      {
        icon: "typescript",
        name: "TypeScript",
      },
      {
        icon: "java",
        name: "Java",
      },
      {
        icon: "python",
        name: "Python",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        icon: "react",
        name: "React",
      },
      {
        icon: "nextdotjs",
        name: "Next.js",
      },
      {
        icon: "vuedotjs",
        name: "Vue.js",
      },
      {
        icon: "styledcomponents",
        name: "styled-components",
      },
      {
        icon: "tailwindcss",
        name: "Tailwind CSS",
      },
      {
        icon: "bootstrap",
        name: "Bootstrap",
      },
      {
        icon: "reactquery",
        name: "Tanstack Query",
      },
      {
        icon: "electron",
        name: "Electron",
      },
      {
        icon: "zustand",
        name: "Zustand",
      },
      {
        icon: "storybook",
        name: "Storybook",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        icon: "nodedotjs",
        name: "Node.js",
      },
      {
        icon: "express",
        name: "Express.js",
      },
      {
        icon: "springboot",
        name: "Spring Boot",
      },
    ],
  },
  {
    title: "Deployment",
    skills: [
      {
        icon: "vercel",
        name: "Vercel",
      },
      {
        icon: "netlify",
        name: "Netlify",
      },
      {
        icon: "githubpages",
        name: "Github Pages",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        icon: "git",
        name: "Git",
      },
      {
        icon: "github",
        name: "Github",
      },
      {
        icon: "figma",
        name: "Figma",
      },
    ],
  },
];
