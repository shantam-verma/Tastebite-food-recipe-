'use client';
import { usePathname } from 'next/navigation';

export function Pathname({ children }) {
  const pathname = usePathname();
  return <div pathname={pathname}>{children}</div>;
}
