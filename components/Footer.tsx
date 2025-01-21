"use client"

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Majed El-Naser. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://github.com/3mp3r0rX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github size={25} />
            </a>
            <a href="https://www.linkedin.com/in/majedel-naser" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin size={25} />
            </a>
            <a href="https://twitter.com/mrEmperorx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Twitter size={25} />
            </a>
            <a href="https://instagram.com/elnasermajed" target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-primary'>
             <Instagram />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;