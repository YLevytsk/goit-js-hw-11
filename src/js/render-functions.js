import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очистить галерею перед добавлением новых изображений

  if (images.length === 0) {
    showErrorMessage();
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <div class="gallery-item">
        <!-- Обернули изображение в ссылку -->
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><span class="label">Likes</span>: <span class="count">${likes}</span></p>
          <p><span class="label">Views</span>: <span class="count">${views}</span></p>
          <p><span class="label">Comments</span>: <span class="count">${comments}</span></p>
          <p><span class="label">Downloads</span>: <span class="count">${downloads}</span></p>
        </div>
      </div>
    `
    )
    .join('');

  gallery.innerHTML = markup;

  // После добавления новых изображений в DOM вызываем refresh() для SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',  // Подписи под изображениями
    captionDelay: 250,    // Задержка для отображения подписи
  });

  lightbox.refresh(); // Обновляем галерею для применения SimpleLightbox
}

export function showErrorMessage() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = `
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `;
}
