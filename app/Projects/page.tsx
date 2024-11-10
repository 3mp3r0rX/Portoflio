"use client"

import Image from 'next/image';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Github, Globe } from 'lucide-react';
import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';


const projects = [
  {
    title: "Sellify Marketplace",
    description: "A full-stack Marketplace with Typescript, React, Next.js, Go, and PostgreSQL.",
    image: "/assets/images/sellify.png",
    demoLink: "#",
    codeLink: "https://github.com/mremperorx/sellify",
    tags: ["TypeScript", "React", "Next.js", "Go", "PostgreSQL"],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Uni-Abroad",
    description: "An innovative online platform designed to help students navigate their journey of studying abroad, built with Next.js and TypeScript.",
    image: "/assets/images/Uni-Abroad.png",
    demoLink: "https://uni-abroad.net/",
    codeLink: "#",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "ITAdvisX",
    description: "A comprehensive IT consulting platform specializing in artificial intelligence and technology services, offering strategic IT advice and innovative solutions.",
    image: "/assets/images/ITAdvisX.png",
    demoLink: "https://it-advis-x-2.vercel.app/",
    codeLink: "https://github.com/mremperorx/ITAdvisX-2",
    tags: ["Next.js", "React", "AI Integration"],
    gradient: "from-orange-500 to-red-500"
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timeout); 
  }, []);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <AnimatedGradientCard className="h-full flex flex-col group">
        <CardHeader className="relative p-0 overflow-hidden aspect-video">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
          <CardDescription className="mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="p-6 flex justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group/button"
            asChild
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 transition-transform group-hover/button:rotate-12" />
              Live Demo
              <ExternalLink className="w-3 h-3 opacity-0 -translate-y-1 group-hover/button:opacity-100 group-hover/button:translate-y-0 transition-all" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group/button"
            asChild
          >
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 transition-transform group-hover/button:rotate-12" />
              View Code
              <ExternalLink className="w-3 h-3 opacity-0 -translate-y-1 group-hover/button:opacity-100 group-hover/button:translate-y-0 transition-all" />
            </a>
          </Button>
        </CardFooter>
      </AnimatedGradientCard>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;