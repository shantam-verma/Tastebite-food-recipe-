import React, { Fragment } from 'react';
import { Typography } from '../../common/Typography';
import { ActionCard } from '../../ui/cards/ActionCard';
import { getCategoriesResults } from '@/app/hooks/categories';

export async function MealCategories() {
  const categories = await getCategoriesResults();
  return (
    <Fragment>
      <Typography as="h2" variant="h3">
        Categories
      </Typography>
      <div className="mt-8">
        <ActionCard data={categories} />
      </div>
    </Fragment>
  );
}
