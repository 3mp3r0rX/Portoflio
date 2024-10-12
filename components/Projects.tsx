"use client"

import Image from 'next/image';
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Projects = () => {
  const projects = [
    {
      title: "Sellify Marketplace",
      description: "A full-stack Marketplace with Typescript, React, Next.js, Go, and PostgreSQL.",
      image: "/assets/images/sellify.png", 
      demoLink: "#",
      codeLink: "https://github.com/mremperorx/sellify"
    },
    {
      title: "Uni-Abroad",
      description: "A Next.js, Typescript app, Uni-Abroad is an innovative online platform designed to help students navigate their journey of studying abroad.",
      image: "/assets/images/uni-abroad.png", 
      demoLink: "https://uni-abroad.net/",
      codeLink: "#"
    },
    {
      title: "ITAdvisX",
      description: "ITAdvisX is a comprehensive website dedicated to IT consulting and solutions, specializing in artificial intelligence and technology services. The platform offers a range of professional services, including strategic IT advice, innovative solutions, and AI integration.",
      image: "/assets/images/ITAdvisX.png", 
      demoLink: "https://it-advis-x-2.vercel.app/",
      codeLink: "https://github.com/mremperorx/ITAdvisX-2"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedGradientCard>
                <CardHeader>
                  <Image src={project.image} alt={project.title} width={800} height={600} className="rounded-t-lg" />
                  <Separator className="my-4" />
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                  </Button>
                </CardFooter>
              </AnimatedGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
