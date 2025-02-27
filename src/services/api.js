import axios from 'axios';

export const fetchShoes = async () => {
  const response = await axios.get('http://localhost:5000/api/shoes'); // Ensure this matches your backend URL
  return response.data;
};