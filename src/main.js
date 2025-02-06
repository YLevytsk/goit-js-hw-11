import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "/js/pixabay-api.js";
import { renderImages } from "/js/render-functions.js";

const form = document.querySelector(".search-form");

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
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: "Ошибка",
      message: "Не удалось загрузить изображения. Попробуйте ещё раз.",
      position: "topRight",
    });
  }
});
