'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AUTH_PATHS } from '@/app/utils/data';

function RouterButton({ children, onClick, navigateTo, className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = AUTH_PATHS.includes(pathname);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <Button
      className={`${isAuthPage ? 'hidden' : `bg-btn-bg text-btn-text hover:text-btn-bg hover:bg-btn-text ${className}`} `}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default RouterButton;
