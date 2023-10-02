import CounterRef from "../Hooks/useCounterRef";
import HeroWallet_webp from "../assets/Images/Projects/HeroWallet.webp";
import HeroWallet_png from "../assets/Images/Projects/HeroWallet.png";
import Card2_webp from "../assets/Images/Projects/Card2.webp";
import Card2_png from "../assets/Images/Projects/Card2.png";
import Card3_webp from "../assets/Images/Projects/Card3.webp";
import Card3_png from "../assets/Images/Projects/Card3.png";
import Card4_webp from "../assets/Images/Projects/Card4.webp";
import Card4_png from "../assets/Images/Projects/Card4.png";
import Card5_webp from "../assets/Images/Projects/Card5.webp";
import Card5_png from "../assets/Images/Projects/Card5.png";
import Card6_webp from "../assets/Images/Projects/Card6.webp";
import Card6_png from "../assets/Images/Projects/Card6.png";
import Card7_webp from "../assets/Images/Projects/Card7.webp";
import Card7_png from "../assets/Images/Projects/Card7.png";
import Card8_webp from "../assets/Images/Projects/Card8.webp";
import Card8_png from "../assets/Images/Projects/Card8.png";
import Card9_webp from "../assets/Images/Project-Details/Card9.webp";
import Card9_png from "../assets/Images/Project-Details/Card9.png";
import Card10_webp from "../assets/Images/Project-Details/Card10.webp";
import Card10_jpg from "../assets/Images/Project-Details/Card10.jpg";
import Card11_webp from "../assets/Images/Project-Details/Card11.webp";
import Card11_png from "../assets/Images/Project-Details/Card11.png";
import Facebook from "../assets/Icons/Facebook.svg";
import Linkedin from "../assets/Icons/LinkedinDark.svg";
import Twitter from "../assets/Icons/TwitterDark.svg";
import Instagram from "../assets/Icons/InstagramDark.svg";
import LinkedinLight from "../assets/Icons/LinkedinLight.svg";
import TwitterLight from "../assets/Icons/TwitterLight.svg";
import InstagramLight from "../assets/Icons/InstagramLight.svg";
import Love from "../assets/Images/Value/Love.png";
import Step from "../assets/Images/Value/Step.png";
import Phone from "../assets/Images/Value/Phone.png";
import Message from "../assets/Images/Value/Message.png";
import Profile from "../assets/Images/Value/Profile.png";
import Founder from "../assets/Images/Teams/Founder.png";
import CEO from "../assets/Images/Teams/CEO.png";
import Co_founder from "../assets/Images/Teams/Co-founder.png";
import Designer from "../assets/Images/Teams/Designer.png";
import Marketer from "../assets/Images/Teams/Marketer.png";
import Developer from "../assets/Images/Teams/Developer.png";
import BlogNews1 from "../assets/Images/Blog/blog-img-1.png";
import BlogNews2 from "../assets/Images/Blog/blog-img-2.png";
import BlogNews3 from "../assets/Images/Blog/blog-img-3.jpg";
import BlogInsight1 from "../assets/Images/Blog/insight-img-1.jpg";
import BlogInsight2 from "../assets/Images/Blog/insight-img-2.png";
import BlogInsight3 from "../assets/Images/Blog/insight-img-3.png";
import BlogInsight4 from "../assets/Images/Blog/insight-img-4.png";
import BlogTutorial1 from "../assets/Images/Blog/tutorial-img-1.png";
import BlogTutorial2 from "../assets/Images/Blog/tutorial-img-2.png";
import BlogTutorial3 from "../assets/Images/Blog/tutorial-img-3.png";
import BlogTutorial4 from "../assets/Images/Blog/tutorial-img-4.png";
import BlogTutorial5 from "../assets/Images/Blog/tutorial-img-5.png";
import BlogTutorial6 from "../assets/Images/Blog/tutorial-img-6.png";
import Star from "../assets/Images/Star.png";

export const NAV_LINKS = [
  {
    id: 1,
    link: "about us",
    path: "/about",
  },
  {
    id: 2,
    link: "services",
    path: "/service",
  },
  {
    id: 3,
    link: "project",
    path: "/project",
  },
  {
    id: 4,
    link: "blog",
    path: "/blog",
  },
  {
    id: 5,
    link: "contact",
    path: "/contact",
  },
];

export const FOOTER_1_NAV_LINKS = [
  {
    id: 1,
    link: "home",
    path: "/",
  },
  {
    id: 2,
    link: "about us",
    path: "/about",
  },
  {
    id: 3,
    link: "services",
    path: "/service",
  },
  {
    id: 4,
    link: "project",
    path: "/project",
  },
];

export const FOOTER_2_NAV_LINKS = [
  {
    id: 1,
    link: "blog",
    path: "/blog",
  },
  {
    id: 2,
    link: "contact",
    path: "/contact",
  },
  {
    id: 3,
    link: "menu",
    path: "/menu",
  },
];

const { counter1, counter2, counter3 } = CounterRef;

export const COUNT_DETAILS = [
  {
    id: 1,
    data_value: "05",
    header: "years of experience",
    prgh_text: "We have over 5+ years of experience in this design industry.",
    percent_symb: "+",
    counter: counter1,
  },
  {
    id: 2,
    data_value: "60",
    header: "design awards",
    prgh_text: "We have achieved over 60 design awards for our awesome work. ",
    percent_symb: "+",
    counter: counter2,
  },
  {
    id: 3,
    data_value: "97",
    header: "Client Satisfaction",
    prgh_text: "Our client is 97% satisfied with our work and services",
    percent_symb: "%",
    counter: counter3,
  },
];

export const PROJECT_CARD_DETAILS = [
  {
    id: 1,
    defaultSrc: HeroWallet_webp,
    alternateSrc: HeroWallet_png,
    job_title: "Email Marketing Landing Page",
  },
  {
    id: 2,
    defaultSrc: Card2_webp,
    alternateSrc: Card2_png,
    job_title: "Marketer Portfolio Landing Page",
  },
  {
    id: 3,
    defaultSrc: Card3_webp,
    alternateSrc: Card3_png,
    job_title: "Agency Landing Page Design",
  },
  {
    id: 4,
    defaultSrc: Card8_webp,
    alternateSrc: Card8_png,
    job_title: "Marketer Portfolio Landing Page",
  },
  {
    id: 5,
    defaultSrc: Card4_webp,
    alternateSrc: Card4_png,
    job_title: "Agency Landing Page Design",
  },
  {
    id: 6,
    defaultSrc: Card5_webp,
    alternateSrc: Card5_png,
    job_title: "Marketer Portfolio Landing Page",
  },
  {
    id: 7,
    defaultSrc: Card6_webp,
    alternateSrc: Card6_png,
    job_title: "Agency Landing Page Design",
  },
  {
    id: 8,
    defaultSrc: Card7_webp,
    alternateSrc: Card7_png,
    job_title: "Marketer Portfolio Landing Page",
  },
];

export const PROJECT_DETAILS = [
  {
    id: 1,
    job_title: "Marketer Portfolio Landing Page",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: HeroWallet_webp,
    firstAlternateImg: HeroWallet_png,
    secondDefaultImg: Card11_webp,
    secondAlternateImg: Card11_png,
  },
  {
    id: 2,
    job_title: "Agency Landing Page Design",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card2_webp,
    firstAlternateImg: Card2_png,
    secondDefaultImg: Card5_webp,
    secondAlternateImg: Card5_png,
  },
  {
    id: 3,
    job_title: "Marketer Portfolio Landing Page",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card3_webp,
    firstAlternateImg: Card3_png,
    secondDefaultImg: Card4_webp,
    secondAlternateImg: Card4_png,
  },
  {
    id: 4,
    job_title: "Agency Landing Page Design",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card2_webp,
    firstAlternateImg: Card2_png,
    secondDefaultImg: Card11_webp,
    secondAlternateImg: Card11_png,
  },
  {
    id: 5,
    job_title: "Marketer Portfolio Landing Page",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card5_webp,
    firstAlternateImg: Card5_png,
    secondDefaultImg: Card11_webp,
    secondAlternateImg: Card11_png,
  },
  {
    id: 6,
    job_title: "Agency Landing Page Design",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card2_webp,
    firstAlternateImg: Card2_png,
    secondDefaultImg: Card6_webp,
    secondAlternateImg: Card6_png,
  },
  {
    id: 7,
    job_title: "Marketer Portfolio Landing Page",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card7_webp,
    firstAlternateImg: Card7_png,
    secondDefaultImg: Card4_webp,
    secondAlternateImg: Card4_png,
  },
  {
    id: 8,
    job_title: "Agency Landing Page Design",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card9_webp,
    firstAlternateImg: Card9_png,
    secondDefaultImg: Card4_webp,
    secondAlternateImg: Card4_png,
  },
  {
    id: 9,
    job_title: "Marketer Portfolio Landing Page",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card5_webp,
    firstAlternateImg: Card5_png,
    secondDefaultImg: Card6_webp,
    secondAlternateImg: Card6_png,
  },
  {
    id: 10,
    job_title: "Agency Landing Page Design",
    defaultPoster: Card10_webp,
    alternatePoster: Card10_jpg,
    clients: "Dropmail",
    services: "UI/UX Designer, Web Designer",
    year: 2022,
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    firstDefaultImg: Card8_webp,
    firstAlternateImg: Card8_png,
    secondDefaultImg: Card7_webp,
    secondAlternateImg: Card7_png,
  },
];

export const SERVICE_DATA = [
  {
    id: 1,
    job: "Graphic design",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 2,
    job: "illustrations",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 3,
    job: "logo & branding",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 4,
    job: "development",
    work: "UI/UX",
    isOpen: false,
    borderb: false,
  },
];

export const PROCESS_DETAILS = [
  {
    id: 1,
    num: "#1",
    heading: "discussion",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 2,
    num: "#2",
    heading: "discovery",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 3,
    num: "#3",
    heading: "strategy",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
  {
    id: 4,
    num: "#4",
    heading: "design & dev",
    prgh: `We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best.`,
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    iconLight: Facebook,
    url: "https://github.com",
  },
  {
    id: 2,
    name: "Twitter",
    icon: Twitter,
    iconLight: TwitterLight,
    url: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Instagram",
    icon: Instagram,
    iconLight: InstagramLight,
    iconDark: Facebook,
    url: "https://www.figma.com",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: Linkedin,
    iconLight: LinkedinLight,
    url: "https://www.figma.com",
  },
];

export const TESTIMONIALS_DETAILS = [
  {
    id: 0,
    text: ` Route agency team are just amazing. We have had some personal
            websites and dashboards. The team always delivered on time. The best
            quality with endless iterations. Good Job!`,
    name: "Elizabeth",
    address: "Los Angeles, CA",
    alt: "first",
  },
  {
    id: 1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo
          enim eaque voluptates ea vero corrupti molestiae natus explicabo illo, ipsam
          expedita `,
    name: "Ismail",
    address: "USA, CA",
    alt: "second",
  },
  {
    id: 2,
    text: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          assumenda consectetur, vitae molestiae natus explicabo illo, ipsam
          expedita excepturi quidem `,
    name: "Azeez",
    address: "Lagos, CA",
    alt: "third",
  },
  {
    id: 3,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat distinctio id maxime in accusamus neque officiis officia enim
          iure illo cupiditate quibusdam, saepe`,
    name: "Wakil",
    address: "Nigeria, CA",
    alt: "fourth",
  },
  {
    id: 4,
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          magni quibusdam eius odio aliquam voluptatum pariatur nam impedit odit
          voluptatem `,
    name: "Adam",
    address: "Norway, CA",
    alt: "fifth",
  },
];

export const VALUE_DETAILS = [
  {
    id: 1,
    alt: "joy",
    icon: Profile,
    header: "We Value Our People First",
    prgh_text: "We lead with empathy and take care of one another.",
  },
  {
    id: 2,
    alt: "message",
    icon: Message,
    header: "We are Passionate",
    prgh_text: "We lead with empathy and take care of one another.",
  },
  {
    id: 3,
    alt: "love",
    icon: Love,
    header: "We Stay Humble",
    prgh_text: "We lead with empathy and take care of one another.",
  },
  {
    id: 4,
    alt: "Smile",
    icon: Phone,
    header: "We Live Joyfully",
    prgh_text: "We lead with empathy and take care of one another.",
  },
  {
    id: 5,
    alt: "Step",
    icon: Step,
    header: "We Improve Daily",
    prgh_text: "We lead with empathy and take care of one another.",
  },
  {
    id: 6,
    alt: "love",
    icon: Love,
    header: "We Give Our Best",
    prgh_text: "We lead with empathy and take care of one another.",
  },
];

export const TEAMS_DETAILS = [
  {
    id: 1,
    img: Founder,
    name: "Rohit Sharma",
    position: "Co-Founder",
  },
  {
    id: 2,
    img: CEO,
    name: "CEO",
    position: "Shikhar Dhawan",
  },
  {
    id: 3,
    img: Co_founder,
    name: "Virat Kohli",
    position: "Founder",
  },
  {
    id: 4,
    img: Designer,
    name: "KL Rahul",
    position: "Designer",
  },
  {
    id: 5,
    img: Developer,
    name: "SK Yadav",
    position: "Developer",
  },
  {
    id: 6,
    img: Marketer,
    name: "Rishabh Pant",
    position: "Marketer",
  },
];

export const BLOG_NEWS_DETAILS = [
  {
    id: 1,
    img: BlogNews1,
    date: "Jan 24",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 2,
    img: BlogNews2,
    date: "Dec 24",
    year: 2022,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 3,
    img: BlogNews3,
    date: "Aug 24",
    year: 2020,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
];

export const BLOG_INSIGHT_DETAILS = [
  {
    id: 1,
    img: BlogInsight1,
    date: "Mar 24",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 2,
    img: BlogInsight2,
    date: "Feb 24",
    year: 2022,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 3,
    img: BlogInsight3,
    date: "May 24",
    year: 2021,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 4,
    img: BlogInsight4,
    date: "Jun 20",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
];

export const BLOG_TUTORIAL_DETAILS = [
  {
    id: 1,
    img: BlogTutorial1,
    date: "Sep 24",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 2,
    img: BlogTutorial2,
    date: "Feb 24",
    year: 2022,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 3,
    img: BlogTutorial3,
    date: "May 24",
    year: 2021,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 4,
    img: BlogTutorial4,
    date: "Feb 20",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 5,
    img: BlogTutorial5,
    date: "May 24",
    year: 2021,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
  {
    id: 6,
    img: BlogTutorial6,
    date: "Mar 20",
    year: 2023,
    title:
      "10 tips for UI/UX designers who are kicking off their careers in 2023",
  },
];

export const SERVICE_SLIDER_DATA = [
  {
    id: 1,
    name: "UI/UX",
    icon: Star,
  },
  {
    id: 2,
    name: "Web Design",
    icon: Star,
  },
  {
    id: 1,
    name: "Landing Page",
    icon: Star,
  },
  {
    id: 1,
    name: "Product Design",
    icon: Star,
  },
  {
    id: 1,
    name: "Mobile Design",
    icon: Star,
  },
];
export const SERVICE_SLIDER2_DATA = [
  {
    id: 1,
    name: "Web Development",
    icon: Star,
  },
  {
    id: 2,
    name: "Digital Marketing",
    icon: Star,
  },
  {
    id: 1,
    name: "Copy Writing",
    icon: Star,
  },
  {
    id: 1,
    name: "Animation",
    icon: Star,
  },
  {
    id: 1,
    name: "Illustration",
    icon: Star,
  },
];
