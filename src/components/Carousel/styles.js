/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  letter-spacing: 2px;
  margin-bottom: 16px;
  
  line-height: 1;
  display: inline-block;
  padding: 10px 20px 6px 5%;
  background: red;
  border-radius: 0 10px 10px 0;
  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 16px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0 -5px;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
 
  min-height: 197px;
  margin-bottom: 16px;
`;

// import styled from 'styled-components';

// export const VideoCardGroupContainer = styled.section`
//   color: var(--white);
//   min-height: 197px;
//   margin-left: 5%;
//   margin-bottom: 16px;
// `;
// export const Title = styled.h3`
//   font-style: normal;
//   font-weight: normal;
//   font-size: 35px;
//   line-height: 1;
//   margin-bottom: 16px;
//   margin-left: 16px;
//   display: inline-block;
//   padding: 20px;
//   background: red;
//   line-height: 1;
//   border-radius: 5px;

//   @media (max-width: 400px) {
//     font-size: 18px;
//     padding: 10px;
//   }
// `;

// export const ExtraLink = styled.a`
//     margin-bottom: 16px;
//     margin-left: 0;
//     display: block;
//   text-decoration: none;
//   transition: opacity .3s;

//   &:hover,
//   &:focus {
//     opacity: .5;
//   }
//   @media (max-width: 400px) {
//     display: block;
//     margin-bottom: 16px;
//     margin-left: 16px;
//   }
// `;

// export const VideoCardList = styled.ul`
//   margin: 0;
//   padding-left: 0;
//   padding-bottom: 32px;
//   list-style: none;
//   display: flex;
//   overflow-x: auto;
//   flex-direction: row;
  
//   li {
//     margin-right: 16px;
//   }
// `;

