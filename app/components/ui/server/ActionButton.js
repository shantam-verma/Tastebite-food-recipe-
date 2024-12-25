import { Button } from '@/components/ui/button';
import React from 'react';

export function ActionButton({
  children,
  className,
  variant = 'default',
  ...props
}) {
  return (
    <Button
      className={`bg-btn-bg text-btn-text hover:text-btn-bg hover:bg-btn-text ${className}`}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
}
