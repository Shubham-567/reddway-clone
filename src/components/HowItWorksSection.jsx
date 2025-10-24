"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HowItWorksSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      title: "Create your store",
      description:
        "Simple sign-up, answer few questions and your website is ready.",
    },
    {
      title: "Add products to sell",
      description:
        "Upload your product information easily including descriptions, images, pricing, colours, sizes, quantity and more.",
    },
    {
      title: "Go live and start selling",
      description:
        "In as little as 10 mins, you can go live with your website and start expanding your brand",
    },
    {
      title: "Boost your sales",
      description:
        "Get the best for your business with features like performance marketing, lead generation, sales funnel development, CRM activation, SEO, google analytics & Facebook pixel and much more.",
    },
  ];

  return (
    <section className='w-full min-h-screen px-18 py-14 bg-base-100'>
      <h2 className='text-5xl font-semibold text-center text-neutral max-w-4xl mx-auto'>
        Here's How It Works
      </h2>

      <div className='mt-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-20'>
        {/* left side accordion */}
        <div className='w-full md:w-1/2 flex flex-col gap-6'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col gap-3 transition-all duration-300 ease-in-out'>
              <div
                className='flex items-center justify-between gap-2 cursor-pointer'
                onClick={() =>
                  openIndex === index ? setOpenIndex(null) : setOpenIndex(index)
                }>
                <div className='flex items-center gap-4'>
                  <span className='text-lg font-semibold bg-primary text-neutral-light py-2 px-4 rounded-md'>
                    {index + 1}
                  </span>
                  <h3 className='text-2xl font-semibold'>{step.title}</h3>
                </div>

                {openIndex === index ? (
                  <ChevronUp className='size-5 ' />
                ) : (
                  <ChevronDown className='size-5' />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <p className='text-lg text-neutral-muted font-base'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full md:w-1/2'>
          <Image
            src='/howItWorksImage.webp'
            alt='how it works illustration image'
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
