import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Массив случайных тем
const defaultQueries = ['nature', 'technology', 'art', 'food', 'travel', 'sports', 'animals', 'architecture', 'people', 'music'];

// Функция для выбора случайной темы
function getRandomQuery() {
  return defaultQueries[Math.floor(Math.random() * defaultQueries.length)];
}

// Функция загрузки случайных изображений
async function loadDefaultImages() {
  try {
    const randomQuery = getRandomQuery(); // Выбираем случайную тему
    const images = await fetchImages(randomQuery); // Загружаем изображения по случайному запросу
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again.',
      position: 'topRight',
    });
  }
}

// Загружаем случайные изображения при загрузке страницы
loadDefaultImages();


// Загрузка изображений по запросу пользователя
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again.',
      position: 'topRight',
    });
  }
});

// Вызываем функцию для загрузки изображений по умолчанию при запуске страницы
loadDefaultImages();






