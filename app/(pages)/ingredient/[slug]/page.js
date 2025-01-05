import { Typography } from '@/app/components/common/Typography';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import { DynamicImage } from '@/app/components/ui/server/DynamicImage';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { getFilterResults } from '@/app/hooks/filter';
import { INGREDIENT_IMG_URL } from '@/app/utils/constants';
import { unslugify } from '@/app/utils/helpers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { Fragment, Suspense } from 'react';

export default async function Ingredient({ params }) {
  const slug = (await params).slug;
  const param = { i: unslugify(slug) };

  const filter = await getFilterResults(param);

  if (!filter) {
    notFound();
  }

  return (
    <Fragment>
      <div className="float-left w-full sm:w-1/3 mr-6">
        <Typography as="h1" variant="h3" className="mb-3">
          {unslugify(slug)}
        </Typography>
        <Link href={`${INGREDIENT_IMG_URL}${unslugify(slug)}.png`}>
          <DynamicImage
            alt={unslugify(slug)}
            className="h-40 w-40 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80"
            url={`${INGREDIENT_IMG_URL}${unslugify(slug)}.png`}
          />
        </Link>
      </div>
      <Typography as="h1" variant="h3">
        Meals
      </Typography>
      <div className="text-center">
        {filter.length !== 0 ? (
          <Suspense fallback={<CommonCardShimmerUi ingredient={true} />}>
            <CommonCard data={filter} ingredient={true} />
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
