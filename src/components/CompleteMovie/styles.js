import styled from "styled-components";
import { Heart3 } from "@styled-icons/remix-fill/Heart3";

export const WrapperContentCompleteMovie = styled.section`
  width: 100%;
`;

export const MovieTitle = styled.h1`
  font-size: 2em;
  display: inline-block;
  position: relative;
  line-height: 1.2;

  &:before {
    content: "";
    position: absolute;
    bottom: -8px;
    display: block;
    width: 50%;
    height: 3px;
    background: #fc5f92;
  }

  @media (max-width: 1090px) {
    &:before {
      bottom: -10px;
    }
  }

  @media (max-width: 620px) {
    font-size: 1.1em;

    &:before {
      width: 100%;
    }
  }
`;

export const PosterAndContentMovie = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;

  background: ${({ background }) =>
    background ? `url(${background})` : "#181818"};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  & img {
    position: relative;
    z-index: 1000;
  }

  padding: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1090) {
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;

    & img {
      margin: 0 auto;
    }

    background: #181818;
  }
`;

export const ContentMovieData = styled.div`
  position: relative;
  z-index: 1000;

  @media (max-width: 620px) {
    text-align: center;
  }
`;

export const ReleaseDate = styled.div`
  color: #fff;
  margin-top: 20px;
  font-size: 0.9em;

  @media (max-width: 620px) {
    font-size: 0.8em;
  }
`;

export const MovieGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;

  @media (max-width: 620px) {
    justify-content: center;
  }
`;

export const MovieGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Genres = styled.span`
  font-size: 0.9em;
  line-height: 0.9;

  @media (max-width: 620px) {
    font-size: 0.8em;
  }
`;

export const RunTimeMovie = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 0.9em;

  & p {
    font-size: 1em;
  }

  @media (max-width: 620px) {
    justify-content: center;
    & p {
      font-size: 0.8em;
    }
  }
`;

export const UserScoreAndActionsUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  gap: 20px;

  @media (max-width: 620px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const WrapperFavourites = styled.div`
  margin-left: 20px;
`;

export const HeartIcon = styled(Heart3)`
  cursor: pointer;
  color: ${({ like }) => (like ? "red" : "#fff")};
  user-select: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.3);
  }
`;

export const TextContentMovie = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-family: "Source Sans Pro", sans-serif;
`;

export const TagLine = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  font-weight: 100;
  font-size: 1em;
  margin-bottom: 10px;
`;

export const TitleOverview = styled.h5`
  color: #fff;
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  color: #fff;
  font-size: 1em;
  max-width: 800px;
`;

// DirectorsAndProducerWrapper

export const DirectorsAndProducerWrapper = styled.div`
  margin-top: 50px;
  @media (max-width: 620px) {
    text-align: center;
  }
`;

export const TitleDirectorsSections = styled.h1`
  display: inline-block;
  font-size: 2em;
  position: relative;
  margin-bottom: 20px;

  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    display: block;
    width: 50%;
    height: 3px;
    background: #fc5f92;
  }

  @media (max-width: 620px) {
    font-size: 1.1em;
    &:before {
      content: "";
      width: 100%;
    }
  }
`;

export const WrapperCardDirectors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 620px) {
    justify-content: center;
  }
`;

export const CardDirectors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 155px;
  width: 100%;
  max-width: 175px;

  & img {
    display: block;
    border-radius: 50%;
    margin: 0 auto 12px auto;
  }

  & h3 {
    display: block;
    width: 100%;
    font-size: 0.9em;
    padding: 10px 5px 3px 5px;
    text-align: center;
  }

  & p {
    display: block;
    width: 100%;
    font-size: 0.8em;
    padding: 0 5px;
    text-align: center;
  }

  @media (max-width: 620px) {
    flex: 1 1 80px;

    & h3 {
      line-height: 1.2;
    }
  }
`;

export const CastSection = styled.div`
  padding-top: 50px;

  @media (max-width: 620px) {
    text-align: center;
  }
`;

export const WrapperCast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 620px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
`;

export const TitleCastSection = styled.h1`
  font-size: 2em;
  position: relative;
  margin-bottom: 20px;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    display: block;
    width: 50%;
    height: 3px;
    background: #fc5f92;
  }

  @media (max-width: 620px) {
    font-size: 1.1em;

    &:before {
      width: 100%;
    }
  }
`;

export const CardCast = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 150px;

  & h3 {
    font-size: 0.9em;
    padding: 10px 5px 3px 5px;
    text-align: center;
  }

  & p {
    font-size: 0.8em;
    padding: 0 5px;
    text-align: center;
  }

  & img {
    border: 1px solid rgba(252, 95, 146, 0.5);
  }

  @media (max-width: 620px) {
    & h3 {
      line-height: 1.2;
    }

    & p {
      line-height: 1.2;
    }
  }
`;
