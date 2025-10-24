import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import React from "react";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <HeroSection />
      <VideoSection />
    </main>
  );
};

export default Home;
