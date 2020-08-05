// import React from 'react';
// import Logo from '../../assets/img/Logo.png';

// //import './Menu.css';
// //import Button from '../Button';
// import {LogoImage, MenuWrapper, ButtonLink} from './style.js';

// //import ButtonLink from './componentes/ButtonLink';


// function Menu(){
//     return (
//         <MenuWrapper className="Menu">
//             <a href="/">
//                 <LogoImage src={Logo} alt="Plusamais logo"/>
//             </a>
//             <ButtonLink as="a" className="ButtonLink" href="/">
//                 Novo Vídeo
//             </ButtonLink>
//         </MenuWrapper>
//     );
// }

// export default Menu;

import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './componentes/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;