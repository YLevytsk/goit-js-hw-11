import{a as p,S as f,i}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="48661000-87492d5612d6e41eb1a42ef3d",h="https://pixabay.com/api/";async function u(o){try{return(await p.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const c=document.querySelector(".gallery"),v=document.querySelector(".search-form"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250});v.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const n=await u(t);g(n)}catch{i.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function g(o){if(c.innerHTML="",o.length===0){b();return}const t=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:r,views:a,comments:d,downloads:m})=>`
      <div class="gallery-item">
        <a href="${s}" target="_blank">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${r}</strong></p>
          <p><strong>👁️ ${a}</strong></p>
          <p><strong>💬 ${d}</strong></p>
          <p><strong>⬇️ ${m}</strong></p>
        </div>
      </div>
    `).join("");c.innerHTML=t,L.refresh()}function b(){c.innerHTML=`
    <p class="error-message">
      Sorry, нет изображений, соответствующих вашему запросу. Пожалуйста, попробуйте снова!
    </p>
  `}const l=document.querySelector(".search-form");l.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Ошибка",message:"Введите слово для поиска!",position:"topRight"});return}try{const n=await u(t);g(n)}catch{i.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте ещё раз.",position:"topRight"})}});function w(){document.getElementById("loading-overlay").classList.add("show")}function E(){document.getElementById("loading-overlay").classList.remove("show")}l.addEventListener("submit",function(o){o.preventDefault(),w();const t=l.searchQuery.value;fetch(`https://api.example.com/search?q=${t}`).then(n=>n.json()).then(n=>{const s=document.querySelector(".gallery");s.innerHTML="",n.results.forEach(e=>{const r=document.createElement("img");r.src=e.imageUrl,s.appendChild(r)})}).finally(()=>{E()})});
//# sourceMappingURL=index.js.map
