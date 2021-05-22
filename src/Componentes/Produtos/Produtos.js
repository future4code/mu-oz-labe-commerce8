import React from 'react';
import styled from 'styled-components';

const ConteinerCabecario = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 2px;
    
`
const ContainerOrdernar = styled.label`
  display: flex;
  align-items: center;
  padding: 1vh;
`
const Containerh5 = styled.h5`
  padding: 1vh;
`

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
  state = {
    ordernar: 'Decrescente',
  }

  ordernarEFiltrarLista = () => {
    return this.props.produtos
    .filter((produto) => this.props.filtroMax ? produto.preco < this.props.filtroMax : true)
    .filter((produto) => this.props.filtroMin ? produto.preco > this.props.filtroMin : true)
    .filter((produto) => this.props.filtroNome ? produto.nome.toLowerCase().includes(this.props.filtroNome) : true)
    .sort((a, b) => this.state.ordernar === 'Crescente' ? a.preco - b.preco : b.preco - a.preco)
  }

  onChangeOrdernar= (e) => {
    this.setState({ordernar: e.target.value})
  }

  render() {
    const listaFiltradaEOrdenada = this.ordernarEFiltrarLista()


    return (
      <Header>
        <ConteinerCabecario>
          <div></div>          
          <h2>Produtos</h2>
          <ContainerOrdernar>
            <Containerh5>Ordernar:</Containerh5>
            <select value={this.state.ordernar} onChange={this.onChangeOrdernar}>
              <option value={'Crescente'}>Crescente</option>
              <option value={'Decrescente'}>Decrescente</option>
            </select>
          </ContainerOrdernar>  
        </ConteinerCabecario>  
      <ConteinerProdutos>
        
      {listaFiltradaEOrdenada.map((produtos) =>{
        return <ContaierInterno>
            <Header>
              <h4>{produtos.nome}</h4>
            </Header>
            <ProdutoFoto src={produtos.foto} alt="Imagem do produto"/>
            <Footer>
              <p>R$: {produtos.preco}</p>
              <button onClick={() => this.props.onClickAddCarrinho(produtos.id)}>Adicionar ao Carrinho</button>
            </Footer>
        </ContaierInterno>
      })}

      </ConteinerProdutos>
      </Header>
    );
  }
}
