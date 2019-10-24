import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Produto from '../../Produto/'

const StyledCardActionArea = styled(CardActionArea)`
	width:200px;
	height:250px;
`
const StyledCard = styled(Card)`
	width:200px;
	
`

const StyledCardMedia = styled(CardMedia)`
	width:200px;
	height:120px;
`

class CardProduct extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 'Consumidor'
		}

	}

	// onClickTest = (pageName) => {
	// 	this.setState({ currentPage: pageName })
	// }

	printProduto = (produto) => {
		console.log(produto)
	}

	chamaPaginaProduto = (event) => {
		return <Produto />
	}

	render() {

		return (
			<StyledCard>
				<StyledCardActionArea onClick={ () => {this.props.passarProdutoParaOPai(this.props.informacaoProduto)}}
				// onClickPageDescription = {this.chamaPaginaProduto()}
				>

					<StyledCardMedia
						image={this.props.informacaoProduto.url1}
						title={this.props.informacaoProduto.name}
					/>
					<CardContent>
						<Typography
							gutterBottom variant="h5"
							component="h2"
						>
							{this.props.informacaoProduto.name}
						</Typography>
						<Typography
							component="h4"
						>R$ {this.props.informacaoProduto.price}
						</Typography>
					</CardContent>
				</StyledCardActionArea >
				<Button variant="contained" size="large" color="primary" >
				{/* {this.state.currentPage === 'Produto' ? <Produto /> : <h1>Foi tambem</h1> } */}
				{/* <Button onClick={() => this.onClickTest('Produto')}> */}
					Comprar
				</Button>
			</StyledCard>
		);
			}
		}
		
// pageName.propTypes = {
// 	onChangePage: PropTypes.func.isRequired,
// }

export default CardProduct;