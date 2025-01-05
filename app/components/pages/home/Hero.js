import React from 'react';
import { DynamicImage } from '../../ui/server/DynamicImage';
import { Typography } from '../../common/Typography';

export function Hero() {
  return (
    <div className="w-full h-full relative">
      <DynamicImage
        url="/images/header_img.png"
        alt="Tastebite cover image"
        className="w-full h-auto"
      />
      <Typography
        as="h1"
        variant="h1"
        className="absolute bottom-[10%] left-0 text-white bg-black bg-opacity-50 p-4"
      >
        Cooking Made Simple: Find Your Next Favorite Recipe
      </Typography>
    </div>
  );
}
