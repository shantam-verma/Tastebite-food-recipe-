import { RoundedCard } from '@/app/components/ui/cards/RoundedCard';
import { COUNTRIES } from '@/app/utils/data';
import React from 'react';

export default async function AllCountries() {
  return <RoundedCard data={COUNTRIES.slice(0, 27)} />;
}
