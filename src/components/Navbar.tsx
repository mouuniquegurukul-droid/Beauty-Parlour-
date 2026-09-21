import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/media';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'প্রচ্ছদ', href: '#hero' },
    { label: 'শিল্পীর পরিচয়', href: '#about' },
    { label: 'পরিষেবা', href: '#services' },
    { label: 'আমার কাজ', href: '#portfolio' },
    { label: 'কাজের প্রক্রিয়া', href: '#experience' },
    { label: 'শুভবার্তা', href: '#testimonials' },
    { label: 'যোগাযোগ', href: '#booking' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'bg-[#F6F0E7]/95 backdrop-blur-md py-3.5 shadow-xs border-b border-[#D9CABB]/60 text-[#171514]'
            : 'bg-[#F6F0E7]/85 backdrop-blur-xs py-4 sm:py-5 border-b border-[#D9CABB]/30 text-[#171514]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand / Artist Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col tracking-wider focus:outline-hidden focus:ring-1 focus:ring-[#B89B68]"
            id="nav-brand-link"
          >
            <span className="font-semibold text-base sm:text-lg tracking-[0.16em] text-[#171514] transition-colors duration-300 group-hover:text-[#541C28]">
              {BRAND_CONFIG.ARTIST_NAME}
            </span>
            <span className="text-[11px] tracking-wider font-normal text-[#541C28]">
              বাঙালি ব্রাইডাল রূপসজ্জা
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs tracking-wider transition-colors duration-300 relative py-1 text-[#171514]/85 hover:text-[#541C28] font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Booking Link */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 bg-[#541C28] text-[#F6F0E7] hover:bg-[#321018] shadow-xs hover:shadow-md cursor-pointer"
              id="navbar-booking-direct"
            >
              <span>বুকিং তথ্য</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171514] hover:text-[#541C28] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#F6F0E7] text-[#171514] pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden"
        >
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-semibold tracking-tight text-[#171514] hover:text-[#541C28] transition-colors border-b border-[#D9CABB]/40 pb-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#D9CABB] text-center text-xs text-[#171514]/70 font-medium">
            {BRAND_CONFIG.ARTIST_NAME} • {BRAND_CONFIG.PHONE_DISPLAY}
          </div>
        </div>
      )}
    </>
  );
};
