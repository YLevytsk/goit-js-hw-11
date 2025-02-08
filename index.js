import{a as f,S as l,i}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="48661000-87492d5612d6e41eb1a42ef3d",y="https://pixabay.com/api/";async function p(a){try{const t=await f.get(y,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",t),t.data.totalHits>0?t.data.hits:(console.warn("No images found."),[])}catch(t){return console.error("Error fetching data:",t),[]}}const c=document.querySelector(".gallery"),h=new l(".gallery a",{captionsData:"alt",captionDelay:250});function u(a){if(c.innerHTML="",a.length===0){b();return}const t=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:o,comments:d,downloads:m})=>`
    <div class="gallery-item">
      <a href="${n}">
        <img src="${s}" alt="${e}" loading="lazy" />
      </a>
      <div class="image-info">
        <p><span class="label">Likes</span> <span class="count">${r}</span></p>
        <p><span class="label">Views</span> <span class="count">${o}</span></p>
        <p><span class="label">Comments</span> <span class="count">${d}</span></p>
        <p><span class="label">Downloads</span> <span class="count">${m}</span></p>
      </div>
    </div>
  `).join("");c.innerHTML=t,h.refresh()}function b(){c.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");new l(".gallery a",{captionsData:"alt",captionDelay:250});async function w(){try{const a=await p("cats");u(a)}catch{i.error({title:"Error",message:"Failed to load default images. Please try again.",position:"topRight"})}}L.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await p(t);u(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});w();
//# sourceMappingURL=index.js.map
