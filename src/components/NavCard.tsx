import React from 'react';

interface NavCardProps {
  title: string;
  description: string;
  href: string;
}

const NavCard: React.FC<NavCardProps> = ({ title, description, href }) => {
  return (
    <a
      href={href}
      className="nav-card p-5 block rounded-lg text-white transition-colors duration-200"
      style={{
        textDecoration: 'none',
      }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </a>
  );
};

export default NavCard;