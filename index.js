import{a as f,S as m,i as a}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="48661000-87492d5612d6e41eb1a42ef3d",y="https://pixabay.com/api/";async function l(o){try{return(await f.get(y,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const c=document.querySelector(".gallery"),h=document.querySelector(".search-form"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const s=await l(t);u(s)}catch{a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function u(o){if(c.innerHTML="",o.length===0){b();return}const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:p,downloads:g})=>`
      <div class="gallery-item">
        <a href="${i}" target="_blank">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${r}</strong></p>
          <p><strong>👁️ ${n}</strong></p>
          <p><strong>💬 ${p}</strong></p>
          <p><strong>⬇️ ${g}</strong></p>
        </div>
      </div>
    `).join("");c.innerHTML=t,L.refresh()}function b(){c.innerHTML=`
    <p class="error-message">
      Sorry, нет изображений, соответствующих вашему запросу. Пожалуйста, попробуйте снова!
    </p>
  `}const v=document.querySelector(".search-form");v.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const s=await l(t);u(s)}catch{a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
