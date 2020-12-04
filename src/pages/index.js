import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToogleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={handleOnToogleOpen} />
      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default Home;
