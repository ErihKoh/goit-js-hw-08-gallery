import images from "./gallery-items.js";
const imagesGallery = document.querySelector(".js-gallery");
const cardsImage = creatGalleryMarkup(images);
imagesGallery.insertAdjacentHTML("afterbegin", cardsImage);
imagesGallery.addEventListener("click", onImageGalleryClick);

const overlay = document.querySelector(".lightbox");
function creatGalleryMarkup(images) {
  return images
    .map((item) => {
      return `<li class="gallery__item">
    

        <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.preview}
            alt=${item.description}
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

  console.log(evt.target);
}
console.log(overlay);
//  <li class="gallery__item">
//     <a
//         class="gallery__link"
//         href=${item.preview}
//     >
//         <img
//             class="gallery__image"
//             src=${item.preview}
//             data-source=${item.preview}
//             alt=${item.description}
//         />
//     </a>
//  </li> `
