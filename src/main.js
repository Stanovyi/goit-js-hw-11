import { getImages } from './js/pixabay-api.js';
import { createList, showLoader, hiddeLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form-input');
const button = document.querySelector('.search-form-button');
const list = document.querySelector('.images-list');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  showLoader();

  const searchQuery = e.currentTarget.elements.search.value.trim();

  getImages(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      list.innerHTML = createList(response.hits);
      const lightbox = new SimpleLightbox('.images-list a').refresh();
    })
    .catch(err => console.log(err))
    .finally(() => {
      hiddeLoader();
    });

  input.value = '';
}
