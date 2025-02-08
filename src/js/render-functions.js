import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images) {
  gallery.innerHTML = ''; // Очистка галереи перед добавлением новых изображений

  if (images.length === 0) {
    showErrorMessage();
    return;
  }

  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="image-info">
        <p><span class="label">Likes</span> <span class="count">${likes}</span></p>
        <p><span class="label">Views</span> <span class="count">${views}</span></p>
        <p><span class="label">Comments</span> <span class="count">${comments}</span></p>
        <p><span class="label">Downloads</span> <span class="count">${downloads}</span></p>
      </div>
    </div>
  `).join('');

  gallery.innerHTML = markup;

  lightbox.refresh(); // Обновляем lightbox после вставки изображений
}

export function showErrorMessage() {
  gallery.innerHTML = `
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `;
}
