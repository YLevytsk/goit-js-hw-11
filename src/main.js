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
  document.getElementById("loading-overlay").style.display = "flex";
}

// Функция для скрытия индикатора
function hideLoading() {
  document.getElementById("loading-overlay").style.display = "none";
}

// Пример обработчика формы поиска
const form = document.querySelector('.search-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Показываем индикатор загрузки при отправке формы
  showLoading();

  const query = form.searchQuery.value;

  // Пример HTTP запроса (замените URL на ваш серверный)
  fetch(`https://api.example.com/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // Логика для обработки данных (например, отображение изображений)
      const gallery = document.querySelector('.gallery');
      gallery.innerHTML = ''; // Очищаем галерею
      data.results.forEach(item => {
        const img = document.createElement('img');
        img.src = item.imageUrl; // Путь к изображению
        gallery.appendChild(img);
      });
    })
    .finally(() => {
      // Скрываем индикатор загрузки после завершения запроса
      hideLoading();
    });
});
