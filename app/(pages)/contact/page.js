import { Typography } from '@/app/components/common/Typography';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Contact Us – We’re Here to Help!',
  description:
    "Have any questions, feedback, or need assistance? Reach out to us, and our team at TasteBite will get back to you as soon as possible. Whether you're looking for recipe ideas, support, or simply want to connect, we’re happy to hear from you!",
};

const ContactUs = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <Typography as="h1" variant="h3">
            Contact Us
          </Typography>
          <Typography as="p" variant="body">
            Have any questions or feedback? We’d love to hear from you!
          </Typography>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Typography as="h1" variant="h4">
              Get in Touch
            </Typography>
            <Typography as="p" variant="body">
              We&apos;re here to help. Reach out to us with any inquiries, and
              we will get back to you as soon as possible.
            </Typography>

            <div className=" space-y-4">
              <Typography as="p" variant="body">
                <strong>Email:</strong> support@tastebite.com
              </Typography>
              <Typography as="p" variant="body">
                <strong>Phone:</strong> +91 (123) 456-7890
              </Typography>
              <Typography as="p" variant="body">
                <strong>Address:</strong> 123 Flavor Street, Food City, FC 12345
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Typography as="p" variant="body">
            Looking for something else? Visit our{' '}
            <Link href="/" className="text-blue-500 hover:underline">
              Home Page
            </Link>
            .
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
