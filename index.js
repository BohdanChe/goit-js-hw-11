import{a as f,S as m,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="44393052-98bf7072f1dadc09e04c4040d",y="https://pixabay.com/api/";async function g(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}let L=new m(".gallery a");const c=document.querySelector(".gallery"),l=document.querySelector(".loader");function w(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes <span>${t}</span></p>
          <p>Views <span>${n}</span></p>
          <p>Comments <span>${u}</span></p>
          <p>Downloads <span>${d}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const p=document.querySelector(".form"),q=p.elements["search-text"];p.addEventListener("submit",async s=>{s.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Enter a search term!",position:"topRight"});return}b(),S();try{const o=await g(r);o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query.",position:"topRight"}):w(o.hits)}catch{a.error({message:"Something went wrong!",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
