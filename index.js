import{a as y,S as u,i}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="48661000-87492d5612d6e41eb1a42ef3d",v="https://pixabay.com/api/";async function d(a){try{const t=await y.get(v,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",t),t.data.totalHits>0?t.data.hits:(console.warn("No images found."),[])}catch(t){return console.error("Error fetching data:",t),[]}}const c=document.querySelector(".gallery"),b=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(a){if(c.innerHTML="",a.length===0){L();return}const t=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:o,comments:f,downloads:g})=>`
  <div class="gallery-item">
    <a href="${n}">
      <img src="${s}" alt="${e}" loading="lazy" />
    </a>
    <div class="image-info">
      <div class="item">
        <span class="label">Likes</span>
        <span class="count">${r}</span>
      </div>
      <div class="item">
        <span class="label">Views</span>
        <span class="count">${o}</span>
      </div>
      <div class="item">
        <span class="label">Comments</span>
        <span class="count">${f}</span>
      </div>
      <div class="item">
        <span class="label">Downloads</span>
        <span class="count">${g}</span>
      </div>
    </div>
  </div>
`).join("");c.innerHTML=t,b.refresh()}function L(){c.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const w=document.querySelector(".search-form");new u(".gallery a",{captionsData:"alt",captionDelay:250});const l=["nature","technology","art","food","travel","sports","animals","architecture","people","music"];function P(){return l[Math.floor(Math.random()*l.length)]}async function m(){try{const a=P(),t=await d(a);p(t)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}}m();w.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}try{const s=await d(t);p(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}});m();
//# sourceMappingURL=index.js.map
