import React, { useState } from 'react';
import YouTube from 'react-youtube';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Example video IDs - replace with your own
const videoIds = [
  'e1RERQ4jwm8',
  //'igDxjwdS4z8', // New shorts video
  //'OCjS-ftnv8o',
];

const YouTubeCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const opts = {
    height: '400',
    width: '100%', // The player will fill 100% of its container
    playerVars: {
      autoplay: 0 as const, // Fixed TypeScript error by explicitly typing as 0
    },
  };

  const isSingleVideo = videoIds.length === 1;

  return (
    <div className="w-full mx-auto p-4">
      {/* Carousel container */}
      <Carousel className="w-full relative">
        <CarouselPrevious className="absolute ml-4 sm:ml-3 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-60 rounded-full p-2" />
        <CarouselNext className="absolute mr-4 sm:mr-3 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-60 rounded-full p-2" />
        
        <CarouselContent>
          {videoIds.map((videoId, index) => (
            <CarouselItem
              key={videoId}
              className={
                isSingleVideo ? 'w-full flex justify-center' : 'md:basis-1/2 lg:basis-1/3'
              }
            >
              <div className="p-1">
                <div
                  className={`${
                    isSingleVideo ? 'w-full' : index === 4 ? 'w-[70%]' : 'w-[95%]'
                  } mx-auto rounded-lg overflow-hidden shadow-lg`}
                >
                  {/* Player fills 100% of its parent */}
                  <YouTube videoId={videoId} opts={opts} className="w-full" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default YouTubeCarousel;
