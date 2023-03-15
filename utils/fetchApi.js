import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'de7cdc0277msh7dbd7e5ced9df57p17f7e8jsn8ff5f3278297',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
};