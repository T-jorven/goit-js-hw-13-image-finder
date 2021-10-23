import { REFS } from './refs';
import FetchPics from './apiServise'
/* 
const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
}); */

REFS.LOADER_BTN.addEventListener('click', fetchMorePics);

async function fetchMorePics(event) {
    event.preventDefault();
    
}