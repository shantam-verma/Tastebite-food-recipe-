import ApiServices from '@/app/api/apiServices';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { getFilterResults } from '@/app/hooks/filter';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function All({ params }) {
  const slug = (await params).slug;
  const filterParams =
    slug === 'trending' ? { c: 'Vegetarian' } : { c: 'Seafood' };
  const filter = await getFilterResults(filterParams);

  if (!filter) {
    notFound();
  }

  return (
    <Suspense fallback={<CommonCardShimmerUi />}>
      <CommonCard data={filter} />
    </Suspense>
  );
}
