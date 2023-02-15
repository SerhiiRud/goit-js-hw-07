import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElem = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link href = "${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`
  )
  .join("");

galleryElem.insertAdjacentHTML("beforeend", galleryMarkup);

galleryElem.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlPopup = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img width="1280" height=auto src="${urlPopup}">
	`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeyCloser);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onKeyCloser);
      },
    }
  );

  instance.show();

  function onKeyCloser(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
