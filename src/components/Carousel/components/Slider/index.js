import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 36px;
    height: 36px;
    transform: initial;
    &:before {
      font-size: 50px;
    }
  }
  
  .slick-prev {
    left: 15px;
  }
  .slick-next {
    right: 25px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: var(--primary)
  }
}
`;

export const SliderItem = styled.li`
 margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }

  &:hover,
  &:focus {
   
    transform: scale(1.0) translateY(5px) ;
  
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 

// import React from 'react';
// import SlickSlider from 'react-slick';
// import PropType from 'prop-types';

// import { Container } from './styles';

// export default function Slider({ children, categoryColor }) {
//   const BoardColor = categoryColor;

//   return (
//     <Container categoryColor={BoardColor}>
//       <SlickSlider
//         {...{
//           dots: false,
//           infinite: true,
//           speed: 300,
//           centerMode: false,
//           variableWidth: true,
//           adaptiveHeight: true,
//         }}
//       >
//         {children}
//       </SlickSlider>
//     </Container>
//   );
// }

// Slider.propTypes = {
//   children: PropType.node.isRequired,
//   categoryColor: PropType.string.isRequired,
// };




// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import SlickSlider from 'react-slick';
// import styled from 'styled-components';

// const Container = styled.ul`
//   padding: 0;
//   margin: 0;
//   .slick-prev,
//   .slick-next {
//     z-index: 50;
//     top: 0;
//     bottom: 0;
//     margin: auto;
//     width: 30px;
//     height: 30px;
//     transform: initial;
//     &:before {
//       font-size: 30px;
//     }
//   }
  
//   .slick-prev {
//     left: 0;
//   }
//   .slick-next {
//     right: 16px;
//   }
// `;

// export const SliderItem = styled.li`
//   margin-right: 16px;
//   img {
//     margin: 16px;
//     width: 298px;
//     height: 197px;
//     object-fit: cover;
//   }
// `;


// const Slider = ({ children }) => (
//   <Container>
//     <SlickSlider {...{
//       dots: false,
//       infinite: true,
//       speed: 300,
//       centerMode: false,
//       variableWidth: true,
//       adaptiveHeight: true,
//     }}
//     >
//       {children}
//     </SlickSlider>
//   </Container>
// );

// export default Slider; 