import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Produto from '../Produto/'
import Consumidor from '../Consumidor/'
import Vendedor from '../Vendedor/'
import Button from '@material-ui/core/Button';

const Root = styled.div`
  display:flex;
  flex-direction: column;
  width: 1280px;
  height: 91vh;
  background-color: #E7E2FC;
`

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`

const ChooseButton = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-between;
`

// const ButtonConsumer = styled.div``
// const ButtonProvider = styled.div``

const Home = (props) => {
	return (
		<Root>
			<MainContent>
				<ChooseButton>
					<Button variant="contained" size="large" onClick={() => props.onChangePage('Vendedor')}>
						Quero Vender
        			</Button>
					<Button variant="contained" size="large" color="primary" onClick={() => props.onChangePage('Consumidor')}>
						Quero Comprar
        			</Button>
				</ChooseButton>
			</MainContent>
		</Root>
	)
}

Home.propTypes = {
	onChangePage: PropTypes.func.isRequired,
}

export default Home
