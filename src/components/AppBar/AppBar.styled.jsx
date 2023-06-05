import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  z-index: 5;
  top: -1px;
  padding: 30px 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  & a {
    color: #fff;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
    & svg {
      display: none;
      transition: display0.2s ease;
    }
  }
  & a.active {
    padding: 5px;
    color: #373737;
    border-radius: 20px;
    background: rgb(227, 227, 227);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }
  & a.active svg {
    display: block;
  }
`;
