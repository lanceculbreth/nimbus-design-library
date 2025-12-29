'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LeftNav from './LeftNav';
import Header from './Header';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-nimbus-black/80 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Left Navigation */}
      <div className={`
        fixed top-0 left-0 h-screen z-40
        transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <LeftNav />
      </div>
      
      {/* Header */}
      <Header 
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
        isMobileMenuOpen={mobileMenuOpen}
      />
      
      {/* Main Content */}
      <main className="ml-0 md:ml-[280px] pt-16 min-h-screen">
        <div className="p-4 sm:p-6 md:p-10">
          {children}
        </div>
      </main>
    </>
  );
}

