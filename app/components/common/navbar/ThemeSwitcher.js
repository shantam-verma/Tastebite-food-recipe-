'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { MdDarkMode } from 'react-icons/md';
import { RiLoader2Fill } from 'react-icons/ri';
import { MdLightMode } from 'react-icons/md';
import { ActionButton } from '../../ui/server/ActionButton';

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ActionButton disabled>
        <RiLoader2Fill className="animate-spin" />
      </ActionButton>
    );
  }
  return (
    <ActionButton
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      disabled={resolvedTheme === undefined}
    >
      {resolvedTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </ActionButton>
  );
}

export default ThemeSwitcher;
