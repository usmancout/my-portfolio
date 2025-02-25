import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github as GitHub } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data to the console (this is where you would send the data to a server)
    console.log(formData);

    // Show popup
    setShowPopup(true);

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'usman.cout@gmail.com',
      link: 'mailto:usman.cout@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Lahore, Pakistan'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+92 325 6363617',
      link: 'tel:+923256363617'
    }
  ];

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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
              <div className="space-y-8 mb-8">
                {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="text-purple-400 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        {info.link ? (
                            <a
                                href={info.link}
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              {info.value}
                            </a>
                        ) : (
                            <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                      href="https://linkedin.com/in/usmancout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                      href="https://github.com/usmancout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
                  >
                    <GitHub size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                      required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                    required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors resize-none"
                    required
                />
              </div>

              <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>

        {showPopup && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-lg"
            >
              Message sent successfully!
            </motion.div>
        )}


      </motion.div>
  );
};

export default Contact;