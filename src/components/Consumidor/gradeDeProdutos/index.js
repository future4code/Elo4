import React from 'react';
import styled from 'styled-components';
import CardProduct from '../../sectionProduct/cardProduct';


const section = styled.div `
	display: grid;
	grid-template-column: 1fr, 1fr, 1fr;
	grid-template-row: 1fr, 1fr, 1fr;

`

class GradeDeProdutos extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<section>
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
			</section>
		)
	}
}

export default GradeDeProdutos;