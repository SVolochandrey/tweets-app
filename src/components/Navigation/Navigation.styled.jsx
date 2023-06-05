import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  margin-left: auto;
  margin-right: auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  &:hover {
    color: rgb(227, 227, 227);
    background-color: #5736a3;
  }
`;
