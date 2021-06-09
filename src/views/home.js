import React from 'react';

function home() {

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as págimas</p>
                <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
                </p>
            </div>
        </>
    )

}
export default home;