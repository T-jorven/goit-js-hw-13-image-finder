 const BASE_URL = "https://pixabay.com/api/"
 const API_KEY = "23987533-c0735df4fa6081cfbbdc30c4f"
export default class ApiServer{
    constructor() {
        this.searchQuery = '';
        this.page = 1
    }

  async fetchPics() {
       
        let url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        
   return await fetch(url).then(response => {
    return response.json();
    }).then((data) => {
      this.incrementPage()
      return data.hits;
     
    })
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