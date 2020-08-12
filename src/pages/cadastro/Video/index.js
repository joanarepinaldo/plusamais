import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return(
        <PageDefault>
            <h1>Nossos Serviços</h1>

            <p>Registramos com Paixão cada detalhe, eternizando tudo para que possam reviver com muita emoção todos os momentos com toda a sua intensidade. O nosso maior objetivo é satisfazer o cliente com um trabalho ético e profissional</p>

        

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo