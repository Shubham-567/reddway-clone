import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VideoSection from "@/components/VideoSection";
import React from "react";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
};

export default Home;
