import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = onCreateMarkupGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryImgClick)

function onCreateMarkupGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
    }).join('')
}

function onGalleryImgClick(evt) {
    evt.preventDefault();
    const currentImg = evt.target.classList.contains('gallery__image');
    if (!currentImg) {
        return;
    }
    const openModalWindowImg = basicLightbox.create(`<img src="${evt.target.dataset.source}">`,
        {
            onShow: openModalWindowImg => {
                document.addEventListener('keydown', onEscCloseModal);
            },
            onClose: openModalWindowImg => {
                window.removeEventListener('keydown', onEscCloseModal);
            }
        })
    openModalWindowImg.show();
    function onEscCloseModal(evt) {
        if (evt.code === 'Escape') {
            openModalWindowImg.close()
        }
    }
}