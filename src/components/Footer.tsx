import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github as GitHub, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const links = [
        { path: '/#home', label: 'Home' },
        { path: '/#about', label: 'About' },
        { path: '/#projects', label: 'Projects' },
        { path: '/#contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: <GitHub size={20} />, href: 'https://github.com/usmancout', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/usmancout', label: 'LinkedIn' },
        { icon: <Mail size={20} />, href: 'mailto:usman.cout@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                            Usman
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Crafting digital experiences with passion and precision. Let's build something amazing together.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.path}>
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Contact</h4>
                        <p className="text-gray-400 text-sm mb-2">Email: usman.cout@gmail.com</p>
                        <p className="text-gray-400 text-sm">Location: Lahore, Pakistan</p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Usman. All Rights Reserved.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
                        Made with <Heart size={14} className="text-red-500" /> using React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;