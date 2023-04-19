import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listItems = document.querySelector('.gallery');

(function () {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
  listItems.insertAdjacentHTML('beforeend', markup);
})();

listItems.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  animationSlide: true,
  overlay: true,
});
