import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className='bg-base-100 fixed top-0 left-0 right-0 flex justify-between items-center gap-4 py-3 px-18 z-40 shadow-xs'>
      {/* logo */}
      <Link href='/' className='flex items-center gap-2'>
        <img src='/reddwayLogo.svg' alt='logo' className='w-full' />
      </Link>

      <nav className='flex items-center gap-6'>
        <Link href='/pricing' className='font-medium hover:text-primary'>
          Pricing
        </Link>
        <Link href='/sing-in' className='font-medium hover:text-primary'>
          Sing in
        </Link>
        <Link href='/sing-up' className='btn-primary py-2'>
          Create a free Store <ArrowRight className='size-4' />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
