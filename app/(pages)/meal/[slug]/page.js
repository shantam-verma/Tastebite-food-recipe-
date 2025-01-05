import ApiServices from '@/app/api/apiServices';
import { Typography } from '@/app/components/common/Typography';
import { DynamicImage } from '@/app/components/ui/server/DynamicImage';
import { INGREDIENT_IMG_URL } from '@/app/utils/constants';
import { slugify } from '@/app/utils/helpers';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default async function SingleMeal({ params }) {
  const slug = (await params).slug;
  let response = [];
  try {
    response = await ApiServices.fetchSingleMeal({ i: slug });
    response = response?.meals?.[0];
  } catch (error) {
    console.error('Error fetching filter:', error);
  }

  const getIngredientsAndMeasures = (response) => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = response[`strIngredient${i}`];
      const measure = response[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredientsList.push({
          id: i,
          ingredient: ingredient,
          measure: measure?.trim() || '',
        });
      }
    }
    return ingredientsList;
  };

  const formatInstructions = (text) => {
    if (!text) return [];
    // Remove \r\n and normalize spaces
    const normalized = text.replace(/\r\n/g, ' ').replace(/\s+/g, ' ').trim();
    // Split by periods but keep them in the result, then filter empty strings
    return normalized
      .split(/(?<=\.)/)
      .map((line) => line.trim())
      .filter(Boolean);
  };

  const formatYoutubeLink = (str) => {
    if (!str) return '';
    let videoId = str.split('=');
    return videoId[videoId?.length - 1];
  };
  const videoId = formatYoutubeLink(response?.strYoutube);

  const ingredientsList = getIngredientsAndMeasures(response);
  const instructions = formatInstructions(response?.strInstructions);

  return (
    <Fragment>
      <div className="float-left w-full sm:w-1/3 mr-6">
        <Typography as="h1" variant="h3" className="mb-3">
          {response?.strMeal}
        </Typography>
        <Link href={response?.strMealThumb}>
          <DynamicImage
            url={response?.strMealThumb}
            alt={response?.strMeal}
            className="h-60 w-60 md:h-full md:w-full"
          />
        </Link>
      </div>
      <Typography as="h1" variant="h3">
        Ingredients
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {ingredientsList.map((ele) => (
          <Link
            href={`/ingredient/${slugify(ele.ingredient)}`}
            key={ele.id}
            className="px-3 text-center"
          >
            <DynamicImage
              alt={ele.ingredient}
              url={`${INGREDIENT_IMG_URL}${ele.ingredient}.png`}
            />
            <Typography as="p" variant="body">
              {ele.measure} {ele.ingredient}
            </Typography>
          </Link>
        ))}
      </div>
      {instructions.length !== 0 && (
        <div className="float-left w-full text-center">
          <Typography as="h2" variant="h3" className="mt-5 mb-4">
            Instructions
          </Typography>
          <div className="space-y-2 ">
            {instructions.map((step, index) => (
              <Typography
                key={index}
                as="p"
                variant="body-small"
                className="leading-relaxed"
              >
                {step}
              </Typography>
            ))}
          </div>
        </div>
      )}

      {videoId && (
        <iframe
          className="mx-auto pt-10 aspect-video self-stretch"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </Fragment>
  );
}
