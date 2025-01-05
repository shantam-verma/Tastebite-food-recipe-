'use client';
import React from 'react';
import RouterButton from './RouterButton';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { AUTH_PATHS } from '@/app/utils/data';

export function LogoutButton() {
  const pathname = usePathname();
  const isAuthPage = AUTH_PATHS.includes(pathname);

  if (isAuthPage) {
    return;
  }
  return (
    <RouterButton onClick={() => signOut({ callbackUrl: '/login' })}>
      Logout
    </RouterButton>
  );
}
