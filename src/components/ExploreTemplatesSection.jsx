import Image from "next/image";

const ExploreTemplatesSection = () => {
  return (
    <section className='w-full px-0 py-8'>
      <h2 className='text-4xl font-medium mb-14 text-center'>
        Get amazing templates for your business
      </h2>

      <Image
        src='/templatesImage.webp'
        alt='templatesImage'
        width={1000}
        height={1000}
        className='w-full h-full object-cover'
      />
    </section>
  );
};

export default ExploreTemplatesSection;
