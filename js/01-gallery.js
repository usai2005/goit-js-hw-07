import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const itemsMarkup = itemsMarkupCreating(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup);

//MARKUP CREATING

function itemsMarkupCreating(galleryItems) {
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
 
    }).join('');
};

galleryContainer.addEventListener('click', onGalleryContainerClick);

// CHECKING IF WE CLICK ON AN IMAGE, OPEN AND CLOSE MODAL WINDOW

function onGalleryContainerClick(e) {
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    excludeDefaultAction(e);
    
    // CREATING LARGE IMG FOR MODAL
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`,
        {

            // ADDING LISTENER ON KEYBOARD
            onShow: () => {

                document.addEventListener('keydown', handleModalClose)
            
            },

            // REMOVING LISTENER FROM KEYBOARD
            onClose: () => {

                document.removeEventListener('keydown', handleModalClose);
    
            },
        }
    );
    
    instance.show();

    // CLOSING MODAL WINDOW BY CLICKING ESC

    function handleModalClose(e) {
        console.log(e);    
        
        if (e.code === 'Escape') {
        
            instance.close();
           
        };
    };

    // CANCELING BROWSER BEHAVIOR BY PREVENTDEFAULT

    function excludeDefaultAction(e) {
        e.preventDefault();
    };
}