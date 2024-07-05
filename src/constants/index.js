import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
} from '../assets';

import {
  carrent,
  jobit,
  tripguide,
  threejs,
  thermofisher,
  actifSolution,
  random,
  facebook_screen,
  ecommerce_var_x,
  chest,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Devops with Docker',
    icon: docker,
  },
  {
    title: 'Clean code',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Thermo Fisher Scientific',
    icon: thermofisher,
    iconBg: '#383E56',
    date: 'Oct 2022 - Present',
    points: [
      'Architected and launched a scalable loyalty program application featuring user authentication, interactive dashboards, an admin system, and a customizable mini-shop with advanced filtering. Designed for adaptability to new loyalty programs and integrated Excel data export for customer insights. (React, Node.js, Express)',
      'Developed an internal marketing tool to streamline the generation of promotional flyers with dynamic pricing based on selected product lists. (React, Node.js, Express, Spring Boot)',
      'Engineered a multi-lingual PDF generation system for a full-stack application, supporting 15 countries and 22 unique PDF formats. (React, TypeScript, Node.js, Express.js, Vite)',
      'Empowered users with a self-service data export feature, enabling custom PDF report generation from selected data. (React)',
      'Automated URL formatting across all EU languages, ensuring consistency and improving SEO.',
      'Designed and deployed new APIs using PHP, integrating seamlessly with existing internal server infrastructure. (PHP)',
      'Utilized Docker and Docker Compose to containerize and orchestrate services for efficient deployments. (Docker, Docker Compose)',
      'Refactored PHP code to improve readability, maintainability, and performance. (PHP)',
      'Developed solutions to extract and export targeted data into Excel reports using complex PHP queries. (PHP, Excel)',
      'Created an engaging single-page web application for a targeted event, integrating QR code scanning functionality. (React)',
      'Automated tasks within Adobe CQ Pages using custom JavaScript solutions, increasing efficiency. (JavaScript) Enhanced UI design with visually appealing CSS animations. (CSS)',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'Actif-Solution',
    icon: actifSolution,
    iconBg: '#E6DEDD',
    date: 'Sept 2019 - Oct 2022',
    points: [
      'Enhanced user experience by implementing refined CSS styling and optimizing frontend interactions for seamless navigation and data visualization',
      'Enabled efficient communication between the frontend and backend by establishing API routes using Axios, ensuring optimal data flow and application performance. (React, Axios)',
      'Proactively identified and resolved code issues using the React Developer Tools extension for Google Chrome, contributing to a robust and stable application. (React Developer Tools)',
      'Improved code maintainability and scalability by refactoring existing components, implementing best practices for modularity and reusability. (React)',
      'Implemented dynamic content rendering using conditional logic and data mapping techniques (props, state management with hooks and traditional methods) to create a responsive and personalized user experience. (React)',
      "Contributed to backend development by creating APIs using the Symfony framework, extending the platform's functionality and data management capabilities (PHP, Symfony)",
      'Empowered users with data-driven insights by creating dynamic analytics dashboards, leveraging SQL queries to extract and display key performance indicators and user-requested information. (MySQL)',
    ],
  },
  {
    title: 'Trainee developer Java on Android & Web developer',
    company_name: 'SKWALSOFT',
    icon: random,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Enhanced software testing efficiency by implementing PHPUnit tests within a Dockerized environment, ensuring consistent and reliable test execution across different environments. (Docker, PHPUnit)',
      'Contributed to the development of an Android application designed to streamline the exchange of medical data and protocols between hospital departments, improving interdepartmental communication and workflow. (Android, Java)',
      'Collaborated effectively within an agile development team, utilizing Scrum methodologies to deliver incremental value and maintain project transparency. (Scrum)',
      'Developed and maintained data models within a Django framework, leveraging database forms and requests to ensure efficient data management and retrieval. (Django, Python)',
      'Conducted thorough unit testing using JUnit to validate the functionality of individual code units, ensuring code reliability and identifying potential issues early in the development cycle. (JUnit)',
      'Adhered to the Model-View-Controller (MVC) architectural pattern during development, promoting code organization, maintainability, and separation of concerns. (MVC)',
    ],
  },
  {
    title: 'Administrative Assistant',
    company_name: 'Several companies',
    icon: random,
    iconBg: '#E6DEDD',
    date: 'Jan 2008 - Jan 2019',
    points: [
      'Contract preparation (fixed-term and permanent contracts).',
      'Maintenance of an Excel database with filters and calculation formulas and Payroll processing',
      'In-person and telephone reception',
      'Management of medical examinations for over 900 employees',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Var-X Shop',
    description:
      'Web-based platform that allows users to browse and purchase a variety of products, including electronics, clothing, and accessories in IT field.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'gasby',
        color: 'blue-text-gradient',
      },
      {
        name: 'strap',
        color: 'green-text-gradient',
      },
      {
        name: 'Material-UI',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce_var_x,
    source_code_link: 'https://github.com/Ruldane/jamstack-ecommerce',
  },
  {
    name: 'facebook_clone',
    description:
      "Facebook clone's Web application using MERN stack and proposing the main functionalities of Facebook. (Post, Comment, Like, Share, etc.). This project is not done yet. I will continue to work on it.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: facebook_screen,
    source_code_link: 'https://github.com/Ruldane/MERN_Facebook',
  },
  {
    name: 'Chess Game',
    description:
      'A comprehensive chess game built with React JS and Typescript. The game features a responsive design, interactive gameplay, and a clean user interface. Players can move pieces, capture opponents versus AI.',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Material-UI',
        color: 'pink-text-gradient',
      },
    ],
    image: chest,
    source_code_link: 'https://github.com/Ruldane/chess-react-game',
  },
];

export { services, technologies, experiences, testimonials, projects };
