import React, { Fragment } from 'react';
import { Typography } from '../common/Typography';
import Link from 'next/link';
import { ActionButton } from '../ui/server/ActionButton';

function SubscribeFrom() {
  return (
    <Fragment>
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative">
              <input
                type="email"
                className=" h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                name="email"
                placeholder="Enter your email"
              />
              <ActionButton className="h-10 rounded absolute top-2 text-sm right-2 px-3">
                Subscribe Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <Typography as="p" variant="small">
        By joining our newseletter you agree to our{' '}
        <Link href="/terms-conditions" className="underline">
          Terms and Conditions
        </Link>
      </Typography>
    </Fragment>
  );
}

export default SubscribeFrom;
