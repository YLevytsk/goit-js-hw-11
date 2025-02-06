import{a as c,i as a}from"./assets/vendor-4yCzdkXl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="48661000-87492d5612d6e41eb1a42ef3d",u="https://pixabay.com/api/";async function f(o){try{return(await c.get(u,{params:{key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Ошибка при получении данных:",t),[]}}function d(o){const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){m();return}const s=o.map(({webformatURL:n,largeImageURL:e,tags:r})=>`
        <div class="gallery-item">
          <a href="${e}" target="_blank">
            <img src="${n}" alt="${r}" loading="lazy" />
          </a>
        </div>
      `).join("");t.innerHTML=s}function m(){const o=document.querySelector(".gallery");o.innerHTML=`
      <p class="error-message">
        Sorry, есть не изображения , которые собирают ваш поиск. Please try again!
      </p>
    `}const p=document.querySelector(".search-form");p.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const s=await f(t);d(s)}catch{a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
