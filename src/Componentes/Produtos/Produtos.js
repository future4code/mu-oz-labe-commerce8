import React from 'react';
import styled from 'styled-components';

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

const ConteinerProdutos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid black;
    padding: 2px;
    flex-wrap: wrap;

`

const ContaierInterno = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 400px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ProdutoFoto = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid black;
`
const Header = styled.div`
  margin: 5px;
  text-align: center;
`
const Footer = styled.div`
  margin: 5px;
  text-align: center;
`

export class Produtos extends React.Component {

    render() {

      const listaDeProdutos = nossosProdutos.map((produto) =>{
        return(
          <ContaierInterno>
              <Header>
                <h4>{produto.nome}</h4>
              </Header>
              <ProdutoFoto src={produto.foto} alt="Imagem do produto"/>
              <Footer>
                <p>R$: {produto.preco}</p>
                <button>Adicionar ao Carrinho</button>
              </Footer>
          </ContaierInterno>
        )
      })
      

      return (
        <Header>
          <h2>produtos</h2>
        <ConteinerProdutos>
          {listaDeProdutos}
        </ConteinerProdutos>
        </Header>
      );
    }
}
