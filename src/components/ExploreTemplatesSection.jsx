import Image from "next/image";

const ExploreTemplatesSection = () => {
  return (
    <section className='w-full px-0 py-8'>
      <h2 className='text-3xl md:text-4xl tracking-wide leading-normal font-medium mb-14 text-center'>
        Get amazing templates for your business
      </h2>

      <Image
        src='/templatesImage.webp'
        alt='templatesImage'
        width={1000}
        height={1000}
        className='w-full h-full object-cover'
        priority
      />
    </section>
  );
};

export default ExploreTemplatesSection;
