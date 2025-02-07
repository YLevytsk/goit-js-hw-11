// render-functions.js
export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear previous results

  if (images.length === 0) {
    showErrorMessage();
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <div class="gallery-item">
        <a href="${largeImageURL}" target="_blank">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${likes}</strong></p>
          <p><strong>👁️ ${views}</strong></p>
          <p><strong>💬 ${comments}</strong></p>
          <p><strong>⬇️ ${downloads}</strong></p>
        </div>
      </div>
    `
    )
    .join('');

  gallery.innerHTML = markup;
}

export function showErrorMessage() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = `
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `;
}
