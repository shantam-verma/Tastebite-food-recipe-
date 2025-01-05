import ApiServices from '@/app/api/apiServices';
import { Typography } from '@/app/components/common/Typography';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import { DynamicImage } from '@/app/components/ui/server/DynamicImage';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { slugify, unslugify } from '@/app/utils/helpers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { Fragment, Suspense } from 'react';

export default async function Ingredient({ params }) {
  const slug = (await params).slug;

  let response = [];
  try {
    response = await ApiServices.fetchFilter({ i: unslugify(slug) });
  } catch (error) {
    console.error('Error fetching filter:', error);
  }
  console.log('response098', response);
  if (!response) {
    notFound();
  }
  return (
    <Fragment>
      <div className="float-left w-full sm:w-1/3 mr-6">
        <Typography as="h1" variant="h3" className="mb-3">
          {unslugify(slug)}
        </Typography>
        <Link
          href={`https://www.themealdb.com/images/ingredients/${unslugify(slug)}.png`}
        >
          <DynamicImage
            alt={unslugify(slug)}
            className="h-40 w-40 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80"
            url={`https://www.themealdb.com/images/ingredients/${unslugify(slug)}.png`}
          />
        </Link>
      </div>
      <Typography as="h1" variant="h3">
        Meals
      </Typography>
      <div className="text-center">
        {response.length !== 0 ? (
          <Suspense fallback={<CommonCardShimmerUi ingredient={true} />}>
            <CommonCard data={response} ingredient={true} />
          </Suspense>
        ) : (
          <Typography as="h2" variant="h5" className="pt-10">
            No Meal Found
          </Typography>
        )}
      </div>
    </Fragment>
  );
}
