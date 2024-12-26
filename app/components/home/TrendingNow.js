import React, { Fragment } from 'react';
import { Typography } from '../common/Typography';
import { CommonCard } from '../ui/cards/CommonCard';
import ApiServices from '@/app/api/apiServices';
import RouterButton from '../ui/client/RouterButton';

export async function TrendingNow() {
  let filter = [];
  try {
    filter = await ApiServices.fetchFilter();
    filter = filter.slice(0, 4);
    console.log('filter', filter);
  } catch (error) {
    console.error('Error fetching filter:', error);
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
        <CommonCard data={filter} />
      </div>
    </Fragment>
  );
}
