import React from 'react';
import RouterButton from './components/ui/client/RouterButton';
import { Typography } from './components/common/Typography';

export default function NotFound() {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Typography
            as="h1"
            variant="h1"
            className="mb-8 font-extrabold text-9xl"
          >
            <span className="sr-only">Error</span>404
          </Typography>
          <Typography
            as="h2"
            variant="h2"
            className="text-2xl font-semibold md:text-3xl"
          >
            Sorry, we couldn&apos;t find this page.
          </Typography>
          <Typography as="p" variant="body" className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </Typography>
          <RouterButton
            rel="noopener noreferrer"
            navigateTo="/"
            className="px-8 py-3 font-semibold rounded"
          >
            Back to homepage
          </RouterButton>
        </div>
      </div>
    </section>
  );
}
