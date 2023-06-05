// import { useEffect, useState } from 'react';
// import { saveToStorage, loadFromStorage } from '../../services/storage';
// import { fetchTweets, updateFollowers } from '../../services/tweetsAPI';
// import BackLink from '../../components/BackLink/BackLink';
// import TweetsList from '../../components/TweetCardsList/TweetCardsList';
// import Button from '../../components/Button/Button';
// import Loader from '../../components/Loader/Loader';
// import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
// import { Section, NoSubscriptions } from './TweetsPage.styled';

// const TweetsPage = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState('show all');
//   const [page, setPage] = useState(1);
//   const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     setIsLoadMoreVisible(false);

//     fetchTweets(page)
//       .then(newUsers => {
//         setUsers(prevUsers => [...prevUsers, ...newUsers]);
//         setIsLoading(false);
//         setIsLoadMoreVisible(true);
//       })
//       .catch(console.log);
//   }, [page]);

//   useEffect(() => {
//     if (users.length === 12 && page !== 1) {
//       setIsLoadMoreVisible(false);
//     }
//   }, [page, users.length]);

//   const handleFollowClick = (userId, isFollowing) => {
//     const updatedUsers = users.map(user => {
//       if (user.id === userId) {
//         const updatedUser = {
//           ...user,
//           followers: user.followers + (isFollowing ? -1 : 1),
//         };
//         updateFollowers(user.id, { followers: updatedUser.followers });
//         return updatedUser;
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//     saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
//   };

//   const onButtonLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const filterUsers = (users, selectedFilter) => {
//     switch (selectedFilter) {
//       case 'show all':
//         return users;
//       case 'follow':
//         return users.filter(
//           user => loadFromStorage(`tweet_${user.id}`) !== true
//         );
//       case 'followings':
//         return users.filter(
//           user => loadFromStorage(`tweet_${user.id}`) === true
//         );
//       default:
//         return users;
//     }
//   };

//   const filteredUsers = filterUsers(users, selectedFilter);

//   return isLoading ? (
//     <Loader />
//   ) : (
//     <Section>
//       <BackLink to="/">Go Back</BackLink>
//       <DropDownMenu
//         value={selectedFilter}
//         setSelectedFilter={setSelectedFilter}
//       />
//       <TweetsList users={filteredUsers} onFollowClick={handleFollowClick} />
//       {filteredUsers.length === 0 && (
//         <NoSubscriptions>No subscriptions</NoSubscriptions>
//       )}
//       {isLoading && filteredUsers.length && Loader(page)}
//       {isLoadMoreVisible && (
//         <Button onBtnLoadMore={onButtonLoadMore} disabled={isLoading} />
//       )}
//     </Section>
//   );
// };

// export default TweetsPage;



import { useEffect, useState } from 'react';
import { saveToStorage, loadFromStorage } from '../../services/storage';
import { fetchTweets, updateFollowers } from '../../services/tweetsAPI';
import BackLink from '../../components/BackLink/BackLink';
import TweetsList from '../../components/TweetCardsList/TweetCardsList';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import { Section, NoSubscriptions } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('show all');
  const [page, setPage] = useState(1);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadMoreVisible(false);

    fetchTweets(page)
      .then(newUsers => {
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setIsLoading(false);
        setIsLoadMoreVisible(true);
      })
      .catch(error => {
        console.error(error); // Обработка ошибок
        setIsLoading(false);
        setIsLoadMoreVisible(true);
      });
  }, [page]);

  useEffect(() => {
    if (users.length === 12 && page !== 1) {
      setIsLoadMoreVisible(false);
    }
  }, [page, users.length]);

  const handleFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateFollowers(user.id, { followers: updatedUser.followers })
          .then(response => {
            // Обработка успеха запроса
            console.log('Followers count updated successfully');
          })
          .catch(error => {
            // Обработка ошибок
            console.error('Failed to update followers count', error);
          });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    saveToStorage(`tweet_${userId}`, !isFollowing);
  };

  const onButtonLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const filterUsers = (users, selectedFilter) => {
    switch (selectedFilter) {
      case 'show all':
        return users;
      case 'follow':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) !== true
        );
      case 'followings':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) === true
        );
      default:
        return users;
    }
  };

  const filteredUsers = filterUsers(users, selectedFilter);

  return (
    <Section>
      <BackLink to="/">Go Back</BackLink>
      <DropDownMenu
        value={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TweetsList users={filteredUsers} onFollowClick={handleFollowClick} />
          {filteredUsers.length === 0 && (
            <NoSubscriptions>No subscriptions</NoSubscriptions>
          )}
          {isLoadMoreVisible && (
<Button onBtnLoadMore={onButtonLoadMore} disabled={isLoading} />
)}
</>
)}
</Section>
);
};

export default TweetsPage;
