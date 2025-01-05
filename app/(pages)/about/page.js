import { Typography } from '@/app/components/common/Typography';
import RouterButton from '@/app/components/ui/client/RouterButton';
import { DynamicImage } from '@/app/components/ui/server/DynamicImage';
import React from 'react';

export const metadata = {
  title: 'About TasteBite – Inspiring Your Culinary Journey',
  description:
    'At TasteBite, we believe that cooking should be fun, easy, and full of flavor. Our team curates delicious recipes that are simple to prepare, helping home cooks of all levels create memorable meals. Learn more about our mission and passion for food!',
};

function About() {
  return (
    <section>
      <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <Typography as="h1" variant="h3">
              About Us
            </Typography>
            <Typography as="p" variant="body-small">
              Welcome to TasteBite – a place where delicious and easy-to-follow
              recipes come to life! Whether you&apos;re a seasoned chef or just
              starting out, our goal is to inspire you with simple, flavorful
              meals from around the world. From quick weeknight dinners to
              indulgent desserts, we provide step-by-step instructions to make
              cooking enjoyable for everyone. Join us on a culinary adventure,
              and let&apos;s make every bite a memorable one!
            </Typography>
            <div className="mt-5">
              <RouterButton navigateTo="#" variant="link">
                Learn more about us
              </RouterButton>
              <span className="ml-2">&#8594;</span>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <DynamicImage
              url="/images/header_img.png"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
