import{i as o,a as y,S as d}from"./assets/vendor-Fd3mU3Z4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const h="48661000-87492d5612d6e41eb1a42ef3d",v="https://pixabay.com/api/";async function u(a){if(!a||a.trim()==="")return o.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"}),[];try{const e=await y.get(v,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e.data.totalHits>0?e.data.hits:(o.warning({title:"Info",message:"No images found. Please try another search term.",position:"topRight"}),[])}catch{return o.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"}),[]}}const l=document.querySelector(".gallery"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){if(l.innerHTML="",a.length===0){b();return}const e=a.map(({webformatURL:s,largeImageURL:i,tags:t,likes:r,views:n,comments:g,downloads:f})=>`
  <div class="gallery-item">
    <a href="${i}">
      <img src="${s}" alt="${t}" loading="lazy" />
    </a>
    <div class="image-info">
      <div class="item">
        <span class="label">Likes</span>
        <span class="count">${r}</span>
      </div>
      <div class="item">
        <span class="label">Views</span>
        <span class="count">${n}</span>
      </div>
      <div class="item">
        <span class="label">Comments</span>
        <span class="count">${g}</span>
      </div>
      <div class="item">
        <span class="label">Downloads</span>
        <span class="count">${f}</span>
      </div>
    </div>
  </div>
`).join("");l.innerHTML=e,L.refresh()}function b(){l.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const w=document.querySelector(".search-form");new d(".gallery a",{captionsData:"alt",captionDelay:250});function c(){document.getElementById("loading-overlay").style.display="flex"}function p(){document.getElementById("loading-overlay").style.display="none"}const P=["nature","technology","art","food","travel","sports","animals","architecture","people","music"];function E(a,e){return a.slice().sort(()=>.5-Math.random()).slice(0,e)}async function S(){const a=E(P,5).join(",");try{c();const e=await u(a);m(e)}catch{o.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{p()}}S();w.addEventListener("submit",async a=>{c(),a.preventDefault();const e=a.target.elements.searchQuery.value.trim();if(!e){o.warning({title:"Error",message:"Please enter a search term!",position:"topRight"});return}c();try{const s=await u(e);m(s)}catch{o.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{p()}});
//# sourceMappingURL=index.js.map
