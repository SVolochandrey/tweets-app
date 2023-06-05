import { Link } from "react-router-dom";
import css from "./Home.module.css";
import img from "../../images/picture.png";

const Home = () => {
  return (
    <div className={css.container}>
      <img src={img} alt="GoIt" className={css.img} />
      <div>
        <p className={css.text}>Welcome!</p>
        <Link to={"/cards"} className={css.link}>
          Cards
        </Link>
      </div>
    </div>
  );
};

export default Home;
