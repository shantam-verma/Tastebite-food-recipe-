import React, { Fragment, Suspense } from 'react';
import { Typography } from '../../common/Typography';
import { CommonCard } from '../../ui/cards/CommonCard';
import RouterButton from '../../ui/client/RouterButton';
import CommonCardShimmerUi from '../../ui/shimmer/CommonCardShimmer';
import { notFound } from 'next/navigation';
import { getFilterResults } from '@/app/hooks/filter';

export async function TrendingNow() {
  const params = { c: 'Vegetarian' };

  let filter = await getFilterResults(params);
  filter = filter?.slice(0, 8);

  if (!filter) {
    notFound();
  }

  return (
    <Fragment>
      <div className="flex justify-between items-end">
        <Typography as="h2" variant="h3">
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
