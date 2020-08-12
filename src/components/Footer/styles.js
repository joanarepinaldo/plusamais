import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 5px;
  padding-right: 5px;
    padding-top: 5px;
  padding-bottom: 5px;
  color: var(--white);
  text-decoration: none;
  text-align: end;
  justify-content: space-around;
 
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

`;

