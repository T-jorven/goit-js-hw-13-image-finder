import { REFS } from './refs';
import debounce from 'lodash.debounce';
import FetchPics from './apiServise'
import pictureGallery from '../partials/pictureGallery.hbs'

REFS.SEARCH_FORM.addEventListener('input', debounce(onInputChange, 500));

const getPictures = new FetchPics();

function onInputChange(event) {
   if (!event.target.value) {
    return
   }
  
  getPictures.pictureQuery = event.target.value;
  
  
  //passing the input value to the fetch function
  getPictures.fetchPics().then(createMarkupGallery)
   
}


//creating gallery markup

function createMarkupGallery(query) {
    console.log(query)
    const target = query.target;
    console.log(target.dataset)
    if (target.nodeName !== 'IMG') return;

    const largeImg = target.dataset.
    REFS.GALLERY_CONTAINER.innerHTML = pictureGallery(query);
}