import{a as g,S as p,i}from"./assets/vendor-Fd3mU3Z4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const d="48661000-87492d5612d6e41eb1a42ef3d",f="https://pixabay.com/api/";async function m(o){try{const e=await g.get(f,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",e),e.status===200?e.data.hits.length===0?(console.warn("Изображения не найдены"),[]):e.data.hits:(console.error("Не удалось получить данные, статус:",e.status),[])}catch(e){return console.error("Ошибка при получении данных:",e),[]}}function y(o){const e=document.querySelector(".gallery");if(e.innerHTML="",o.length===0){h();return}const s=o.map(({webformatURL:a,largeImageURL:r,tags:t,likes:n,views:c,comments:l,downloads:u})=>`
      <div class="gallery-item">
        <a href="${r}" target="_blank">
          <img src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${n}</strong></p>
          <p><strong>👁️ ${c}</strong></p>
          <p><strong>💬 ${l}</strong></p>
          <p><strong>⬇️ ${u}</strong></p>
        </div>
      </div>
    `).join("");e.innerHTML=s}function h(){const o=document.querySelector(".gallery");o.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");new p(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.searchQuery.value.trim();if(!e){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await m(e);y(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
