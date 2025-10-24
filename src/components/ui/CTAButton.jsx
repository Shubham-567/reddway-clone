import { ArrowRight } from "lucide-react";

const CTAButton = ({ text }) => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className='btn btn-secondary mx-auto text-xl md:text-3xl lg:text-4xl md:py-4 md:px-6 rounded-2xl'>
      {text} <ArrowRight className='size-10' />
    </button>
  );
};

export default CTAButton;
