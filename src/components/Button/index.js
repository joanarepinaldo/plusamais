import styled from "styled-components";

//https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components

const Button = styled.h1`

  color: var(--white);
  justify-content: space-between;
  text-transform: uppercase;
  background: transparent;
  display: block;
   font-size: 20px; 
    position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity .3s;
  

  &:hover,
  &:focus {
    opacity: .5;
  }
 
`;

export default Button;