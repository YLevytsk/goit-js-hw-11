export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Очищаем предыдущий поиск
  
    if (images.length === 0) {
      showErrorMessage();
      return;
    }
  
    const markup = images
      .map(
        ({ webformatURL, largeImageURL, tags }) => `
        <div class="gallery-item">
          <a href="${largeImageURL}" target="_blank">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
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
        Sorry, есть не изображения , которые собирают ваш поиск. Please try again!
      </p>
    `;
  }