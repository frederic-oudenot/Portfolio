const language = {
  //Generic
  genericContent: {
    closeButton: "X",
    titleMail: "Votre e-mail",
    placeholderEmail: "email@gmail.com",
    placeholderName: "Nom prénom",
    placeholderMessage: "Votre message ici !",
    errorMessage: "Manque votre message",
    errorName: "Manque votre nom",
    errorMail: "Mail incorrect",
  },
  //Modal
  modalContent: {
    titleWelcome: "Bienvenue sur OS Experience",
    welcome:
      "Bienvenue sur mon portfolio, conçu pour offrir une expérience utilisateur unique et immersive, inspirée par le système d'exploitation macOS. Explorez mes compétences, découvrez mes projets et apprenez-en plus sur mon parcours professionnel à travers une interface élégante et intuitive.",
    developBy: "© 2024 - Developper par Frédéric OUDENOT",
  },
  //Welcome
  welcomePage: {
    messageWelcome: "Bienvenue sur le portfolio de Frédéric OUDENOT",
    click: "Cliquer sur le bouton pour entrer",
  },
  // About
  aboutPage: {
    section: "QUI SUIS-JE ?",
    job: "Développeur Fullstack",
    descriptionAbout: [
      "Je suis OUDENOT Frédéric, diplômé ingénieur généraliste en 2011 et récemment diplômé avec un titre professionnel développeur web et mobile obtenu en mai 2024.",
      "Passionné par les technologies front-end comme NextJS, Typescript et Tailwind CSS et back-end comme API Rest, NodeJS, PostgreSQL; j'ai entrepris une reconversion professionnelle après une carrière réussie en tant qu'ingénieur qualité chez Safran.",
      "Mon parcours en ingénierie m'a permis de développer des compétences dans la gestion de projet, la résolution de problèmes et l'assurance qualité. Des compétences essentielles pour garantir la conformité des produits et respecter les exigences clients. ",
      "Fort de cette transition, je suis déterminé à relever de nouveaux défis et à contribuer à des projets innovants et challengeant dans le développement web et mobile et d'autres domaines ",
    ],
    cursus: "MON PARCOURS",
    descriptionCursus: [
      "MARS-AVRIL 2024 : LA TOUCHE MUSICALE - DEVELOPPEUR FRONT-END",
      "Durant un stage de 3 mois dans une start-up spécialisée dans l'apprentissage du piano, j'ai réalisé la refonte du front-end de leur web application. Ce projet, qui sortira à la fin de l'année, m'a permis d'appliquer mes connaissances en NextJS, Typescript et Material UI dans un contexte professionnel. En complément, il fallait réalisé des mises à jour de leurs endpoints de l'API pour obtenir les données de MongoDB et via le framework Sails.js",
      "FEVRIER 2024 : O'CHEERZ - DEVELOPPEUR FULL-STACK",
      "J'ai développé une web app communautaire, O'cheerz, qui permet aux utilisateurs de partager des commentaires et des avis sur les bières, vins et rhums. Ce projet de fin d'étude m'a permis de démontrer mes compétences techniques et ma capacité à mener un projet de bout en bout.",
      "JUIN 2012 - JUIN 2023 - SAFRAN - INGENIEUR QUALITE PRODUCTION",
      "Avec 11 années d'expérience chez Safran, j'ai résolu des non-conformités, préparé des audits et assuré la qualité de produits allant des aubes de fan aux sièges de classe affaires et première classe pour des compagnies aériennes. Cette expérience m'a doté d'un souci du détail et d'une rigueur inébranlable.",
    ],
    skills: "MES COMPETENCES",
    descriptionSkills: [
      "Ci-dessous, vous trouverez une liste des compétences non exhautives des technologies utilisées. La vie est un long chemin d'apprentissage, il ne faut pas se fixer des limites !",
    ],
  },
  ProjectsPage: [
    {
      id: "la-touche-musicale",
      name: "La Touche Musicale",
      description:
        "Cette web application facilite l'apprentissage du piano grâce à la retranscription MIDI et vidéo YouTube en partitions. Il existe une interface d'un piano pour apprendre à son rythme. La web application intégre les fonctionnalités de rechercher un son, explorer les catégories et de transcrire ces midi ou vidéos youtube en favoris. Ce projet est réalisé avec NextJS, Typescript, Material UI, Sails.js et MongoDB et cette version sera lancée à la fin de l'année.",
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
      view: "voir projet",
      src: "https://img.icons8.com/?size=100&id=MYGi2BoeVcwy&format=png&color=000000",
    },
    {
      id: "ocheerz",
      name: "Ocheerz",
      description:
        "Cette réalisation est le projet de fin d'étude de ma dernière formation, elle a été réalisé en 1 mois avec une équipe de 4 personnes dont j'étais le Product Owner. Elle évoluera durant les prochaines semaines car j'ai toujours l'envie d'améliorer et d'optimiser. C'est une web application communautaire dédiée aux amateurs de bières, vins et rhums avec ou sans allcool. Les utilisateurs peuvent partager leurs avis, découvrir de nouvelles boissons et interagir avec la communauté. Développée pour le front en ReactJS, SCSS et pour le back en javascript et postgreSQL. Cette application met en avant une interface utilisateur intuitive et réactive.",
      technologies: [
        "react",
        "javascript",
        "typescript",
        "expressjs",
        "postgresql",
        "sqitch",
      ],
      state: "refonte in-progress",
      image: ["/projects/ocheerz/homepage.png"],
      url: "https://ocheerz-front-5vmm.onrender.com/",
      view: "voir projet",
      src: "https://img.icons8.com/?size=100&id=MYGi2BoeVcwy&format=png&color=000000",
    },
  ],
  // Contact
  ContactPage: {
    descriptionContact:
      "Je suis toujours ouvert à de nouvelles opportunités et collaborations. Si vous avez des questions, des projets ou simplement envie de discuter, n'hésitez pas à me contacter via le formulaire ci-dessous. A bientôt !",
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
      label: "A propos de moi",
      src: "https://img.icons8.com/?size=100&id=68762&format=png&color=000000",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      src: "https://img.icons8.com/?size=100&id=113844&format=png&color=000000",
    },
    {
      id: "contact",
      label: "Message",
      src: "https://img.icons8.com/?size=100&id=7MWOdHmoNCGD&format=png&color=000000",
    },
    {
      id: "settings",
      label: "Paramétres",
      src: "https://img.icons8.com/?size=100&id=114421&format=png&color=000000",
    },
  ],
  familyWallpaper: [
    {
      id: "realistic",
      name: "realité",
      src: "https://img.icons8.com/?size=100&id=NIdoxzMO8z3u&format=png&color=000000",
    },
    {
      id: "hobbies",
      name: "loisirs",
      src: "https://img.icons8.com/?size=100&id=65649&format=png&color=000000",
    },
  ],
};

export default language;
