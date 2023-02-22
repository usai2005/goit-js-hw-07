import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const itemsMarkup = itemsMarkupCreating(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup);

//MARKUP CREATING

function itemsMarkupCreating(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li>
            <a class="gallery__item" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                  />
              </a> 
        </li>`
 
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });