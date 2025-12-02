import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
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
      animate="visible"
      variants={containerVariants}
      className="text-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg blur opacity-75"></div>
          <div className="relative px-4 py-2 bg-[#121212] rounded-lg">
            <h2 className="text-sm font-medium text-gray-300">B.Tech CSE Student & Web Developer</h2>
          </div>
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent"
      >
        Bhaumik Jangid
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
      >
        Backend-leaning MERN & Next.js Developer
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
      >
        I'm a Computer Science student who loves building scalable backends, clean APIs, and user-focused products.
      </motion.p>

      <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
        <a
          href="https://github.com/bhaumik-jangid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhaumik-jangid/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="mailto:bhaumikjangid@gmail.com"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          aria-label="Email"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-900/30 transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;