import axios from "axios";

export const fetchArtworks = async (page, limit) => {
  const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;

  const { data } = await axios.get(`${url}`);
  return data;
};
export const fetchSearchArtworks = async (searchTerm) => {
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`;
  const { data } = await axios.get(`${url}`);
  console.log(data.data);
  return data;
};
