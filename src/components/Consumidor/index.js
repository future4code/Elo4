import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import {ListaCategorias} from './ListaCategorias.js'
import FiltroMaxMin from './FiltroMaxMix'
import GradeDeProdutos from '../gradeDeProdutos/'


const Section = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr ;
	grid-column-gap:50px;
	padding: 10px;
`

class Consumidor extends React.Component {
	constructor(props){
		super(props)
		this.state={
			filtroDeCategoria:"Todas as Categorias"
		}
	}
	
	recebeFiltroDeCategoria = (categoria) => {
		this.setState({
			filtroDeCategoria:categoria
		})
	}

	render(){
		return (
			<Fragment>
				<Section>
					<ListaCategorias aoMudarCategoria={this.recebeFiltroDeCategoria}/> 
					<GradeDeProdutos filtroDeCategoria={this.state.filtroDeCategoria}/>
					<FiltroMaxMin/>  
				</Section>
			</Fragment>
		)
	}
}
  
export default Consumidor;