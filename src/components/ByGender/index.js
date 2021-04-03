import React from "react";
import Aside from "../Aside";
import {
  WrapperSections,
  ContentSections,
  TitleSections,
} from "../../GlobalStyles";

import * as Styles from "./styles";
import { getByGenres } from "../../API";
import Movie from "../Movie";
import {
  getRandomicGenre,
  getNameGenre,
  getAndSetCurrentPage,
} from "../../features";

import { useInfiniteScroll } from "../../custom-hooks";
import imgMovieNotFound from "../../images/no-image-movie.jpg";

const genresToRender = [
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Documentary", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Family", id: 10751 },
  { name: "Fantasy", id: 14 },
  { name: "History", id: 36 },
  { name: "Horror", id: 27 },
  { name: "Music", id: 10402 },
  { name: "Mistery", id: 9648 },
  { name: "Romance", id: 10749 },
  { name: "Science Fiction", id: 878 },
  { name: "TV Movie", id: 10770 },
  { name: "Thriller", id: 53 },
  { name: "War", id: 10752 },
  { name: "Western", id: 37 },
];

const ByGender = () => {
  const [genres, setGenres] = React.useState(getRandomicGenre(genresToRender));
  const [dataMovie, setDataMovies] = React.useState([]);
  const [activeGenre, setActiveGenre] = React.useState();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

  function fetchData() {
    setTimeout(() => {
      getByGenres(genres).then((movies) =>
        setDataMovies([...dataMovie, ...movies])
      );
      setIsFetching(false);
    }, 800);
  }

  const handleChange = ({ target }) => {
    const active = getNameGenre(genresToRender, target.value);
    setActiveGenre(active);
    setGenres(target.value);
  };

  React.useEffect(() => {
    getByGenres(genres).then((movie) => setDataMovies(movie));
  }, [genres]);

  React.useEffect(() => {
    return () => getAndSetCurrentPage(false, true);
  }, []);

  return (
    <WrapperSections>
      <Aside />
      <ContentSections>
        <TitleSections>
          By Gender
          {activeGenre && (
            <Styles.ActiveGenreName>{activeGenre}</Styles.ActiveGenreName>
          )}
        </TitleSections>
        <Styles.ContentByGender>
          <Styles.SelectGenrer value={genres} onChange={handleChange}>
            <option disabled value="">
              Select gender
            </option>
            {genresToRender.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Styles.SelectGenrer>
          <Styles.WrapperMoviesGender>
            {dataMovie &&
              dataMovie.map((movie, index) => (
                <Movie
                  key={index}
                  imgMovie={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`
                      : imgMovieNotFound
                  }
                  movieTitle={movie.title}
                  voteAverage={movie.vote_average}
                  movieGenres={movie.genre_ids}
                  movieId={movie.id}
                />
              ))}
          </Styles.WrapperMoviesGender>
        </Styles.ContentByGender>
      </ContentSections>
    </WrapperSections>
  );
};

export default ByGender;
