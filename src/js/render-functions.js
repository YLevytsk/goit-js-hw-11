import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "/js/pixabay-api.js";

const gallery = document.querySelector(".gallery");
const form = document.querySelector(".search-form");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", async event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: "Ошибка",
      message: "Введите слово для поиска!",
      position: "topRight",
    });
    return;
  }

  try {
    const images = await fetchImages(query);

    // Проверка на отсутствие изображений
    if (images.length === 0) {
      showErrorMessage("Извините, изображений не найдено по вашему запросу.");
      return;
    }

    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: "Ошибка",
      message: "Не удалось загрузить изображения. Попробуйте ещё раз.",
      position: "topRight",
    });
  }
});

export function renderImages(images) {
  gallery.innerHTML = ""; // Очищаем предыдущий поиск

  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
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
    `)
    .join("");

  gallery.innerHTML = markup;
  lightbox.refresh(); // Обновляем SimpleLightbox после добавления новых изображений
}

export function showErrorMessage(message) {
  gallery.innerHTML = `
    <p class="error-message">${message || "Что-то пошло не так. Пожалуйста, попробуйте снова!"}</p>
  `;
}
