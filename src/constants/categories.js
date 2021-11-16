import requests from "./requests";

export const categories = [
  {
    title: "NETFLIX Originals",
    request: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    request: requests.fetchTrending,
  },
  {
    title: "Action Movies",
    request: requests.fetchActionMovies,
  },
  {
    title: "Top Rated",
    request: requests.fetchTopRated,
  },
  {
    title: "Comedy",
    request: requests.fetchComedyMovies,
  },
  {
    title: "Horror",
    request: requests.fetchHorrorMovies,
  },
  {
    title: "Romance",
    request: requests.fetchRomanceMovies,
  },
  {
    title: "Documentaries",
    request: requests.fetchDocumentaries,
  },
];

export { categories as categories2 };
