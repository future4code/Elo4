import React from 'react'
import styled from 'styled-components'
import logoElo4 from "./images/logoElo4.png"
import Produto from '../Produto/index'
// import PageConsumidor from '../Consumidor/PageConsumidor'
// import Vendedor from '../Vendedor/Vendedor'

const Root = styled.div`
  display:flex;
  flex-direction: column;
  width: 1280px;
`

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 95vh;
	justify-content: center;
	align-items: center;
`

const Logo = styled.img`
	width: 300px;
	/* height: ; */
`

const ChooseButton = styled.div`
	display: flex;
	
`


// const ButtonConsumer = styled.div``

// const ButtonProvider = styled.div``


// function PageProvider(props) {
// 	// <div>
// 	// 	<h1>voce está na página de vendedor</h1>
// 	// </div>
// }

// function PageConsumer(props) {
// 	<div>
// 		<h1>voce está na página de comprador</h1>
// 	</div>
// }

function Integrar(props) {
	if (props.ProductPage) {
		return (<Produto />)
	}
	// return (<ListaDeUsuario />)
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ProductPage: false,
		};
	}

	// onClickButtonProvider = () => {
	// 	if (this.state.currentPage === "Home") {
	// 		this.setState({
	// 			currentPage: "Produto",
	// 		})
	// 	} else { console.log("erro") }
	// }

	aoClicar = () => {
		// this.msgBotao = this.state.cadastrado ? "Lista de Nomes" : "Volte";
		this.setState({ ProductPage: !this.state.ProductPage })
	}

	render() {

		return (
			<Root>
				<MainContent>
					<Logo src={logoElo4} alt="logoElo4" />
					<ChooseButton>
						{/* {
							this.state.currentPage === "Home" ? <Home /> : <Produto />
						} */}

						<button>Quero Vender</button>
						<Integrar ProductPage={!this.state.ProductPage} />  
						<button onClick={this.aoClicar}>Quero Comprar</button>
					</ChooseButton>
				</MainContent>
			</Root>
		);
	}
}



export default Home;
