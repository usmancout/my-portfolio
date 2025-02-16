import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github as GitHub, Folder, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'A sophisticated e-commerce platform with AI-driven product recommendations and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176375c?w=500&h=300',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      featured: true
    },
    {
      title: 'OSINT Investigation Dashboard',
      description: 'Advanced OSINT tool for digital investigations with automated data collection and analysis capabilities.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=300',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['Vue.js', 'Python', 'Elasticsearch', 'Docker'],
      featured: true
    },
    {
      title: 'Secure Communication Platform',
      description: 'End-to-end encrypted messaging platform with advanced security features and real-time collaboration.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'WebRTC', 'Node.js', 'MongoDB'],
      featured: true
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my most impactful projects, showcasing my expertise in web development,
              OSINT analysis, and AI solutions.
            </p>
          </motion.div>

          <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
                <motion.div
                    key={project.title}
                    variants={item}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    {project.featured && (
                        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          <Star size={14} />
                          Featured
                        </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Folder className="text-purple-400" size={20} />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                          <span
                              key={tag}
                              className="text-sm px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                          <GitHub size={20} />
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Projects;