import { REFS } from './refs';
import FetchPics from './apiServise'
import pictureGallery from '../partials/pictureGallery.hbs'
/* 
REFS.SEARCH_FORM.addEventListener('input', debounce(onInputChange, 500)); */

const getPictures = new FetchPics();
let loaderButton = REFS.LOADER_BTN;


//on button search
REFS.SEARCH_FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  //clearing the previous query result
  clearGalleryMarkup()
  getPictures.pictureQuery = REFS.INPUT.value
  if (REFS.INPUT.value.trim() === '') {
    loaderButtonIsHidden()
    return
  };
   
   //passing the input value to the fetch function
  getPictures.resetPage()
  getPictures.fetchPics().then(array => {
    if (!array.length) { loaderButtonIsHidden(); nothingFound(); }; return array
  }).then(createMarkupGallery);
  clearTheInputValue()
  
  //placing the loadmore button
   loaderButtonIsVisible()
   
});

//Fetching more pics

REFS.LOADER_BTN.addEventListener('click', fetchMorePics);


async function fetchMorePics(event) {
  event.preventDefault()

  const images = await getPictures.fetchPics();
  if (!images.length) {
    loaderButtonIsHidden() 
    nothingToShow()
    return
  }
  createMarkupGallery(images);
  
  getPictures.incrementPage();
  

  //scrolling 
loaderButton.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
})
  
}


//auxilary functions
  function createMarkupGallery(query) {
  REFS.GALLERY_CONTAINER.insertAdjacentHTML('beforeend', pictureGallery(query)); 
} 
function clearGalleryMarkup() {
   REFS.GALLERY_CONTAINER.innerHTML = ''
}
  function clearTheInputValue() {
  REFS.INPUT.value = ''
}
  function loaderButtonIsVisible() { 
    loaderButton.classList.remove('loader-btn---is-hidden');
  }
 function loaderButtonIsHidden() {
    loaderButton.classList.add('loader-btn---is-hidden');
}
  
//nothing more to show
function nothingToShow() {
  let string = `<p class ='text-notify'>Sorry, no more pictures to show :'(</p>`
  REFS.GALLERY_CONTAINER.insertAdjacentHTML('beforeend', string)
}
function nothingFound() {
    let string = `<p class ='text-notify'>Nothing found. Please, try to change your query</p>`
  REFS.GALLERY_CONTAINER.insertAdjacentHTML('beforeend', string)
}
