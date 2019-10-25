import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import styled from "styled-components";
import logoElo4 from "../Homepage/images/logoElo4.png";

const LogoProdutos = styled.img `
	width: 100px;
	height: 100%;
`

const ContainerProduto = styled.div `
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-rows: 1fr auto 1fr;
	grid-row-gap: 40px;
`

const MainProduto = styled.div `
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr auto  1fr;
`

const ContainerFoto = styled.div `
	width: 20vw;
	height: 40vh;
	border: 1px solid black;
`
const ContainerDescricao = styled.div `

`
const ContainerMeiosPag = styled.div  `
	width: 20vw;
	height: 20vh;
	border: 1px solid black;
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
`

const DescricaoProduto = styled.div `
	width: 40vw;
	height: 30vh;
	border: 1px solid black;
`
const ContainerFotos = styled.div `
	display: flex;
	justify-content: flex-start;
	padding-left: 5vw;
`
const Foto1 = styled.div `
	width: 100px;
	height: 100px;
	border: 1px solid black;
	margin-right: 20px;
`

const Foto2 = styled.div `
	width: 100px;
	height: 100px;
	border: 1px solid black;
	margin-right: 20px;
`

const Foto3 = styled.div `
	width: 100px;
	height: 100px;
	border: 1px solid black;
`

class Produto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'InformacaoDoProduto',
			listaDeProdutos: ''
		}
	}

	// getCurrentPage = () => {
	// 	return (
	// 		<div>
	// 			{this.props.listaDeProdutos.map(produto => {
	// 				return <CardProduct onChangePage={this.props.goToPage} informacaoProduto={produto} passarProdutoParaOPai={this.paiImprimeProduto} />
	// 			})}
	// 		</div>
	// 	)
	// }

	render () {
		return(
			<ContainerProduto>
				<MainProduto>

					<ContainerFoto>
						<h1>Foto</h1>
					</ContainerFoto>

					<ContainerDescricao>
						<h2> 
						{this.props.informacaoProduto.name}
						</h2>
						<p>Categoria do Produto</p>
						<DescricaoProduto>
							<p>Inserir descrição do produto</p>
						</DescricaoProduto>
					</ContainerDescricao>

					<ContainerMeiosPag>
						<h3>Meios de Pagamento</h3>
						<div>
							<label htmlFor="selectPagamento">Número de parcelas:  </label>
							<select id="selectPagamento">
								<option>Selecione</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						
							<h3>Preço: 
							{this.props.informacaoProduto.price}
							
							</h3>
						</div>
						<button>Comprar</button>
					</ContainerMeiosPag>

				</MainProduto>

				<ContainerFotos>
					<Foto1 
					image={this.props.informacaoProduto.url1} 
					/>
					<Foto2 image={this.props.informacaoProduto.url2}  />
					<Foto3 image={this.props.informacaoProduto.url3}  />
				</ContainerFotos>
			</ContainerProduto>
		)
	}

}

export default Produto;