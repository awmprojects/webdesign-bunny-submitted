
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Rewards from "@/components/Rewards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ConversionPopup from "@/components/ConversionPopup";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = document.cookie
      .split('; ')
      .find(row => row.startsWith('popup_seen='));
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000); // Show popup after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Rewards />
      <FAQ />
      <Footer />
      <ConversionPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Index;
