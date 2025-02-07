import{a as f,S as l,i}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const y="48661000-87492d5612d6e41eb1a42ef3d",h="https://pixabay.com/api/";async function c(r){try{const t=await f.get(h,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",t),t.data.totalHits>0?t.data.hits:(console.warn("No images found."),[])}catch(t){return console.error("Error fetching data:",t),[]}}function p(r){const t=document.querySelector(".gallery");if(t.innerHTML="",r.length===0){b();return}const s=r.map(({webformatURL:e,largeImageURL:a,tags:o,likes:u,views:d,comments:g,downloads:m})=>`
      <div class="gallery-item">
        <!-- Обернули изображение в ссылку -->
        <a href="${a}">
          <img src="${e}" alt="${o}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><span class="label">Likes</span> <span class="count">${u}</span></p>
          <p><span class="label">Views</span> <span class="count">${d}</span></p>
          <p><span class="label">Comments</span> <span class="count">${g}</span></p>
          <p><span class="label">Downloads</span> <span class="count">${m}</span></p>
        </div>
      </div>
    `).join("");t.innerHTML=s,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){const r=document.querySelector(".gallery");r.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");new l(".gallery a",{captionsData:"alt",captionDelay:250});async function w(){try{const r=await c("cats");p(r)}catch{i.error({title:"Error",message:"Failed to load default images. Please try again.",position:"topRight"})}}L.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await c(t);p(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});w();
//# sourceMappingURL=index.js.map
