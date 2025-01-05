import React, { Fragment, Suspense } from 'react';
import ApiServices from '@/app/api/apiServices';
import { Typography } from '@/app/components/common/Typography';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import { DynamicImage } from '@/app/components/ui/server/DynamicImage';
import { notFound } from 'next/navigation';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { getCategoriesResults } from '@/app/hooks/categories';
import { getFilterResults } from '@/app/hooks/filter';

export default async function Meal({ params }) {
  let slug = (await params).slug;
  let [meal, category] = slug.split('-');
  let data;
  let response = [];
  if (meal === 'meal' && category) {
    category = category.charAt(0).toUpperCase() + category.slice(1);

    const categories = await getCategoriesResults();
    data = categories.find((ele) => ele?.strCategory === category);
    const params = { c: category };

    response = await getFilterResults(params);
  }

  if (meal !== 'meal' || !category || !response) {
    notFound();
  }

  return (
    <Fragment>
      <div className="container m-auto">
        <div className="float-left pr-5">
          <DynamicImage url={data.strCategoryThumb} alt={data?.strCategory} />
        </div>
        <div className="text-justify">
          <Typography as={'h1'} variant={'h2'}>
            {data?.strCategory}
          </Typography>
          <Typography as="p" variant={'body-small'}>
            {data?.strCategoryDescription}
          </Typography>
        </div>
      </div>
      <div className="pt-9 clear-both">
        {/* <Typography as="h2" variant="h3">
          More
        </Typography> */}
        <Suspense fallback={<CommonCardShimmerUi />}>
          <CommonCard data={response} />
        </Suspense>
      </div>
    </Fragment>
  );
}
