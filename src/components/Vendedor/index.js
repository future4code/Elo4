import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Title = styled.h1 `
	display: flex;
	flex-direction: center;
`

export default class Vendedor extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		selectCategoria: '',
		descricaoProduto: '',
		preco: '',
		selectPayment: '',
		url: [],
		parcelas: '',
		}	
	}

	
	addNewProduct = () => {
		const data = {
			category: this.state.selectCategoria,
			description: this.state.descricaoProduto,
			price: this.state.preco,
			paymentMethod: this.state.selectPayment,
			photos: this.state.url,
			installments: this.state.parcelas,
		}
	
		const request = axios
			.post("https://us-central1-missao-newton.cloudfunctions.net/elo4/products",
			data, {
	})
		request
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error)
			})
	}

	onChangeCategory = (event) => {
		this.setState({selectCategoria: event.target.value})
	}
	
	onChangeDescriptionProduct = (event) => {
		this.setState({descricaoProduto: event.target.value})
	}

	onChangePriceProduct = (event) => {
		this.setState({preco: event.target.value})
	}

	onChangePayment = (event) => {
		this.setState({selectPayment: event.target.value})
	}


	onChangeUrl = (event) => {
		this.setState({url: event.target.value})
	}

	onChangeInstallments = (event) => {
		this.setState({parcelas: event.target.value})
	}


	render() {
		return (
			<div>
				<Title>Vendedor</Title>
				<label htmlFor="selectCategoria">Categoria:  </label>

				<select 
					id="selectCategoria" 
					onChange={this.onChangeCategory} 
					value={this.state.selectCategoria}
				>
					<option>Selecione</option>
					<option>Decoração</option>
					<option>Saúde e Bem Estar</option>
					<option>Brinquedos</option>
				</select>

				<div>
					<p>Descrição do produto: </p>
					<input 
						type="text-area" 
						onChange={this.onChangeDescriptionProduct} 
						value={this.state.descricaoProduto}
					/>
				</div>

				<div>
					<p>Preço:</p>
					<input 
						type="number" 
						onChange={this.onChangePriceProduct} 
						value={this.state.preco}
					/>
				</div>

				<div>
					<p>Meios de pagamento:</p>
					<select
					 	id="selectPayment" 
						onChange={this.onChangePayment} 
						value={this.state.selectPayment}
					>
						<option>Selecione</option>						
						<option>Cartão de crédito</option>
						<option>Cartão de débito</option>
						<option>Boleto bancário</option>
					</select>
				</div>

				<div>
					<p>Parcelas</p>
					<input 
						type="number" 
						onChange={this.onChangeInstallments} 
						value={this.state.parcelas}
					/>
				</div>

				<div>
					<p>Adicionar URL da primeira imagem:</p>
					<input 
						type="text" 
						id="url" 
						onChange={this.onChangeUrl} 
						value={this.state.url}
					/>
				</div>

				<button onClick={this.addNewProduct}>Submeter!</button>

			</div>

			
		)
	}
}
