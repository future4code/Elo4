import React from 'react'
import Home from './Homepage/Home'
import Produto from './Produto'
import Vendedor from './Vendedor/Vendedor.js'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (

			<div>
				<Home />
				<Produto />
			</div>

		)
	}
}