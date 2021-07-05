import React, { Component } from 'react';
import ProdutoService from '../../app/produtoService';

import { withRouter } from 'react-router';



class ConsultaProdutos extends Component {

    state = {
        produtos: []
    }

    constructor() {
        super()
        this.service = new ProdutoService();


    }

    componentDidMount() {
        const produtos = this.service.obterProdutos()
        this.setState({ produtos: produtos })
    }

    preparaEditar = (sku) => {
        this.props.history.push({
            pathname: "cadastro-produtos",
            state: sku
        });
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta de produtos
               </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preco</th>
                            <th>Fornecedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map((produto, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.sku}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.fornecedor}</td>
                                        <td>
                                            <button onClick={() => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                                            <button className="btn btn-danger">Remover</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default withRouter(ConsultaProdutos);