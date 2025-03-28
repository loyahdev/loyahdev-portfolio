import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "zsign-swift",
    description: "This is an implementation package of zsign to sign apps in an iOS or MacOS environment.",
    technologies: ["C", "C++"],
    githubUrl: "https://opengraph.githubassets.com/1/loyahdev/zsign-swift",
    demoUrl: "https://demo.com",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "ChatGPTVision",
    description: "An iOS app using OpenAI's API to recreate the Vision examples showed in demos for ChatGPT.",
    technologies: ["Swift", "Python"],
    githubUrl: "https://opengraph.githubassets.com/1/loyahdev/ChatGPTVision",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "FaceAI",
    description: "This is a project for a tech class in school to display the possibilities of open source AI Models.",
    technologies: ["HTML"],
    githubUrl: "https://opengraph.githubassets.com/1/loyahdev/FaceAI",
    demoUrl: "https://demo.com",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "certificates",
    description: "The best and most reliable source for the latest iOS Enterprise Development Certificates. Now Deprecated.",
    technologies: ["HTML", "JavaScript"],
    githubUrl: "https://opengraph.githubassets.com/1/loyahdev/certificates",
    demoUrl: "https://demo.com",
    imageUrl: "/placeholder.svg",
  },
];

const ProjectGrid = () => {
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
