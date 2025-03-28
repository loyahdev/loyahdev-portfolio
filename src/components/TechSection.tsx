import React from "react";
import TechCard from "./TechCard";

const TechSection = ({ title, technologies }: { title: string; technologies: Array<{ icon: React.ReactNode; name: string; iconBgColor: string }> }) => {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            iconBgColor={tech.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TechSection;