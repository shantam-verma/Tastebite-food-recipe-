'use client';

import { AUTH_PATHS, NAV_LINKS } from '@/app/utils/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function NavLinks({ className, linkClassName, linkActiveClassName }) {
  const pathname = usePathname();
  const isAuthPage = useMemo(() => AUTH_PATHS.includes(pathname), [pathname]);

  return (
    <nav className={`${isAuthPage ? 'hidden' : `block ${className}`}`}>
      {NAV_LINKS.map(({ id, href, label }) => (
        <Link
          key={id}
          href={href}
          className={`transition-colors duration-300 px-3 py-2 text-sm font-medium 
          ${linkClassName || ''}
          ${pathname === href ? `${linkActiveClassName || ''}` : ''} 
          
          `.trim()}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
