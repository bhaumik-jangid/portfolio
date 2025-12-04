import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'MyAuth — Authentication Service',
    timeline: 'Dec 24 – Jan 25',
    description: 'Modular auth & email workflow service using Next.js + TypeScript',
    bullets: [
      'Secure JWT-based verification',
      'Scalable REST API architecture with reusable components'
    ],
    stack: ['Next.js', 'TypeScript', 'JWT', 'Nodemailer', 'REST API'],
    links: [
      { icon: <FaGithub />, url: '#', label: 'GitHub' }
    ],
    image: 'http://static.photos/technology/640x360/1'
  },
  {
    title: 'Harmony AI — Context-Aware Chatbot',
    timeline: 'March 25 – April 25',
    description: 'Context-aware chatbot with modular auth flows',
    bullets: [
      'Next.js + Express.js architecture',
      'Deployed on Vercel'
    ],
    stack: ['Next.js', 'Express.js', 'JavaScript/TypeScript', 'REST', 'Vercel'],
    links: [
      { icon: <FaExternalLinkAlt />, url: '#', label: 'Live Demo' },
      { icon: <FaGithub />, url: '#', label: 'GitHub' }
    ],
    image: 'http://static.photos/technology/640x360/2'
  }
];

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
          My Projects
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ originX: 0 }}
          />
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          Here are some of my recent projects. Each one was a learning experience and helped me grow as a developer.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 25px rgba(79, 70, 229, 0.4)'
              }}
              className="bg-[#191919] rounded-xl overflow-hidden border border-[#222]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                      {project.timeline}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <ul className="mb-4 space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-gray-400">
                        <span className="text-indigo-400 mr-2">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded bg-[#121212] text-gray-300 border border-[#222]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, color: '#00CCFF' }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="mr-2">{link.icon}</span>
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;