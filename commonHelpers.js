import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s,i){return fetch(`https://pixabay.com/api/?key=${s}&q=${i}&image_type=photo&orientation=horisontal&safesearch=true`)}const c="/goit-js-hw-11/assets/error-117dce18.svg";function f(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:p})=>`<li class="list-item">
  <a class="list-item-link" href="${r}">
    <img
      class="list-item-image"
      src="${i}"
      alt="${o}"
    />
  </a>
  <ul class="wrap-in-list-item">
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Likes</h3>
              <p class="item-in-wrap-text">${e}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Views</h3>
              <p class="item-in-wrap-text">${t}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Comments</h3>
              <p class="item-in-wrap-text">${n}</p>
            </li>
            <li item-in-wrap>
              <h3 class="item-in-wrap-title">Downloads</h3>
              <p class="item-in-wrap-text">${p}</p>
            </li>
          </ul>
  
</li>`).join("")}const h="44769616-4ffe0cee5617f53d3e1075857",l={form:document.querySelector(".search-form"),list:document.querySelector(".list"),input:document.querySelector(".search-input")};l.form.addEventListener("submit",d);function d(s){s.preventDefault(),l.list.innerHTML="";const i=s.target.elements.input.value.trim();i!==""?(l.form.insertAdjacentHTML("afterend",' <span class="loader"></span>'),u(h,i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const o=r.hits;o.length!==0?(l.list.insertAdjacentHTML("beforeend",f(o)),new m(".list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:'"Sorry, there are no images matching your search query. Please try again!"'})}).catch(r=>console.error("Fetch Error:",r))):a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Form field must be filled in"})}
//# sourceMappingURL=commonHelpers.js.map
