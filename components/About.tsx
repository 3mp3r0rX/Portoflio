"use client";

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const gradientVariants = {
    hidden: { opacity: 0.7, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
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
              <motion.div
                className="absolute inset-0 rounded-lg"
                variants={gradientVariants}
              />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Web Developer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Passionate about building modern web applications with a focus on
                  clean code, performance, and best practices.
                </p>
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
              <motion.div
                className="absolute inset-0 rounded-lg"
                variants={gradientVariants}
              />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2" /> UI/UX Lover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Enthusiastic about designing user-friendly interfaces and creating
                  engaging digital experiences.
                </p>
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
              <motion.div
                className="absolute inset-0 rounded-lg"
                variants={gradientVariants}
              />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" /> Tech Enthusiast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Constantly exploring the latest tech trends and leveraging them
                  to create efficient solutions to real-world problems.
                </p>
              </CardContent>
            </AnimatedGradientCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
