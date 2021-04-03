import styled from "styled-components";
import { backgroundAverageElement } from "../../API";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  margin: 0 auto 20px;
  cursor: pointer;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.9);
  position: relative;

  & img {
    display: block;
    max-width: 100%;
    transition: 0.3s;
    transform: scale(0.95);
  }

  &:hover img {
    transform: scale(1);
  }
`;

export const MovieTitle = styled.h2`
  color: #fdfbfa;
  margin: 20px 0 5px 0;
  padding-left: 10px;
  font-weight: 100;
  font-size: 1.1em;
  @media (max-width: 620px) {
    padding-left: 0;
  }
`;

export const WrapperGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  @media (max-width: 620px) {
    justify-content: center;
  }
`;

export const TagGenrer = styled.span`
  display: inline-block;
  margin: 4px 8px 0 0;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.6);
`;

export const PopularityMovie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -30px;
  width: 60px;
  height: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: ${({ average }) => backgroundAverageElement(average)};
`;
