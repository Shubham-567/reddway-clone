"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavLinks = [
    { label: "About us", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "How It Work", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Guide", href: "#" },
  ];

  return (
    <header>
      <div className='bg-base-100 fixed top-0 left-0 right-0 flex justify-between items-center gap-4 py-4 px-8 md:px-18 z-40 shadow-md md:shadow-xs'>
        <div className='flex items-center gap-4'>
          {/* mobile nav toggle */}
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>

          {/* logo */}
          <Link href='/' className='flex items-center gap-2 max-md:w-32'>
            <img src='/reddwayLogo.svg' alt='logo' className='w-full h-full' />
          </Link>
        </div>

        <nav className='flex items-center gap-6'>
          <Link
            href='/pricing'
            className='font-medium hover:text-primary max-md:hidden'>
            Pricing
          </Link>
          <Link href='/sing-in' className='font-medium hover:text-primary'>
            Sing in
          </Link>
          <Link href='/sing-up' className='btn btn-primary py-2 max-md:hidden'>
            Create a free Store <ArrowRight className='size-4' />
          </Link>
        </nav>
      </div>
      {/* mobile nav */}
      {isOpen && (
        <div className='fixed inset-0 flex flex-col items-start justify-center gap-5 pl-14 bg-base-100 z-30 shadow-xs'>
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='font-medium hover:text-primary'>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
