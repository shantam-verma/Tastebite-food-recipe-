import React, { Fragment, Suspense } from 'react';
import { Typography } from '../../common/Typography';
import { CommonCard } from '../../ui/cards/CommonCard';
import ApiServices from '@/app/api/apiServices';
import RouterButton from '../../ui/client/RouterButton';
import CommonCardShimmerUi from '../../ui/shimmer/CommonCardShimmer';
import { notFound } from 'next/navigation';

export async function TrendingNow() {
  let filter = [];
  try {
    const params = { c: 'Vegetarian' };
    filter = await ApiServices.fetchFilter(params);
    filter = filter?.slice(0, 8);
    console.log('filter', filter);
  } catch (error) {
    console.error('Error fetching filter:', error);
  }

  if (!filter) {
    notFound();
  }

  return (
    <Fragment>
      <div className="flex justify-between items-end">
        <Typography as="h2" variant="h2">
          Trending Now
        </Typography>
        <RouterButton navigateTo={'/all/trending'} variant="link">
          View all
        </RouterButton>
      </div>
      <div className="mt-8">
        <Suspense fallback={<CommonCardShimmerUi />}>
          <CommonCard data={filter} />
        </Suspense>
      </div>
    </Fragment>
  );
}
