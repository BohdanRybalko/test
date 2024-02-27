const API_BASE_URL = 'https://65ddc801dccfcd562f557200.mockapi.io/';

export const getUsers = async (page = 1, limit = 3) => {
  const response = await fetch(`${API_BASE_URL}/users?page=${page}&limit=${limit}`);
  const data = await response.json();
  
  return {
    users: data, 
    totalPages: data.totalPages, 
  };
};
