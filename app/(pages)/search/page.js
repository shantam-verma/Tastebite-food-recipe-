import SearchForm from '@/app/components/forms/Search';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import { getSearchResults } from '@/app/hooks/search';
import React, { Fragment, Suspense } from 'react';
import CommonCardShimmerUi from '../../components/ui/shimmer/CommonCardShimmer';

export const metadata = {
  title: 'Find Your Next Favorite Recipe at TasteBite',
  description:
    "Looking for a specific dish or need some inspiration? Use our search to explore a wide range of recipes, from hearty meals to sweet indulgences. Whatever you're craving, we’ll help you find the perfect recipe to satisfy your taste!",
};

export default async function Search({ searchParams }) {
  const { query } = await searchParams;
  const results = await getSearchResults(query);

  return (
    <Fragment>
      <SearchForm />
      <div className="text-center mt-10">
        <Suspense fallback={<CommonCardShimmerUi />}>
          <CommonCard data={results} />
        </Suspense>
      </div>
    </Fragment>
  );
}
