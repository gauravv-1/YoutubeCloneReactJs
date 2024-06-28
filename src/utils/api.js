import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    hostname: 'youtube138.p.rapidapi.com',
	port: null,
	
    headers: {
        'x-rapidapi-key': '887ae2627emshe3f1783f21487c3p1407c1jsnc513cb708982',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'

    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};