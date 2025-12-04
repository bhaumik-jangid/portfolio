import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    year: '2025',
    description: 'Completed advanced course on cloud computing concepts and implementations'
  },
  {
    title: 'C++ Programming',
    issuer: 'CipherSchools',
    year: '2025',
    description: 'Mastered object-oriented programming concepts in C++'
  },
  {
    title: 'Python & Django',
    issuer: 'CipherSchools',
    year: '2025',
    description: 'Built web applications using Python and Django framework'
  },
  {
    title: 'UX Design Foundations',
    issuer: 'Google',
    year: '2024',
    description: 'Learned principles of user experience design and research'
  }
];

const Certificates = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
          Certificates
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ originX: 0 }}
          />
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          Certifications I've earned through coursework and professional development.
        </p>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide space-x-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)'
                }}
                className="flex-shrink-0 w-72 bg-[#191919] rounded-lg border border-[#222] p-6"
              >
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.year}</span>
                </div>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;