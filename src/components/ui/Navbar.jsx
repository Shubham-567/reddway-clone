import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center gap-4 py-3 px-16'>
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
        <Link href='/sing-up' className='btn-primary'>
          Create a free Store <ArrowRight className='size-4' />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
