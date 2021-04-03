import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";

export const ContentSearch = styled.section`
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const WrapperInputSearch = styled.div`
  width: 100%;
  & form {
    display: flex;
  }
`;

export const InputSearch = styled.input`
  display: flex;
  width: 100%;
  max-width: 500px;
  background: transparent;
  border: 1px solid rgba(252, 95, 146, 0.6);
  padding: 10px;
  outline: none;
  color: #fdfbfa;
  transition: 0.2s;
  font-family: "Poppins", sans-serif;
  &::placeholder {
    color: #ddd;
  }

  &:focus {
    border: 1px solid #fc5f92;
  }

  @media (max-width: 620px) {
    padding: 8px 5px;
  }
`;

export const WrapperSearchIcon = styled.div`
  display: flex;
  cursor: pointer;
  background: #fc5f92;

  & button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 10px 15px;
    transition: 0.3s;

    & svg {
      transition: 0.3s;
    }

    &:hover {
      background: #fdfbfa;
    }

    &:hover svg {
      color: #fc5f92;
    }
  }

  @media (max-width: 620px) {
    & button {
      padding: 8px;
    }
  }
`;

export const SearchIcon = styled(Search)`
  color: #fdfbfa;
`;

export const WrapperTotalResults = styled.div`
  display: block;
  margin-top: 20px;
`;

export const TotalResults = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fdfbfa;
`;

export const TotalResultsNumber = styled.span`
  display: inline-block;
  color: #fc5f92;
  margin-left: 5px;
`;

export const WrapperMovieFound = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
  padding-bottom: 30px;
`;

export const NoResultsFound = styled.p`
  color: #fc5f92;
`;
