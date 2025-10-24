"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import CTAButton from "./ui/CTAButton";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "1. What is Reddway?",
      answer:
        "Reddway is a platform for e-commerce sellers to create rich e-commerce experiences for their customers. Our products are No-Code website builder and Instant Product Link, where users can start beautiful E-commerce websites and create sharable product link.",
    },
    {
      question: "2. What are the goals for this project?",
      answer: `To make e-commerce small business-friendly by providing sellers,

                • Tools to create an elevated shopping experience for their customers.
                • Tools to engage and delight their customers.
                • Tech for reduced time-to-market and time-to-scale.`,
    },
    {
      question: "3. How does it work?",
      answer: `With five simple steps:

                1. Name your store
                2. Pick a Domain
                3. Answer few Questions
                4. Add product
                5. Start Selling`,
    },
    {
      question: "4. Who can create a store?",
      answer: `Reddway is product agnostic; anyone who wants to sell online can open the feature-rich E-commerce store on Reddway platform. It is the best solution for Instagram sellers and direct-to-consumer brands.`,
    },
    {
      question: "5. What are the pricing model?",
      answer: `Reddway has a subscription model of ₹11988 that is billed annually. Reddway has a 0% commission policy.`,
    },
    {
      question: "6. How will we receive our payments?",
      answer: `You receive payments instantly and directly through the payment gateway choose by you (Razorpay & PayU).`,
    },
    {
      question: "7. How can we ship /deliver our products?",
      answer: `You can use two options to deliver your products from the dashboard.

              1. Shiprocket Delivery - Use Ship rocket Shipping for hassle-free shipments and choose from the top 17 courier partners and deliver to 24000 pin codes in India. Our shipping with shiprocket is fully integrated and you don’t have to process each shipping manually.

              2.Self-Ship - Manage and ship products on your own. You can submit the shipping details in the dashboard, which is intimated to your buyer.`,
    },
    {
      question: "8. How to interact with the buyers?",
      answer: `You can use the free chat to interact with your buyer. Your buyer can also use chat for product inquiries and after-sale services.`,
    },
    {
      question: "9. How to share my store and products?",
      answer:
        "You can share your store link and products on Facebook, Whatsapp and Instagram by using the share button or copying the link.",
    },
    {
      question: "10. Free trial",
      answer: "Reddway offers you a free trail for 15 days.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <section className='w-full bg-base-200 px-18 py-14'>
      <div className='space-y-8 text-center max-w-5xl mx-auto'>
        <h2 className='text-6xl font-semibold text-neutral'>
          Going digital has never been easier -{" "}
          <span className='text-primary'>we promise!</span>
        </h2>
        <p className='text-xl text-neutral font-base max-w-2xl mx-auto'>
          Reddway has everything you need to run an online business in India.
          Get started with a free website.
        </p>

        <CTAButton text='Get Started' />
      </div>

      <div className='mt-20 max-w-5xl mx-auto space-y-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 ring ring-neutral-muted/20 rounded-xl shadow-md transition-all duration-300 bg-base-100 cursor-pointer
            ${openIndexes.includes(index) ? "ring-1 ring-primary" : ""}
          `}>
            {/* question */}
            <button
              onClick={() => handleToggle(index)}
              className='flex items-start gap-2 w-full text-left focus:outline-none'>
              <div className='shrink-0 size-6 text-neutral transition-transform duration-300 relative '>
                {openIndexes.includes(index) ? (
                  <Minus className='size-6 text-neutral' />
                ) : (
                  <Plus className='size-6 text-neutral' />
                )}
              </div>
              <span className='text-lg font-semibold text-neutral pr-4'>
                {faq.question}
              </span>
            </button>

            {/* answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndexes.includes(index) ? "max-h-96 pt-4" : "max-h-0"
              }`}>
              <div className='text-base text-neutral-muted whitespace-pre-line'>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
