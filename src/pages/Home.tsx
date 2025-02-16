import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [designationIndex, setDesignationIndex] = React.useState(0);
  const [typedText, setTypedText] = React.useState('');
  const fullText = "Building digital experiences that make a difference";
  
  const designations = [
    { 
      text: "I am a Web Developer",
      description: "crafting beautiful and responsive web experiences",
      color: "from-blue-400 to-cyan-400" 
    },
    { 
      text: "I am an OSINT Analyst",
      description: "uncovering digital footprints and analyzing data patterns",
      color: "from-purple-400 to-pink-400" 
    },
    { 
      text: "I am an AI Developer",
      description: "building intelligent solutions for tomorrow's challenges",
      color: "from-green-400 to-emerald-400" 
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex((prev) => (prev + 1) % designations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact', { 
        state: { 
          animation: {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.5 }
          }
        }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black -z-10" />
      
      <div className="max-w-4xl text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover ring-4 ring-purple-500/30"
        />
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Usman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 mb-6"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.p>
        
        <div className="h-24 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={designationIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <p className={`text-2xl font-bold bg-gradient-to-r ${designations[designationIndex].color} text-transparent bg-clip-text`}>
                {designations[designationIndex].text}
              </p>
              <p className="text-gray-400 text-lg">
                {designations[designationIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex gap-4">
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2"
            >
              Contact Me
              <ArrowDown size={18} className="animate-bounce" />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
            >
              Resume
              <FileDown size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;