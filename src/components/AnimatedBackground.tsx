"use client";

import React, { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      // Update viewport dimensions
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Update the full page (document) height
      setPageHeight(document.body.scrollHeight);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Fade in stars after a short delay
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Base density: e.g., 50 stars per viewport height
  const baseStars = 30;
  const numStars = viewport.height > 0 ? Math.ceil(baseStars * (pageHeight / viewport.height)) : baseStars;

  return (
    // This container is absolutely positioned relative to the page.
    // Its height is set to the full page height, so the stars are anchored on the page.
    <div
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: pageHeight }}
    >
      {Array.from({ length: numStars }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkling-stars transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            // Position each star randomly within the full page dimensions.
            top: `${Math.random() * pageHeight}px`,
            left: `${Math.random() * viewport.width}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;