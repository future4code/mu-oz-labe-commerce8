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


class App extends React.Component {



  render() {



    return (
      <BodyApp>
        <Filtro/>
        <Produtos/>
        <Carrinho/>
      </BodyApp>
    );
  }
}

export default App;
