import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="header" onClick={setIsOpen}>
            Inicio
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about" onClick={setIsOpen}>
            Sobre Mí
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="portfolio" onClick={setIsOpen}>
            Portafolio
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="contact" onClick={setIsOpen}>
            Contacto
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
