import ApiServices from '@/app/api/apiServices';
import { CommonCard } from '@/app/components/ui/cards/CommonCard';
import CommonCardShimmerUi from '@/app/components/ui/shimmer/CommonCardShimmer';
import { Suspense } from 'react';

export default async function All({ params }) {
  const slug = (await params).slug;
  let response = [];
  try {
    const filterParams =
      slug === 'trending' ? { c: 'Vegetarian' } : { c: 'Seafood' };
    response = await ApiServices.fetchFilter(filterParams);
  } catch (error) {
    return 'Somthing went wrong';
  }
  return (
    <Suspense fallback={<CommonCardShimmerUi />}>
      <CommonCard data={response} />
    </Suspense>
  );
}
