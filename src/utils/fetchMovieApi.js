const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com";
export const fetchMovies = async (searchTerm) => {
  const response = await fetch(
    `${BASE_URL}/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`
  );
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    throw new Error(data.Error);
  }
};

export const fetchMovieDetails = async (id) => {
  console.log(id);

  const response = await fetch(`${BASE_URL}/?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();

  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error);
  }
};
