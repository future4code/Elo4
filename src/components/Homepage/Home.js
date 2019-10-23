import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Produto from '../Produto/'
import Consumidor from '../Consumidor/'
import Vendedor from '../Vendedor/'

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

const ChooseButton = styled.div`
	display: flex;
	
`

// const ButtonConsumer = styled.div``
// const ButtonProvider = styled.div``

const Home = (props) => {
	return (
		<Root>
			<MainContent>
				<ChooseButton>
					<button onClick={() => props.onChangePage('Vendedor')}>Quero Vender</button> 
					<button onClick={() => props.onChangePage('Consumidor')}>Quero Comprar</button>
				</ChooseButton>
			</MainContent>
		</Root>
	)
}

Home.propTypes = {
	onChangePage: PropTypes.func.isRequired,
}

export default Home
