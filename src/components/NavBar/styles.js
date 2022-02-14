import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;

  h1 {
    position: relative;
    cursor: default;
    width: fit-content;
  }

  span {
    min-width: 160px;
    font-size: 16px;
    background-color: white;
    color: black;
    position: absolute;
    left: 50%;
    top: 30px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #CDCDCD;
  }
`;
