import React, { Fragment } from 'react';
import { Typography } from '../common/Typography';
import { ActionCard } from '../ui/cards/ActionCard';
import ApiServices from '@/app/api/apiServices';

export async function MealCategories() {
  let categories = [];
  try {
    categories = await ApiServices.fetchAllMealCategories();
    console.log('categories', categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
  return (
    <Fragment>
      <Typography as="h2" variant="h2">
        Categories
      </Typography>
      <div className="mt-8">
        <ActionCard data={categories} />
      </div>
    </Fragment>
  );
}
