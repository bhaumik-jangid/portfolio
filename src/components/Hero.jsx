import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.1)_0,_transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 mx-auto max-w-7xl text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-block mb-6 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-indigo-300">B.Tech CSE Student & Web Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Bhaumik Jangid</span>
        </motion.h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-16">
          <TypeAnimation
            sequence={[
              'Backend-leaning MERN & Next.js Developer',
              2000,
              'I build scalable backends and clean APIs',
              2000,
              'Passionate about authentication systems',
              2000,
              'Focused on practical engineering',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-12"
        >
          I'm a Computer Science student who loves building scalable backends, clean APIs, and user-focused products.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border-2 border-indigo-500 text-white font-medium hover:bg-indigo-500/10 transition-all"
          >
            Contact Me
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
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
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;