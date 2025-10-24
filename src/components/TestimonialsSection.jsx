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
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className='w-full px-0 py-8 bg-primary overflow-hidden'>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          // Testimonial card
          <div
            key={testimonial.id}
            className='px-2 md:px-4 focus:outline-none h-full'>
            <div className='flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden min-h-[500px] md:min-h-[400px]'>
              {/* Image */}
              <div className='relative w-full md:w-2/5 aspect-5/4 md:aspect-auto'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className='object-cover w-full h-full'
                />
              </div>

              {/* Content */}
              <div className='flex flex-col justify-between w-full md:w-3/5 px-6 py-6 md:py-16 md:px-10 text-left max-md:min-h-72'>
                <h3 className='text-2xl md:text-3xl font-semibold leading-snug'>
                  {testimonial.review}
                </h3>

                <div className='pt-6 md:pt-8'>
                  <h4 className='text-lg md:text-xl font-bold'>
                    {testimonial.name}
                  </h4>
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
