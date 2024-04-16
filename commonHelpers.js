import{i as c,S as l}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u="43416172-86a986f8fd379e5189cb30c8e",f="https://pixabay.com/api/";function d(o){const e=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${e}`).then(n=>{if(n.ok)return n.json();throw new Error(n.status)})}const a=document.querySelector(".loader");function m(o){return o.map(e=>`<li class="list-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>

        <div class="list-item-info">
          <p><strong>Likes</strong> <span>${e.likes}</span></p>
          <p><strong>Views</strong> <span>${e.views}</span></p>
          <p><strong>Comments</strong> <span>${e.comments}</span></p>
          <p><strong>Downloads</strong> <span>${e.downloads}</span></p>
        </div>
      </li>`).join("")}function p(){a.classList.remove("is-hidden")}function h(){a.classList.add("is-hidden")}const g=document.querySelector(".search-form"),y=document.querySelector(".search-form-input");document.querySelector(".search-form-button");const L=document.querySelector(".images-list");g.addEventListener("submit",S);function S(o){o.preventDefault(),p();const e=o.currentTarget.elements.search.value.trim();d(e).then(s=>{if(s.hits.length===0)return c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});L.innerHTML=m(s.hits),new l(".images-list a").refresh()}).catch(s=>console.log(s)).finally(()=>{h()}),y.value=""}
//# sourceMappingURL=commonHelpers.js.map
