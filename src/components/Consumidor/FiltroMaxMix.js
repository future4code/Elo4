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
    }
  
    render() {
      return (
        <Filtros>
			<Select> 
                <option>Crescente</option>
                <option>Decrescente</option>
            </Select>   

			<div>
				<p>Valor Máximo: </p><input type="text"/>
				<p>Título: </p> <input type="text"/>
				<p>Valor Máximo: </p> <input type="text"/>
				<p>Categoria:</p>  <input type="text"/>
			</div>
        </Filtros>
      );
    }
}

export default FiltroMaxMin;