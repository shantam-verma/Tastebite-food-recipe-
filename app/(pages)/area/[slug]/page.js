import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { getFilterResults } from '@/app/hooks/filter';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function Area({ params }) {
  let slug = (await params).slug;
  slug = slug.charAt(0).toUpperCase() + slug.slice(1);
  const param = { a: slug };

  const filter = await getFilterResults(param);

  if (!filter) {
    notFound();
  }

  return (
    <Suspense fallback={<CommonCardShimmerUi />}>
      <CommonCard data={filter} />
    </Suspense>
  );
}
