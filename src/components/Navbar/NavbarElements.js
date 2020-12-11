import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  background-color: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  font-size: 1rem;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  max-width: 1100px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const NavbarLogo = styled(LinkR)`
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  cursor: pointer;
  display: block;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0 1rem;

  &:hover {
    background-color: var(--green);
    transition: background-color 0.3s linear;
  }

  &.active {
    border-bottom: 3px solid var(--green);
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: var(--white);
    font-size: 1.6rem;
    cursor: pointer;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ isOpen }) =>
      isOpen ? "var(--red)" : "var(--green)"};
  }
`;
