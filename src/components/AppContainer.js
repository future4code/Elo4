import React from 'react'
import Home from './Homepage/Home'
import Produto from './Produto'
import {PageConsumidor} from './Consumidor/PageConsumidor'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (

			<div>
				<PageConsumidor/>
				<Home />
				<Produto />
			</div>
		)
	}
}