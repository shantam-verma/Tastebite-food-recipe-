'use client';
import Center from '@/app/components/ui/Center';
import LoginForm from '@/app/components/forms/LoginForm';
import React, { useEffect } from 'react';
import { Typography } from '@/app/components/common/Typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

function Register() {
  return (
    <div className=" flex justify-center items-center h-screen">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          src="/images/header_img.png"
          alt="Placeholder Image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <div className="flex flex-col gap-5 rounded-lg h-full">
          <div className="text-center w-full">
            <Typography variant="h3" as="h1" className="font-damion">
              Register Now
            </Typography>
            <Typography variant="body-small" as="div">
              Enter your username and password
            </Typography>
          </div>
          <LoginForm />
        </div>
        {/* <!-- Sign up  Link --> */}
        <Typography variant="small" as="p" className="max-w-md mx-auto pt-5">
          New to Netflix?
          <Button variant="link" className="px-1" asChild>
            <Link href="/login">Sign in.</Link>
          </Button>
        </Typography>
      </div>
    </div>
  );
}

export default Register;
