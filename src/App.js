import React from 'react';
import {Carrinho} from './Componentes/Carrinho/Carrinho.js';
import {Produtos} from './Componentes/Produtos/Produtos.js';
import {Filtro} from './Componentes/Filtro/Filtro.js';
import styled from 'styled-components';

const BodyApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #111;
  color: white;
  background-image: url("https://wallpaperaccess.com/full/983279.jpg");
`

const nossosProdutos = [
  {
    nome: 'Pedaço de Meteorito - Palasita',
    id: 1,
    preco: 4000,
    foto: 'https://i.pinimg.com/originals/fb/98/34/fb983489150d2fa308b1a9cc49d899c4.jpg',
    quantidade: 1,
  },
  {
    nome: 'Anel de Aerolito',
    id: 2,
    preco: 600,
    foto: 'https://i.etsystatic.com/5326225/r/il/1b2ec6/1947213029/il_570xN.1947213029_btfg.jpg',
    quantidade: 1,
  },
  {
    nome: 'Colar Feito do Meteorito Muonionalusta',
    id: 3,
    preco: 1500,
    foto: 'https://cdn.shopify.com/s/files/1/0709/1715/products/muonionalusta-main_1024x1024.jpg?v=1598988207',
    quantidade: 1,
  },
  {
    nome: 'Frasco de Poeira Estelar',
    id: 4,
    preco: 80,
    foto: 'https://cdn11.bigcommerce.com/s-pizdmxxo0c/images/stencil/1280x1280/products/132/406/stardust-pen-1-1__50239.1501952731.jpg?c=2',
    quantidade: 1,
  },
  {
    nome: 'Faca Feita do Meteorito Muonionalusta',
    id: 5,
    preco: 2400,
    foto: 'https://i.pinimg.com/originals/73/f8/05/73f805336497d8bd008ae0a7dd3a4e31.jpg',
    quantidade: 1,
  },
  {
    nome: 'Relógio de Pulso com Mostrador de Meteorito',
    id: 6,
    preco: 2150,
    foto: 'https://1.bp.blogspot.com/-uf4k2CIfMxk/YFJw9Ul3f8I/AAAAAAAAvCo/naUKCRQvDXgXXeikmzn0MDgyoRJAP2EPACLcBGAsYHQ/s1280/De-Bethune-DB28XP-Meteorite-001.jpg',
    quantidade: 1,
  },
  {
    nome: 'Camiseta do Dia do Asteróide',
    id: 7,
    preco: 45,
    foto: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C913ih2QkqbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png',
    quantidade: 1,
  },
  {
    nome: 'Chaveiro de Meteorito',
    id: 8,
    preco: 150,
    foto: 'https://i.etsystatic.com/8890439/r/il/9d59af/1526744676/il_fullxfull.1526744676_8wce.jpg',
    quantidade: 1,
  },
  {
    nome: 'Brincos de Meteorito',
    id: 9,
    preco: 275,
    foto: 'https://images-na.ssl-images-amazon.com/images/I/61laOxrGM2L._SL1086_.jpg',
    quantidade: 1,
  },
]

class App extends React.Component {
  state = {
    meuCarrinho: [],
    filtroMin: 0,
    filtroMax: 0,
    filtroNome: '',
  }

  componentDidUpdate() {
    localStorage.setItem("Compras", JSON.stringify(this.state.meuCarrinho))
  };

  componentDidMount() {
    const carrinhoString = localStorage.getItem("Compras")

    const carrinhoObjeto = JSON.parse(carrinhoString)

    this.setState({meuCarrinho: carrinhoObjeto})
  };

  onChangeFiltroMin = (event) => {
    this.setState({filtroMin: event.target.value})
  }

  onChangeFiltroMax = (event) => {
    this.setState({filtroMax: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value.toLowerCase()})
  }

  onClickAddCarrinho = (idDoProduto) => {
    const procurarItem = this.state.meuCarrinho.find(produto => idDoProduto === produto.id)

    if (procurarItem) {
      const itemNoCarro = this.state.meuCarrinho.map (produto =>{
        if (idDoProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto 
      })

      this.setState({meuCarrinho: itemNoCarro})

    } else {
      const addProduto = nossosProdutos.find(produto => idDoProduto === produto.id)

      const itemNoCarro = [...this.state.meuCarrinho, {...addProduto}]

      this.setState({meuCarrinho: itemNoCarro})
    }
  }

  onClickRemoveCarrinho = (idDoProduto) => {
    const itemNoCarro = this.state.meuCarrinho.map((carrinho) => {
      if(carrinho.id === idDoProduto) {
        return {
          ...carrinho,
          quantidade: carrinho.quantidade - 1
        }
      }
      return carrinho
    }).filter((carrinho) => carrinho.quantidade > 0)

    this.setState({meuCarrinho: itemNoCarro})
  }


  render() {

    return (
      <BodyApp>
        <Filtro
         filtroMin={this.state.filtroMin}
         filtroMax={this.state.filtroMax}
         filtroNome={this.state.filtroNome}
         onChangeFiltroMin={this.onChangeFiltroMin}            
         onChangeFiltroMax={this.onChangeFiltroMax}            
         onChangeFiltroNome={this.onChangeFiltroNome}
        />

        <Produtos
          produtos={nossosProdutos}
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onClickAddCarrinho={this.onClickAddCarrinho}
        />

        <Carrinho
          carrinho={this.state.meuCarrinho}
          onClickRemoveCarrinho={this.onClickRemoveCarrinho}/>
      </BodyApp>
    );
  }
}

export default App;
