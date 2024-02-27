// App.jsx

import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/UserService';
import UserCard from './UserCard';
import './App.css';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { users: userData, totalPages: total } = await getUsers(currentPage);
        setTotalPages(total);
        setUsers((prevUsers) => [...new Set([...prevUsers, ...userData])]);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="app">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} className="load-more-btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default App;
