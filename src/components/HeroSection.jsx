import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const reviews = [
    {
      username: "Krishan",
      stars: 5,
    },
    {
      username: "Ajay",
      stars: 4.5,
    },
    {
      username: "Kritika",
      stars: 4.5,
    },
  ];

  return (
    <section className='w-full px-8 md:px-18 py-2 mt-20'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 mb-28'>
        {/* left - text */}
        <div className='flex-1 min-w-0 space-y-2 max-w-xl'>
          <span className='text-sm'>Reddway website builder</span>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold'>
            Build, Manage & Grow Your Website, All in One Place!
          </h1>

          <p className='text-lg text-neutral-muted font-base'>
            launch your online store in 10 minutes – No Code Required.
          </p>

          <button className='btn btn-primary mt-6'>Get Started Now</button>
        </div>

        {/* right - hero image */}
        <div className='flex-1 md:flex-none w-full md:w-1/2'>
          <Image
            src='/hero.jpg'
            alt='hero'
            width={1200}
            height={800}
            loading='lazy'
            className='w-full h-auto object-cover rounded-lg'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
          />
        </div>
      </div>

      {/* reviews */}
      <div className='flex flex-wrap justify-around items-center gap-4 my-16 md:max-w-3xl mx-auto'>
        {reviews
          ? reviews.map((review) => (
              <Review key={review.username} review={review} />
            ))
          : null}
      </div>
    </section>
  );
};

export default HeroSection;

const Review = ({ review }) => {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= count; i++) {
      stars.push(<Star key={i} fill='black' className='size-4 sm:size-5' />);
    }

    return stars;
  };

  return (
    <div className='space-y-3' key={review.username}>
      <div className='flex items-center justify-center gap-3'>
        <Image
          src={`/${review.username}.webp`}
          loading='lazy'
          className='size-8 rounded-full object-cover'
          alt='avatar'
          width={50}
          height={50}
        />
        <h4 className='font-normal'>{review.username}</h4>
      </div>

      {/* stars */}
      <div className='flex items-center justify-center gap-0.5 sm:gap-2 '>
        {renderStars(review.stars)}
        {review.stars % 1 !== 0 && (
          <StarHalf fill='black' className='size-4 sm:size-5' />
        )}
      </div>
    </div>
  );
};
