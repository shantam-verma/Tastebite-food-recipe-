import ApiServices from '@/app/api/apiServices';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export default async function Area({ params }) {
  let slug = (await params).slug;
  slug = slug.charAt(0).toUpperCase() + slug.slice(1);
  console.log('slug', slug);
  let response = [];
  try {
    response = await ApiServices.fetchFilter({ a: slug });
  } catch (error) {
    console.error('Error fetching filter:', error);
  }

  if (!response) {
    notFound();
  }

  return (
    <Suspense fallback={<CommonCardShimmerUi />}>
      <CommonCard data={response} />
    </Suspense>
  );
}
