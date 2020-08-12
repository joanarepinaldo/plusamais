import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Servico from './pages/Servico';
import Contato from './pages/Contato';
import Watch from './pages/watch';
import PageDefault from './components/PageDefault';

const Pagina404= () =>(<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch" component={Watch} />
      <Route path="/servico" component={Servico} exact />
      <Route path="/contato" component={Contato} exact />
      <Route component={() => (
        <PageDefault>
          <div>
            <h1>Página 404</h1>
            <span>
              Acho que você se perdeu no caminho.
              <br />
              Clique no título acima e volte para a página inicial.
            </span>
          </div>
        </PageDefault>
      )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);