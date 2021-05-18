import React from 'react';
import {Carrinho} from './Componentes/Carrinho/Carrinho.js';
import {Produtos} from './Componentes/Produtos/Produtos.js';
import {Filtro} from './Componentes/Filtro/Filtro.js';
import styled from 'styled-components';

const BodyApp = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 10px;
`
const produtos = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  }
]

const nossosProdutos = [
  {
    nome: 'Pedaço de meteorito - Palasita',
    id: 1,
    preco: 4000,
    foto: 'https://i.pinimg.com/originals/fb/98/34/fb983489150d2fa308b1a9cc49d899c4.jpg',
    quantidade: 1,
  },
  {
    nome: 'Anel de aerolito',
    id: 2,
    preco: 600,
    foto: 'https://i.etsystatic.com/5326225/r/il/1b2ec6/1947213029/il_570xN.1947213029_btfg.jpg',
    quantidade: 1,
  },
  {
    nome: 'Colar feito do meteorito Muonionalusta',
    id: 3,
    preco: 1500,
    foto: 'https://cdn.shopify.com/s/files/1/0709/1715/products/muonionalusta-main_1024x1024.jpg?v=1598988207',
    quantidade: 1,
  },
  {
    nome: 'Frasco de poeira estelar',
    id: 4,
    preco: 80,
    foto: 'https://cdn11.bigcommerce.com/s-pizdmxxo0c/images/stencil/1280x1280/products/132/406/stardust-pen-1-1__50239.1501952731.jpg?c=2',
    quantidade: 1,
  },
  {
    nome: 'Faca feita do meteorito Muonionalusta',
    id: 5,
    preco: 2400,
    foto: 'https://i.pinimg.com/originals/73/f8/05/73f805336497d8bd008ae0a7dd3a4e31.jpg',
    quantidade: 1,
  },
  {
    nome: 'Aerolito esportivo 0km',
    id: 6,
    preco: 5800,
    foto: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2020/01/aerolito.png',
    quantidade: 1,
  },
]

class App extends React.Component {
  


  render() {



    return (
      <BodyApp>
        <Filtro/>
        <Produtos
          produto={nossosProdutos}/>
        <Carrinho
          carrinho={nossosProdutos}/>
      </BodyApp>
    );
  }
}

export default App;
