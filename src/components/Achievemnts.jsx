import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Student Community Day Jalandhar 2025",
      role: "Team Management",
      bullets: [
        "Managed attendee onboarding",
        "Delegated volunteer tasks",
        "Supported stage operations"
      ]
    },
    {
      title: "LeetCode (Oct 2025)",
      role: "Problem Solving",
      bullets: [
        "200+ problems solved",
        "Improved DSA + problem-solving speed"
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
    hidden: { y: 30, opacity: 0 },
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
          Achievements
        </span>
      </motion.h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#121212] p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
              <span className="text-indigo-300 bg-indigo-900/30 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                {achievement.role}
              </span>
            </div>

            <ul className="space-y-2">
              {achievement.bullets.map((bullet, i) => (
                <li key={i} className="text-gray-300 flex items-start">
                  <span className="text-indigo-400 mr-2">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;