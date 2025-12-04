import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/bhaumik-jangid/',
      name: 'LinkedIn'
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/bhaumik-jangid',
      name: 'GitHub'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:bhaumikjangid@gmail.com',
      name: 'Email'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#121212] border-t border-[#222] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Bhaumik Jangid
            </h2>
          </motion.div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#00CCFF' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Bhaumik Jangid. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;