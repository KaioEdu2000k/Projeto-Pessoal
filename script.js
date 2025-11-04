const API_KEY = 'afc0a63bb167df8c8572b19a855acdea';
const BASE_URL = 'https://api.themoviedb.org/3';
async function getPopularTVShows() {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  }
  async function loadPopularSeries() {
    const popularSeries = await getPopularTVShows();
    const carouselItems = document.getElementById('carousel-items');
    
    popularSeries.forEach((serie, index) => {
      const item = document.createElement('div');
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      item.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" class="d-block w-100" alt="${serie.name}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${serie.name}</h5>
          <p>${serie.overview}</p>
        </div>
      `;
      carouselItems.appendChild(item);
    });
  }
  
  loadPopularSeries();
    
