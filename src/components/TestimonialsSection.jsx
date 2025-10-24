"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shradha",
      title: "Founder of Sky skin care products",
      review: "Reddway's customization and integration are top-notch!",
      image: "/Kritika.webp",
    },
    {
      id: 2,
      name: "Krishan",
      title: "Founder of space store",
      review: "Reddway is user-friendly and efficient. Highly recommend!",
      image: "/Krishan.webp",
    },
    {
      id: 3,
      name: "Shruti K.",
      title: "Founder of Sosh",
      review:
        "Launching my fashion label online was life changing to say the least.",
      image: "/Shruti.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20%",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <section className='w-full px-0 py-8 bg-primary overflow-hidden'>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='px-4 focus:outline-none'>
            <div className='flex items-start justify-between gap-12 max-w-5xl h-[400px] mx-auto bg-base-100 rounded-lg shadow-xl overflow-hidden'>
              <div className='w-2/5 h-full relative'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className='rounded-l-lg object-cover'
                />
              </div>

              <div className='w-3/5 space-y-8 py-16 pr-8'>
                <h3 className='text-3xl font-semibold'>{testimonial.review}</h3>
                <div className='pt-8'>
                  <h4 className='text-xl font-bold'>{testimonial.name}</h4>
                  <p className='text-base font-medium text-neutral-muted'>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
