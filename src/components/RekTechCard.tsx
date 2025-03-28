import React from 'react';
import { Icon } from 'lucide-react';

interface TechCardProps {
  icon: React.ReactNode | React.ReactNode[]; // Allows single or multiple SVGs
  name: string;
  iconBgColor?: string; // Allows dynamic background color or gradients
}

const RekTechCard: React.FC<TechCardProps> = ({ icon, name, iconBgColor }) => {
  return (
    <div className="group relative flex items-center gap-3 rounded-md p-2.5 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl overflow-hidden transition-transform duration-500 ease-out hover:scale-105 hover:rotate-2 hover:shadow-xl">
      <div
        className="p-2 flex items-center justify-center rounded-lg transition-shadow duration-500 ease-in-out group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        style={{
          background: iconBgColor || "#007acc26", // Default background or gradient
        }}
      >
        <div style={{ transform: "scale(1.5)", transformOrigin: "center" }}>
          {Array.isArray(icon) ? (
            icon.map((svg, index) => <div key={index}>{svg}</div>) // Render multiple SVGs
          ) : (
            icon // Render a single SVG
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-black/75 dark:text-slate-200">
        {name}
      </span>
    </div>
  );
};

export default RekTechCard;