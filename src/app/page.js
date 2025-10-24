import BusinessSection from "@/components/BusinessSection";
import ExploreTemplatesSection from "@/components/ExploreTemplatesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BusinessSection />
      <ExploreTemplatesSection />
    </main>
  );
};

export default Home;
