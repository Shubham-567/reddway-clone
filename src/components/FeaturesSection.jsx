import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className='w-full min-h-screen px-8 md:px-18 py-14 bg-base-200'>
      <h2 className='text-3xl font-semibold text-center text-neutral max-w-4xl mx-auto'>
        We've simplified the process, Introducing AI enabled website builder.
      </h2>

      <div className='mt-10 max-w-4xl mx-auto'>
        {/* desktop image */}
        <Image
          src='/featuresImage.webp'
          alt='featuresImage'
          width={1000}
          height={1000}
          className='hidden md:block w-full h-auto'
          priority
        />

        {/* mobile image */}
        <Image
          src='/featuresImageMobile.webp'
          alt='featuresImageMobile'
          width={1000}
          height={1000}
          className='block md:hidden w-full h-auto max-h-150 max-w-150 mx-auto'
          priority
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
