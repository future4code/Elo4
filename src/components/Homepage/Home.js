import React from 'react'
import styled from 'styled-components'
import logoElo4 from "./images/logoElo4.png"

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
	height: ;
`

const ChooseButton = styled.div`
	display: flex;
	
`


// const ButtonConsumer = styled.div``

// const ButtonProvider = styled.div``


class Home extends React.Component {
	constructor() {
		super();
		this.state = []
	}

	render() {

		return (
			<Root>
				<MainContent>
					<Logo src={logoElo4} alt="logoElo4" />
					<ChooseButton>
						<button>Quero Vender</button>
						<button>Quero Comprar</button>
					</ChooseButton>
				</MainContent>
			</Root>
		);
	}
}



export default Home;
