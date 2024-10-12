"use client"

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedGradientCard>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Web Developer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experienced in both frontend and backend technologies, creating seamless web applications.</p>
              </CardContent>
            </AnimatedGradientCard>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedGradientCard>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2" /> UI/UX Enthusiast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Passionate about creating intuitive and visually appealing user interfaces.</p>
              </CardContent>
            </AnimatedGradientCard>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatedGradientCard>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" /> Problem Solver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Adept at finding innovative solutions to complex technical challenges.</p>
              </CardContent>
            </AnimatedGradientCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;