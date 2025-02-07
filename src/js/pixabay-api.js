import axios from 'axios';

const API_KEY = '48661000-87492d5612d6e41eb1a42ef3d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    // Формируем URL для запроса
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,  // Ищем по запросу
        image_type: 'photo',  // Только фотографии
        orientation: 'horizontal',  // Горизонтальные фотографии
        safesearch: true  // Фильтр безопасности
      },
    });

    console.log("API Response:", response);  // Логируем данные

    // Проверяем, есть ли изображения
    if (response.data.totalHits > 0) {
      return response.data.hits;  // Возвращаем изображения
    } else {
      console.warn('No images found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}




