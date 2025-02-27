import axios from 'axios';

export const fetchShoes = async () => {
  const response = await axios.get('/api/shoes');
  return response.data;
};