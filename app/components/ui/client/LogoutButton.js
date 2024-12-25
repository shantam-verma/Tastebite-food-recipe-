'use client';
import React from 'react';
import RouterButton from './RouterButton';
import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <RouterButton onClick={() => signOut({ callbackUrl: '/login' })}>
      Logout
    </RouterButton>
  );
}
