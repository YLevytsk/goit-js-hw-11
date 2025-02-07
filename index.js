import{a as m,S as p,i}from"./assets/vendor-Fd3mU3Z4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const f="48661000-87492d5612d6e41eb1a42ef3d",y="https://pixabay.com/api/";async function c(t){try{const r=await m.get(y,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",r),r.data.totalHits>0?r.data.hits:(console.warn("No images found."),[])}catch(r){return console.error("Error fetching data:",r),[]}}function l(t){const r=document.querySelector(".gallery");if(r.innerHTML="",t.length===0){h();return}const a=t.map(({webformatURL:n,largeImageURL:e,tags:o,likes:s,views:g,comments:u,downloads:d})=>`
      <div class="gallery-item">
        <a href="${e}" target="_blank">
          <img src="${n}" alt="${o}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><strong>❤️ ${s}</strong></p>
          <p><strong>👁️ ${g}</strong></p>
          <p><strong>💬 ${u}</strong></p>
          <p><strong>⬇️ ${d}</strong></p>
        </div>
      </div>
    `).join("");r.innerHTML=a}function h(){const t=document.querySelector(".gallery");t.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");new p(".gallery a",{captionsData:"alt",captionDelay:250});async function P(){try{const t=await c("cats");l(t)}catch{i.error({title:"Error",message:"Failed to load default images. Please try again.",position:"topRight"})}}L.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.searchQuery.value.trim();if(!r){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const a=await c(r);l(a)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});P();
//# sourceMappingURL=index.js.map
