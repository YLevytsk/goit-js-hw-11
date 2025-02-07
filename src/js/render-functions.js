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
          <p><span class="label">Likes</span><span class="count">${likes}</span></p>
          <p><span class="label">Views</span><span class="count">${views}</span></p>
          <p><span class="label">Comments</span><span class="count">${comments}</span></p>
          <p><span class="label">Downloads</span><span class="count">${downloads}</span></p>
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
