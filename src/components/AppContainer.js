import React from 'react'
import CardProduct from './sectionProduct/cardProduct'
import Home from './Homepage/Home'
import Produto from './Produto'
import {PageConsumidor} from './Consumidor/PageConsumidor'
import Seller from './Seller/Seller.js'


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
				<Seller />
        <CardProduct />
			</div>
		)
	}
}