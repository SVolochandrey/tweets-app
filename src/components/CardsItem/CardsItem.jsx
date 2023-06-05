import { useEffect, useState } from "react";
import { updateFollowersCount } from "../../services/users-api.js";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import css from "./CardsItem.module.css";
import img from "../../images/picture.png";
import logo from "../../images/logo.png";

const CardsItem = ({ card }) => {
  const { id,user, tweets, followers, avatar } = card;
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`following_${id}`) === "true"
  );
  const [followerCount, setFollowerCount] = useState(followers);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateFollowers(id, followerCount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followerCount]);

  const updateFollowers = async () => {
    setIsLoading(true);
    try {
      await updateFollowersCount(id, followerCount);
    } catch (error) {
      setError(error);
      toast(`Error!Something went wrong...`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = () => {
    if (isFollowing) {
      setFollowerCount((prevCount) => prevCount - 1);
      setIsFollowing(false);
      toast(`You no longer follow ${user.user}!`);
      localStorage.removeItem(`following_${id}`);
    } else {
      setFollowerCount((prevCount) => prevCount + 1);
      toast(`Wow! Now you're following ${user}!`);

      setIsFollowing(true);
      localStorage.setItem(`following_${id}`, "true");
    }
  };

  return (
    <>
      {user && !error && (
        <li className={css.item}>
          <a href="/index.html" className={css.logo}>
            <img src={logo} alt="logo go it" width="76" height="22" />
          </a>
          <img
            src={img}
            alt="Answers and quetions"
            className={css.picture}
            width="308"
            height="168"
          />
          <div className={css.avatar__container}>
            <img src={avatar} alt="avatar" className={css.avatar} />
          </div>
          <p className={css.text}>{tweets} tweets</p>
          <p className={css.text__folowers}>
            {followerCount.toLocaleString("en")} Followers
          </p>
          <button
            type="button"
            className={
              isFollowing
                ? `${css.button} ${css.button__following}`
                : css.button
            }
            onClick={handleCardClick}
          >
            {isFollowing ? "Following" : "Follow"}
            {isLoading && "..."}
          </button>
        </li>
      )}
      <ToastContainer />
    </>
  );
};

CardsItem.propTypes = {
  id: PropTypes.number,
  user: PropTypes.string,
  tweets: PropTypes.string,
  followers: PropTypes.number,
  avatar: PropTypes.string,
};

export default CardsItem;
