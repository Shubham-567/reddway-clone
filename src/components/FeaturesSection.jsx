import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className='w-full min-h-screen px-18 py-14 bg-base-200'>
      <h2 className='text-3xl font-semibold text-center text-neutral max-w-4xl mx-auto'>
        We've simplified the process, Introducing AI enabled website builder.
      </h2>

      {/* featuresImage in center */}
      <div className='mt-10 max-w-4xl mx-auto'>
        <Image
          src='/featuresImage.webp'
          alt='featuresImage'
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;


