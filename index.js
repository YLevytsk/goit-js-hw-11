import{a as p,S as f,i as c}from"./assets/vendor-koyFXKdT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="48661000-87492d5612d6e41eb1a42ef3d",d="https://pixabay.com/api/";async function m(o){try{const t=await p.get(d,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return t.status===200?t.data.hits.length===0?(console.warn("Изображения не найдены"),[]):t.data.hits:(console.error("Не удалось получить данные, статус:",t.status),[])}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const a=document.querySelector(".gallery"),y=document.querySelector(".search-form"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){c.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const s=await m(t);L(s)}catch{c.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function L(o){if(a.innerHTML="",o.length===0){b();return}const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
      <div class="gallery-item">
        <a href="${i}" target="_blank">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${r}</strong></p>
          <p><strong>👁️ ${n}</strong></p>
          <p><strong>💬 ${l}</strong></p>
          <p><strong>⬇️ ${u}</strong></p>
        </div>
      </div>
    `).join("");a.innerHTML=t,h.refresh()}function b(){a.innerHTML=`
    <p class="error-message">
      Sorry, нет изображений, соответствующих вашему запросу. Пожалуйста, попробуйте снова!
    </p>
  `}
//# sourceMappingURL=index.js.map
