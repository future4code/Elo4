import React from "react";
import axios from "axios";
import styled from "styled-components";


const ContainerProduto = styled.div `
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-rows: 1fr auto 1fr;
	grid-row-gap: 40px;
`

const HeaderProduto = styled.div `
	width: 100%;
	height: 100px;
	background: #a30000; 
	display: flex;
	justify-items: center;
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

		}
	}

	render () {
		return(
			<ContainerProduto>
				<HeaderProduto>
					<h1>Logo</h1>
				</HeaderProduto>

				<MainProduto>

					<ContainerFoto>
						<h1>Foto</h1>
					</ContainerFoto>

					<ContainerDescricao>
						<h2>Nome Do Produto</h2>
						<p>Categoria do Produto</p>
						<DescricaoProduto>
							<p>Ajsdfksfsdfjkhsdfhsjfsdfhjkfsdhjfksfhjksfsfjkhsdjkfsdhf GDFGSFAFADFAFAFAFfsfsfsfsdfsdfsdf</p>
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
						
							<h3>Preço:</h3>
						</div>
						<button>Comprar</button>
					</ContainerMeiosPag>

				</MainProduto>

				<ContainerFotos>
					<Foto1>Foto 1</Foto1>
					<Foto2>Foto 2</Foto2>
					<Foto3>Foto 3</Foto3>
				</ContainerFotos>
			</ContainerProduto>
		)
	}

}

export default Produto;