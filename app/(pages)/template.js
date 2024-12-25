import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/navbar/Navbar';

export default async function Template({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-content">
      <header className="sticky top-0 z-50 px-4 py-2 bg-background/35 backdrop-blur-2xl">
        <Navbar />
      </header>

      <main className="flex-grow p-4 mx-auto w-full max-w-screen-xl">{children}</main>

      <footer className="bg-background">
        <Footer />
      </footer>
    </div>  
  );
}
