"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import Spinner from '@/components/Spinner';
import { useEffect, useState } from "react";


const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "/javascript.svg", color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", icon: "/typescript.svg", color: "from-blue-400 to-blue-600" },
      { name: "Next.js", icon: "/nextjs.svg", color: "from-gray-600 to-gray-900" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/node-js.svg", color: "from-green-400 to-green-600" },
      { name: "PHP", icon: "/php.svg", color: "from-indigo-400 to-indigo-600" },
      { name: "Go", icon: "/go.svg", color: "from-sky-400 to-sky-600" },
    ]
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React", icon: "/react.svg", color: "from-cyan-400 to-cyan-600" },
      { name: "Angular", icon: "/angular.svg", color: "from-red-400 to-red-600" },
      { name: "Tailwind CSS", icon: "/tailwind.png", color: "from-teal-400 to-teal-600" },
    ]
  },
  {
    category: "Data Analytics",
    items: [
      { name: "Python", icon: "/python.svg", color: "from-blue-400 to-blue-700" },
      { name: "SQL", icon: "/sql.svg", color: "from-purple-500 to-purple-700" },
      { name: "Tableau", icon: "/tableau.svg", color: "from-indigo-400 to-indigo-600" },
      { name: "Power BI", icon: "/powerbi.svg", color: "from-yellow-500 to-yellow-700" },
      { name: "Excel", icon: "/excel.svg", color: "from-green-400 to-green-600" },
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <Card className="overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
        <div className="relative p-6 flex flex-col items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1
            }}
            className="relative w-16 h-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background to-muted rounded-full animate-pulse" />
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 relative z-10 p-2"
            />
          </motion.div>
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
      </Card>
    </motion.div>
  );
};

const SkillCategory = ({ category, items, index }: { category: string; items: any[]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold text-center md:text-left mb-6">
        {category}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build robust, scalable, and user-friendly applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              items={category.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;