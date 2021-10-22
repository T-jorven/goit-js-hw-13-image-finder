export default class ApiServer{
    constructor() {
        this.searchQuery = '';
        this.page = 1
    }

    fetchPics() {
        const API_KEY = "23987533-c0735df4fa6081cfbbdc30c4f"
        let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        
   return fetch(url).then(response => {
    
  return response.json();
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