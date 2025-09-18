import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const angles = ['-rotate-[8deg]', '-rotate-[4deg]', 'rotate-[4deg]', 'rotate-[8deg]'];

const PhotoCards = () => {
  return (
    <div className="mt-12 flex justify-center gap-4 flex-wrap px-4 relative z-10 ">
      {angles.map((angle, index) => (
        <Card
          key={index}
          className={`w-32 h-40 sm:w-36 sm:h-44 bg-white ${angle} shadow-lg rounded-xl `}
        >
          <CardContent className="w-full h-full bg-gray-100 rounded-xl" />
        </Card>
      ))}
    </div>
  );
};

export default PhotoCards;
