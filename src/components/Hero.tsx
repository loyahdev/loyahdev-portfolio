import React from "react";
import gsap from "gsap";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start mb-10 pt-20">
      <div className="max-w-2xl">
        <div className="flex items-baseline gap-2 mb-2">
          <h1 className="text-5xl font-bold">
            <span className="text-primary text-5xl font-normal">loyahdev</span>,
          </h1>
        </div>
        <h2 className="text-3xl mb-6">full-stack developer</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I'm a full-stack 14-year-old developer and tech house dj 🎛️ from Canada 🇨🇦 that's been
          coding for 6 years, learning{" "}
          <span className="text-primary">JavaScript</span>,{" "}
          <span className="text-primary">Swift</span>,{" "}
          <span className="text-primary">Python</span>, &{" "}
          <span className="text-primary">Web</span> development.
          <br />
          <a
            href="https://tks.world"
            className="text-purple-700 underline hover:text-purple-600"
          >
            TKS 2024-2025 Innovate Student
          </a>
        </p>
      </div>
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 md:mb-0">
        <img
          src="https://avatars.githubusercontent.com/u/68242406?v=4"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;