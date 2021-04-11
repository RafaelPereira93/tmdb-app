import styled from "styled-components";

export const ContentByGender = styled.section`
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const WrapperMoviesGender = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 80px;
  padding-bottom: 30px;
`;

export const SelectGenrer = styled.select`
  display: flex;
  width: 100%;
  max-width: 200px;
  padding: 10px;
  outline: none;
  background: #121212;
  color: #fdfbfa;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-size: 0.9em;
  border: 1px solid rgba(252, 95, 146, 0.6);

  @media (max-width: 620px) {
    margin: 0 auto;
    font-size: 0.8em;
  }
`;

export const ActiveGenreName = styled.span`
  display: inline-block;
  color: #fc5f92;
  margin-left: 15px;
  &:before {
    content: ":";
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
  }

  @media (max-width: 620px) {
    &:before {
      content: "";
    }
    margin: 0 auto;
  }
`;
