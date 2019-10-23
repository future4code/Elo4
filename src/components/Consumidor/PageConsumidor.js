import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {ListaCategorias} from './ListaCategorias.js';
import {HeaderElo4} from './header';
import {FiltroMaxMin} from './FiltroMaxMix'
import GradeDeProdutos from './gradeDeProdutos';


const Section = styled.div `
display: grid
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
padding: 10px;
`

export function PageConsumidor() {
    return (
      <div className="App">
        <HeaderElo4/>
		<Section>
			<ListaCategorias/> 
			<GradeDeProdutos/>
			<FiltroMaxMin/>  
		</Section>
      </div>
    );
  }
  
 
