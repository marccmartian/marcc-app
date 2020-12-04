import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  background-color: rgba(17, 17, 17, 0.98);
  width: 100%;
  height: calc(100vh - 80px);
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "80px" : "-100%")};
  left: 0;
  transition: all 0.5s ease;
`;

export const SidebarMenu = styled.ul`
  text-transform: uppercase;
  list-style: none;
`;

export const SidebarItem = styled.li`
  margin-bottom: 0.8rem;
`;

export const SidebarLink = styled(LinkS)`
  display: block;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  padding: 0 24px;
  display: flex;
  align-items: center;
  color: var(--white);

  &:hover {
    background-color: var(--green);
  }
`;
