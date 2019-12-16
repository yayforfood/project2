import axios from 'axios';
const key = process.env.REACT_APP_API_KEY;
export const Search = async (s) => {

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${s}`);
    return response.data;
}
export const Id = async (i) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${i}`);
    return response.data;
}
