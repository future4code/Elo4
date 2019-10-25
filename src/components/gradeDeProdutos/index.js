import React from 'react';
import styled from 'styled-components';
import CardProduct from '../sectionProduct/cardProduct/';
import Produto from '../Produto/';

const Section = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-row-gap:30px;
	grid-column-gap:30px;
`

class GradeDeProdutos extends React.Component {
	constructor(props) {
		super(props)
	}

	paiImprimeProduto = (produto) => {
		console.log(produto)
	}

	getCurrentPage = () => {
		return (
			<div>
				{this.props.listaDeProdutos.map(produto => {
					return <CardProduct onChangePage={this.props.goToPage} informacaoProduto={produto} passarProdutoParaOPai={this.paiImprimeProduto} />
				})}
			</div>
		)
	}

	render() {
		const selectedPage = this.getCurrentPage()
		return (
			<Section>
				{selectedPage}
			</Section>
		)
	}
}

export default GradeDeProdutos;