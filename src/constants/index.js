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
    meta,
    starbucks,
    trantor,
    VirtualIntelligence,
    tesla,
    shopify,
    carrent,
    ecommmerce,
    Legitron,
    GRC,
    RealEstate,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Next Js Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Trantor Software ",
      icon: trantor,
      iconBg: "#383E56",
      date: "September 2021 - February 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "Vitual Intelligence",
      icon: VirtualIntelligence,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a team lead on the MetricStream project, Devesh consistently showed unwavering dedication, rapid learning ability, punctuality in meeting deadlines, commendable ownership, and a strong grip on technical skills.",
      name: "Damarla Balaji",
      designation: "Senior S.E.",
      company: "MetricStream",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I had the pleasure of mentoring Devesh as their Team Lead. He quickly mastered frontend technologies and contributed creatively to the projects. With strong problem-solving skills and great work ethic.",
      name: "Pooja Kamboj",
      designation: "Senior S.E.",
      company: "Trantor Software",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "Web-based platform that allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: ecommmerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Legitron",
      description:
        "Online Platform for legal document analysis and data-driven insights tailored to the need of law firm. Works for enable user to upload and analyse legal document online.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Legitron,
      source_code_link: "https://github.com/",
    },
    {
      name: "MetricStream",
      description:
        "This is a GRC application that used to organizational strategy for managing governance, risk management, and compliance with government regulations",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialUi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: GRC,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-Commerce",
      description:
        "A user-friendly real estate website designed for seamless property browsing, featuring advanced search filters, responsive design, and interactive maps.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "next-auth",
          color: "green-text-gradient",
        },
        {
          name: "context-api",
          color: "pink-text-gradient",
        },
      ],
      image: RealEstate,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };