import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import StatsBar from "@/components/Home/StatsBar";
import TrustIntro from "@/components/Home/TrustIntro";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesGrid from "@/components/Home/ServicesGrid";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import HowItWorks from "@/components/Home/HowItWorks";
import BulletSection from "@/components/Home/BulletSection";
import AreasCovered from "@/components/Home/AreasCovered";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Home/FAQ";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "800 Speedy | Tyre Repair Dubai",
  description:
    "Fastest on-site tyre repair in Dubai. Michelin, Bridgestone, Pirelli & more delivered and fitted in 20-30 minutes, 24/7.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BrandsShowcase />
      <HowItWorks />
      <BulletSection
        eyebrow="Vehicle Types"
        title="Tyre Fitting for All Vehicle Types"
        bullets={[
          "Sedans, SUVs, and crossovers",
          "Luxury: BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover",
          "Pickup trucks and commercial vans",
          "Motorcycles and scooters",
          "Commercial vehicles and fleet cars",
          "Hybrid and electric vehicles",
        ]}
      />
      <StatsBar />
      <TrustIntro />
      <WhyChooseUs />
      <ServicesGrid />
      <BulletSection
        eyebrow="Tyre Care Tips"
        title="Extend Your Tyre Life in Dubai"
        reverse
        bullets={[
          "Check tyre pressure at least once a month",
          "Rotate tyres regularly for even wear",
          "Get wheel alignment and balancing checked periodically",
          "Avoid overloading your vehicle beyond its rated capacity",
          "Schedule a free tyre health check every 6 months with 800 Speedy",
        ]}
      />
      <BulletSection
        eyebrow="Warning Signs"
        title="Does Your Car Need a New Tyre in Dubai?"
        bullets={[
          "Tread depth below 1.6mm or worn tread indicators",
          "Cracks, cuts, or bulges on the sidewall",
          "Frequent loss of tyre pressure",
          "Vibration or pulling while driving",
          "Tyre older than 5-6 years regardless of tread",
        ]}
      />
      <AreasCovered />
      <Testimonials />
      <FAQ />
      <EmergencyCTA />
    </>
  );
}
