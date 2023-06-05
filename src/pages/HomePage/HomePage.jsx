import { NavLink } from "react-router-dom";
import { Container } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <span>
        <NavLink to="/tweets">WELCOME TO TWEETS APP!</NavLink>
      </span>
    </Container>
  );
};

export default HomePage;
