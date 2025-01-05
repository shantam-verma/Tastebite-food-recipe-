// components/ErrorBoundary.js
'use client'; // Error boundaries must be Client Components

// import { useEffect } from 'react';
import { Typography } from './components/common/Typography';
import RouterButton from './components/ui/client/RouterButton';
import { useRouter } from 'next/navigation';

export default function ErrorBoundary({ error, reset }) {
  const router = useRouter();

  //   useEffect(() => {
  //     // Log the error to an error reporting service (e.g., Sentry)
  //     console.error(error);
  //   }, [error]);

  const handleRetry = () => {
    // You can reload the current page
    router.refresh();
  };

  return (
    <section className="h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <Typography
          as="h1"
          variant="h1"
          className="text-5xl font-extrabold mb-4"
        >
          Something Went Wrong
        </Typography>
        <Typography as="p" variant="body" className="text-xl mb-8">
          Oops! We encountered an error while trying to load this page.
        </Typography>
        <RouterButton
          onClick={handleRetry}
          className="px-6 py-3 font-semibold  text-white rounded-lg"
        >
          Try Again
        </RouterButton>
        <div className="mt-6">
          <RouterButton
            navigateTo="/"
            className="px-6 py-3 font-semibold rounded-lg"
          >
            Go Back to Homepage
          </RouterButton>
        </div>
      </div>
    </section>
  );
}
