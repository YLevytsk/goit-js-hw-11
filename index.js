import{i as o,a as m,S as p}from"./assets/vendor-Fd3mU3Z4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u="48661000-87492d5612d6e41eb1a42ef3d",g="https://pixabay.com/api/";async function f(a){if(!a||a.trim()==="")return o.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"}),[];try{const t=await m.get(g,{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return t.data.totalHits>0?t.data.hits:(o.warning({title:"Info",message:"No images found. Please try another search term.",position:"topRight"}),[])}catch{return o.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"}),[]}}const l=document.querySelector(".gallery"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){if(l.innerHTML="",a.length===0){v();return}const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:n,comments:c,downloads:d})=>`
  <div class="gallery-item">
    <a href="${i}">
      <img src="${r}" alt="${e}" loading="lazy" />
    </a>
    <div class="image-info">
      <div class="item">
        <span class="label">Likes</span>
        <span class="count">${s}</span>
      </div>
      <div class="item">
        <span class="label">Views</span>
        <span class="count">${n}</span>
      </div>
      <div class="item">
        <span class="label">Comments</span>
        <span class="count">${c}</span>
      </div>
      <div class="item">
        <span class="label">Downloads</span>
        <span class="count">${d}</span>
      </div>
    </div>
  </div>
`).join("");l.innerHTML=t,y.refresh()}function v(){l.innerHTML=`
    <p class="error-message">
      Sorry, no images match your search. Please try again!
    </p>
  `}document.querySelector(".gallery");const L=document.querySelector(".search-form");function b(){document.getElementById("loading-overlay").style.display="flex"}function w(){document.getElementById("loading-overlay").style.display="none"}L.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchQuery.value.trim();if(!t||t.trim()===""){o.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b();try{const r=await f(t);h(r)}catch{o.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
