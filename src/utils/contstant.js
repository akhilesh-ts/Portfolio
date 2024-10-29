import { FiHome } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { BsBagDash } from "react-icons/bs";
import { AiOutlineTool } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import cinema from "../assets/cinema.png";
import arc from "../assets/arc.png";
import hungry from "../assets/hungry.png";
import ihdc from "../assets/ihdc.png";
import mashness from "../assets/mashness.png";
import weatherApp from "../assets/weatherApp.png";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const description =
  " Versatile frontend developer committed to building intuitive, accessible web solutions.";

export const tools = [
  {
    id: 1,
    icon: <IoLogoJavascript />,
    description:'Programming Language',
    name: "Javascript",
    color:'text-yellow-300'
  },
  {
    id: 2,
    icon: <BiLogoTypescript />,
    description:'Programming Language',
    name: "Typescript",
    color:'text-blue-400'
  },
  {
    id: 3,
    icon: <FaReact />,
    description:'Javascript Library',
    name: "React",
    color:'text-blue-400'
  },
  {
    id: 4,
    icon: <SiRedux />,
    description:'state management library',
    name: "Redux",
    color:'text-blue-400'
  },
  {
    id: 5,
    icon: <RiTailwindCssFill />,
    description:'utility-first framework',
    name: "Tailwind",
    color:'text-blue-400'
  },
  {
    id: 6,
    icon: <SiJest />,
    description:'Testing Library',
    name: "Jest",
    color:'text-red-400'
  },
  {
    id: 7,
    icon: <IoLogoFirebase />,
    description:'Backend platform',
    name: "Firebase",
    color:'text-orange-400'
  },
  {
    id: 8,
    icon: <FaGithub />,
    description:'version control',
    name: "Git",
    color:'black'
  },
];

export const projects = [
  {
    id: 1,
    name: "Cinema Column",
    description: "Cinema streaming site",
    path:'https://cinemacolumn.netlify.app',
    image: cinema,
  },
  {
    id: 2,
    name: "Hungry Nomad",
    description: "Food delivery app",
    path:'https://hungrynomad.netlify.app',
    image: hungry,
  },
  {
    id: 3,
    name: "Ihdc",
    description: "Membership portal",
    path:'https://en.ihdc.in/',
    image: ihdc,
  },
  {
    id: 4,
    name: "Mashness",
    description: "AI room design",
    path:'https://www.mashness.com/',
    image: mashness,
  },
  {
    id: 5,
    name: "Weather App",
    description: "Weather app",
    path:'https://github.com/akhilesh-ts/weather-application',
    image: weatherApp,
  },
  {
    id: 6,
    name: "Archiva",
    description: "Interior design company",
    path:'https://archivainteriors.netlify.app/home',
    image: arc,
  },
];

export const experience = [
  {
    id: 1,
    position: "Associate Software Developer",
    name: "IHDC Building Systems Private Limited",
    date: "06/2023-05/2024",
    description:
      "As an Associate Software Developer, I oversaw front-end development for a membership portal and AI project, improving member management and enabling room design customization using AI",
  },
  {
    id: 2,
    position: " MERN Stack developer",
    name: "Brototype",
    date: "12/2022-07/2023",
    description:
      " Gained hands-on experience in building scalable web apps using MongoDB, Express.js, React, and Node.js. Developed full-stack skills, collaborated on projects and refined coding, problem-solving, and teamwork abilities",
  },
];

export const socialLink = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/akhilesh-ts-8356501ab/",
  },
  {
    name: "git",
    icon: <FaGithubSquare />,
    path: "https://github.com/AKHILESH-TS",
  },
  {
    name: "Gmail",
    icon: <IoMdMail />,
    path: "akhilbhaskarants@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaSquareInstagram />,
    path: "https://www.instagram.com/akhilesh.t.s/",
  },
];

export const navData = [
  {
    id: 1,
    name: "Home",
    icon: <FiHome />,
    path:'/',
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
  },
  {
    id: 2,
    name: "Projects",
    icon: <GoFileDirectory />,
    onClick: () => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })
  },
  {
    id: 3,
    name: "Experience",
    icon: <BsBagDash />,
    onClick: () => document.getElementById("Experience").scrollIntoView({ behavior: "smooth" })
  },
  {
    id: 4,
    name: "Tools",
    icon: <AiOutlineTool />,
    onClick: () => document.getElementById("Tools").scrollIntoView({ behavior: "smooth" })
  },
  {
    id: 5,
    name: "Certificates",
    icon: <PiCertificate />,
    onClick: () => document.getElementById("Certificates").scrollIntoView({ behavior: "smooth" })
  },
];

export const achievement = [
  {
    id: 1,
    count: "+01",
    description: "YEARS OF EXPERIENCE",
  },
  {
    id: 2,
    count: "+10",
    description: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    count: "+01",
    description: "WORLDWIDE CLIENTS",
  },
];


export const certificates=[
  {
    id:1,
    name:'React',
    platform:'NamasteDev',
    date:'April 2024',
    path:'https://namastedev.com/akhileshts091/certificates/namaste-react',
    description:'Completed an in-depth React course, mastering essential concepts such as component architecture, state and lifecycle management, hooks, context API, and advanced rendering techniques.Gained hands-on experience building dynamic user interfaces and scalable, responsive applications.Demonstrated proficiency in creating optimized, reusable components and leveraging React’s ecosystem for efficient frontend development'
  },
  {
    id:2,
    name:'HTML 5',
    platform:'Udemy',
    date:'May 2023',
    path:'https://www.udemy.com/certificate/UC-4d88ec2d-a9c3-406d-926f-502b49415092/',
    description:"Completed an advanced HTML5 course, gaining expertise in semantic markup, multimedia integration, form enhancements, and responsive design techniques.Built practical projects to reinforce knowledge of modern HTML5 standards, accessibility practices, and SEO-friendly structure.Demonstrated the ability to create structured, scalable, and visually appealing web layouts using HTML5"
  },
  {
    id:3,
    name:'Javascript',
    platform:'NamasteDev',
    date:'Jul 2022',
    path:'https://namastedev.com/akhileshts091/certificates/namaste-javascript',
    description:'Completed a comprehensive JavaScript course, gaining in-depth knowledge of core concepts such as closures, promises, and asynchronous programming.Developed hands-on projects to solidify understanding of JavaScript features and best practices.Demonstrated proficiency in modern JavaScript frameworks and tools during the course'
  },
 
]
