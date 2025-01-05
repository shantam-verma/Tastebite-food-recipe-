'use client';

import React, { useMemo, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { NavLinks } from './NavLinks';
import { usePathname } from 'next/navigation';
import { AUTH_PATHS } from '@/app/utils/data';

export function MobileNavbar() {
  const pathname = usePathname();
  const isAuthPage = useMemo(() => AUTH_PATHS.includes(pathname), [pathname]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isAuthPage ? 'hidden' : 'block z-40 sm:hidden'} `}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        onClick={toggleMenu}
        className="relative z-50 cursor-pointer color-btn-bg"
        aria-label="Toggle mobile menu"
      >
        {!isOpen ? (
          <RxHamburgerMenu size={34} />
        ) : (
          <IoMdClose
            size={24}
            className="text-color-content-light-heading dark:text-color-content-dark-heading"
          />
        )}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className=" h-screen
            fixed inset-0 z-40 
            bg-black/50 backdrop-blur-sm
          "
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className={`h-screen
          fixed top-0 right-0 z-40 w-full 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          <div className="float-right min-h-full w-[85%] bg-white dark:bg-[#121212] px-6 pt-12 shadow-2xl text-center">
            <NavLinks
              className="flex flex-col gap-6 justify-center items-center w-full mt-5"
              linkClassName="transition-[border] duration-500 ease-in-out hover:border-b hover:border-content block sm:hidden"
              linkActiveClassName="border-b border-content transition-[border] duration-500 cubic-bezier(0.4, 0.0, 0.2, 1)"
            />
          </div>
        </div>
      )}
    </div>
  );
}
