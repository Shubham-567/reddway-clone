import React from "react";

const VideoSection = () => {
  return (
    <section className='flex justify-center items-center w-full px-8 md:px-18 py-12'>
      <div className='w-full max-w-5xl aspect-video rounded-lg overflow-hidden ring ring-neutral-muted/20 shadow-lg'>
        <iframe
          src='https://www.youtube.com/embed/alJPhBf2a2A?si=k20_UQ9j7lP278pk&autoplay=0&mute=1&loop=1&playlist=alJPhBf2a2A'
          title='YouTube video player'
          allow='autoplay'
          allowFullScreen
          className='w-full h-full'></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
