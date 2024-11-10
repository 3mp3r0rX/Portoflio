'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGradientCard } from "@/components/ui/animated-gradient-card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, GraduationCap, Code, Palette, Zap, LineChart } from "lucide-react";
import Spinner from "@/components/Spinner";

const educationData = [
  {
    degree: "Bachelor of Electronic Engineering",
    institution: "Transilvania University of Brasov",
    year: "2018 - 2021",
  },
  {
    degree: "High School",
    institution: "Ar-Ramtha Secondary School",
    year: "2013 - 2015",
  }
];

const certifications = [
  {
    title: "Front-end Web Development",
    issuer: "IT-School",
    date: "2022",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Webpack"]
  },
  {
    title: "IBM Front-End Developer Professional Certificate",
    issuer: "IBM",
    date: "2024",
    skills: ["UI/UX", "React", "Introduction to Software Engineering"]
  },
  {
    title: "Designing User Interfaces and Experiences (UI/UX)",
    issuer: "IBM",
    date: "2022",
    skills: ["Website Wireframe", "UI Design", "Progressive Web Development", "Figma", "User Experience"]
  }
];

const aboutCards = [
  {
    icon: Code,
    title: "Web Developer",
    description: "Passionate about building modern web applications with a focus on clean code, performance, and best practices.",
    gradient: "from-blue-500 via-blue-400 to-blue-300"
  },
  {
    icon: LineChart,
    title: "Data Analyst",
    description: "Transforming complex data into actionable insights through statistical analysis and visualization techniques.",
    gradient: "from-green-500 via-green-400 to-green-300"
  },
  {
    icon: Palette,
    title: "UI/UX Lover",
    description: "Enthusiastic about designing user-friendly interfaces and creating engaging digital experiences.",
    gradient: "from-purple-500 via-purple-400 to-purple-300"
  },
  {
    icon: Zap,
    title: "Tech Enthusiast",
    description: "Constantly exploring the latest tech trends and leveraging them to create efficient solutions to real-world problems.",
    gradient: "from-pink-500 via-pink-400 to-pink-300"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AboutMePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);  
  },[]);

  return (
    <main className="relative py-20 min-h-screen">
      {loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <Spinner />
      </div>
      ) : (
        <>
          <section id="about" className="mb-20">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dedicated to creating exceptional digital experiences through innovative web development,
                  data analysis, and thoughtful design solutions.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {aboutCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div key={card.title} variants={cardVariants}>
                      <AnimatedGradientCard className="h-full">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <div className={`p-2 rounded-md bg-gradient-to-br ${card.gradient} bg-opacity-10`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            {card.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {card.description}
                          </p>
                        </CardContent>
                      </AnimatedGradientCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
              <div className="space-y-8">
                {educationData.map((edu, index) => (
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
                        <CardTitle className="flex items-center">
                          <GraduationCap className="mr-2" />
                          {edu.degree}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-semibold mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-4 flex items-center">
                          <CalendarIcon className="mr-2" size={16} />
                          {edu.year}
                        </p>
                        <Separator className="my-4" />
                      </CardContent>
                    </AnimatedGradientCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
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
                        <CardTitle>{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </CardContent>
                    </AnimatedGradientCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default AboutMePage;
