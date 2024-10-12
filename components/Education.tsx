"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Electronic Engineering",
      institution: "Trasnilvynia university of Brasov",
      year: "2018 - 2021",
    },
    {
      degree: "High School",
      institution: "Ar-Ramtha Secondary School",
      year: "2013 - 2015",
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
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
  );
};

export default Education;