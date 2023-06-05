import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  max-width: 900px;
  font-size: 35px;
  font-weight: 900;
  color: #373737;

  animation: 0.5s ease 0s 1 normal none running jgQpwH;
  & a {
    padding: 5px;
    &:hover {
      color: rgb(227, 227, 227);
      background-color: #5736a3;
    }
  }
`;
