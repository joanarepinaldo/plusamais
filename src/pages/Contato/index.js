import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import json from '../../data/watch.json';
import { Text, Title, ServicoList,ServicoLi,ServicoGroupContainer} from './styles';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './estilo.css'; 

library.add(fab);
library.add(fas);
library.add(far);

function Contato() {
    return(
        <PageDefault>
            
            <Title>
            Entre em contato conosco
            </Title>

            <Text>Solicite seu orçamento através dos nossos contatos</Text>
            <ServicoGroupContainer>
                <ServicoLi>
                <a id="rodapelink" href="https://www.instagram.com/plusamaisfilmes/?hl=pt-br" >       
                <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram
                </a>
                <a id="rodapelink" href="https://www.facebook.com/Plusamaisvideos/">
                <  FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook
                </a>
                <a id="rodapelink" href="https://api.whatsapp.com/send?phone=5543996047536">
                <FontAwesomeIcon icon={["fab", "whatsapp"]}   />(43) 99604-7536
                </a>
                <div><FontAwesomeIcon icon={["far", "envelope"]}   />contato@plusamaisvideo.com.br</div>
                
                </ServicoLi>
              
                              
                
                
            </ServicoGroupContainer>
            
        </PageDefault>
    )
}

export default Contato;