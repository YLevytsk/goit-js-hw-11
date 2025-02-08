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

// Загрузка изображений по умолчанию (например, "cats")
async function loadDefaultImages() {
  try {
    const images = await fetchImages('cats'); // Загружаем изображения по умолчанию
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load default images. Please try again.',
      position: 'topRight',
    });
  }
}

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






