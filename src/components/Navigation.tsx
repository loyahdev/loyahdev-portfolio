import React from "react";
import NavCard from "./NavCard";

const Navigation = () => {
  return (
    <div className="mb-20">
      <h2 className="section-title">DIRECTORY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <NavCard
            title="Blog"
            description="Updates to me and my project development."
          />
        </div>
        <div className="animate-fade-in [animation-delay:400ms] opacity-0">
          <NavCard
            title="Portfolio"
            description="Deeper meaning of who I am."
          />
        </div>
        <div className="animate-fade-in [animation-delay:600ms] opacity-0">
          <NavCard
            title="Buy iOS Certificates"
            description="I sell signing certificates for $5, Learn more."
          />
        </div>
        <div className="animate-fade-in [animation-delay:800ms] opacity-0">
          <NavCard
            title="Projects"
            description="Find out what I've made."
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;