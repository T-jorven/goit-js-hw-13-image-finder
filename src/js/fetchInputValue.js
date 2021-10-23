import { REFS } from './refs';
import debounce from 'lodash.debounce';
import FetchPics from './apiServise'
import pictureGallery from '../partials/pictureGallery.hbs'
/* 
REFS.SEARCH_FORM.addEventListener('input', debounce(onInputChange, 500)); */

const getPictures = new FetchPics();



//on button search
REFS.SEARCH_FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  getPictures.pictureQuery = REFS.INPUT.value
  if (REFS.INPUT.value === '') return;
   
   //passing the input value to the fetch function
  getPictures.resetPage()
  getPictures.fetchPics().then(createMarkupGallery);
  clearTheInputValue()
  
  //placing the loadmore button
   loaderButtonIsVisible()
   
});

//Fetching more pics

REFS.LOADER_BTN.addEventListener('click', fetchMorePics);


async function fetchMorePics(event) {
  event.preventDefault()
 
  const images = await getPictures.fetchPics();
  
   createMarkupGallery(images);
  getPictures.incrementPage();

}


//auxilary functions
  function createMarkupGallery(query) {
  REFS.GALLERY_CONTAINER.insertAdjacentHTML('beforeend', pictureGallery(query)); 
} 

  function clearTheInputValue() {
  REFS.INPUT.value = ''
}

  function loaderButtonIsVisible() {
  let loaderButton = REFS.LOADER_BTN;
  loaderButton.classList.remove('loader-btn---is-hidden');
}











/* function onInputChange(event) {
   if (!event.target.value) {
    return
   }
  
  getPictures.pictureQuery = event.target.value;
  
  
  //passing the input value to the fetch function
  getPictures.fetchPics().then(createMarkupGallery)
   
}
//creating gallery markup
function createMarkupGallery(query) {

  REFS.GALLERY_CONTAINER.innerHTML = pictureGallery(query); 

} */