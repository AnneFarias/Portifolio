import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
background-color: #dda0dd;
}

h2{
  font-size:2rem;
  color: white;
}

p{
  font-size:1.1rem;
  color: purple;
  font-weight: 600;
}

`;

export const Header = styled.header`
  height: 80px;
  width: 60%;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: #8b008b;
  padding: 12px;
  border-radius: 30px;

  @media (max-width: 500px) {
    display: none;
  }

  a {
    color: #ffff;
    text-decoration: none;
    font-size: 30px;
    background-color: #8b008b;

    &:hover {
      color: #dda0dd;
    }
  }
`;

export const TituloInicio = styled.h1`
  color: yellowgreen;
  border: solid;
  border-radius: 30px;
  background-color: purple;
`;

export const ImagemDeFundo = styled.div`
  background-color: #212529;
`;
