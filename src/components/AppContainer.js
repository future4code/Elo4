import React from 'react'
import CardProduct from './sectionProduct/cardProduct'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<CardSection/>
			</div>
		);
	}
}