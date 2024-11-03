import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { HowitWorks } from '../components/HowitWorks';
import { WhyCollabHub } from '../components/WhyCollabHub';
import { Pricing } from '../components/PricingPlan';
import { TransformCareer } from '../components/TransformCareer';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export const Home = ({ displayContent }) => {
  return (
    <div>
      {/* Hero section is always visible */}
      <Hero />

      {/* Rest of the content, conditionally rendered */}
      {displayContent && (
        <>
          <WhoWeAre />
          <HowitWorks />
          <WhyCollabHub />
          <Pricing />
          <TransformCareer />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
};
