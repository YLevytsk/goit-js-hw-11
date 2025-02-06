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

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Получаем значение из поля ввода
  const query = form.searchQuery.value.trim();

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
    // Выполняем запрос на сервер для поиска изображений
    const images = await fetchImages(query); // Эта функция должна быть вашей для запроса изображений
    renderImages(images); // Отображаем изображения (реализуйте эту функцию для рендеринга)
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
