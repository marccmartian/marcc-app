import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/">Inicio</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about">Sobre Mí</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="portfolio">Portafolio</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="contact">Contacto</SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
