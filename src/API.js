import { getAndSetCurrentPage } from "./features";

const baseURlAPI = process.env.REACT_APP_BASE_URL_API;
const apiKey = process.env.REACT_APP_API_KEY;
const urlGenres = `${baseURlAPI}/genre/movie/list?api_key=${apiKey}&language=en-US`;

export const getNewReleases = async () => {
  const urlGetNewReleases = `${baseURlAPI}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${getAndSetCurrentPage(
    true
  )}`;
  const response = await fetch(urlGetNewReleases);
  const json = await response.json();
  const { results } = json;
  return results;
};

export const getTrendings = async () => {
  const urlGetTrendings = `${baseURlAPI}/trending/movie/day?api_key=${apiKey}&language=en-US&page=${getAndSetCurrentPage(
    true
  )}`;
  const response = await fetch(urlGetTrendings);
  const json = await response.json();
  const { results } = json;
  return results;
};

export const getByGenres = async (gender) => {
  const urlGetByGender = `${baseURlAPI}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${gender}&page=${getAndSetCurrentPage(
    true
  )}`;
  const response = await fetch(urlGetByGender);
  const json = await response.json();
  const { results } = json;
  return results;
};

export const getByName = async (name) => {
  const urlGetByGender = `${baseURlAPI}/search/movie?api_key=${apiKey}&query=${name}&page=${getAndSetCurrentPage(
    true
  )}`;
  const response = await fetch(urlGetByGender);
  const json = await response.json();
  const { results, total_results } = json;
  return { results, total_results };
};

export const genresNamesFiltered = async (genresArray) => {
  const response = await fetch(urlGenres);
  const { genres } = await response.json();
  const arrayOfGenres = genres.filter((genre) => {
    return genresArray.includes(genre.id);
  });
  return arrayOfGenres;
};

export const getOnlyOneMovie = async (videoId) => {
  const response = await fetch(
    `${baseURlAPI}/movie/${videoId}?api_key=${apiKey}&language=en-US`
  );
  const json = await response.json();
  return json;
};

export const getMovieActors = async (movieId) => {
  const response = await fetch(
    `${baseURlAPI}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  const castAndCrew = await response.json();
  return castAndCrew;
};

export const backgroundAverageElement = (average) => {
  if (average > 5) {
    return "#28df99";
  } else if (average > 3) {
    return "#f0a500";
  } else {
    return "#f05454";
  }
};
