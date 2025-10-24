import { ArrowRight } from "lucide-react";

const CTAButton = ({ text }) => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='btn btn-secondary mx-auto text-4xl py-4 px-6 rounded-2xl'>
      {text} <ArrowRight className='size-10' />
    </button>
  );
};

export default CTAButton;
