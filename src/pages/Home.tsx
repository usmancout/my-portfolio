import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [designationIndex, setDesignationIndex] = React.useState(0);
  const [typedText, setTypedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 1000;

  const designations = ["a Web Developer", "an AI Developer", "an OSINT Analyst"];

  React.useEffect(() => {
    let timeout;
    const currentText = designations[designationIndex];

    if (!isDeleting && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => currentText.substring(0, prev.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setDesignationIndex((prev) => (prev + 1) % designations.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, designationIndex]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black -z-10" />

        <div className="w-full max-w-6xl mx-auto">
          <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center lg:hidden"
          >
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400"
                alt="Profile"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover ring-4 ring-purple-500/30"
            />
          </motion.div><div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  Hi, I am Usman Ali
                </h1>

                <div className="h-16 sm:h-20 lg:h-24">
                  <p className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
                    {typedText}
                    <span className="text-purple-400 animate-blink">|</span>
                  </p>
                </div>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg text-gray-400 mt-6 max-w-2xl mx-auto lg:mx-0">
                  Welcome! I'm a versatile Web Developer, AI Developer, and OSINT Analyst. I specialize in building dynamic web applications, developing AI-powered solutions, and conducting in-depth digital investigations. With expertise in cutting-edge technologies, I create innovative and impactful solutions. Explore my portfolio to see my work!
                </motion.p>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start mt-8">
                  <div className="flex space-x-6">
                    <a href="https://github.com/usmancout" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                      <GitHub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/usmancout" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:usman.cout@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                      <Mail size={24} />
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <motion.button onClick={handleContactClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2">
                      Contact Me
                      <ArrowDown size={18} className="animate-bounce" />
                    </motion.button>
                    <motion.a href="/resume.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2">
                      Resume
                      <FileDown size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="hidden lg:block ml-8 flex-shrink-0">
              <img src="hello.jpg" alt="Profile"
                   className="w-64 h-64 rounded-full object-cover ring-4 ring-purple-500/30"/>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

export default Home;