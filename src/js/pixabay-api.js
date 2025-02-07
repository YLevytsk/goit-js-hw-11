import axios from 'axios';

const API_KEY = '48661000-87492d5612d6e41eb1a42ef3d';  // Ваш уникальный API ключ
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Функция для выполнения HTTP-запроса к API Pixabay
 * @param {string} query - поисковый запрос
 * @returns {Promise<Array>} - массив найденных изображений
 */
export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,           // Уникальный ключ
        q: query,               // Поисковый запрос
        image_type: 'photo',    // Фильтруем только фото
        orientation: 'horizontal', // Горизонтальная ориентация
        safesearch: true,       // Включаем безопасный поиск
      },
    });

    // Проверка на успешный ответ
    if (response.status === 200) {
      // Проверяем, есть ли изображения в ответе
      if (response.data.hits.length === 0) {
        console.warn('Изображения не найдены');
        return [];
      }
      return response.data.hits;
    } else {
      console.error('Не удалось получить данные, статус:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
}


