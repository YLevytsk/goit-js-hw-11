import{a as h,S as p,i}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const v="48661000-87492d5612d6e41eb1a42ef3d",L="https://pixabay.com/api/";async function m(r){try{const t=await h.get(L,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",t),t.data.totalHits>0?t.data.hits:(console.warn("No images found."),[])}catch(t){return console.error("Error fetching data:",t),[]}}const l=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function f(r){if(l.innerHTML="",r.length===0){w();return}const t=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:a,views:o,comments:g,downloads:y})=>`
  <div class="gallery-item">
    <a href="${n}">
      <img src="${s}" alt="${e}" loading="lazy" />
    </a>
    <div class="image-info">
      <div class="item">
        <span class="label">Likes</span>
        <span class="count">${a}</span>
      </div>
      <div class="item">
        <span class="label">Views</span>
        <span class="count">${o}</span>
      </div>
      <div class="item">
        <span class="label">Comments</span>
        <span class="count">${g}</span>
      </div>
      <div class="item">
        <span class="label">Downloads</span>
        <span class="count">${y}</span>
      </div>
    </div>
  </div>
`).join("");l.innerHTML=t,b.refresh()}function w(){l.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const E=document.querySelector(".search-form");new p(".gallery a",{captionsData:"alt",captionDelay:250});function c(){document.getElementById("loading-overlay").style.display="flex"}function d(){document.getElementById("loading-overlay").style.display="none"}const u=["nature","technology","art","food","travel","sports","animals","architecture","people","music"];function P(){return u[Math.floor(Math.random()*u.length)]}async function I(){try{c();const r=P(),t=await m(r);f(t),d()}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{d()}}I();E.addEventListener("submit",async r=>{c(),r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}c();try{const s=await m(t);f(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{d()}});
//# sourceMappingURL=index.js.map
