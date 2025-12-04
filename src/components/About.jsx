import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
          About Me
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ originX: 0 }}
          />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="text-gray-300 mb-4">
              I'm a 3rd-year B.Tech Computer Science student at Lovely Professional University with a passion for building robust and scalable web applications.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in web development began with a curiosity about how things work behind the scenes, which led me to specialize in backend development and API design.
            </p>
            <p className="text-gray-300 mb-4">
              I have a strong interest in authentication systems, API design, and context-aware applications. I believe in writing clean, maintainable code and following practical engineering principles.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me solving DSA problems, contributing to open-source projects, or exploring new technologies in the web ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                <img 
                  src="http://static.photos/technology/640x360/42" 
                  alt="Bhaumik Jangid" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-[#121212] px-4 py-2 rounded-full border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
              >
                <span className="text-sm font-medium text-indigo-300">3+ Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;