import axios from 'axios';

const API_KEY = "c5db50e53616eb725f9c9cd3824e3753"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export async function fetchWeatherByCity( city, signal ) {
	const response = await axios.get(BASE_URL, {
		params: {
			q: city,
			appid: API_KEY,
			units: "metric",
		},
		signal,
	});
	return response.data;
}