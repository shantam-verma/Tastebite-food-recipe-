import React, { Fragment } from 'react';
import { Typography } from '../../common/Typography';
import { RoundedCard } from '../../ui/cards/RoundedCard';
import { COUNTRIES } from '@/app/utils/data';
import RouterButton from '../../ui/client/RouterButton';

export async function BrowseByCountry() {
  const countriesFlag = COUNTRIES.slice(0, 6);
  return (
    <Fragment>
      <div className="flex justify-between items-end">
        <Typography as="h2" variant="h3">
          Browse Country
        </Typography>
        <RouterButton navigateTo={'/area'} variant="link">
          View all
        </RouterButton>
      </div>
      <div className="mt-8">
        <RoundedCard data={countriesFlag} />
      </div>
    </Fragment>
  );
}
