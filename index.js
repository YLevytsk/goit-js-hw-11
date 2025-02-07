import{a as p,S as g,i as c}from"./assets/vendor-koyFXKdT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="48661000-87492d5612d6e41eb1a42ef3d",d="https://pixabay.com/api/";async function m(s,o=1,n=12){try{const r=await p.get(d,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}});return r.status===200?r.data.hits.length===0?(console.warn("Изображения не найдены"),[]):r.data.hits:(console.error("Не удалось получить данные, статус:",r.status),[])}catch(r){return console.error("Ошибка при получении данных:",r),[]}}const a=document.querySelector(".gallery"),h=document.querySelector(".search-form"),y=new g(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){c.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const n=await m(o);if(n.length===0){b("Извините, изображений не найдено по вашему запросу.");return}L(n)}catch{c.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function L(s){a.innerHTML="";const o=s.map(({webformatURL:n,largeImageURL:r,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
      <div class="gallery-item">
        <a href="${r}" target="_blank">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${t}</strong></p>
          <p><strong>👁️ ${i}</strong></p>
          <p><strong>💬 ${l}</strong></p>
          <p><strong>⬇️ ${u}</strong></p>
        </div>
      </div>
    `).join("");a.innerHTML=o,y.refresh()}function b(s){a.innerHTML=`
    <p class="error-message">${s}</p>
  `}
//# sourceMappingURL=index.js.map
