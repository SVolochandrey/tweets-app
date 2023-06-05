import axios from 'axios';

axios.defaults.baseURL = 'https://645fd7dfca2d89f7e74eee3b.mockapi.io';

export const fetchUsers = async (page, limit) => {
  const params = new URLSearchParams({
    limit: limit,
    page,
  });
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await axios.get(`/test?${params}`);
  return response.data;
};

export const updateFollowersCount = async (userId, newFollowerCount) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await axios.put(`/test/${userId}`, {
    followers: newFollowerCount,
  });
  return response.data;
};