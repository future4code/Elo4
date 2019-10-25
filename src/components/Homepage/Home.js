import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import logoElo4 from './images/logoElo4.png';

const Root = styled.div`
  display:flex;
  flex-direction: column;
  width: 100vw;
  height: 91vh;
  background-color: #E7E2FC;
`

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: top;
	align-items: center;
`

const Folder = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 40px 0;
`

const LogoFolder = styled.img`
	width: 300px;
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
				<Folder>
					<LogoFolder src={logoElo4} alt="LogoFolder" />
				</Folder>
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
