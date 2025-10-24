import { Figma, FilePen, Globe, Landmark, Truck } from "lucide-react";

const BusinessSection = () => {
  return (
    <section className='w-full min-h-screen px-8 md:px-18 py-14 bg-base-100'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl tracking-wide font-semibold text-center text-neutral max-w-4xl mx-auto'>
        Unlock more as your business grows.
      </h2>

      {/* Bento grid */}
      <div className='mt-10 max-w-4xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-3'>
        <CapabilityCard
          title='Custom Domain Setup'
          icon={<Globe className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className={"bg-feature-pink"}
        />

        <CapabilityCard
          title='Copywriting & Image selection'
          icon={<FilePen className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className='bg-feature-peach'
        />

        <CapabilityCard
          title='Integrated Marketing Tools'
          icon={<FilePen className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className='max-md:col-span-2 md:row-span-2 bg-feature-blue'
          brandIcons={
            <div className='space-y-4 max-md:hidden'>
              <img
                src='/icons/bar-chart.svg'
                alt='brandIcons'
                className='size-24'
              />
              <img src='/icons/code.svg' alt='brandIcons' className='size-24' />
              <img
                src='/icons/seo-search.svg'
                alt='brandIcons'
                className='size-24'
              />
            </div>
          }
        />

        <CapabilityCard
          title='Integrated Payments Gateway'
          icon={<Landmark className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className='md:col-span-2 bg-feature-mint'
          brandIcons={
            <div className='flex max-md:hidden items-center gap-4'>
              <img
                src='/icons/pay-u.svg'
                alt='brandIcons'
                className='w-full h-8'
              />
              <img
                src='/icons/razorpay.svg'
                alt='brandIcons'
                className='w-full h-8'
              />
              <img
                src='/icons/stripe.svg'
                alt='brandIcons'
                className='w-full h-14'
              />
            </div>
          }
        />

        <CapabilityCard
          title='Design and Theme customization'
          icon={<Figma className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className='bg-feature-purple'
        />

        <CapabilityCard
          title='Integrated Shipment Partners'
          icon={<Truck className='size-22 sm:size-24 md:size-28 mx-auto' />}
          className='col-span-2 bg-feature-yellow'
          brandIcons={
            <div className='flex max-md:hidden items-center gap-4'>
              <img
                src='/icons/fedex.svg'
                alt='brandIcons'
                className='w-full h-6'
              />

              <img
                src='/icons/blue-dart.svg'
                alt='brandIcons'
                className='w-full h-6'
              />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default BusinessSection;

const CapabilityCard = ({ title, icon, className, brandIcons }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 p-8 rounded-2xl min-h-[300px]  ${
        className ? className : "bg-primary/10"
      }`}>
      {icon}
      <h4 className='text-xl sm:text-2xl font-light text-center'>{title}</h4>

      {brandIcons}
    </div>
  );
};
