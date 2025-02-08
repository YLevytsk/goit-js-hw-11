import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './js/loader.js'; // Подключаем лоадер

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loadingOverlay = document.getElementById('loading-overlay');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

async function loadDefaultImages() {
  try {
    showLoader();
    const images = await fetchImages('cats');
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load default images. Please try again.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  try {
    showLoader();
    gallery.innerHTML = ''; // Очистка перед новым запросом
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loadingOverlay.style.display = 'flex';
}

function hideLoader() {
  loadingOverlay.style.display = 'none';
}

loadDefaultImages();





