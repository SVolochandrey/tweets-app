import axios from "axios";

const BASE_URL = "https://64442ec790738aa7c080f1f8.mockapi.io/api/v1/users";

export async function fetchTweets(page = 1) {
  const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}
