import React from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h1 `
	display: flex;
	flex-direction: center;
`

export default class Seller extends React.Component {
	render() {
		return (
			<div>
				<Title>Vendedor</Title>
				<label htmlFor="selectCategoria">Categoria:  </label>
					<select id="selectCategoria">
						<option>Decoração</option>
						<option>Saúde e Bem Estar</option>
						<option>Brinquedos</option>
					</select>

				<div>
					<p>Descrição do produto: </p>
					<input type="text-area"/>
				</div>

				<div>
					<p>Preço:</p>
					<input type="text"/>
				</div>

				<div>
					<p>Meios de pagamento:</p>
					<label htmlFor="selectPagamentoCCard">Cartão de crédito</label>
					<input type="checkbox"/>
					<label htmlFor="selectPagamentoDCard">Cartão de débito</label>
					<input type="checkbox"/>
					<label htmlFor="selectPagamentoBol">Boleto</label>
					<input type="checkbox"/>
				</div>

				<div>
					<p>Adicionar URL da primeira imagem:</p>
					<input type="text"/>
				</div>

				<div>
					<p>Adicionar URL da segunda imagem:</p>
					<input type="text"/>
				</div>

				<div>
					<p>Adicionar URL da terceira imagem:</p>
					<input type="text"/>
				</div>

				<button>Submeter!</button>

			</div>

			
		)
	}
}
