const API_BASE_URL = 'https://65ddc801dccfcd562f557200.mockapi.io/';

export const getUsers = async (page = 1) => {
  const response = await fetch(`${API_BASE_URL}/users?page=${page}&limit=3`);
  const data = await response.json();
  return data;
};