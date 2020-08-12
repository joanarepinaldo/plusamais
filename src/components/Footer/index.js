import React from 'react';
import { FooterBase} from './styles';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
library.add(fab);
library.add(fas);
function Footer() {
  return (
    <FooterBase>
      <p>
      <a id="rodapelink" href="https://www.instagram.com/plusamaisfilmes/?hl=pt-br" >       
      <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    
      <a id="rodapelink" href="https://www.facebook.com/Plusamaisvideos/">
      <  FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a id="rodapelink" href="https://api.whatsapp.com/send?phone=5543996047536">
      <FontAwesomeIcon icon={["fab", "whatsapp"]}   />
      (43) 99604-7536
      </a>
      
      contato@plusamaisvideo.com.br
      </p>
      <p>
      <FontAwesomeIcon icon={["fas", "map-marker-alt"]}   /> Rua Mario Lambert - Cornélio Procópio/PR
      </p>
    </FooterBase>
  );
}

export default Footer;
