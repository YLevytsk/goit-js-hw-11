import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "/js/pixabay-api.js";
import { renderImages } from "/js/render-functions.js";

// Функция для отображения индикатора
function showLoading() {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.classList.add("show"); // Добавляем класс для отображения
}

// Функция для скрытия индикатора
function hideLoading() {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.classList.remove("show"); // Убираем класс для скрытия
}

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

  // Показываем индикатор загрузки при отправке формы
  showLoading();

  try {
    const images = await fetchImages(query); // Запрос изображений
    renderImages(images); // Отображение изображений
  } catch (error) {
    iziToast.error({
      title: "Ошибка",
      message: "Не удалось загрузить изображения. Попробуйте ещё раз.",
      position: "topRight",
    });
  } finally {
    // Скрываем индикатор загрузки после завершения запроса
    hideLoading();
  }
});
