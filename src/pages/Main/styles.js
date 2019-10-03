import styled from "styled-components";
export const Title = styled.h1`
  color: #000;
`;

export const ReadingList = styled.ul`
  background-color: red;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: #000 5px 5px 10px;
  }
  img {
    align-self: center;
    max-width: 250px;
  }
`;
