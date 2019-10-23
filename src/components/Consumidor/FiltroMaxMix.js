import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Filtro = styled.div `
width: 60vh;
`


export class FiltroMaxMin extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
			<Filtro>
				<p>Valor Máximo: </p><input type="text"/>
				<p>Título: </p> <input type="text"/>
				<p>Valor Máximo: </p> <input type="text"/>
				<p>Categoria:</p>  <input type="text"/>
			</Filtro>
        </div>
      );
    }
  }