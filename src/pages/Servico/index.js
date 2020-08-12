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
import './servico.css';
library.add(fab);
library.add(fas);
library.add(far);

function Servico() {
    return(
        <PageDefault>
            
            <Title>
            Nossos Serviços
            </Title>

            <Text>Registramos com paixão cada detalhe, eternizando tudo para que possam reviver com muita emoção todos os momentos.<br/> O nosso maior objetivo é satisfazer o cliente com um trabalho ético e profissional.</Text>
            <ServicoGroupContainer>
                <ServicoList>
                <  FontAwesomeIcon icon={["far", "heart"]} />
                <  FontAwesomeIcon icon={["fas", "glass-cheers"]} /> 
                <  FontAwesomeIcon icon={["fas", "birthday-cake"]} />
                
                </ServicoList>
              
                              
                <ServicoLi>
                <p>Pre-Wedding</p>
                <p>Casamentos</p>
                <p>Aniversários</p>
                </ServicoLi>
                              
                <ServicoList>
                < FontAwesomeIcon icon={["fas", "user-graduate"]} />
                < FontAwesomeIcon icon={["fas", "briefcase"]} />
                 
                 < FontAwesomeIcon icon={["fas", "theater-masks"]} />
                 </ServicoList>

                 <ServicoLi>
                 <p>Formaturas</p>
                <p>Empresas</p>
               <p>Outros eventos</p>
                </ServicoLi>
            </ServicoGroupContainer>
            
        </PageDefault>
    )
}

export default Servico;