/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProdutos extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <><h5 className="center-align">Lista de Produtos: </h5><br/>
            <div className="collection">
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
            </div></>
        )
    }
}