import images from "./gallery-items.js";

const imagesGallery = document.querySelector(".js-gallery");
const imageModal = document.querySelector(".lightbox__content");
const btnModalClose = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".js-lightbox");
const backDrop = document.querySelector(".lightbox__overlay");

imagesGallery.addEventListener("click", onImageOpenClick);
btnModalClose.addEventListener("click", onImageClose);
backDrop.addEventListener("click", onBackdropClick);

const cardsImage = creatGalleryMarkup(images);
imagesGallery.insertAdjacentHTML("afterbegin", cardsImage);

function creatGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <img
             class="gallery__image"
             src=${preview}
             data-source=${original}
            alt=${description}
        />
 </li> `;
    })
    .join("");
}

function onImageOpenClick(evt) {
  window.addEventListener("keydown", onEscKeyPress);
  const isGalleryImage = !evt.target.classList.contains("gallery__image");
  if (isGalleryImage) {
    return;
  }
  overlay.classList.add("is-open");
  imageModal.innerHTML = `<a
        class="gallery__link"
        href=${evt.target.dataset.source}
    >
        <img
            
            src=${evt.target.dataset.source}
            data-source=${evt.target.dataset.source}
            alt=${evt.target.alt}
        />
    </a>`;
}

function onImageClose() {
  window.removeEventListener("keydown", onEscKeyPress);
  overlay.classList.remove("is-open");
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onImageClose();
  }
}

function onEscKeyPress(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  onImageClose();
}
