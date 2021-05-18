import React from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div`
  border: 1px solid black;
`
const ProdutosCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

export class Carrinho extends React.Component {

  render() {

    const CarrinhoDeCompras = this.props.carrinho.map((carrinho) =>{
      
      return(
           <ProdutosCarrinho>
             <p>1x</p>
             <p>{carrinho.nome}</p>
             <button>Remover</button>
           </ProdutosCarrinho>
      )
    })
  
    return(
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
      <div>
        {CarrinhoDeCompras}
      </div>
      </ContainerCarrinho>
    )
  }
}