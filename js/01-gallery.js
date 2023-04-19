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
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
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
  // console.log(evt.target);
  evt.preventDefault();

  const imageSource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
        <img
            src="${imageSource}"
        />
`,
    {
      onShow: () => {
        window.addEventListener('keydown', onCloseByEsc);
      },
      onClose: () => {
        window.addEventListener('keydown', onCloseByEsc);
      },
    }
  );
  instance.show();

  function onCloseByEsc(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
