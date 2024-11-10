"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Lightbulb, Rocket, LineChart, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold pt-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm <span className="gradient-text">Majed El-Naser</span>
        </motion.h1>

        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting Digital Experiences
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center">
            <Code className="mr-2" size={24} />
            <span>Web Developer</span>
          </div>
          <div className="flex items-center">
            <Lightbulb className="mr-2" size={24} />
            <span>Problem Solver</span>
          </div>
          <div className="flex items-center">
            <Rocket className="mr-2" size={24} />
            <span>Tech Enthusiast</span>
          </div>
          <div className="flex items-center">
            <LineChart className="mr-2" size={24} />
            <span>Data Analyst</span>
          </div>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Transforming ideas into elegant, efficient, and user-centric digital solutions. Let's build something amazing together!
        </motion.p>

        <motion.div
          className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/Projects" passHref>
            <Button size="lg" className="w-full sm:w-auto">
              Explore My Work
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
          <Link href="/Contact" passHref>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>
          <Link href="/Majed-El-naser.pdf" passHref>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download My CV
              <Download className="ml-2" size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
