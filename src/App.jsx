import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pp from "./assets/profile.jpeg";

// --- HELPER DATA & CONFIG ---

const portfolioData = {
  name: "Rahul Sain",
  title: "Creative Developer & FrontEnd Engineer",
  email: "sainrahul374@gmail.com",
  socials: {
    github: "https://github.com/Anos714",
    linkedin: "https://www.linkedin.com/in/rahul-sain-2190a2315",
  },
  about: {
    description: `Hello! I’m Rahul Sain ,a B.Tech student passionate about technology, with a strong foundation in web development and Python programming. I enjoy building responsive, user-friendly websites and working on backend logic using modern tools and frameworks.

My technical skills include HTML, CSS, JavaScript, React, and Node.js for web development, along with solid experience in Python for scripting, automation, and data processing tasks. I’m also familiar with version control systems like Git and have hands-on experience working on team projects and individual prototypes.

I’m eager to keep learning, solve real-world problems through code, and collaborate with like-minded developers. Currently seeking internship opportunities where I can contribute my skills and grow in a professional environment.

Let’s connect!`,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "UI/UX Design",
      "Figma",
      "Firebase",
    ],
    experience: [
      {
        role: "Python Intern",
        company: "Onlei Technologies",
        period: "2024",
        description:
          "Working on hands-on projects in Python. Learning real-world data handling and basic automation under expert guidance",
      },
      {
        role: "Python Developer Intern",
        company: "Oneli Technologies",
        period: "2025",
        description:
          "Develop and maintain Python-based applications and software systems. Write clean, efficient, and well-documented code. Collaborate with cross-functional teams to design, develop, and deploy software solutions. Troubleshoot and debug issues in existing codebase.",
      },
    ],
  },
  projects: [
    {
      title: "Multer - A Financial Management Tool",
      description:
        "Multer is a modern, full-stack web application designed to be your central hub for personal productivity and financial management. Track expenses, manage budgets, organize tasks, build habits, and gain powerful insights into your financial life—all in one beautifully designed, responsive interface.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      imageUrl: "https://placehold.co/600x400/1a1b26/ffffff?text=Multer",
      link: "https://multer-rahul-sain.vercel.app/",
    },
    {
      title: "Apni Dukaan",
      description:
        "A modern, scalable e-commerce solution with a focus on user experience and performance. Integrated with Stripe for payments.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://placehold.co/600x400/1a1b26/ffffff?text=E-Commerce",
      link: "https://apni-dukaan-sigma.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This is my personal portfolio website, built from scratch to showcase my skills in front-end web development. It features a clean, modern design that is fully responsive and includes dynamic, on-scroll animations.",
      tags: ["HTML5", "Css3", "JavaScript"],
      imageUrl: "https://placehold.co/600x400/1a1b26/ffffff?text=Portfolio",
      link: "https://rahulsainportfolio714.vercel.app/",
    },
    // {
    //   title: "DataViz Dashboard",
    //   description:
    //     "An analytics dashboard for visualizing complex datasets, providing insights through interactive charts and graphs.",
    //   tags: ["D3.js", "React", "GraphQL"],
    //   imageUrl: "https://placehold.co/600x400/1a1b26/ffffff?text=DataViz",
    //   link: "#",
    // },
  ],
};

// --- SVG ICONS (as components) ---

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -30,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// --- COMPONENTS ---

const Sidebar = ({
  activeView,
  setActiveView,
  setSidebarOpen,
  theme,
  toggleTheme,
}) => {
  const navItems = [
    { id: "home", icon: <HomeIcon />, label: "Home" },
    { id: "about", icon: <UserIcon />, label: "About" },
    { id: "projects", icon: <CodeIcon />, label: "Projects" },
    { id: "contact", icon: <MailIcon />, label: "Contact" },
  ];

  return (
    <aside className="w-64 h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md text-gray-700 dark:text-gray-200 p-6 flex flex-col">
      <div className="flex-shrink-0">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={pp}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-teal-500 dark:border-teal-400 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white break-words">
              {portfolioData.name}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
              {portfolioData.title}
            </p>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveView(item.id);
                setSidebarOpen(false);
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${
                activeView === item.id
                  ? "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-300"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <div className="flex justify-center items-center space-x-4">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <LinkedinIcon />
          </a>

          <button
            onClick={toggleTheme}
            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </aside>
  );
};

const HomeView = () => {
  const words = portfolioData.title.split(" ");
  return (
    <div className="flex items-center justify-center h-full text-center min-h-[85vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 break-words">
          Welcome to My Digital Space
        </motion.h1>
        <motion.h2 className="text-xl sm:text-2xl md:text-3xl text-teal-600 dark:text-teal-300">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              style={{ display: "inline-block", marginRight: "0.5rem" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base md:text-lg"
        >
          I build things for the web. Explore my work and get in touch.
        </motion.p>
      </motion.div>
    </div>
  );
};

const AboutView = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-12"
  >
    <motion.div variants={itemVariants}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {portfolioData.about.description}
      </p>
    </motion.div>

    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {portfolioData.about.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 text-teal-800 dark:bg-gray-800 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Experience
      </h3>
      <div className="space-y-6 border-l-2 border-gray-300 dark:border-gray-700 pl-6">
        {portfolioData.about.experience.map((exp) => (
          <div key={exp.company} className="relative">
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-teal-500 dark:bg-teal-400 border-4 border-gray-100 dark:border-gray-900"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {exp.period}
            </p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {exp.role}
            </h4>
            <p className="text-md text-gray-700 dark:text-gray-300 font-light">
              {exp.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsView = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      My Projects
    </h2>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
    >
      {portfolioData.projects.map((project) => (
        <motion.div
          key={project.title}
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 transition-shadow hover:shadow-teal-500/10 dark:hover:shadow-teal-500/20"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 break-words">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm break-words">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 text-teal-800 dark:bg-gray-800 dark:text-teal-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
            >
              <span>View Project</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const ContactView = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
      Get In Touch
    </h2>
    <div className="bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-8 rounded-lg max-w-2xl mx-auto text-center">
      <motion.p
        variants={itemVariants}
        className="text-gray-700 dark:text-gray-300 mb-4 text-lg break-words"
      >
        I'm currently open to new opportunities and collaborations. Feel free to
        reach out!
      </motion.p>
      <motion.a
        variants={itemVariants}
        href={`mailto:${portfolioData.email}`}
        className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors text-lg"
      >
        Say Hello
      </motion.a>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
      >
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Or find me on social media:
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <LinkedinIcon />
          </a>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const MenuToggle = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    className="md:hidden p-3 fixed top-4 right-4 z-30 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-900 dark:text-white focus:outline-none backdrop-blur-sm"
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <motion.path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 4 6 L 20 6" },
          open: { d: "M 6 18 L 18 6" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M 4 12 L 20 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 4 18 L 20 18" },
          open: { d: "M 6 6 L 18 18" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);

const MainContent = ({ activeView }) => {
  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView />;
      case "about":
        return <AboutView />;
      case "projects":
        return <ProjectsView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={pageTransition}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

const gridStyleLight = {
  backgroundImage:
    "linear-gradient(to right, rgba(209, 213, 219, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.4) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};
const gridStyleDark = {
  backgroundImage:
    "linear-gradient(to right, rgba(55, 65, 81, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(55, 65, 81, 0.4) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

const App = () => {
  const [activeView, setActiveView] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans relative transition-colors duration-300"
      style={theme === "dark" ? gridStyleDark : gridStyleLight}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex min-h-screen relative z-10">
        <div
          className={`fixed inset-0 bg-black/50 z-10 md:hidden ${
            sidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={`transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out fixed h-screen z-20`}
        >
          <Sidebar
            activeView={activeView}
            setActiveView={setActiveView}
            setSidebarOpen={setSidebarOpen}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>

        <div className="flex-1 flex flex-col md:ml-64">
          <MenuToggle
            isOpen={sidebarOpen}
            toggle={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="flex-1 overflow-y-auto">
            <MainContent activeView={activeView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
