import React from 'react';
import styled from 'styled-components';

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

      const listaDeProdutos = this.props.produto.map((produto) =>{
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
