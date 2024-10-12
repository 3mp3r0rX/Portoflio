"use client"

import { motion } from 'framer-motion';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedGradientCard } from '@/components/ui/animated-gradient-card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Front-end Web Development",
      issuer: "IT-School",
      date: "2022",
      skills: ["HTML","CSS", "Javascript", "Typescript", "React", "Vite", 'Webpack']
    },
    {
      title: "IBM Front-End Developer Professional Certificate",
      issuer: "IBM",
      date: "2024",
      skills: ["UI/UX", "React", "Introscution to Software Engineering"]
    },
    {
      title: "Designing User Interfaces and Experiences (UI/UX)",
      issuer: "IBM",
      date: "2022",
      skills: ["Website Wireframe", "User Interface design (UI Design)", "Progressive Web Development", "Figma", "User Experience"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="py-20 ">
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
                  <p className="text-sm text-muted-foreground mb-4 flex items-center">
                    <CalendarIcon className="mr-2" size={16} />
                    {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;