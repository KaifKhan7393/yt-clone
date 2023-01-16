import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_APIKEY,
        'X-RapidAPI-Key': 'aaf13fcecamsh08b6ab37763d4d4p11c8a5jsnc01cf1c4de81',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}

