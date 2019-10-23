import React from 'react'
import Produto from './Produto'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
		<div>
			<Produto/>
		</div>
		)
	}
}