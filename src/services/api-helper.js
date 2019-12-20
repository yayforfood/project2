import axios from 'axios';
const key = process.env.REACT_APP_API_KEY;
export const API_search = async (show,page) => {

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${show}&page=${page}`);
    return response.data;
}
export const API_id = async (i) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${i}&plot=full`);
    return response.data;
}
export const API_season = async (i, season) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${i}&season=${season}`)
    return response.data;
}