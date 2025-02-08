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

// Функция для показа лоадера
function showLoader() {
  document.getElementById('loading-overlay').style.display = 'flex';
}

// Функция для скрытия лоадера
function hideLoader() {
  document.getElementById('loading-overlay').style.display = 'none';
}

// Массив случайных тем
const defaultQueries = ['nature', 'technology', 'art', 'food', 'travel', 'sports', 'animals', 'architecture', 'people', 'music'];

// Функция для выбора случайной темы
function getRandomQuery() {
  return defaultQueries[Math.floor(Math.random() * defaultQueries.length)];
}

// Функция загрузки случайных изображений
async function loadDefaultImages() {
  const randomQuery = defaultQueries.sort(() => 0.5 - Math.random()).join(',');
  try {
    showLoader(); // Показываем лоадер перед загрузкой
    const randomQuery = defaultQueries.join(','); // Выбираем случайную тему
    const images = await fetchImages(randomQuery);

