import React from 'react';
import styled from 'styled-components';

const ConteinerProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  overflow-y: scroll;
  padding: 2px;
  max-height: 100vh;
  
`
const ConteinerOrdenar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const ContaierInterno = styled.div`
  border: 1px solid white;
  background-color: rgb(39, 39, 39);
  width: 300px;
  height: 400px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  color: White;
  background-image: url("https://www.wowpatterns.com/assets/files/resource_images/meteor-shower-seamless-space-vector-pattern.jpg");
`
const ProdutoFoto = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid white;
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
    .filter((produto) => this.props.filtroMax ? produto.preco <= this.props.filtroMax : true)
    .filter((produto) => this.props.filtroMin ? produto.preco >= this.props.filtroMin : true)
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
        <ConteinerOrdenar>
        <h2>Quantidade de produtos: {listaFiltradaEOrdenada.length}</h2>
        <h3>Ordernar:
        <select value={this.state.ordernar} onChange={this.onChangeOrdernar}>
          <option value={'Crescente'}>Crescente</option>
          <option value={'Decrescente'}>Decrescente</option>
        </select> 
        </h3>
        </ConteinerOrdenar>
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
