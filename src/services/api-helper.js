import axios from 'axios';
const key = process.env.REACT_APP_API_KEY;
export const API_search = async (s) => {

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${s}`);
    return response.data;
}
export const API_id = async (i) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${i}`);
    return response.data;
}
