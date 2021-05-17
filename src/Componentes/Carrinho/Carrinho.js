import React from 'react';
import styled from 'styled-components';

const ConteinerCarrinho = styled.div`
    border: 1px solid black;
    padding: 10px;
`
const ConteinerProduto = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
`

export class Carrinho extends React.Component {
    
  
    render() {
      return (
        <ConteinerCarrinho>

           <h2>Carrinho:</h2>
           
           <ConteinerProduto>
             <p>1x</p>
             <p>Produto X</p>
             <button>Remover</button>
           </ConteinerProduto>

           <ConteinerProduto>
             <p>1x</p>
             <p>Produto X</p>
             <button>Remover</button>
           </ConteinerProduto>

           <ConteinerProduto>
             <p>1x</p>
             <p>Produto X</p>
             <button>Remover</button>
           </ConteinerProduto>

           <ConteinerProduto>
             <p>1x</p>
             <p>Produto X</p>
             <button>Remover</button>
           </ConteinerProduto>

        </ConteinerCarrinho>
      );
    }
}
 