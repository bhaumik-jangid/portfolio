import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    { title: "Cloud Computing", issuer: "NPTEL", date: "July 2025" },
    { title: "C++", issuer: "CipherSchools", date: "Jan 2025" },
    { title: "Python & Django", issuer: "CipherSchools", date: "Aug 2025" },
    { title: "UX Design Foundations", issuer: "Google", date: "Oct 2024" }
  ];

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
    hidden: { x: 50, opacity: 0 },
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
          Certificates
        </span>
      </motion.h2>

      <div className="overflow-x-auto pb-6">
        <div className="flex space-x-6 w-max">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 min-w-[280px]"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
              <p className="text-indigo-300 mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;