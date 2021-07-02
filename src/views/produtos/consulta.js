import React, { Component } from 'react';


export default class ConsultaProdutos extends Component {

    state = {
        produtos: []
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map(produto => {
                                return (
                                    <tr>
                                        <td>{produto.nome}</td>
                                        <td>{produto.sku}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.fornecedor}</td>
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