import React from "react";

const VideoSection = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <div className='w-full max-w-5xl'>
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/alJPhBf2a2A?si=k20_UQ9j7lP278pk&amp;autoplay=0&amp;mute=1&amp;loop=1&amp;playlist=alJPhBf2a2A`}
          allow='autoplay'
          title='YouTube video player'
          allowFullScreen=''
          className='w-full h-full min-h-[500px] rounded-lg'></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
