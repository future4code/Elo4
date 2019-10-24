import React, { Fragment } from 'react'
import styled from 'styled-components'
import Home from './Homepage/Home'
import logoElo4 from '../assets/imgs/logo1.png'
import Consumidor from './Consumidor/'
import Vendedor from './Vendedor/'
import Produto from './Produto/'

const Logo = styled.img`
	width: 150px;
	cursor: pointer;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 'Home',
		}
	}

	getCurrentPage = () => {
		switch(this.state.currentPage){
			case 'Vendedor':
				return <Vendedor/>
			case 'Consumidor':
				return <Consumidor/>
			case 'Produto':
				return <Produto/>
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
				<Logo onClick={this.goBackToHome} src={logoElo4} alt="logoElo4" />
				{selectedPage}
			</Fragment>
		)
	}
}