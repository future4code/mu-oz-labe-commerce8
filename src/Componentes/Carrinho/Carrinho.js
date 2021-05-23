import React from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  padding: 15px;
  background-color: #15418C;
`
const ProdutosCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
const ContainerValorTotal = styled.div`
  padding: 5px;
  font-size: 16px;
`

export class Carrinho extends React.Component {
  recebeValorTotal = () => {
    let valorTotal = 0

    for(let carrinho of this.props.carrinho) {
      valorTotal += carrinho.preco * carrinho.quantidade
    }

    return valorTotal
  }

  render() {
    const CarrinhoDeCompras = this.props.carrinho.map((carrinho) =>{
      return(
           <ProdutosCarrinho>
             <p>{carrinho.quantidade} </p>
             <p>{carrinho.nome}</p>
             <button onClick={() => this.props.onClickRemoveCarrinho(carrinho.id)}>Remover</button>
           </ProdutosCarrinho>
      )
    })
    return(
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
      <div>
        {CarrinhoDeCompras}
      </div>
      <ContainerValorTotal>
      <p>Valor total: R${this.recebeValorTotal()},00</p>
      </ContainerValorTotal>
      </ContainerCarrinho>
    )
  }
}