"use client";

import { motion } from "framer-motion";
import { AnimatedGradientCard } from "./ui/animated-gradient-card";

const skills = [
  { name: "JavaScript", icon: <img src="/javascript.svg" alt="JavaScript" className="w-16 h-16" /> },
  { name: "TypeScript", icon: <img src="/typescript.svg" alt="TypeScript" className="w-16 h-16" /> },
  { name: "Next.js", icon: <img src="/nextjs.svg" alt="Next.js" className="w-16 h-16" /> },
  { name: "Angular", icon: <img src="/angular.svg" alt="Angular" className="w-16 h-16" /> },
  { name: "PHP", icon: <img src="/php.svg" alt="PHP" className="w-16 h-16" /> },
  { name: "React", icon: <img src="/react.svg" alt="React" className="w-16 h-16" /> },
  { name: "Node.js", icon: <img src="/node-js.svg" alt="Node.js" className="w-16 h-16" /> },
  { name: "Tailwind CSS", icon: <img src="/tailwind.png" alt="Tailwind CSS" className="w-16 h-16" /> },
  { name: "Go", icon: <img src="/go.svg" alt="Go" className="w-16 h-16" /> },
];

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-background dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-lg hover:shadow-xl transition-shadow"
            >
              <AnimatedGradientCard>
                <div className="flex flex-col items-center p-3 bg-white dark:bg-black rounded-lg">
                  {skill.icon}
                </div>
              </AnimatedGradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
