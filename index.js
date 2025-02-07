import{a as g,S as p,i}from"./assets/vendor-Fd3mU3Z4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="48661000-87492d5612d6e41eb1a42ef3d",f="https://pixabay.com/api/";async function m(o){try{const r=await g.get(f,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r.status===200?r.data.hits.length===0?(console.warn("Изображения не найдены"),[]):r.data.hits:(console.error("Не удалось получить данные, статус:",r.status),[])}catch(r){return console.error("Ошибка при получении данных:",r),[]}}function y(o){const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){h();return}const s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:c,comments:l,downloads:u})=>`
      <div class="gallery-item">
        <a href="${e}" target="_blank">
          <img src="${n}" alt="${t}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${a}</strong></p>
          <p><strong>👁️ ${c}</strong></p>
          <p><strong>💬 ${l}</strong></p>
          <p><strong>⬇️ ${u}</strong></p>
        </div>
      </div>
    `).join("");r.innerHTML=s}function h(){const o=document.querySelector(".gallery");o.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");new p(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(!r){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await m(r);y(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
