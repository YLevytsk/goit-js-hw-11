import { fetchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';

const form = document.querySelector('.search-form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    alert('Введите слово для поиска!');
    return;
  }

  const images = await fetchImages(query);
  renderImages(images);
});
