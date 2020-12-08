import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import PortfolioSection from "../components/PortfolioSection";

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
    </>
  );
};

export default Home;
