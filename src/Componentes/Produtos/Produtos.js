import React from 'react';
import styled from 'styled-components';

const ConteinerProdutos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid black;
    padding: 10px;
`



export class Produtos extends React.Component {



    render() {


      return (
        <ConteinerProdutos>
          <p>produtos</p>
        </ConteinerProdutos>
      );
    }
}
