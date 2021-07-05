import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import ConsultaProduto from './views/produtos/consulta';




const Rotas = (props) => {

    return (
        <Switch>
            <Route path="/cadastro-produtos" render={() => (<CadastroProduto sku={props} />)} />
            <Route exact path="/consulta-produtos" component={ConsultaProduto} />
            <Route exact path="/" component={Home} />
        </Switch>

    )
}

export default withRouter(Rotas);