import React, { Fragment } from 'react'
import styled from 'styled-components'
import Home from './Homepage/Home'
import elo4Nome from '../assets/imgs/elo4Nome.png'
import Consumidor from './Consumidor/'
import Vendedor from './Vendedor/'

const Logo = styled.img`
	width: 100px;
	cursor: pointer;
	margin: 10px 30px;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 'Home',
		}
	}

	getCurrentPage = () => {
		switch (this.state.currentPage) {
			case 'Vendedor':
				return <Vendedor />
			case 'Consumidor':
				return <Consumidor/>
			case 'Home':
				return <Home onChangePage={this.goToPage} />
			default:
				return ''
		}
	}

	goBackToHome = () => {
		this.setState({ currentPage: 'Home' })
	}

	goToPage = (pageName) => {
		this.setState({ currentPage: pageName })
	}

	render() {
		const selectedPage = this.getCurrentPage()

		return (
			<Fragment>
				<Logo onClick={this.goBackToHome} src={elo4Nome} alt="logoElo4" />
				{selectedPage}
			</Fragment>
		)
	}
}