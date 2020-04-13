import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 100%;
  height: 50px;
  text-align: middle;
  background-color: black;
  border-radius: 35px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
