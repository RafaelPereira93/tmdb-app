import React from "react";
import { getNewReleases } from "../../API";
import Aside from "../Aside";
import { useInfiniteScroll } from "../../custom-hooks";
import {
  WrapperSections,
  ContentSections,
  TitleSections,
} from "../../GlobalStyles";
import { ContentReleases } from "./styled";
import Movie from "../Movie";
import imgMovieNotFound from "../../images/no-image-movie.jpg";
import { getAndSetCurrentPage } from "../../features";

const NewReleases = () => {
  const [dataMovies, setDataMovies] = React.useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

  function fetchData() {
    setTimeout(() => {
      getNewReleases().then((movies) =>
        setDataMovies([...dataMovies, ...movies])
      );
      setIsFetching(false);
    }, 800);
  }

  React.useEffect(
    () => getNewReleases().then((movie) => setDataMovies(movie)),
    []
  );

  React.useEffect(() => getAndSetCurrentPage(false, true), []);

  return (
    <WrapperSections>
      <Aside />
      <ContentSections>
        <TitleSections>New Releases</TitleSections>
        <ContentReleases>
          {dataMovies &&
            dataMovies.map(
              ({ poster_path, title, vote_average, genre_ids, id }, index) => (
                <Movie
                  key={index}
                  imgMovie={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`
                      : imgMovieNotFound
                  }
                  movieTitle={title}
                  voteAverage={vote_average}
                  movieGenres={genre_ids}
                  movieId={id}
                />
              )
            )}
        </ContentReleases>
      </ContentSections>
    </WrapperSections>
  );
};

export default NewReleases;
