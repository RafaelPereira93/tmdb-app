import React from "react";
import { WrapperSections, ContentSections } from "../../GlobalStyles";
import Aside from "../Aside";
import Page404 from "../404";

import * as Styles from "./styles";

import {
  getOnlyOneMovie,
  getMovieActors,
  backgroundAverageElement,
} from "../../API";

import noImageUser from "../../images/no-image-user.jpg";

import noImageDirectors from "../../images/no-image-user-w100-h100.jpg";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import imgMovieNotFound from "../../images/no-image-movie.jpg";

import { formatTime, getAndSetCurrentPage } from "../../features";

const CompleteMovie = () => {
  const [dataMovie, setDataMovie] = React.useState();
  const [castData, setCastData] = React.useState();
  const [directorsData, setDirectorsData] = React.useState();
  const [like, setLike] = React.useState(false);

  let idMovie;
  const pathName = window.location.pathname;
  const numberRegex = pathName.match(/\d+/g);

  if (numberRegex.length > 1) {
    idMovie = numberRegex[1];
  } else {
    idMovie = numberRegex.join();
  }

  React.useEffect(() => {
    getOnlyOneMovie(idMovie).then((value) => setDataMovie(value));
  }, [idMovie]);

  React.useEffect(() => {
    getMovieActors(idMovie).then((value) => setCastData(value.cast));
  }, [idMovie]);

  React.useEffect(() => {
    getMovieActors(idMovie).then((value) => {
      const directors = value.crew.filter(
        (crew) => crew.job === "Director" || crew.job === "Producer"
      );
      setDirectorsData(directors);
    });
  }, [idMovie]);

  React.useEffect(() => () => getAndSetCurrentPage(false, true), []);

  return idMovie && dataMovie && castData && directorsData ? (
    <WrapperSections>
      <ContentSections>
        <Aside />
        <Styles.WrapperContentCompleteMovie>
          <Styles.PosterAndContentMovie
            background={
              dataMovie &&
              `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dataMovie.backdrop_path}`
            }
          >
            {dataMovie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${dataMovie.poster_path}`}
                alt=""
              />
            ) : (
              <img src={imgMovieNotFound} alt="" />
            )}
            <Styles.ContentMovieData>
              <Styles.MovieTitle>{dataMovie.title}</Styles.MovieTitle>
              <Styles.ReleaseDate>
                {dataMovie.release_date.replaceAll("-", "/")}
              </Styles.ReleaseDate>
              <Styles.MovieGenresWrapper>
                <Styles.MovieGenres>
                  {dataMovie &&
                    dataMovie.genres.map((genre, index, array) =>
                      index === array.length - 1 ? (
                        <Styles.Genres key={index}>{genre.name}</Styles.Genres>
                      ) : (
                        <Styles.Genres key={index}>
                          {genre.name} ·
                        </Styles.Genres>
                      )
                    )}
                </Styles.MovieGenres>
              </Styles.MovieGenresWrapper>
              <Styles.RunTimeMovie>
                <p>{formatTime(dataMovie.runtime)}</p>
              </Styles.RunTimeMovie>
              <Styles.UserScoreAndActionsUser>
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={dataMovie.vote_average}
                    text={`${dataMovie.vote_average}`}
                    styles={buildStyles({
                      textColor: "#fff",
                      textSize: "1.5em",
                      pathColor: backgroundAverageElement(
                        dataMovie.vote_average
                      ),
                      trailColor: "rgba(0, 0, 0, .1)",
                    })}
                    minValue={0}
                    maxValue={10}
                  />
                </div>
                <Styles.WrapperFavourites>
                  <Styles.HeartIcon
                    size="32"
                    like={like}
                    onClick={() => setLike((value) => !value)}
                  />
                </Styles.WrapperFavourites>
              </Styles.UserScoreAndActionsUser>
              <Styles.TextContentMovie>
                <Styles.TagLine>{dataMovie.tagline}</Styles.TagLine>
                <Styles.TitleOverview>Overview</Styles.TitleOverview>
                <Styles.Overview>{dataMovie.overview}</Styles.Overview>
              </Styles.TextContentMovie>
            </Styles.ContentMovieData>
          </Styles.PosterAndContentMovie>

          {/* PRODUCERS AND DIRECTORS SECTION */}
          <Styles.DirectorsAndProducerWrapper>
            <Styles.TitleDirectorsSections>
              Directors and Producers
            </Styles.TitleDirectorsSections>
            <Styles.WrapperCardDirectors>
              {directorsData &&
                directorsData.map(({ credit_id, profile_path, name, job }) => (
                  <Styles.CardDirectors key={credit_id}>
                    {profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w100_and_h100_face/${profile_path}`}
                        alt=""
                      />
                    ) : (
                      <img
                        src={noImageDirectors}
                        alt=""
                        width="100"
                        height="100"
                      />
                    )}
                    <h3>{name}</h3>
                    <p>{job}</p>
                  </Styles.CardDirectors>
                ))}
            </Styles.WrapperCardDirectors>
          </Styles.DirectorsAndProducerWrapper>

          {/* ACTORS SECTION */}
          <Styles.CastSection>
            <Styles.TitleCastSection>Top Billed Cast</Styles.TitleCastSection>
            <Styles.WrapperCast>
              {castData &&
                castData.map(
                  ({ cast_id, profile_path, name, character }, index) => {
                    if (index > 12) return null;
                    return (
                      <Styles.CardCast key={cast_id}>
                        {profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
                            alt=""
                          />
                        ) : (
                          <img src={noImageUser} alt="" />
                        )}
                        <h3>{name}</h3>
                        <p>{character}</p>
                      </Styles.CardCast>
                    );
                  }
                )}
            </Styles.WrapperCast>
          </Styles.CastSection>
        </Styles.WrapperContentCompleteMovie>
      </ContentSections>
    </WrapperSections>
  ) : (
    setTimeout(() => {
      <Page404 />;
    }, 2000)
  );
};

export default CompleteMovie;
