import{a as y,S as d,i}from"./assets/vendor-CtnHdr7b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const h="48661000-87492d5612d6e41eb1a42ef3d",v="https://pixabay.com/api/";async function u(r){try{const e=await y.get(v,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("API Response:",e),e.data.totalHits>0?e.data.hits:(console.warn("No images found."),[])}catch(e){return console.error("Error fetching data:",e),[]}}const l=document.querySelector(".gallery"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){if(l.innerHTML="",r.length===0){b();return}const e=r.map(({webformatURL:s,largeImageURL:n,tags:t,likes:a,views:o,comments:f,downloads:g})=>`
  <div class="gallery-item">
    <a href="${n}">
      <img src="${s}" alt="${t}" loading="lazy" />
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
        <span class="count">${f}</span>
      </div>
      <div class="item">
        <span class="label">Downloads</span>
        <span class="count">${g}</span>
      </div>
    </div>
  </div>
`).join("");l.innerHTML=e,L.refresh()}function b(){l.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const w=document.querySelector(".search-form");new d(".gallery a",{captionsData:"alt",captionDelay:250});function c(){document.getElementById("loading-overlay").style.display="flex"}function m(){document.getElementById("loading-overlay").style.display="none"}const E=["nature","technology","art","food","travel","sports","animals","architecture","people","music"];async function P(){const r=E.sort(()=>.5-Math.random()).join(",");try{c();const e=await u(r);p(e)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{m()}}P();w.addEventListener("submit",async r=>{c(),r.preventDefault();const e=r.target.elements.searchQuery.value.trim();if(!e){i.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}c();try{const s=await u(e);p(s)}catch{i.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{m()}});
//# sourceMappingURL=index.js.map
