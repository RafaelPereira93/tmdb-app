import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";
import { genresNamesFiltered } from "../../API";
import { getSlugName } from "../../custom-hooks";
import { saveLastNameMovieToStorage } from "../../features";

const Movie = ({
  imgMovie,
  movieTitle,
  voteAverage,
  movieGenres,
  movieId,
  nameSearchMovie,
}) => {
  const [genresArray, setGenresArray] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    genresNamesFiltered(movieGenres).then((value) => setGenresArray(value));
  }, [movieGenres]);

  const handleClick = ({ currentTarget }) => {
    const movieId = currentTarget.id;
    const pathName = document.location.pathname;
    const slugName = getSlugName(currentTarget.querySelector("h2").innerHTML);

    pathName.includes("search")
      ? navigate(`/search/${slugName}-${movieId}`)
      : navigate(`/movie/${slugName}-${movieId}`);

    if (pathName.includes("search")) {
      saveLastNameMovieToStorage(nameSearchMovie);
    }
  };

  return (
    <Styles.MovieWrapper id={movieId} onClick={handleClick}>
      <img src={imgMovie} alt={movieTitle} />
      <Styles.MovieTitle>{movieTitle}</Styles.MovieTitle>
      <Styles.WrapperGenres>
        {genresArray &&
          genresArray.map(({ id, name }) => (
            <Styles.TagGenrer key={id}>{name}</Styles.TagGenrer>
          ))}
      </Styles.WrapperGenres>
      <Styles.PopularityMovie average={voteAverage}>
        {voteAverage}
      </Styles.PopularityMovie>
    </Styles.MovieWrapper>
  );
};

export default Movie;
