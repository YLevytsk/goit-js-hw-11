import axios from 'axios';

const API_KEY = '48661000-87492d5612d6e41eb1a42ef3d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
}
