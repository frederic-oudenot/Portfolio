const language = {
  //Generic
  genericContent: {
    closeButton: "X",
    titleMail: "Your mail",
    placeholderEmail: "email@gmail.com",
    placeholderName: "First Last Name",
    placeholderMessage: "Your message here!",
    errorMessage: "Message missing",
    errorName: "First and Last Name missing",
    errorMail: "Incorrect mail",
  },
  //Modal
  modalContent: {
    titleWelcome: "Welcome to OS Experience",
    welcome:
      "Welcome to my portfolio, designed to offer a unique and immersive user experience, inspired by the macOS operating system. Explore my skills, discover my projects, and learn more about my professional journey through an elegant and intuitive interface.",
    developBy: "© 2024 - Developed by Frédéric OUDENOT",
  },
  //Welcome
  welcomePage: {
    messageWelcome: "Welcome to Frédéric OUDENOT's portfolio",
    click: "Click the button to enter",
  },
  // About
  aboutPage: {
    section: "WHO AM I?",
    job: "Fullstack Developer",
    descriptionAbout: [
      "I am Frédéric OUDENOT, a general engineer graduate in 2011 and recently graduated with a professional web and mobile developer title obtained in May 2024.",
      "Passionate about front-end technologies such as NextJS, TypeScript, and Tailwind CSS, and back-end technologies like REST API, NodeJS, and PostgreSQL; I pursued a career change after a successful career as a quality engineer at Safran.",
      "My engineering background has allowed me to develop skills in project management, problem-solving, and quality assurance. Essential skills to ensure product compliance and meet customer requirements.",
      "Empowered by this transition, I am determined to take on new challenges and contribute to innovative and challenging projects in web and mobile development and other fields.",
    ],
    cursus: "MY JOURNEY",
    descriptionCursus: [
      "MARCH-APRIL 2024: LA TOUCHE MUSICALE - FRONT-END DEVELOPER",
      "During a 3-month internship in a startup specializing in piano learning, I redesigned the front-end of their web application. This project, which will be released at the end of the year, allowed me to apply my knowledge of NextJS, TypeScript, and Material UI in a professional context. Additionally, updates to their API endpoints were needed to fetch data from MongoDB via the Sails.js framework.",
      "FEBRUARY 2024: O'CHEERZ - FULL-STACK DEVELOPER",
      "I developed a community web app, O'cheerz, which allows users to share comments and reviews on beers, wines, and rums. This end-of-study project enabled me to demonstrate my technical skills and my ability to lead a project from start to finish.",
      "JUNE 2012 - JUNE 2023: SAFRAN - PRODUCTION QUALITY ENGINEER",
      "With 11 years of experience at Safran, I resolved non-conformities, prepared audits, and ensured the quality of products ranging from fan blades to business and first-class seats for airlines. This experience has endowed me with attention to detail and unwavering rigor.",
    ],
    skills: "MY SKILLS",
    descriptionSkills: [
      "Below, you will find a non-exhaustive list of the technologies used. Life is a long learning journey; you should never set limits!",
    ],
  },
  ProjectsPage: [
    {
      id: "la-touche-musicale",
      name: "La Touche Musicale",
      description:
        "This web application facilitates piano learning through MIDI transcription and YouTube video to sheet music. It includes a piano interface for learning at your own pace. The web application integrates features to search for a sound, explore categories, and transcribe these MIDI or YouTube videos into favorites. This project is built with NextJS, TypeScript, Material UI, Sails.js, and MongoDB, and this version will be launched at the end of the year.",
      technologies: [
        "nextjs",
        "materialui",
        "typescript",
        "jest",
        "sailsjs",
        "mongodb",
      ],
      state: "in-progress",
      image: [
        "/projects/ltm/ltm-homepage.png",
        "/projects/ltm/ltm-category.png",
        "/projects/ltm/ltm-search.png",
      ],
      url: "https://app.latouchemusicale.com/",
      view: "view project",
      src: "https://img.icons8.com/?size=100&id=MYGi2BoeVcwy&format=png&color=000000",
    },
    {
      id: "ocheerz",
      name: "Ocheerz",
      description:
        "This project was the final project of my last training course, completed in 1 month with a team of 4 people where I was the Product Owner. It will continue to evolve over the next few weeks as I always strive to improve and optimize it. It is a community web application dedicated to beer, wine, and rum enthusiasts, with or without alcohol. Users can share their reviews, discover new drinks, and interact with the community. Developed with ReactJS and SCSS for the front-end, and JavaScript and PostgreSQL for the back-end. This application features an intuitive and responsive user interface.",
      technologies: [
        "react",
        "javascript",
        "typescript",
        "expressjs",
        "postgresql",
        "sqitch",
      ],
      state: "refactoring in-progress",
      image: ["/projects/ocheerz/homepage.png"],
      url: "https://ocheerz-front-5vmm.onrender.com/",
      view: "view project",
      src: "https://img.icons8.com/?size=100&id=MYGi2BoeVcwy&format=png&color=000000",
    },
  ],
  // Contact
  ContactPage: {
    descriptionContact:
      "I am always open to new opportunities and collaborations. If you have any questions, projects, or just want to chat, feel free to contact me using the form below. See you soon!",
  },
  // Social Media
  allSocialMedia: [
    {
      id: "github",
      label: "Github",
      url: "https://github.com/frederic-oudenot",
      source:
        "https://img.icons8.com/?size=100&id=zehXPLJSAbBB&format=png&color=000000",
    },
    {
      id: "linkedin",
      label: "Likedin",
      url: "https://www.linkedin.com/in/frederic-oudenot/",
      source:
        "https://img.icons8.com/?size=100&id=9pFq5Dj6Mz1d&format=png&color=000000",
    },
    {
      id: "cv",
      label: "CV",
      url: "https://drive.google.com/file/d/12HUDIFKqIxYO8UXzfQJFtFcphMEZUrZO/view?usp=drive_link",
      source:
        "https://img.icons8.com/?size=100&id=hhu50WbNuf90&format=png&color=000000",
    },
  ],
  //Footer
  Footer: [
    {
      id: "about",
      label: "About",
      src: "https://img.icons8.com/?size=100&id=68762&format=png&color=000000",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      src: "https://img.icons8.com/?size=100&id=113844&format=png&color=000000",
    },
    {
      id: "contact",
      label: "Contact",
      src: "https://img.icons8.com/?size=100&id=7MWOdHmoNCGD&format=png&color=000000",
    },
    {
      id: "settings",
      label: "Settings",
      src: "https://img.icons8.com/?size=100&id=114421&format=png&color=000000",
    },
  ],
  familyWallpaper: [
    {
      id: "realistic",
      name: "realistic",
      src: "https://img.icons8.com/?size=100&id=NIdoxzMO8z3u&format=png&color=000000",
    },
    {
      id: "hobbies",
      name: "hobbies",
      src: "https://img.icons8.com/?size=100&id=65649&format=png&color=000000",
    },
  ],
};

export default language;
