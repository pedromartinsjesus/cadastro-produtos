import React from 'react';
import ProdutoService from '../../app/produtoService';


const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: '0',
    fornecedor: '',
    sucesso: false,
}

export default class CadastroProduto extends React.Component {
    
    constructor(){
        super()
        this.service = new ProdutoService();
    }
    
   state = estadoInicial;

   onChange = (event) =>{

      const valor = event.target.value;
      const nomeDoCampo = event.target.name;
      this.setState({[nomeDoCampo]: valor});   /* Passa o valor para o state de forma dinâmica */
     
   }
   

onSubmit = () =>{
const produto = {
    nome: this.state.nome,
    sku:this.state.sku,
    descricao:this.state.descricao,
    preco: this.state.preco,
    fornecedor:this.state.fornecedor,
}

   this.service.salvar(produto);
   this.setState({sucesso:true});
    
}

limpaCampos = () =>{
    this.setState(estadoInicial);
}

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Cadastro de produto
           
                    </div>
                    <div className="card-body">

                   { this.state.sucesso ?
                    <div className="alert alert-dismissible alert-success">
                       <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                       <strong>Muito bem </strong>     Cadastro realizado com sucesso 
                     </div>
                     :
                     <></>
                    }

                     <div className="row">
                          <div className="col-md-6">
                          <div className="form-group">
                               <label>Nome: *</label>
                               <input type="text" onChange={this.onChange} value={this.state.nome} name='nome' className="form-control"/>
                          </div>
                          </div>
                          <div className="col-md-6">
                          <div className="form-group">
                               <label>SKU: *</label>
                               <input type="text" onChange={this.onChange} value={this.state.sku} name='sku' className="form-control"/>
                          </div>

                          </div>
                     </div>
                     <div className="row">
                         <div className="col-md-12">
                              <div className="form-group">
                                <label>Descrição: </label>
                                <textarea onChange={this.onChange} value={this.state.descricao} name='descricao' className="form-control"/> 
                              </div>
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-6">
                              <div className="form-group">
                                <label>Preço: </label>
                                <input type="text" onChange={this.onChange} value={this.state.preco} name='preco' className="form-control"/> 
                              </div>
                         </div>
                         <div className="col-md-6">
                              <div className="form-group">
                                <label>Fornecedor: </label>
                                <input type="text" onChange={this.onChange} value={this.state.fornecedor} name='fornecedor' className="form-control"/> 
                              </div>
                         </div>
                     </div>
                      <hr/>
                          <div className="row">
                            <div className="col-md-1">
                             <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                            </div>
                            <div className="col-md-1">
                             <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                            </div>
                     </div>
                    </div>
                </div>
            </div>
        )
    }
}

