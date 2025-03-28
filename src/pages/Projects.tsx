import React, { useState } from "react";
import TechCard from "../components/TechCard";
import RekTechCard from "../components/RekTechCard";
import NavCard from "../components/NavCard";
import MenuModal from "../components/MenuModal";
import { Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import MusicPlayer from "../components/MusicPlayer";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import AnimatedBackground from "../components/AnimatedBackground";
import {
  Terminal,
  Globe,
  Database,
  FileCode,
  Package,
  Github,
} from "lucide-react";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
    <AnimatedBackground />
      <nav className="fixed top-0 left-0 right-0 p-6 flex items-center justify-between backdrop-blur-sm bg-transparent z-100">
        <div className="flex items-center">
          <div
            className="bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              gsap.to(window, {
                scrollTo: 0,
                duration: 1.5,
                ease: "power2.inOut",
              });
            }}
          >
            <a href="/">
              <img
                src="/dj-logo.png"
                alt="DJ Logo"
                className="h-12 w-auto rounded-lg"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/*<button className="text-white hover:text-primary transition-colors">
            <Sun className="w-6 h-6" />
          </button>
          {/* Hamburger/X Toggle stuff */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white hover:text-primary transition-colors"
            animate={{ rotate: menuOpen ? 90 : 0 }} // Rotation animation
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Menu Modal */}
      <MenuModal open={menuOpen} onOpenChange={setMenuOpen} />
      <div className="container mx-auto px-0 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-0 pt-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-portfolio-dark text-center mb-10">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed text-center phone-desc">
              Heres some of my projects, this will be updated often with new
              things.{"\n"}
              Feel free to explore and contribute to my projects. Your feedback
              is always welcome! 💪{"\n"}
              <br />
              <a
                href="https://github.com/loyahdev"
                className="text-purple-700 underline hover:text-purple-600"
              >
                My Github
              </a>
            </p>
          </div>
        </div>

        <ProjectGrid />
        {/*iconBgColor="#0A69FF"*/}

        {/* Footer */}
        <footer className="footer mt-20 md:mt-50 text-center text-sm text-gray-400">
          <p>2024 - loyahdev</p>
          <p>Built with Next.js</p>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
