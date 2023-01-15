import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = onCreateMarkupGallery(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

galleryContainer.addEventListener('click', onClickImg)

let galleryImg = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});

function onCreateMarkupGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('')
}

function onClickImg(evt) {
    evt.preventDefault();
}