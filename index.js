import{a as m,S as g,i}from"./assets/vendor-Fd3mU3Z4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const f="48661000-87492d5612d6e41eb1a42ef3d",y="https://pixabay.com/api/";async function l(r){try{const t=await m.get(y,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",t),t.data.totalHits>0?t.data.hits:(console.warn("No images found."),[])}catch(t){return console.error("Error fetching data:",t),[]}}function c(r){const t=document.querySelector(".gallery");if(t.innerHTML="",r.length===0){h();return}const s=r.map(({webformatURL:n,largeImageURL:e,tags:a,likes:o,views:p,comments:u,downloads:d})=>`
      <div class="gallery-item">
        <a href="${e}" target="_blank">
          <img src="${n}" alt="${a}" loading="lazy" />
        </a>
        <div class="image-info">
          <p><span class="label">Likes</span><span class="count">${o}</span></p>
          <p><span class="label">Views</span><span class="count">${p}</span></p>
          <p><span class="label">Comments</span><span class="count">${u}</span></p>
          <p><span class="label">Downloads</span><span class="count">${d}</span></p>
        </div>
      </div>
    `).join("");t.innerHTML=s}function h(){const r=document.querySelector(".gallery");r.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const b=document.querySelector(".search-form");new g(".gallery a",{captionsData:"alt",captionDelay:250});async function L(){try{const r=await l("cats");c(r)}catch{i.error({title:"Error",message:"Failed to load default images. Please try again.",position:"topRight"})}}b.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await l(t);c(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});L();
//# sourceMappingURL=index.js.map
