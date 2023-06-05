import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users-api";
import Loader from "../components/Loader";
import CardsList from "../components/CardsList";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";

const CardsPage = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    getUsers(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getUsers = async (currentPage) => {
    setIsLoading(true);
    const limit = 6;
    try {
      const result = await fetchUsers(currentPage, limit);
      setUsers((prevUsers) =>
        page === 1 ? result : [...prevUsers, ...result]
      );
      setIsLastPage(result.length < 6);
    } catch (error) {
      setError(error);
      console.error("Error updating follower count:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {users.length > 0 && !error && <CardsList users={users} />}
      {!isLoading && !error && users.length > 0 && !isLastPage && (
        <Button onClick={handleButtonClick} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default CardsPage;
