import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElem = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");
galleryElem.insertAdjacentHTML("beforeend", galleryMarkup);

galleryElem.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    if (event.target.node)
}