import path from "path";
import { title } from "process";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { TbBrandThreejs } from "react-icons/tb";

export const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "services",
    path: "/services",
  },

  {
    name: "resume",
    path: "/resume",
  },

  {
    name: "work",
    path: "/work",
  },

  {
    name: "contact",
    path: "/contact",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/monabbir-hub" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/monabbir-bhuiyan-763247206/",
  },
  { icon: <FaBehance />, path: "https://www.behance.net/monabbirbhuiyan9" },
];

export const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 15,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technology Mastered",
  },
  {
    num: 100,
    text: "Code Commits",
  },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "In web development, I specialize in creating dynamic and responsive websites using HTML, CSS, and JavaScript. My expertise extends to modern frameworks and tools, including React, Vite, and Next.js. I build scalable and high-performance applications, ensuring seamless user experiences. By leveraging component-based architecture and efficient build tools, I deliver robust solutions tailored to meet business needs and enhance digital presence.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "In UI/UX design, I create visually appealing and user-friendly interfaces that meet the needs of your target audience. Using tools like Adobe XD and Figma, I design intuitive and efficient user experiences that enhance engagement and drive conversions.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "In graphics design, I specialize in creating stunning graphics, logos, and branding elements that effectively communicate your message to your target audience. Using Adobe Creative Suite, I craft visually appealing designs that capture your brand's essence and elevate your brand identity to the next level.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "In search engine optimization (SEO), I develop and execute comprehensive strategies to improve website visibility and organic search rankings. Leveraging in-depth keyword research, on-page optimization, and high-quality backlink building, I ensure that content aligns with search engine algorithms and user intent. My expertise in analytics and continuous performance monitoring allows me to refine tactics, driving sustained traffic growth and helping businesses achieve their SEO goals.",
    href: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "Multifaceted professional with expertise as a Web Developer, UI/UX Designer, Graphic Designer, and SEO Optimizer. I specialize in crafting dynamic, responsive websites using HTML, CSS, JavaScript, React, Vite, and Next.js. With a keen eye for detail, I design intuitive, user-friendly interfaces and compelling visuals that communicate effectively. My SEO strategies enhance website visibility and drive organic traffic, making me a valuable asset for businesses looking to succeed in the digital world.",
  info: [
    {
      fieldName: "Name",
      fieldValue: " Monabbir Bhuiyan",
    },
    {
      fieldName: "Phone",
      fieldValue: " +1 (647) 336-7169",
    },
    {
      fieldName: "Experience",
      fieldValue: " 5+ years",
    },
    {
      fieldName: "Email",
      fieldValue: " monabbir.179@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: " Available",
    },
    {
      fieldName: "Languages",
      fieldValue: " English, Bengali, Japanese",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "Code & Crust",
      position: "Chief Technology Officer",
      duration: "2024-present",
    },

    {
      company: "Learning Technology Services, UIT, York University",
      position: "Graphic Designer and Multimedia Assistant",
      duration: "May 2023 - September 2023",
    },

    {
      company: "GO Learning Bangladesh",
      position: "Junior Developer",
      duration: "April 2022 - December 2022",
    },

    {
      company: "Fiverr",
      position: "Freelance Web Developer and Designer",
      duration: "November 2020 - August 2022",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      institute: "York Universty",
      degree: "B.Eng in Software Engineering",
      duration: "2023-2027(Expected Graduation)",
    },

    {
      institute: "Dhaka Residential Model College",
      degree: "High School Certificate",
      duration: "2019 - 2022",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (647) 336-7169",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "monabbir.179@gmail.com",
  },
];

export const projects = [
  {
    id: 1,
    title: "Code & Crust",
    des: "Experience the perfect blend of creativity and technology with Code & Crust. Our platform highlights our expertise in developing visually stunning and highly functional websites for a diverse range of industries. From dynamic startups to established enterprises, Code & Crust brings your digital presence to life with bespoke designs and interactive features that engage and delight your audience. Let us elevate your brand and drive growth with customized digital solutions that leave a lasting impression.",
    img: "/cc.svg",
    iconLists: [
      <FaReact />,
      <SiTailwindcss />,
      <SiTypescript />,
      <TbBrandThreejs />,
    ],
    link: "https://www.codeandcrust.org",
  },
  {
    id: 2,
    title: "Bangla Diners",
    des: "Immerse yourself in the rich and diverse flavors of Bangladeshi cuisine with Bangla Diners. This vibrant platform showcases our expertise in creating a visually appealing and user-friendly website that celebrates the culinary heritage of Bangladesh. From detailed menus to engaging blog posts and easy reservation options, Bangla Diners provides a seamless experience for food enthusiasts and restaurant-goers alike. Discover the perfect blend of tradition and modernity, as we bring the essence of Bangladeshi dining to the digital world.",
    img: "/bangla.svg",
    iconLists: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    link: "https://bangladiners.ca/",
  },
  {
    id: 3,
    title: "3D Tshirt Design",
    des: "Immerse yourself in the world of custom apparel with Project T-Shirt Design. This innovative platform showcases our expertise in creating a visually appealing and user-friendly website that empowers users to design their own unique t-shirts. From interactive design tools to real-time previews and responsive design, Project T-Shirt Design offers a seamless experience for both amateur and professional designers. Discover the perfect blend of creativity and technology as we bring your t-shirt design ideas to life in the digital world.",
    img: "/tshirt.svg",
    iconLists: [
      <FaReact />,
      <SiTailwindcss />,
      <SiTypescript />,
      <TbBrandThreejs />,
    ],
    link: "https://project-tshirt-design.vercel.app/",
  },
];
