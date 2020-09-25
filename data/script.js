import images from "./gallery-items.js";

const imagesGallery = document.querySelector(".js-gallery");
const imageModal = document.querySelector(".lightbox__content");
const btnModalClose = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".js-lightbox");

imagesGallery.addEventListener("click", onImageGalleryClick);
btnModalClose.addEventListener("click", onModalClose);

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

function onImageGalleryClick(evt) {
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
  console.log(`${evt.target.dataset.source}`);
}

function onModalClose(evt) {
  overlay.classList.remove("is-open");
}

// function onBackdropClick(evt) {
//   if (evt.currentTarget === evt.target) {
//     overlay.classList.remove("is-open");
//   }

//   console.log(evt.target);
//   console.log(evt.currentTarget);
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = "Escape";
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onModalClose();
//   }
// }
