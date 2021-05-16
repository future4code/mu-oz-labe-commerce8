import React from 'react';
import styled from 'styled-components';

const ConteinerCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid black;
    padding: 10px;
`



export class Carrinho extends React.Component {
    
    
    render() {

        
      return (
        <ConteinerCarrinho>
           <p>carrinho</p>
        </ConteinerCarrinho>
      );
    }
}
 