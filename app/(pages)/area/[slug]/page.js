import { RoundedCard } from '@/app/components/ui/cards/RoundedCard';
import { COUNTRIES } from '@/app/utils/data';
import React from 'react';

export default async function Area({ params }) {
  const slug = (await params).slug;

  return <RoundedCard data={COUNTRIES.slice(0, 27)} />;
}
