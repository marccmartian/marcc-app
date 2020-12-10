import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PortfolioSection from "../components/PortfolioSection";
import InfoSection from "../components/InfoSection";
import MusicianSection from "../components/MusicianSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToogleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={handleOnToogleOpen} />
      <Sidebar isOpen={isOpen} />
      <Header />
      <InfoSection />
      <PortfolioSection />
      <MusicianSection />
      <Footer />
    </>
  );
};

export default Home;
