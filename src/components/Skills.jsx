import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'HTML/CSS', category: 'Frameworks' },
  { name: 'Tailwind CSS', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express.js', category: 'Frameworks' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'REST APIs', category: 'Tools' },
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Teamwork', category: 'Soft Skills' },
  { name: 'Adaptability', category: 'Soft Skills' },
];

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
          My Skills
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ originX: 0 }}
          />
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          Here are the technologies and skills I've worked with. I'm always learning and expanding my toolkit.
        </p>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * catIndex }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-indigo-300 mb-6"
            >
              {category}
            </motion.h3>
            
            <div className="flex flex-wrap gap-3">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * skillIndex }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(79, 70, 229, 0.5)'
                    }}
                    className="px-4 py-2 rounded-full bg-[#191919] border border-[#222] text-gray-300 hover:text-white cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;