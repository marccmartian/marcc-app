import React from "react";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <img style={{ width: "100px" }} src={logo} alt="marcc logo" />
          </NavbarLogo>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">Sobre Mí</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio">Portafolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">Contacto</NavLink>
            </NavItem>
          </NavMenu>

          <MenuIcon onClick={setIsOpen} isOpen={isOpen}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
