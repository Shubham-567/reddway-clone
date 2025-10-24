import React from "react";

const Footer = () => {
  const links = [
    { label: "About us", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Guide", href: "#" },
  ];

  return (
    <footer className='bg-base-200'>
      <div className='flex items-center justify-between gap-6 py-14 px-18'>
        <div className='w-full max-w-4xl'>
          <div className='grid grid-cols-2 gap-2 px-30 justify-start items-center space-y-2 max-w-2xl'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-base font-medium text-neutral-muted hover:text-neutral hover:underline max-w-xs w-fit'>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className='w-1/3 max-w-lg flex flex-col items-center gap-4'>
          {/* logo */}
          <img src='/reddwayLogo.svg' alt='logo' className='w-full h-10' />

          {/* socials */}
          <div className='space-y-2'>
            <p>Reach out to us</p>
            <div className='flex gap-4'>
              <a href='#' className='inline-block'>
                <img
                  src='/icons/instagram.png'
                  alt='instagram'
                  className='size-8 transition-transform duration-300 hover:scale-110'
                />
              </a>
              <a href='#' className='inline-block'>
                <img
                  src='/icons/facebook.png'
                  alt='facebook'
                  className='size-8 transition-transform duration-300 hover:scale-110'
                />
              </a>
              <a href='#' className='inline-block'>
                <img
                  src='/icons/linkedin.png'
                  alt='linkedin'
                  className='size-8 transition-transform duration-300 hover:scale-110'
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className='text-center text-sm border-t border-neutral-muted/30 py-3'>
        Copyright © {new Date().getFullYear()} Reddway Hyperspace Systems
        Private Limited
      </p>
    </footer>
  );
};

export default Footer;
