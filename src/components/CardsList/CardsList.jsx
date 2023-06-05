import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CardsItem from "../CardsItem";
import css from "./CardsList.module.css";

const CardsList = ({ users }) => {
  return (
    <>
      <Link to={"/"} className={css.button}>
        Back
      </Link>
      <ul className={css.list}>
        {users.map((user) => {
          return <CardsItem key={user.id} card={user} />;
        })}
      </ul>
    </>
  );
};

CardsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default CardsList;
