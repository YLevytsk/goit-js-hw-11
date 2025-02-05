import{a as i}from"./assets/vendor-N5iQpiFS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c="48661000-87492d5612d6e41eb1a42ef3d",l="https://pixabay.com/api/";async function u(o){try{return(await i.get(l,{params:{key:c,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Ошибка при получении данных:",t),[]}}function f(o){const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){d();return}const n=o.map(({webformatURL:s,largeImageURL:e,tags:r})=>`
        <div class="gallery-item">
          <a href="${e}" target="_blank">
            <img src="${s}" alt="${r}" loading="lazy" />
          </a>
        </div>
      `).join("");t.innerHTML=n}function d(){const o=document.querySelector(".gallery");o.innerHTML=`
      <p class="error-message">
        Sorry, есть не изображения , которые собирают ваш поиск. Please try again!
      </p>
    `}const m=document.querySelector(".search-form");m.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){alert("Введите слово для поиска!");return}const n=await u(t);f(n)});
//# sourceMappingURL=index.js.map
