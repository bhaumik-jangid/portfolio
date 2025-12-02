import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    Languages: ['C', 'C++', 'JavaScript', 'Python'],
    Frameworks: ['HTML5', 'CSS3', 'Tailwind CSS', 'MERN (MongoDB, Express, React.js, Node.js)', 'Next.js', 'GitHub'],
    'Tools/Databases': ['MySQL', 'MongoDB'],
    'Soft Skills': ['Problem-Solving', 'Team Player', 'Keen Observer', 'Quick Learner', 'Adaptability']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-300 bg-gray-800/50 px-3 py-2 rounded-lg hover:bg-indigo-900/30 transition-colors duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;