import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech Computer Science',
    year: '2022 - 2026',
    details: 'CGPA: 7.91'
  },
  {
    institution: 'Arpan Public School',
    degree: 'Intermediate',
    year: '2020 - 2022',
    details: 'Percentage: 87.2%'
  },
  {
    institution: 'AABV Mandir Marg',
    degree: 'Matriculation',
    year: '2019 - 2020',
    details: 'Percentage: 91%'
  }
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative inline-block">
          Education
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
            style={{ originX: 0 }}
          />
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          My academic journey and qualifications.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-[#191919] border border-[#222] rounded-lg p-6 shadow-lg">
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                      </div>
                      <div className="pl-12">
                        <p className="text-gray-300 mb-1">{edu.degree}</p>
                        <div className="flex items-center text-sm text-gray-400 mb-2">
                          <span>{edu.year}</span>
                          <span className="mx-2">•</span>
                          <span>{edu.details}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;