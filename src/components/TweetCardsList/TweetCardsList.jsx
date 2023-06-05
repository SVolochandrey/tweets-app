// import PropTypes from "prop-types";
// import TweetCard from "../TweetCard/TweetCard";
// import { Item, List, Wrapper } from "./TweetCardsList.styled";

// const TweetsList = ({ users, onFollowClick }) => {
//   return (
//     <Wrapper>
//       <List>
//         {users.map(({ id, tweets, followers, avatar }) => (
//           <Item key={id}>
//             <TweetCard
//               id={id}
//               tweets={tweets}
//               followers={followers}
//               avatar={avatar}
//               onFollowClick={onFollowClick}
//             />
//           </Item>
//         ))}
//       </List>
//     </Wrapper>
//   );
// };


// TweetsList.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.object.isRequired),
//   onFollowClick: PropTypes.func.isRequired,
// };

// export default TweetsList;



import PropTypes from "prop-types";
import TweetCard from "../TweetCard/TweetCard";
import { Item, List, Wrapper } from "./TweetCardsList.styled";

const TweetsList = ({ users, onFollowClick }) => {
  return (
    <Wrapper>
      <List>
        {users.map(({ id, tweets, followers, avatar }, index) => (
          <Item key={`${id}_${index}`}>
            <TweetCard
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              onFollowClick={onFollowClick}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFollowClick: PropTypes.func.isRequired,
};

export default TweetsList;


