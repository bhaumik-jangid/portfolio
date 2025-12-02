import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-8 text-white"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg"
      >
        <p className="text-gray-300 mb-4">
          3rd-year B.Tech CSE student @ LPU with a passion for blending problem-solving, curiosity, and clean engineering principles.
        </p>
        <p className="text-gray-300">
          I particularly enjoy working on authentication systems, building robust APIs, and developing context-aware applications that provide seamless user experiences.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;