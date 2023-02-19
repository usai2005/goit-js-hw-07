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

galleryContainer.addEventListener('click', onGalleryContainerClick);

// CHECKING IF WE CLICK ON AN IMAGE, OPEN MODAL WINDOW

function onGalleryContainerClick(e) {
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    excludeDefaultAction(e);    
    
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

};

//  CANCELING BROWSER BEHAVIOR BY PREVENTDEFAULT
function excludeDefaultAction(e) {
e.preventDefault();
};