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
		name: '',	
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
			name: this.state.name,
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
		this.setState({preco: Number(event.target.value)})
	}

	onChangePayment = (event) => {
		this.setState({selectPayment: event.target.value})
	}


	onChangeUrl = (event) => {
		this.setState({url: [event.target.value]})
	}

	onChangeInstallments = (event) => {
		this.setState({parcelas: Number(event.target.value)})
	}

	onChangeName = (event) => {
		this.setState({name: event.target.value})
	}


	render() {
		return (
			<div>
				<Title>Vendedor</Title>

				<label htmlFor="nome">Nome</label>
				<input type="text"
					onChange={this.onChangeName} 
					value={this.state.name}
					name='nome'
				/>


				<label htmlFor="selectCategoria">Categoria:  </label>

				<select 
					name="selectCategoria" 
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
					<textarea
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
					<label htmlFor="selectPayment">Meios de pagamento</label>
					<select
					 	name="selectPayment" 
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
