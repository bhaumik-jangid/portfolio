import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech CSE",
      details: "CGPA 7.91"
    },
    {
      institution: "Arpan Public School",
      degree: "Intermediate",
      details: "87.2%"
    },
    {
      institution: "Atal Adarsh Bal Vidyalaya",
      degree: "Matric",
      details: "91%"
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
    hidden: { x: -30, opacity: 0 },
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
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Education
        </span>
      </motion.h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
              <span className="text-indigo-300">{edu.degree}</span>
            </div>
            <p className="text-gray-400">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;