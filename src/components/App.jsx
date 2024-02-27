import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/UserService';
import UserCard from './UserCard';
import './App.css';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(currentPage);
      setUsers((prevUsers) => [...prevUsers, ...data]);
    };

    fetchUsers();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <button onClick={handleLoadMore} className="load-more-btn">
        Load More
      </button>
    </div>
  );
};

export default App;
