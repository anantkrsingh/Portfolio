"use client";
import { projects } from "@/data";
import { motion } from "framer-motion";
import { ProjectBentoGrid, ProjectBentoItem } from "./ui/project-bento";

const RecentProjects = () => {
  return (
    <section className="section-padding relative" id="projects">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="subheading">
            A collection of projects that showcase my skills and passion for building digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectBentoGrid className="py-4">
            {projects.map((item) => (
              <ProjectBentoItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.des}
                logo={item.logo}
                iconLists={item.iconLists}
                link={item.link}
                accentColor={item.accentColor}
              />
            ))}
          </ProjectBentoGrid>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
