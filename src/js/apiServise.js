export default class ApiServer{
    constructor() {
        this.searchQuery = '';
        this.page = 1
    }

  async fetchPics() {
        const BASE_URL = "https://pixabay.com/api/"
        const API_KEY = "23987533-c0735df4fa6081cfbbdc30c4f"
        let url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        
   return await fetch(url).then(response => {
    
  return response.json();
   }).then((data) => {
     console.log(data.hits)
       return data.hits;
   })/* .then((pictures) => {
     pictures.map(picture => {
       return 
     })
   }).catch((err) => {
     console.log(err);
}) */
   }
  
    
    incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
    
    get pictureQuery() {
        return this.searchQuery;
    }

    set pictureQuery(newQuery) {
        this.searchQuery = newQuery;
    }
}