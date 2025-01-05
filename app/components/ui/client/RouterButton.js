'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function RouterButton({
  children,
  onClick,
  navigateTo,
  variant = 'secondary',
  className,
  ...props
}) {
  const router = useRouter();

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
      variant={variant}
      className={`${variant === 'link' ? '' : `bg-btn-bg text-btn-text hover:text-btn-bg hover:bg-btn-text`}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default RouterButton;
