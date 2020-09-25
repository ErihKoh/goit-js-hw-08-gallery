import images from "./gallery-items.js";
const imagesGallery = document.querySelector(".js-gallery");
const cardsImage = creatGalleryMarkup(images);
imagesGallery.insertAdjacentHTML("afterbegin", cardsImage);
function creatGalleryMarkup(images) {
  return images
    .map((item) => {
      return `<li class="gallery__item">
    <a
        class="gallery__link"
        href=${item.preview}
    >
        <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.preview}
            alt=${item.description}
        />
    </a>
</li> `;
    })
    .join("");
}

console.log(creatGalleryMarkup(images));
