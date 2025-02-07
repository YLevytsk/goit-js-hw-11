import{a as m,S as p,i as a}from"./assets/vendor-koyFXKdT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="48661000-87492d5612d6e41eb1a42ef3d",y="https://pixabay.com/api/";async function l(r){try{return(await m.get(y,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const c=document.querySelector(".gallery"),h=document.querySelector(".search-form"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const n=await l(t);g(n)}catch{a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function g(r){if(c.innerHTML="",r.length===0){L();return}const t=r.map(({webformatURL:n,largeImageURL:i,tags:e,likes:o,views:s,comments:u,downloads:d})=>`
      <div class="gallery-item">
        <a href="${i}" target="_blank">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${o}</strong></p>
          <p><strong>👁️ ${s}</strong></p>
          <p><strong>💬 ${u}</strong></p>
          <p><strong>⬇️ ${d}</strong></p>
        </div>
      </div>
    `).join("");c.innerHTML=t,v.refresh()}function L(){c.innerHTML=`
    <p class="error-message">
      Sorry, нет изображений, соответствующих вашему запросу. Пожалуйста, попробуйте снова!
    </p>
  `}function w(){document.getElementById("loading-overlay").classList.add("show")}function b(){document.getElementById("loading-overlay").classList.remove("show")}const O=document.querySelector(".search-form");O.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){a.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}w();try{const n=await l(t);g(n)}catch{a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
