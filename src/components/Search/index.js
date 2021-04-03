import React from "react";

import * as Styles from "./styles";
import {
  WrapperSections,
  ContentSections,
  TitleSections,
} from "../../GlobalStyles";

import Aside from "../Aside";
import Movie from "../Movie";

import imgMovieNotFound from "../../images/no-image-movie.jpg";
import { getByName } from "../../API";
import { useInfiniteScroll } from "../../custom-hooks";
import {
  getAndSetCurrentPage,
  getLastNameMovieFromStorage,
} from "../../features";

const Search = () => {
  const [dataMovie, setDataMovies] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState("");
  const [inputUserValue, setInputUservalue] = React.useState(
    getLastNameMovieFromStorage()
  );
  const [inputValue, setInputValue] = React.useState("");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

  function fetchData() {
    if (dataMovie.length >= 20) {
      setTimeout(() => {
        getByName(inputUserValue).then(({ results }) =>
          setDataMovies([...dataMovie, ...results])
        );
        setIsFetching(false);
      }, 800);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let isEmptyInput = inputValue.trim();

    if (isEmptyInput === "") {
      alert("Digite um valor válido");
      return;
    }

    setInputUservalue(inputValue.trim());

    getByName(inputValue.trim()).then((movies) => {
      setDataMovies(movies.results);
      setTotalResults(movies.total_results);
    });
  };

  React.useEffect(() => {
    const lastNameMovie = getLastNameMovieFromStorage();

    if (lastNameMovie) {
      getByName(lastNameMovie).then((movies) => {
        setDataMovies(movies.results);
        setTotalResults(movies.total_results);
      });
    }
  }, []);

  React.useEffect(() => () => getAndSetCurrentPage(false, true), []);

  return (
    <WrapperSections>
      <Aside />
      <ContentSections>
        <TitleSections>Search movie name</TitleSections>
        <Styles.ContentSearch>
          <Styles.WrapperInputSearch>
            <form onSubmit={handleSubmit}>
              <Styles.InputSearch
                placeholder={
                  getLastNameMovieFromStorage()
                    ? `Latest search : ${getLastNameMovieFromStorage()}`
                    : "Search movie ..."
                }
                id="search"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
              />
              <Styles.WrapperSearchIcon>
                <button>
                  <Styles.SearchIcon size="22" />
                </button>
              </Styles.WrapperSearchIcon>
            </form>
          </Styles.WrapperInputSearch>
          <Styles.WrapperTotalResults>
            {totalResults > 0 ? (
              <Styles.TotalResults>
                Results found:
                <Styles.TotalResultsNumber>
                  {totalResults && totalResults}
                </Styles.TotalResultsNumber>
              </Styles.TotalResults>
            ) : (
              <Styles.NoResultsFound>
                {totalResults !== "" && "No results found ..."}
              </Styles.NoResultsFound>
            )}
          </Styles.WrapperTotalResults>
          <Styles.WrapperMovieFound>
            {dataMovie &&
              dataMovie.map(
                (
                  { poster_path, title, vote_average, genre_ids, id },
                  index
                ) => (
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
                    nameSearchMovie={inputUserValue}
                  />
                )
              )}
          </Styles.WrapperMovieFound>
        </Styles.ContentSearch>
      </ContentSections>
    </WrapperSections>
  );
};

export default Search;
