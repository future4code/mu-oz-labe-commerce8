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
    margin: 5px;
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
const InputsFiltro = styled.input`
  margin-right: 2vh;
  margin-left: 1vh;
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
            <ContainerInput>
              Busca por nome:
              <InputsFiltro 
                type="text"
                value={this.props.filtroNome}
                onChange={this.props.onChangeFiltroNome}
              />
            </ContainerInput>
            <ContainerInput>
              Valor minimo:
              <InputsFiltro 
                type="number"
                value={this.props.filtroMin}
                onChange={this.props.onChangeFiltroMin}
              />
            </ContainerInput>
            <ContainerInput>
              Valor maximo:
              <InputsFiltro 
                type="number"
                value={this.props.filtroMax}
                onChange={this.props.onChangeFiltroMax}
              />
            </ContainerInput>
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