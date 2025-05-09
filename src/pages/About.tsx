import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Search, Shield, Terminal, Github as Git, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'Expert in Angular, HTML CSS, intermediate React, Typescript, and modern JavaScript. Building responsive and accessible web applications.',
      tools: ['React', 'Angular', 'TypeScript', 'Tailwind CSS','HTML']
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description: 'Proficient in building scalable APIs and managing databases with modern technologies.',
      tools: ['Node.js', 'Python', 'Flask', 'Django', 'MongoDB', 'Rest API']
    },
    {
      icon: <Search size={24} />,
      title: 'OSINT Analysis',
      description: 'Skilled in digital investigation and data analysis using advanced research techniques.',
      tools: ['Have I Been Pwned', 'SpiderFoot ', 'OSINT Framework', 'Data Analysis']
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Development',
      description: 'Experienced in developing AI solutions and implementing machine learning models.',
      tools: ['TensorFlow', 'Neural Networks', 'Keras','Scikit-learn', 'Pandas', 'Numpy']
    },
    {
      icon: <Shield size={24} />,
      title: 'Security',
      description: 'Strong focus on implementing secure coding practices and vulnerability assessment.',
      tools: ['GitHub Advanced Security ', 'Security Auditing', 'Encryption', 'Codacy']
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps',
      description: 'Experience with cloud platforms and containerization technologies.',
      tools: ['Next Cloud', 'AWS', 'AWS S3', 'AWS EC2']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen pt-20 px-4 bg-gradient-to-b from-gray-900 to-black pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate technologist with over 1.5+ years of experience in full-stack development,
              OSINT analysis, and AI development. My approach combines technical expertise with
              creative problem-solving to deliver innovative solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
                <motion.div
                    key={skill.title}
                    variants={item}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="text-purple-400 mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                        <span
                            key={tool}
                            className="text-sm px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                        >
                    {tool}
                  </span>
                    ))}
                  </div>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
  );
};

export default About;
