import React from "react";
import {
  WrapperSections,
  ContentSections,
  TitleSections,
} from "../../GlobalStyles";
import Aside from "../Aside";
import { ContentTrending } from "./styles";
import { getTrendings } from "../../API";
import Movie from "../Movie";
import imgMovieNotFound from "../../images/no-image-movie.jpg";
import { useInfiniteScroll } from "../../custom-hooks";
import { getAndSetCurrentPage } from "../../features";

const Trending = () => {
  const [trendings, setTrendings] = React.useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

  function fetchData() {
    setTimeout(() => {
      getTrendings().then((movies) => setTrendings([...trendings, ...movies]));
      setIsFetching(false);
    }, 800);
  }

  React.useEffect(() => {
    getTrendings().then((movie) => setTrendings(movie));
  }, []);

  React.useEffect(() => {
    return () => getAndSetCurrentPage(false, true);
  }, []);

  return (
    <WrapperSections>
      <Aside />
      <ContentSections>
        <TitleSections>Trending</TitleSections>
        <ContentTrending>
          {trendings &&
            trendings.map((movie, index) => (
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
        </ContentTrending>
      </ContentSections>
    </WrapperSections>
  );
};

export default Trending;
