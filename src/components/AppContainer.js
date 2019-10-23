import React from 'react'
import CardProduct from './sectionProduct/cardProduct'
import Home from './Homepage/Home'
import Produto from './Produto'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>

				<CardProduct />
			</div>
		)
	}
}