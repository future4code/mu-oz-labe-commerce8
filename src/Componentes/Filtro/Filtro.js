import React from 'react';
import styled from 'styled-components';

const ConteinerFiltro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-column: 1/-1;
    border: 2px solid black;
    padding: 10px;
`

export class Filtro extends React.Component {
    
    
    render() {


      return (
        <ConteinerFiltro>
            <h3>Filtro</h3>
            <label>Valor minimo:<input type="number"/></label>
            <label>Valor maximo:<input type="number"/></label>
            <label>Busca por nome:<input type="text"/></label>
            
            
        </ConteinerFiltro>
      );
    }
}
 