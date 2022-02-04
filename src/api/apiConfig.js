const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "918e8eca27eeff975a32c1ac5d73d090",
  originalImage: (img) => `https://image.tmdb.org/t/p/original/${img}`,
  w500Image: (img) => `https://image.tmdb.org/t/p/w500/${img}`
}

export default apiConfig;