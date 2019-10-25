import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
const Filtros =styled.div `
	display:flex;
	flex-direction:column;
	width: 10vh;
	margin-right:0vh;
`
const Select =styled.select `
	width: 25vh;
`
class FiltroMaxMin extends React.Component {
    constructor(props) {
	  super(props);
	  this.state = {
			filtroTitulo: " ",
			valorMax : " ",
			valorMin : " ",
			filtroCategoria : " ",
			gradeProdutos : this.props.listaDeProdutos,
	  	}
	}

	atualizaTitulo = (event) => {
		this.setState({filtroTitulo:event.target.value})
			console.log("testeTitulo")
	}

	atualizaValorMax = (event) => {
		this.setState({valorMax:event.target.value})
			console.log("testevalorMax")
	}

	atualizaValorMin = (event) => {
		this.setState({valorMin:event.target.value})
			console.log("testevalorMin")
	}

    render() {
      return (
        <Filtros>
			<Select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </Select>
			<div>
				<p>Valor Máximo: </p><input type="text"
					value={this.state.valorMax}
					onChange={this.atualizaValorMax}
				/>
				<p>Título: </p> <input type="text"				
					value={this.state.filtroTitulo}
					onChange={this.atualizaTitulo}
				/>
				<p>Valor Mínimo </p> <input type="text"
					value={this.state.valorMin}
					onChange={this.atualizaValorMin}
				/>
			</div>
        </Filtros>
      );
    }
}
export default FiltroMaxMin;