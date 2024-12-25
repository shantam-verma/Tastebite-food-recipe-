import React from 'react';
import Navbar from '../components/common/navbar/Navbar';

export default async function Template({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-content">
      <header className="fixed w-full top-0 z-50 px-4 py-2 bg-background/35 backdrop-blur-2xl">
        <Navbar />
      </header>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
