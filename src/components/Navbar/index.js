import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavbarLogo to="/" onClick={() => scroll.scrollToTop()}>
          <img style={{ width: "100px" }} src={logo} alt="marcc logo" />
        </NavbarLogo>

        <NavMenu>
          <NavItem>
            <NavLink
              to="header"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Sobre Mí
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Portafolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Contacto
            </NavLink>
          </NavItem>
        </NavMenu>

        <MenuIcon onClick={setIsOpen} isOpen={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
