//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

import { SiWhatsapp } from 'react-icons/si';



// import {GitHubIcon} from '@mui/icons-material/GitHub';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.jpg';
import Project2 from './assets/img/projects/p2.jpg';
import Project3 from './assets/img/projects/p3.jpg';
import Project4 from './assets/img/projects/p4.jpg';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/react-native.jpeg';
import SkillImg10 from './assets/img/skills/bootstrap.png';

// services images
import uiux from './assets/img/services/uiux.png';
import frontend from './assets/img/services/frontend.png';
import backend from './assets/img/services/backend.jpeg';
import app from './assets/img/services/app.jpg';


// experience images
import ExperienceImage1 from './assets/img/My DP.jpg';
import ExperienceImage2 from './assets/img/testimonials/hcl.jpeg';
import ExperienceImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'experience',
    href: 'experience',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <SiWhatsapp />,
    href: 'https://wa.me/916203046018',
    title: 'Whatsapp',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/',
    title: 'Instagram',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/vivekpradhan736',
    title: 'Github',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/vivek-pradhan-b3ba9922b/',
    title: 'Linkedin',
  },
  {
    icon: <FiTwitter />,
    href: 'https://www.twitter.com/',
    title: 'Twitter',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    icon: <FiGithub />,
    gitHref: 'https://github.com/vivekpradhan736',
    demo: 'Demo',
    demoHref: 'https://viveknetflix02.netlify.app/',
    name: 'Netflix - streaming service',
    category: 'UI/UX design',
    technology: '#react.js #html #tailwind css #node.js #redux #firebase #googleAuth',
    desc: 'Netflix is a Web application platform that allows user to search and streaming movies or web-serices.'
  },
  {
    id: '2',
    image: Project2,
    icon: <FiGithub />,
    gitHref: 'https://github.com/vivekpradhan736/youtube-02',
    demo: 'Demo',
    demoHref: 'https://youtube-02.netlify.app',
    name: 'YouTube - Video sharing platform',
    category: 'web development',
    technology: '#html #tailwind css #javascript #react.js #node.js #redux #rapid api #react router',
    desc: 'YouTube is an online video sharing and social media platform.',
  },
  {
    id: '3',
    image: Project3,
    icon: <FiGithub />,
    gitHref: 'https://github.com/vivekpradhan736/Dashboard',
    demo: 'Demo',
    demoHref: 'https://dashboard-02.netlify.app/',
    name: 'React Admin Dashboard...',
    category: 'UI/UX design',
    technology: '#react.js #scss #html javascript #node.js #react-router #material UI #context API',
    desc: 'It is a modern UI/UX admin Dashboard.',
  },
  {
    id: '4',
    image: Project4,
    icon: <FiGithub />,
    gitHref: 'https://github.com/vivekpradhan736/React-E-commerce',
    demo: 'Demo',
    demoHref: '',
    name: 'E - Commerce (Cloth Store)',
    category: 'web development',
    technology: '#html #tailwind css #javascript #react.js #node.js #redux #strapi #stripe #react-router #next-auth',
    desc: 'A Full-Stack E - Commerce site inspired by amazon/flipkart.',
  },
  {
    id: '5',
    image: Project5,
    icon: <FiGithub />,
    gitHref: 'https://github.com/vivekpradhan736/My_Portfolio',
    demo: 'Demo',
    demoHref: 'https://vivekpradhan.vercel.app',
    name: 'React - Personal Portfolio',
    category: 'UI/UX design',
    technology: '#javascript #react.js #node.js #html #tailwind css #react-router #react-icons #heroicons #framer-motion',
    desc: 'My self coded personal responsive portfolio build with React.js.',
  },
  {
    id: '6',
    image: Project6,
    icon: <FiGithub />,
    gitHref: '',
    demo: 'Demo',
    demoHref: '',
    name: 'E - Commerce (Nike Store)',
    category: 'web development',
    technology: '#html #tailwind css #javascript #react.js #node.js #redux #strapi #stripe #react-router #next-auth',
    desc: 'A Full-Stack E - Commerce Shoes Store site inspired by Nike.',
  },
];


// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'App development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    image: uiux,
    name: 'UI/UX Design',
    description: 'I can Develop a User Interface (UI) and User Experience (UX) Design and play key roles in the experience users have when interacting with digital products and applications.',
  },
  {
    image: frontend,
    name: 'Frontend Development',
    description: 'I can Design a Frontend Website through HTML, CSS, JavaScript and its Library that make up a user interface.',
  },
  {
    image: backend,
    name: 'Backend Development',
    description:
      'As a Web Developer, I can also Develop on server-side software, which focuses on everything you can’t see on a website. ',
  },
  {
    image: app,
    name: 'App Development',
    description:
      'I can also Design a Mobile Application through React-Native. React-Native codes support both Android and iOS.',
  },
];

// experience
export const experience = [
  {
    authorImg: ExperienceImage1,
    authorText:'Freelance Web Developer',
    experienceTime: 'March 2022 - Present : 1 year 2 months',
    experienceTitle: "I have been working as a Freelance Web Developer for over than a year. I have worked on various projects ranging from E-Commerce Stores to Social Media, Personal Websites to Landing Pages. I have worked with clients from all over the world and have always delivered the best possible results. Meeting my Client's requirements is one of the most important aspects of my job.",
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: ExperienceImage2,
    authorText: 'Web Developer Intern at HCL Tech',
    experienceTime: 'Nov 2022 - Dec 2022 : 2 months',
    experienceTitle: "As a Front End Intern at the HCL Technology. I worked on a web development project that involved redesigning and improving the organization's website. My responsibilities included working closely with the senior developers to analyze and understand the existing website's structure, design, and functionality. After identifying the areas for improvement, I created wireframes and prototypes to present to the team and the management.",
    authorPosition: 'Head of Design, Google',
  },
  // {
  //   authorImg: ExperienceImage3,
  //   authorText: 'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //   experienceTitle: 'Olivia Doe',
  //   authorPosition: 'Head of Design, Google',
  // },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at vivekpradhan736@gmail.com',
    link: 'mailto:vivekpradhan736@gmail.com',
  },
  {
    icon: <SiWhatsapp />,
    title: 'Chat Me',
    subtitle: 'Message me on What’s App.',
    description: 'Message +91 6203046018',
    link: 'https://wa.me/916203046018',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Haridwar, UK',
    description: 'Serving clients worldwide',
    link: '',
  },
];