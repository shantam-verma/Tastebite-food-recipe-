import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { Typography } from '../Typography';
import { MobileNavbar } from './MobileNavbar';
import { LogoutButton } from '../../ui/client/LogoutButton';

function Navbar() {

  return (
    <div className="mx-auto w-full max-w-screen-xl flex justify-between items-center">
      <Link href="/">
        <Typography
          variant="h2"
          as="h2"
          className="font-damion text-black dark:text-white"
        >
          Tastebite
        </Typography>
      </Link>
      <NavLinks
        className="flex space-x-4 border-transparent"
        linkClassName="transition-[border] duration-500 ease-in-out hover:border-b hover:border-content hidden sm:block rounded-md"
        linkActiveClassName="border-b border-content transition-[border] duration-500 cubic-bezier(0.4, 0.0, 0.2, 1)"
      />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <LogoutButton>Logout</LogoutButton>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
