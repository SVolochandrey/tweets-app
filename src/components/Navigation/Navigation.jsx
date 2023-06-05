import { NavContainer, Link, NavList } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/tweets">TWEETS</Link>
        </li>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
