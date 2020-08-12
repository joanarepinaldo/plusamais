import styled from 'styled-components';

export const Title = styled.h1`
      position: relative;
      display: block;
      font-size:35px;
      font-weight:400;
      line-height:45px;
      text-align:center;
  @media (max-width: 800px) {
    font-size: 18px;
    
  }
`;

export const Text = styled.p`
   margin-left:41px;
   margin-right:41px;
   text-align:center;
      display: block;
      
      font-size:21px;
      font-weight:300;
      
      
  @media (max-width: 800px) {
    font-size: 12px;
    
  }
`;

export const ServicoList = styled.ul`
 font-size:90px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 padding-bottom:-50px;
  @media(max-width: 800px) {
    font-size:40px;
    width: 100%;
  }
    
`;
export const ServicoLi = styled.ul`

  font-size:25px;
 display: flex;
 text-transform: uppercase;
 flex-direction: row;
 justify-content: space-around;
 
  @media(max-width: 800px) {
    font-size:10px;
    width: 100%;
  }
`;


export const ServicoGroupContainer = styled.section`
  color: white;
  
`;
