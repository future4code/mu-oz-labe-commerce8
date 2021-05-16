import React from 'react';
import styled from 'styled-components';
import filter_icon from '../../img/filter_icon.svg'

const ConteinerFiltro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-column: 1/-1;
    border: 2px solid black;
    padding: 10px;
`
const FiltroAberto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const IconImage = styled.img`
	margin-right: 5px;
  height: 25px;
  width: auto;
`
const ContainerInput = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8px;
`

export class Filtro extends React.Component {
  state = {
    filtrando: false,
  };
  onClickFiltrando = () => {
    this.setState({
      filtrando: !this.state.filtrando,
    });
  }
    
    render() {
      let componenteFiltro;
      if (this.state.filtrando) {
        componenteFiltro = (
          <FiltroAberto>
            <ContainerInput>Valor minimo:<input type="number"/></ContainerInput>
            <ContainerInput>Valor maximo:<input type="number"/></ContainerInput>
            <ContainerInput>Busca por nome:<input type="text"/></ContainerInput>
          </FiltroAberto>
        )
          
      }
      return <ConteinerFiltro>
        <div>
          <label>Filtros</label>
          <IconImage src={filter_icon} onClick={this.onClickFiltrando}/>
        </div>
        {componenteFiltro}
      </ConteinerFiltro>
    }
  }