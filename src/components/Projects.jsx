import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "MyAuth – Authentication Service",
      timeline: "Dec 24 – Jan 25",
      bullets: [
        "Modular auth and email service in Next.js + TypeScript",
        "Secure JWT verification, reusable API components",
        "Built scalable REST API system for external services"
      ],
      stack: "Next.js, TypeScript, JWT, Nodemailer, REST APIs",
      buttons: [
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Harmony AI – Context-Aware Chatbot",
      timeline: "March 25 – April 25",
      bullets: [
        "Built a context-aware chatbot with modular auth workflows",
        "Next.js + Express.js architecture for clean scalability",
        "Deployed on Vercel with reusable API components"
      ],
      stack: "Next.js, Express.js, TS/JS, REST APIs, Vercel",
      buttons: [
        { text: "Live", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="text-sm text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded">
                {project.timeline}
              </span>
            </div>

            <ul className="mb-4 space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-gray-300 flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <p className="text-sm text-gray-400">
                <span className="font-medium">Stack:</span> {project.stack}
              </p>
            </div>

            <div className="flex space-x-3">
              {project.buttons.map((button, i) => (
                <a
                  key={i}
                  href={button.url}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    i === 0
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900/30'
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;